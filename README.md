# Ecos del Silencio 3D

Juego educativo para el desafío **"NASA's Discarded Equipment Storytelling"** del NASA Space Apps Challenge 2026.

Desde 1959 hemos dejado máquinas en la Luna, en Marte y en el espacio profundo. En este juego vuelas en 3D por el sistema solar, aterrizas junto a esas máquinas, **sintonizas su eco**, escuchas su historia contada por ellas mismas y superas un **minijuego que muestra lo que hicieron** para guardarlas en el archivo.

## La historia

Todo empieza de noche en el **Observatorio de Characato** (Arequipa, Perú), en el cerro San Francisco. Allí funciona de verdad la estación láser TLRS-3 de la NASA, operada por la UNSA. Una computadora vieja se enciende sola: es una terminal verde que detectó 47 señales de máquinas abandonadas. El jugador escribe su nombre, explora con comandos (`ayuda`, `escanear`, `observatorio`, `señal`, `nave`, `eve`, `aceptar`) y, al aceptar la misión, se teletransporta a la Tierra, junto a la plataforma de la nave ECO-1. EVE lo recibe por su nombre, el jugador camina hasta la nave y sube con **F**. La señal y el teletransporte son ficción; los datos de la estación y de las misiones son reales.

## Cómo jugar

1. Abre `index.html` en el navegador (necesita internet para cargar la librería 3D y las letras).
2. Pulsa **Empezar el vuelo**, juega la intro y camina hasta la nave; pulsa **F** para subir.
3. Abre el **archivo** (el contador de arriba a la derecha) y toca una misión: la nave aterriza a su lado.
4. Pulsa **E** (o 💬 en el celular) para abrir el receptor:
   - **Sintonizar:** mueve el dial hasta limpiar la señal.
   - **Escuchar:** la máquina cuenta su misión, con una ficha de datos reales y su fuente.
   - **Desafío:** un minijuego según lo que hizo la máquina.
5. Cada máquina superada queda archivada. Hay 47 ecos en total.

| Tecla | Acción |
|---|---|
| W A S D / flechas | Volar o caminar |
| Q / E | Bajar / subir (volando) |
| Espacio | Turbo (volando) · saltar (caminando) |
| T o clic en tu astronauta | Emotes |
| F | Subir a la nave (junto a ella) / aterrizar |
| E | Hablar con la máquina cercana (caminando) |
| Ratón | Arrastrar para girar la cámara |

En pantallas táctiles aparecen botones automáticamente.

## Escala del sistema solar

Los tamaños y distancias están a escala semi-real comprimida: el Sol es mucho más grande que los planetas, Júpiter y Saturno son gigantes y el cinturón de asteroides queda entre Marte y Júpiter. Las distancias están muy reducidas para que se pueda volar; por eso la nave acelera sola en el espacio abierto y frena cerca de los planetas.

## Planetas y suelo

- **La Tierra usa el mapa real "Blue Marble" de la NASA.** Los demás planetas tienen texturas que el juego dibuja al abrirse, inspiradas en fotos reales: las franjas de Júpiter y su Gran Mancha Roja, la División de Cassini en los anillos de Saturno, los casquetes polares de Marte y los mares de la Luna.
- **La plataforma de la Tierra está en Characato, Arequipa**, en sus coordenadas reales: el jugador aparece donde empieza la historia.
- **Auroras:** desde el espacio, un anillo fino alrededor de cada polo (el óvalo auroral). En el menú de plataformas, el destino especial **Auroras · Tromsø (Noruega)** te deja allí a medianoche, mirando al cielo, con cortinas de aurora que ondulan y la explicación de EVE.
- **Suelo de cerca:** al caminar por la Tierra, la Luna, Marte o Mercurio, alrededor del astronauta aparece un suelo con más detalle (piedras, polvo, cráteres pequeños y matas secas), que se mezcla con el mapa del planeta a lo lejos.

## Peligros y física

- **Gravedad real:** al caminar, el salto depende de la gravedad de cada mundo (Luna 1,62 m/s², Marte 3,71, Tierra 9,81, Júpiter 24,79…). En la Luna se salta unas 6 veces más alto que en la Tierra.
- **Casco de la nave:** los choques con rocas del cinturón de asteroides y con meteoritos bajan la resistencia. Al aterrizar en un planeta o en la Luna, el casco se repara.
- **El Sol quema:** al acercarse, la pantalla se calienta y EVE avisa; si sigues, la nave se quema.
- **Pantalla de muerte:** negra con estrellas, explica por qué moriste con un dato real (por ejemplo, la sonda Parker Solar Probe) y te devuelve cerca de la Tierra.

## Minijuegos

| Minijuego | Máquinas |
|---|---|
| Aterrizar (gravedad real) | Surveyor, Luna 9, Mars 3, Beagle 2, misiones que se estrellaron… |
| Aterrizar entre rocas | Apolo 11, SLIM |
| Conducir un rover | Opportunity, Spirit, Sojourner, Apolo 16 y 17, Lunojod, Yutu, Pragyan, Curiosity, Zhurong |
| Cavar con la pala | Phoenix, Viking 1 y 2, Surveyor 7 |
| Perforar sin recalentar | Luna 24, Chang'e 5 y 6 |
| Distinguir sismos | Apolo 12 y 14, InSight |
| Primer vuelo en Marte | Ingenuity |
| Medir la Luna con láser | Apolo 15 |
| Detectar un tránsito | Kepler |
| Cruzar el cinturón de asteroides | Pioneer 10 |
| Motor de iones | Dawn |
| Impacto | Luna 2 |

