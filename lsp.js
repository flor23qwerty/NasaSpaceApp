/* ==========================================================================
   LSP.JS — Deletreo en Lengua de Señas Peruana dentro del receptor
   --------------------------------------------------------------------------
   Usa las fotos registradas en lsp/letras.js. Si no hay fotos, no hace nada:
   no aparece en el menú ni en el receptor (para no saturar el juego).
   Con la opción activada, debajo del nombre de la máquina aparece su nombre
   deletreado con manos pequeñas.
   ========================================================================== */
(function () {
'use strict';
const LETRAS = window.LSP_LETRAS || {};
if (!Object.keys(LETRAS).length) return;
const ES = () => (typeof currentLang === 'undefined' || currentLang !== 'en');
const tx = (es, en) => (ES() ? es : en);
let activo = false;
try { activo = localStorage.getItem('ecos3d-lsp') === 'si'; } catch (e) {}

// Opción del menú
const item = document.createElement('div'); item.className = 'menu-item'; item.id = 'e-lsp-item';
item.setAttribute('role', 'button'); item.tabIndex = 0;
const menu = document.getElementById('menu-dropdown');
menu.insertBefore(item, document.getElementById('music-menu-item'));
const pintarItem = () => { item.textContent = activo ? tx('🤟 Quitar deletreo en LSP', '🤟 Hide LSP fingerspelling') : tx('🤟 Deletreo en LSP', '🤟 LSP fingerspelling'); };
item.onclick = () => { activo = !activo; try { localStorage.setItem('ecos3d-lsp', activo ? 'si' : 'no'); } catch (e) {} pintarItem(); deletrear(); menu.classList.remove('active'); };
item.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.onclick(); } };
pintarItem();

// Fila de manos debajo del nombre de la máquina
const titulo = document.getElementById('rx-title');
if (!titulo) return;
const fila = document.createElement('div'); fila.className = 'rx-lsp'; fila.hidden = true;
titulo.insertAdjacentElement('afterend', fila);
const clave = ch => { if (ch === 'ñ') return 'enie'; return ch.normalize('NFD').replace(/[̀-ͯ]/g, ''); };
function deletrear() {
  const nombre = (titulo.textContent || '').toLowerCase();
  fila.innerHTML = ''; fila.hidden = !activo || !nombre;
  if (fila.hidden) return;
  fila.setAttribute('aria-label', tx('Nombre deletreado en Lengua de Señas Peruana', 'Name fingerspelled in Peruvian Sign Language'));
  // En el alfabeto de la LSP, LL y RR son letras propias
  const letras = nombre.match(/ll|rr|[\s\S]/g) || [];
  for (const ch of letras) {
    if (/\s/.test(ch)) { if (!fila.lastChild || fila.lastChild.className === 'esp') continue; const sp = document.createElement('span'); sp.className = 'esp'; fila.appendChild(sp); continue; }
    const f = LETRAS[ch.length === 2 ? ch : clave(ch)]; if (!f) continue;   // números, signos o letras sin imagen: se saltan
    const fig = document.createElement('figure'), img = document.createElement('img');
    img.src = 'lsp/' + f; img.alt = ch.toUpperCase(); img.loading = 'lazy';
    img.onerror = () => fig.remove();
    fig.appendChild(img);
    if (!window.LSP_CON_LETRA) { const cap = document.createElement('figcaption'); cap.textContent = ch.toUpperCase(); fig.appendChild(cap); }
    fila.appendChild(fig);
  }
  if (window.LSP_CREDITO) { const c = document.createElement('p'); c.className = 'cr'; c.textContent = tx('Señas: ', 'Signs: ') + window.LSP_CREDITO; fila.appendChild(c); }
}
new MutationObserver(deletrear).observe(titulo, { childList: true, characterData: true, subtree: true });
})();
