# Ecos del Silencio 3D

Juego educativo para el desafío **"NASA's Discarded Equipment Storytelling"** del NASA Space Apps Challenge 2026.

Desde 1959 hemos dejado máquinas en la Luna, en Marte y en el espacio profundo. En este juego vuelas en 3D por el sistema solar, aterrizas junto a esas máquinas, **sintonizas su eco**, escuchas su historia contada por ellas mismas y superas un **minijuego que muestra lo que hicieron** para guardarlas en el archivo.

## Cómo jugar

1. Abre `index.html` en el navegador (necesita internet para cargar la librería 3D y las letras).
2. Pulsa **Empezar el vuelo**.
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
| Espacio | Turbo |
| F | Aterrizar / despegar |
| E | Hablar con la máquina cercana (caminando) |
| Ratón | Arrastrar para girar la cámara |

En pantallas táctiles aparecen botones automáticamente.

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

## Archivos

| Archivo | Qué contiene |
|---|---|
| `index.html` | El mundo 3D (Three.js): nave, planetas, aterrizaje, astronauta, misiones en la Luna y Marte, EVE y controles táctiles. |
| `ecos.js` | La capa "Ecos del Silencio": receptor, historias, minijuegos, archivo, cielo limpio y "¿dónde está mi nave?". Comentado en español. |
| `ecos.css` | Estilo visual de todo el juego. |
| `musica.mp3` | Música de fondo. |

## Fuentes de datos

- [NASA Space Science Data Coordinated Archive (NSSDCA)](https://nssdc.gsfc.nasa.gov/)
- Páginas de misión de [NASA Science](https://science.nasa.gov/) (enlazadas en la ficha de cada máquina)

Las voces de las máquinas son narraciones imaginadas a partir de datos reales. Algunas cosas se exageran para que el juego sea jugable, y el juego lo avisa: por ejemplo, la gravedad de Eros está aumentada y las rocas del cinturón de asteroides están mucho más juntas que en la realidad.

## Pendiente

- Revisar cada dato contra su fuente antes de la entrega final.
- Traducir al inglés las historias y los minijuegos (los menús ya están en inglés).
- Confirmar la licencia de la música.
