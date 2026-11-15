/* ==========================================================================
   INTRO.JS — "Señal desde Characato"
   --------------------------------------------------------------------------
   Se carga después de ecos.js. Al pulsar "Empezar el vuelo":
     1. Characato de noche (ilustración en canvas).
     2. Dentro del observatorio: una pantalla se enciende sola.
     3. Terminal verde: el jugador escribe su nombre y explora con comandos
        (ayuda, escanear, observatorio, señal, nave, eve, limpiar, aceptar).
     4. Teletransporte a la plataforma de la nave ECO-1, en la Tierra → empieza el juego 3D.
   Datos reales usados: la estación láser TLRS-3 de la NASA opera en el
   Observatorio de Characato (UNSA), cerro San Francisco, a ~2.448 m; allí se
   miden distancias a satélites con láser desde 1970.
   Ficción: la señal que llama al jugador y el teletransporte.
   ========================================================================== */
(function () {
'use strict';
const KEY_NOMBRE = 'ecos3d-nombre';
let nombreGuardado = '';
try { nombreGuardado = localStorage.getItem(KEY_NOMBRE) || ''; } catch (e) {}

/* ---------- Estructura ---------- */
const ov = document.createElement('div');
ov.id = 'intro'; ov.hidden = true;
ov.innerHTML =
  '<canvas id="intro-cv" aria-hidden="true"></canvas>' +
  '<div class="intro-cap" id="intro-cap" aria-live="polite"></div>' +
  '<button type="button" class="intro-next" id="intro-next">Continuar ▸</button>' +
  '<div class="term" id="term" hidden role="region" aria-label="Terminal del observatorio">' +
    '<div class="term-bar"><span>OBSERVATORIO DE CHARACATO · SISTEMA ECO v1.969</span><span class="term-dot"></span></div>' +
    '<div class="term-out" id="term-out" aria-live="polite"></div>' +
    '<form class="term-in" id="term-form" autocomplete="off"><label for="term-input" class="term-prompt" id="term-prompt">&gt;</label>' +
    '<input id="term-input" type="text" maxlength="40" spellcheck="false" autocapitalize="off" aria-label="Escribe un comando"></form>' +
    '<div class="term-chips" id="term-chips"></div>' +
  '</div>' +
  '<button type="button" class="intro-skip" id="intro-skip">Saltar intro</button>';
document.body.appendChild(ov);
const cv = ov.querySelector('#intro-cv'), c = cv.getContext('2d'), cap = ov.querySelector('#intro-cap'), next = ov.querySelector('#intro-next');
const term = ov.querySelector('#term'), out = ov.querySelector('#term-out'), form = ov.querySelector('#term-form'), input = ov.querySelector('#term-input'), chips = ov.querySelector('#term-chips');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Mientras la intro está abierta, las teclas no mueven la nave
window.addEventListener('keydown', e => { if (!ov.hidden) e.stopPropagation(); }, true);
window.addEventListener('keyup', e => { if (!ov.hidden) e.stopPropagation(); }, true);

/* ---------- Dibujo ---------- */
let W = 0, H = 0, raf = null, escena = 0, t0 = 0, alFinal = null;
function ajustar() { const d = Math.min(2, window.devicePixelRatio || 1); W = ov.clientWidth; H = ov.clientHeight; cv.width = W * d; cv.height = H * d; c.setTransform(d, 0, 0, d, 0, 0); }
window.addEventListener('resize', () => { if (!ov.hidden) ajustar(); });
const rnd = (s => () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; })(77);
const estrellas = [...Array(320)].map(() => [rnd(), rnd() * .75, rnd(), rnd() * 6]);
const luces = [...Array(160)].map(() => [rnd(), .9 + rnd() * .1, rnd()]);

function cielo(t) {
  const g = c.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#030512'); g.addColorStop(.65, '#0b1430'); g.addColorStop(1, '#1b2347');
  c.fillStyle = g; c.fillRect(0, 0, W, H);
  // Vía Láctea tenue
  c.save(); c.globalAlpha = .12; c.translate(W * .2, 0); c.rotate(.5);
  const vl = c.createLinearGradient(0, -H * .1, 0, H * .1); vl.addColorStop(0, 'rgba(180,200,255,0)'); vl.addColorStop(.5, 'rgba(200,210,255,1)'); vl.addColorStop(1, 'rgba(180,200,255,0)');
  c.fillStyle = vl; c.fillRect(-W, -H * .1, W * 3, H * .2); c.restore();
  estrellas.forEach(([x, y, b, f]) => { const a = .35 + .65 * b * (reduce ? 1 : (.6 + .4 * Math.sin(t * 2 + f))); c.fillStyle = 'rgba(255,255,255,' + a + ')'; const s = b > .93 ? 2 : 1.2; c.fillRect(x * W, y * H, s, s); });
}
function volcan(cx, base, ancho, alto, col, nieve) {
  c.fillStyle = col; c.beginPath(); c.moveTo(cx - ancho, base); c.quadraticCurveTo(cx - ancho * .35, base - alto * .55, cx - ancho * .08, base - alto);
  c.lineTo(cx + ancho * .08, base - alto); c.quadraticCurveTo(cx + ancho * .35, base - alto * .55, cx + ancho, base); c.closePath(); c.fill();
  if (nieve) { c.fillStyle = 'rgba(235,240,255,.85)'; c.beginPath(); c.moveTo(cx - ancho * .08, base - alto); c.lineTo(cx + ancho * .08, base - alto);
    c.lineTo(cx + ancho * .2, base - alto * .82); c.lineTo(cx + ancho * .1, base - alto * .86); c.lineTo(cx, base - alto * .8); c.lineTo(cx - ancho * .12, base - alto * .85); c.lineTo(cx - ancho * .2, base - alto * .8); c.closePath(); c.fill(); }
}
function escenaCharacato(t) {
  cielo(t);
  const base = H * .78;
  volcan(W * .22, base, W * .32, H * .26, '#151b33', true);   // Chachani (más ancho)
  volcan(W * .62, base, W * .22, H * .36, '#111730', true);   // Misti (cono)
  volcan(W * .92, base, W * .16, H * .22, '#141a31', true);   // Pichu Pichu
  c.font = '12px "IBM Plex Mono", monospace'; c.fillStyle = 'rgba(163,172,206,.7)'; c.textAlign = 'center';
  c.fillText('Chachani', W * .22, base - H * .27 - 8); c.fillText('Misti', W * .62, base - H * .37 - 8); c.fillText('Pichu Pichu', W * .92, base - H * .23 - 8);
  c.fillStyle = '#0a0e1d'; c.fillRect(0, base, W, H - base);
  luces.forEach(([x, y, b]) => { c.fillStyle = 'rgba(255,190,110,' + (.3 + b * .6) + ')'; c.fillRect(x * W * .7, base + (y - .9) * H * 2.2 + 6, 2, 2); });
  // cerro San Francisco y el observatorio
  const ox = W * .84, oy = Math.min(H * .7, H - 190);
  c.fillStyle = '#070a15'; c.beginPath(); c.moveTo(W * .55, H); c.quadraticCurveTo(ox - W * .1, oy - 10, ox, oy - 4); c.quadraticCurveTo(ox + W * .1, oy - 10, W * 1.05, oy + 60); c.lineTo(W, H); c.closePath(); c.fill();
  c.fillStyle = '#d8d2c6'; c.fillRect(ox - 22, oy - 26, 44, 22); c.beginPath(); c.arc(ox, oy - 26, 22, Math.PI, 0); c.fill();
  c.fillStyle = 'rgba(255,184,77,' + (.6 + .4 * Math.sin(t * 3)) + ')'; c.fillRect(ox - 3, oy - 46, 6, 20);
  // láser hacia el cielo (la estación TLRS-3 sí lo hace con satélites)
  if (t > 1.2) { const a = Math.min(1, (t - 1.2) * 2); c.strokeStyle = 'rgba(120,255,140,' + (.55 * a) + ')'; c.lineWidth = 2; c.beginPath(); c.moveTo(ox, oy - 46); c.lineTo(ox - W * .3, 0); c.stroke(); }
  c.fillStyle = 'rgba(236,231,218,.85)'; const et = 'Observatorio de Characato', ew = c.measureText(et).width; c.fillText(et, Math.min(ox, W - ew / 2 - 10), oy + 16); c.textAlign = 'left';
}
function escenaInterior(t) {
  c.fillStyle = '#05070d'; c.fillRect(0, 0, W, H);
  // rendija de la cúpula con estrellas
  c.save(); c.beginPath(); c.moveTo(W * .44, 0); c.lineTo(W * .56, 0); c.lineTo(W * .53, H * .45); c.lineTo(W * .47, H * .45); c.closePath(); c.clip(); cielo(t); c.restore();
  c.strokeStyle = '#1b2240'; c.lineWidth = 3; c.beginPath(); c.arc(W / 2, H * 1.25, H * 1.1, Math.PI * 1.15, Math.PI * 1.85); c.stroke();
  // telescopio
  c.fillStyle = '#1e2647'; c.save(); c.translate(W * .5, H * .7); c.rotate(-.9); c.fillRect(-14, -160, 28, 190); c.restore(); c.fillRect(W * .5 - 30, H * .7, 60, H * .3);
  // computadora vieja con brillo verde
  const px = W * .2, py = H * .62, on = t > .8;
  c.fillStyle = '#2a2e3a'; c.fillRect(px - 70, py - 55, 140, 105); c.fillRect(px - 90, py + 50, 180, 14);
  const glow = on ? (.75 + .25 * Math.sin(t * 8)) : .05;
  c.fillStyle = 'rgba(40,255,110,' + (glow * .9) + ')'; c.fillRect(px - 58, py - 44, 116, 80);
  if (on) { c.fillStyle = 'rgba(0,30,10,.85)'; c.font = '9px "IBM Plex Mono", monospace'; ['SEÑAL ENTRANTE', '47 FUENTES', '> _'].forEach((l, i) => c.fillText(l, px - 50, py - 26 + i * 14));
    const g = c.createRadialGradient(px, py, 10, px, py, 220); g.addColorStop(0, 'rgba(40,255,110,.25)'); g.addColorStop(1, 'rgba(40,255,110,0)'); c.fillStyle = g; c.fillRect(0, 0, W, H); }
}
function escenaTeleport(t) {
  const k = Math.min(1, t / 2.2);
  c.fillStyle = '#02040a'; c.fillRect(0, 0, W, H);
  for (let i = 0; i < 260; i++) { const a = i * 2.39996, r = (1 - ((t * .6 + i / 260) % 1)) * Math.max(W, H) * .8;
    c.fillStyle = 'rgba(' + (i % 3 ? '120,255,160' : '255,220,160') + ',' + (.3 + .7 * k) + ')'; c.fillRect(W / 2 + Math.cos(a) * r, H / 2 + Math.sin(a) * r, 2, 2 + k * 10); }
  const g = c.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * (.1 + k)); g.addColorStop(0, 'rgba(255,255,255,' + k + ')'); g.addColorStop(1, 'rgba(255,255,255,0)');
  c.fillStyle = g; c.fillRect(0, 0, W, H);
  if (t > 2.2) { c.fillStyle = 'rgba(255,255,255,' + Math.min(1, (t - 2.2) * 2) + ')'; c.fillRect(0, 0, W, H); }
}
const DIBUJO = [escenaCharacato, escenaInterior, null, escenaTeleport];
function loop(now) { const t = (now - t0) / 1000; if (DIBUJO[escena]) DIBUJO[escena](t); raf = requestAnimationFrame(loop); }

