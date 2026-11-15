/* ==========================================================================
   FACIL.JS — "Lectura fácil": cada máquina contada en 3 frases cortas
   --------------------------------------------------------------------------
   Para quien lee en español como segunda lengua (muchas personas sordas
   usan primero la Lengua de Señas Peruana), para niños pequeños y para
   quien prefiere leer poco. Se activa en el receptor, en "Escuchar".
   Formato: 'Nombre de la máquina': [ [ícono, frase], [ícono, frase], ... ]
   Reglas: frases cortas, una idea por frase, palabras comunes.
   Revisen estos datos con su fuente antes de la entrega.
   ========================================================================== */
window.LECTURA_FACIL = {
  'Luna 2': [['📅', 'URSS, 1959.'], ['🎯', 'Fue el primer objeto humano en llegar a la Luna.'], ['💥', 'Chocó contra la Luna a propósito.']],
  'Luna 9': [['📅', 'URSS, 1966.'], ['🎯', 'Fue la primera nave en aterrizar suave en la Luna.'], ['📷', 'Envió las primeras fotos desde el suelo lunar.']],
  'Surveyor 1': [['📅', 'Estados Unidos, 1966.'], ['🎯', 'Fue la primera nave de Estados Unidos en aterrizar suave en la Luna.'], ['📷', 'Envió miles de fotos.']],
  'Surveyor 3': [['📅', 'Estados Unidos, 1967.'], ['🎯', 'Cavó el suelo de la Luna con una pala.'], ['👨‍🚀', 'En 1969, los astronautas del Apolo 12 lo visitaron.']],
  'Surveyor 5': [['📅', 'Estados Unidos, 1967.'], ['🎯', 'Estudió de qué está hecho el suelo de la Luna.'], ['🔍', 'El suelo se parecía a una roca volcánica: el basalto.']],
  'Surveyor 6': [['📅', 'Estados Unidos, 1967.'], ['🎯', 'Encendió su motor y dio un pequeño salto.'], ['⭐', 'Fue el primer despegue desde la Luna.']],
  'Surveyor 7': [['📅', 'Estados Unidos, 1968.'], ['🎯', 'Aterrizó en las montañas, cerca del cráter Tycho.'], ['🔍', 'Allí el suelo era distinto al de las llanuras.']],
  'Apolo 11': [['📅', 'Estados Unidos, 1969.'], ['👨‍🚀', 'Llevó a los primeros humanos a la Luna.'], ['🪞', 'Dejaron un espejo para medir la distancia a la Luna con láser.']],
  'Apolo 12': [['📅', 'Estados Unidos, 1969.'], ['🎯', 'Aterrizó junto a la nave Surveyor 3.'], ['📡', 'Dejó instrumentos que midieron sismos en la Luna.']],
  'Apolo 14': [['📅', 'Estados Unidos, 1971.'], ['🎯', 'Exploró una zona llamada Fra Mauro.'], ['⛳', 'El astronauta Alan Shepard golpeó pelotas de golf en la Luna.']],
  'Apolo 15': [['📅', 'Estados Unidos, 1971.'], ['🚙', 'Usó el primer auto lunar.'], ['🪨', 'Trajo una roca muy antigua: la "Roca Génesis".']],
  'Apolo 16': [['📅', 'Estados Unidos, 1972.'], ['🎯', 'Exploró las montañas de la Luna.'], ['🔍', 'Descubrió que esas montañas no eran volcanes.']],
  'Apolo 17': [['📅', 'Estados Unidos, 1972.'], ['👨‍🚀', 'Fue la última vez que humanos pisaron la Luna.'], ['🟠', 'Encontraron suelo naranja: vidrio de antiguos volcanes.']],
  'Lunokhod 1': [['📅', 'URSS, 1970.'], ['🚙', 'Fue el primer robot con ruedas en otro mundo.'], ['🎮', 'Lo manejaban desde la Tierra, como un auto a control remoto.']],
  'Lunokhod 2': [['📅', 'URSS, 1973.'], ['🚙', 'Robot con ruedas manejado desde la Tierra.'], ['📏', 'Recorrió unos 39 kilómetros.']],
  'Luna 24': [['📅', 'URSS, 1976.'], ['🤖', 'Un robot recogió suelo de la Luna.'], ['🌍', 'Mandó ese suelo a la Tierra en una cápsula.']],
  "Chang'e 3 y Yutu": [['📅', 'China, 2013.'], ['🚙', 'Llevó al rover Yutu: "conejo de jade".'], ['🔍', 'Estudió el suelo y lo que hay debajo con un radar.']],
  "Chang'e 4 y Yutu-2": [['📅', 'China, 2019.'], ['🌑', 'Fue el primer aterrizaje en la cara oculta de la Luna.'], ['🚙', 'Su rover, Yutu-2, la exploró durante años.']],
  "Chang'e 5": [['📅', 'China, 2020.'], ['🤖', 'Recogió casi 2 kilos de suelo lunar.'], ['🌍', 'Los trajo a la Tierra.']],
  "Chang'e 6": [['📅', 'China, 2024.'], ['🌑', 'Aterrizó en la cara oculta de la Luna.'], ['🌍', 'Trajo las primeras muestras de esa cara.']],
  'Beresheet': [['📅', 'Israel, 2019.'], ['🎯', 'Fue la primera misión privada en llegar hasta la Luna.'], ['💥', 'Se estrelló al intentar aterrizar.']],
  'Chandrayaan-3 (Vikram y Pragyan)': [['📅', 'India, 2023.'], ['🎯', 'Aterrizó cerca del polo sur de la Luna.'], ['🔍', 'Su rover Pragyan encontró azufre en el suelo.']],
  'Chandrayaan-2 (restos)': [['📅', 'India, 2019.'], ['💥', 'Su módulo Vikram se estrelló al aterrizar.'], ['🛰️', 'Su parte en órbita siguió estudiando la Luna desde arriba.']],
  'SLIM': [['📅', 'Japón, 2024.'], ['🎯', 'Aterrizó a pocos metros del lugar elegido.'], ['🙃', 'Quedó de cabeza, pero siguió funcionando.']],
  'IM-1 Odysseus': [['📅', 'Estados Unidos, 2024.'], ['🏢', 'Fue el primer aterrizaje de una empresa privada en la Luna.'], ['📐', 'Quedó inclinado, pero envió datos.']],
  'Blue Ghost 1': [['📅', 'Estados Unidos, 2025.'], ['🏢', 'Una empresa privada aterrizó de pie y sin problemas.'], ['🌘', 'Vio un eclipse desde la Luna.']],
  'IM-2 Athena': [['📅', 'Estados Unidos, 2025.'], ['🎯', 'Aterrizó cerca del polo sur, buscando hielo.'], ['🔋', 'Cayó de lado y se apagó pronto.']],
  'Mars 2': [['📅', 'URSS, 1971.'], ['🎯', 'Fue el primer objeto humano en tocar Marte.'], ['💥', 'Se estrelló al llegar.']],
  'Mars 3': [['📅', 'URSS, 1971.'], ['🎯', 'Fue el primer aterrizaje suave en Marte.'], ['📡', 'Envió señal solo unos segundos.']],
  'Mars 6': [['📅', 'URSS, 1974.'], ['🌬️', 'Midió el aire de Marte mientras caía.'], ['📡', 'Se perdió el contacto al aterrizar.']],
  'Viking 1': [['📅', 'Estados Unidos, 1976.'], ['📷', 'Tomó las primeras fotos claras desde el suelo de Marte.'], ['🔬', 'Buscó vida en el suelo. Los resultados fueron dudosos.']],
  'Viking 2': [['📅', 'Estados Unidos, 1976.'], ['🔬', 'Buscó vida en otra zona de Marte.'], ['❄️', 'Fotografió escarcha en el suelo.']],
  'Mars Pathfinder y Sojourner': [['📅', 'Estados Unidos, 1997.'], ['🎈', 'Aterrizó rebotando, protegido por bolsas de aire.'], ['🚙', 'Llevó a Sojourner, el primer rover en Marte.']],
  'Mars Polar Lander y Deep Space 2': [['📅', 'Estados Unidos, 1999.'], ['🎯', 'Iba a estudiar el polo sur de Marte.'], ['📡', 'Se perdió al aterrizar y nunca envió datos.']],
  'Beagle 2': [['📅', 'Reino Unido, 2003.'], ['🎯', 'Iba a buscar rastros de vida.'], ['📷', 'No abrió todos sus paneles. Lo encontraron en fotos en 2015.']],
  'Schiaparelli': [['📅', 'Europa, 2016.'], ['🎯', 'Era una prueba para aprender a aterrizar en Marte.'], ['💥', 'Se estrelló, pero sus datos ayudaron a mejorar.']],
  'Spirit': [['📅', 'Estados Unidos, 2004.'], ['🚙', 'Rover gemelo de Opportunity.'], ['💧', 'Encontró señales de antiguas aguas termales.']],
  'Opportunity': [['📅', 'Estados Unidos, 2004 a 2018.'], ['📏', 'Recorrió más de 45 kilómetros.'], ['💧', 'Encontró pruebas de que hubo agua en Marte.']],
  'Phoenix': [['📅', 'Estados Unidos, 2008.'], ['🎯', 'Aterrizó cerca del polo norte de Marte.'], ['🧊', 'Encontró hielo de agua bajo el suelo.']],
  'InSight': [['📅', 'Estados Unidos, 2018 a 2022.'], ['〰️', 'Detectó más de 1.300 sismos en Marte.'], ['🔍', 'Así midió cómo es Marte por dentro.']],
  'Curiosity': [['📅', 'Estados Unidos, 2012. Sigue activo.'], ['🚙', 'Explora el cráter Gale.'], ['💧', 'Encontró un antiguo lago donde pudo haber vida.']],
  'Zhurong': [['📅', 'China, 2021.'], ['🚙', 'Fue el primer rover chino en Marte.'], ['💧', 'Encontró señales de agua en el pasado.']],
  'Perseverance e Ingenuity': [['📅', 'Estados Unidos, 2021.'], ['🚁', 'Ingenuity fue el primer helicóptero en volar en otro planeta.'], ['🧪', 'Perseverance guarda muestras de roca para traerlas algún día.']],
  'NEAR Shoemaker': [['📅', 'Estados Unidos, 2001.'], ['🪨', 'Fue la primera nave en aterrizar en un asteroide: Eros.'], ['🎯', 'Antes, lo estudió en órbita durante un año.']],
  'Dawn': [['📅', 'Estados Unidos, 2007 a 2018.'], ['⚡', 'Viajó con un motor de iones, muy suave pero muy eficiente.'], ['🪐', 'Visitó dos mundos: Vesta y Ceres.']],
  'Kepler': [['📅', 'Estados Unidos, 2009 a 2018.'], ['🔭', 'Fue un telescopio espacial.'], ['🌍', 'Encontró miles de planetas alrededor de otras estrellas.']],
  'Pioneer 10': [['📅', 'Estados Unidos, 1972.'], ['🪐', 'Fue la primera nave en cruzar el cinturón de asteroides y visitar Júpiter.'], ['🚀', 'Sigue viajando sin señal, más allá de todos los planetas.']]
};