## Clips de 4 segundos

Al empezar "Escuchar", cada máquina muestra un clip de lo que hizo:

- **Animación** para las 47 máquinas, dibujada en el propio juego.
- **Video real de la NASA** en 9 de ellas (Apolo 11, Apolo 12, Surveyor 3, Apolo 15, Ingenuity, Phoenix, Opportunity, InSight y Dawn). Son recortes de 4 s de [images.nasa.gov](https://images.nasa.gov) (dominio público), en la carpeta `videos/`, en MP4 y WebM. En esas máquinas se puede cambiar entre la animación y el video.

## Narración, fotos y modelos

- **Escuchar en voz alta:** en la fase "Escuchar", un botón lee la historia de la máquina con la voz del navegador. La música baja mientras habla.
- **Fotos reales:** al terminar la historia aparecen hasta 4 fotos del archivo de imágenes de la NASA ([images.nasa.gov](https://images.nasa.gov)) que mencionan esa misión. Luna 24 muestra una foto de la cámara LROC. Si no hay internet o la NASA no tiene fotos, la sección no aparece.
- **Base de datos del equipo:** 14 misiones (Surveyor 3, Apolo 11, 12 y 15, Pathfinder, Spirit, Opportunity, Viking 1, InSight, Ingenuity, NEAR, Dawn, Kepler y Pioneer 10) suman filas a su ficha, imágenes propias y, en Apolo 11 e InSight, un sonido real con su transcripción.
- **Historias detalladas:** unas 27 misiones lunares tienen un relato largo en primera persona (`MISSION_STORIES`, en `index.html`).
- **Modelos 3D detallados** de 17 tipos de naves lunares (Apolo con LRV y ALSEP, Surveyor, Lunojod, Luna 9 y 24, Chang'e, Chandrayaan, SLIM, Odysseus, Athena, Blue Ghost, Beresheet). Están inspirados en fotos y esquemas; no son escaneos.

## Accesibilidad

- **Lectura fácil:** en "Escuchar", cada máquina se puede leer en 3 frases cortas con íconos (`facil.js`). Ayuda a quienes leen el español como segunda lengua (muchas personas sordas usan primero la Lengua de Señas Peruana), a niños pequeños y a quien prefiere leer poco. El juego recuerda la elección.
- **Sintonizar sin sonido:** el borde de la pantalla del receptor brilla más cuanto más cerca está la frecuencia, y en el celular vibra cada vez que la señal mejora.
- **Lengua de Señas Peruana:** el nombre del jugador se deletrea en la terminal de la intro, y el nombre de cada máquina se puede deletrear en el receptor (menú ☰ → 🤟 Deletreo en LSP).

## Archivos

| Archivo | Qué contiene |
|---|---|
| `index.html` | El mundo 3D (Three.js): nave, planetas, aterrizaje, astronauta, misiones en la Luna y Marte, EVE y controles táctiles. |
| `ecos.js` | La capa "Ecos del Silencio": receptor, historias, minijuegos, archivo, cielo limpio y "¿dónde está mi nave?". Comentado en español. |
| `intro.js` | La intro: Characato de noche, la terminal con comandos y el teletransporte. |
| `ecos.css` | Estilo visual de todo el juego. |
| `lsp.js`, `lsp/` | Deletreo en Lengua de Señas Peruana del nombre de cada máquina. Usa fotos de las manos que pone el equipo (ver `lsp/LEEME.md`); sin fotos no aparece. |
| `facil.js` | Versión de lectura fácil de cada máquina (3 frases cortas con íconos). |
| `datos_equipo.js` | Base de datos del equipo: datos extra de 14 misiones, y qué imágenes, video y sonidos de `media/` muestra cada una. |
| `texturas/` | Mapa real de la Tierra ("Blue Marble", NASA Visible Earth, dominio público). |
| `media/` | Imágenes, diagramas, la animación de Sojourner y dos sonidos reales de la NASA (la voz de Armstrong y el viento de Marte). |
| `musica.mp3` | Música de fondo. |
| `videos/` | Recortes de 4 s de videos de la NASA (MP4 y WebM). |

## Fuentes de datos

- [NASA Space Science Data Coordinated Archive (NSSDCA)](https://nssdc.gsfc.nasa.gov/)
- Páginas de misión de [NASA Science](https://science.nasa.gov/) (enlazadas en la ficha de cada máquina)

Las voces de las máquinas son narraciones imaginadas a partir de datos reales. Algunas cosas se exageran para que el juego sea jugable, y el juego lo avisa: por ejemplo, la gravedad de Eros está aumentada y las rocas del cinturón de asteroides están mucho más juntas que en la realidad.

## Pendiente

- Revisar cada dato contra su fuente antes de la entrega final.
- Traducir al inglés las historias y los minijuegos (los menús ya están en inglés).
- Confirmar la licencia de la música.