/* ---------- Texto con efecto de máquina de escribir ---------- */
function escribir(el, txt, vel) {
  return new Promise(res => {
    if (reduce) { el.textContent = txt; return res(); }
    let i = 0; el.textContent = '';
    const iv = setInterval(() => { i += 2; el.textContent = txt.slice(0, i); if (i >= txt.length) { clearInterval(iv); res(); } }, vel || 28);
  });
}

/* ---------- Escenas 1 y 2 ---------- */
const TEXTOS = [
  'Arequipa. Cerro San Francisco, Characato. Desde aquí, una estación de la NASA dispara láseres a los satélites desde 1970. Esta noche, el cielo responde.',
  'Dentro del observatorio todo está apagado… menos una computadora vieja. Se encendió sola.'
];
async function irEscena(n) {
  escena = n; t0 = performance.now(); next.hidden = true; cap.hidden = false;
  if (n < 2) { await escribir(cap, TEXTOS[n]); next.hidden = false; next.focus(); }
  else if (n === 2) { cap.hidden = true; abrirTerminal(); }
}
next.onclick = () => irEscena(escena + 1);

/* ---------- Escena 3: la terminal ---------- */
let nombre = '', fase = 'nombre', usados = new Set(), ocupado = false;
function linea(txt, cls) { const p = document.createElement('div'); p.className = 'tl' + (cls ? ' ' + cls : ''); out.appendChild(p); out.scrollTop = out.scrollHeight; return p; }
async function decir(lineas, cls) { ocupado = true; for (const l of lineas) { const p = linea('', cls); await escribir(p, l, 14); out.scrollTop = out.scrollHeight; } ocupado = false; }
const contar = () => { const luna = SITES.filter(s => s.b === 'm').length + 1, marte = SITES.filter(s => s.b === 'M').length; return { luna, marte, lejos: 4, total: luna + marte + 4 }; };
const CMD = {
  ayuda: () => decir(['Comandos disponibles:', '  escanear     buscar señales en el sistema solar', '  observatorio información de este lugar', '  señal        escuchar una de las señales', '  nave         ver la nave asignada', '  eve          conocer a tu asistente', '  limpiar      borrar la pantalla', '  aceptar      aceptar la misión y teletransportarte']),
  escanear: async () => { const k = contar(); await decir(['Escaneando…', '[██████████████████] 100 %', 'Luna ............ ' + k.luna + ' señales', 'Marte ........... ' + k.marte + ' señales', 'Espacio profundo  ' + k.lejos + ' señales', 'TOTAL: ' + k.total + ' máquinas abandonadas. Ninguna responde.', 'Son sondas, rovers y módulos que la humanidad dejó atrás desde 1959.']); },
  observatorio: () => decir(['OBSERVATORIO DE CHARACATO · Universidad Nacional de San Agustín', 'Cerro San Francisco, Characato, Arequipa · ~2.448 m de altitud', 'Aloja la estación láser TLRS-3 de la NASA.', 'Mide la distancia a satélites disparando pulsos de láser y cronometrando', 'cuánto tarda la luz en volver. Aquí se hace desde 1970.', 'Es la misma idea con la que se mide la distancia a la Luna', 'usando los espejos que dejó el Apolo 15. (Lo probarás en el juego.)']),
  'señal': () => decir(['Sintonizando la señal más lejana…', '…▒▒░ soy Pioneer 10 ░▒▒…', '…▒ crucé el cinturón de asteroides en 1972… ▒░…', '…░ mi última señal llegó en 2003… sigo viajando hacia Aldebarán ▒…', '[señal perdida]', 'Hay 46 señales más esperando a alguien que las escuche.'], 'eco'),
  nave: () => decir(['NAVE ECO-1 · posada en su plataforma de lanzamiento, en la Tierra', 'Tripulación: 1 operador + asistente EVE', 'Equipo: antena de espacio profundo, receptor de ecos, módulo de aterrizaje', 'Estado: esperando operador…']),
  eve: () => decir(['EVE · asistente cósmica de la ECO-1', '"Hola, ' + nombre + '. Yo te daré datos y te guiaré hasta cada máquina.', ' Tú solo tienes que escucharlas."']),
  limpiar: () => { out.innerHTML = ''; return Promise.resolve(); },
  aceptar: async () => { fase = 'fin'; input.disabled = true; chips.innerHTML = ''; await decir(['Operador ' + nombre.toUpperCase() + ': misión aceptada.', 'Destino: plataforma de la nave ECO-1.', 'Iniciando teletransporte…']);
    const bar = linea('', 'ok'); for (let p = 0; p <= 100; p += 5) { bar.textContent = '[' + '█'.repeat(p / 5) + '░'.repeat(20 - p / 5) + '] ' + p + ' %'; await new Promise(r => setTimeout(r, reduce ? 0 : 60)); }
    for (const n of ['3', '2', '1']) { linea(n + '…', 'ok'); await new Promise(r => setTimeout(r, reduce ? 0 : 450)); }
    teletransporte(); }
};
const ALIAS = { help: 'ayuda', '?': 'ayuda', scan: 'escanear', senal: 'señal', signal: 'señal', ship: 'nave', clear: 'limpiar', cls: 'limpiar', accept: 'aceptar', si: 'aceptar', 'sí': 'aceptar' };
function ponerChips() {
  chips.innerHTML = '';
  ['ayuda', 'escanear', 'observatorio', 'señal', 'nave', 'eve', 'aceptar'].forEach(k => { const b = document.createElement('button'); b.type = 'button'; b.textContent = k; if (k === 'aceptar') b.className = 'go'; b.onclick = () => ejecutar(k); chips.appendChild(b); });
}
/* El nombre del jugador deletreado en Lengua de Señas Peruana (imágenes de lsp/) */
async function nombreEnSenas(n) {
  const L = window.LSP_LETRAS || {};
  const letras = (n.toLowerCase().match(/ll|rr|[\s\S]/g) || []).map(ch => ch.length === 2 ? ch : ch === 'ñ' ? 'enie' : ch.normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
  if (!letras.some(k => L[k])) return;
  await decir(['Así se deletrea tu nombre en Lengua de Señas Peruana:'], 'tip');
  const fila = document.createElement('div'); fila.className = 'tl term-lsp'; fila.setAttribute('role', 'img');
  fila.setAttribute('aria-label', n + ', deletreado en Lengua de Señas Peruana');
  out.appendChild(fila);
  for (const k of letras) {
    if (/\s/.test(k)) { if (fila.lastChild && fila.lastChild.className !== 'esp') { const e = document.createElement('span'); e.className = 'esp'; fila.appendChild(e); } continue; }
    if (!L[k]) continue;
    const img = document.createElement('img'); img.src = 'lsp/' + L[k]; img.alt = ''; img.onerror = () => img.remove();
    img.onload = () => { out.scrollTop = out.scrollHeight; };
    fila.appendChild(img); out.scrollTop = out.scrollHeight;
    await new Promise(r => setTimeout(r, reduce ? 0 : 160));
  }
}
async function ejecutar(raw) {
  if (ocupado || fase === 'fin') return;
  const v = raw.trim(); if (!v) return;
  linea('> ' + v, 'yo');
  if (fase === 'nombre') {
    nombre = v.replace(/[<>]/g, '').slice(0, 16);
    try { localStorage.setItem(KEY_NOMBRE, nombre); } catch (e) {}
    fase = 'cmd'; ov.querySelector('#term-prompt').textContent = nombre.toLowerCase().replace(/\s+/g, '') + '@characato:~$';
    await decir(['Operador registrado: ' + nombre.toUpperCase()]);
    await nombreEnSenas(nombre);
    await decir(['Hola, ' + nombre + '. Este observatorio recibió ' + contar().total + ' señales del espacio y necesita a alguien que las escuche.', 'Explora con comandos. Escribe "ayuda" para verlos, o "aceptar" cuando estés listo.']);
    ponerChips(); input.setAttribute('aria-label', 'Escribe un comando'); return;
  }
  const k = ALIAS[v.toLowerCase()] || v.toLowerCase();
  if (CMD[k]) { usados.add(k); await CMD[k](); if (usados.size === 3 && k !== 'aceptar' && fase !== 'fin') await decir(['(Cuando quieras, escribe "aceptar" para ir a la nave.)'], 'tip'); }
  else await decir(['Comando no reconocido: "' + v + '". Escribe "ayuda".'], 'err');
  if (fase !== 'fin') input.focus();
}
form.addEventListener('submit', e => { e.preventDefault(); const v = input.value; input.value = ''; ejecutar(v); });
async function abrirTerminal() {
  term.hidden = false; out.innerHTML = ''; fase = 'nombre'; usados.clear(); input.disabled = false; chips.innerHTML = '';
  ov.querySelector('#term-prompt').textContent = '>';
  await decir(['Iniciando SISTEMA ECO v1.969…', 'Antena de espacio profundo ........ OK', 'Receptor de ecos .................. OK', '> Escaneando el sistema solar…', '> ' + contar().total + ' señales detectadas. Ninguna responde.', '> Son máquinas que la humanidad dejó en la Luna, en Marte y más allá.', '  Sus historias se están perdiendo.', '', '> Se necesita un operador. Escribe tu nombre:']);
  if (nombreGuardado) { const b = document.createElement('button'); b.type = 'button'; b.textContent = 'Soy ' + nombreGuardado; b.onclick = () => ejecutar(nombreGuardado); chips.appendChild(b); }
  input.setAttribute('aria-label', 'Escribe tu nombre'); input.focus();
}

/* ---------- Escena 4: teletransporte y entrada al juego ---------- */
function teletransporte() {
  term.hidden = true; escena = 3; t0 = performance.now();
  try { if (window.Ecos && Ecos.beep) Ecos.beep(); } catch (e) {}
  setTimeout(terminar, reduce ? 300 : 2900);
}
function terminar() {
  const n = nombre || nombreGuardado || 'operador';
  window.__nombreOperador = n;
  i18n.es.eveWelcome = '¡Hola, ' + n + '! El teletransporte te dejó en la Tierra, junto a la ECO-1. Camina hasta la nave (W A S D) y pulsa F para subir. Luego abre el archivo (arriba a la derecha) y elige una máquina: aterrizaremos a su lado.';
  i18n.en.eveWelcome = 'Hi, ' + n + '! The teleporter dropped you on Earth, next to the ECO-1. Walk to the ship (W A S D) and press F to board. Then open the archive (top right) and pick a machine: we will land next to it.';
  if (alFinal) { const f = alFinal; alFinal = null; f(); }
  ov.classList.add('fuera');
  setTimeout(() => { ov.hidden = true; ov.classList.remove('fuera'); cancelAnimationFrame(raf); }, reduce ? 0 : 900);
}
ov.querySelector('#intro-skip').onclick = () => { if (!nombre) nombre = nombreGuardado; terminar(); };

/* ---------- Conexión con la pantalla de inicio ---------- */
const _init = window.initExperience;
window.initExperience = function () {
  try { bgAudio.volume = 0.6; bgAudio.play().catch(() => {}); } catch (e) {}   // la música empieza con el clic
  alFinal = _init;
  ov.hidden = false; ajustar(); t0 = performance.now(); cancelAnimationFrame(raf); raf = requestAnimationFrame(loop);
  term.hidden = true; irEscena(0);
};
})();
