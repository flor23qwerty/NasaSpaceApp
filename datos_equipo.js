/* ==========================================================================
   DATOS_EQUIPO.JS — Base de datos del equipo (Luna y Marte)
   --------------------------------------------------------------------------
   Datos extraídos del documento "DATA BASE NASA MOON MARS" del equipo
   (basado en NSSDCA y páginas de misión de NASA) y archivos multimedia de NASA
   guardados en la carpeta media/.

   FICHAS_EQUIPO: filas que se suman a la ficha de datos de cada máquina.
   MEDIA_EQUIPO:  imágenes, video y sonido propios de cada máquina.
     img:   [archivo, pie de foto]
     video: [archivo sin extensión (mp4 + webm), pie]
     audio: [archivo, título, transcripción (siempre visible, para quien no oye)]
   ========================================================================== */
window.FICHAS_EQUIPO = {
  'Surveyor 3': [
    ['Descubrimiento', 'El suelo podía sostener un módulo Apolo: era como arena húmeda.'],
    ['En números', 'Cavó 4 zanjas y envió 6.326 fotos.'],
    ['¿Sabías que?', 'Rebotó dos veces al aterrizar: unas rocas muy brillantes confundieron su radar.']],
  'Apolo 11': [
    ['En números', '21,55 kg de rocas y suelo. 21 h 36 min en la superficie.'],
    ['Instrumentos', 'EASEP: sismómetro pasivo, reflector láser y detector de polvo lunar.'],
    ['¿Sabías que?', 'El módulo lunar no tenía asientos: los astronautas iban de pie.']],
  'Apolo 12': [
    ['En números', '34,35 kg de muestras. Dos caminatas: 7 h 45 min y 1,35 km.'],
    ['Visita a Surveyor 3', 'Trajeron a la Tierra unos 10 kg de piezas de Surveyor 3.'],
    ['Energía del ALSEP', 'Un generador de plutonio-238 (RTG) de unos 70 W.'],
    ['¿Sabías que?', 'La cámara de TV se dañó cuando la apuntaron al Sol por accidente.']],
  'Apolo 15': [
    ['En números', 'Tres salidas (18 h 35 min), 27,9 km recorridos y 77,31 kg de muestras.'],
    ['Primera vez', 'Primer uso del vehículo lunar (LRV).'],
    ['Experimento famoso', 'David Scott soltó un martillo y una pluma: sin aire, cayeron igual de rápido.']],
  'Mars Pathfinder y Sojourner': [
    ['En números', 'Más de 16.500 fotos del módulo y 550 del rover.'],
    ['Descubrimiento', 'Guijarros redondeados por agua: Marte fue cálido y húmedo.'],
    ['¿Sabías que?', 'Rebotó unas 15 veces, hasta 15 m de alto. El módulo se llama Estación Memorial Carl Sagan.']],
  'Spirit': [
    ['Misión gemela', 'Spirit y Opportunity aterrizaron en lados opuestos de Marte.'],
    ['Descubrimiento', 'Junto con Opportunity, confirmó que hubo agua en Marte durante mucho tiempo.']],
  'Opportunity': [
    ['Récord', 'Sus 45,16 km fueron el récord de distancia recorrida fuera de la Tierra.'],
    ['Misión gemela', 'Spirit y Opportunity aterrizaron en lados opuestos de Marte.']],
  'Viking 1': [
    ['Instrumentos', 'Cámaras, laboratorio biológico, brazo para tomar muestras y estación del clima.'],
    ['Temperatura', 'De −86 °C antes del amanecer a −33 °C en la tarde.'],
    ['¿Sabías que?', 'Aterrizó a unos 28 km del punto planeado. En 1982 lo renombraron Estación Memorial Thomas Mutch.']],
  'InSight': [
    ['Brazo robótico', 'Medía 1,8 m: colocó el sismómetro y la sonda de calor sobre el suelo.'],
    ['Descubrimiento', 'El interior de Marte tiene "grumos" de roca de impactos muy antiguos.'],
    ['Sonido', 'Sus sensores captaron el viento de Marte el 1 de diciembre de 2018.']],
  'Perseverance e Ingenuity': [
    ['En números', '72 vuelos, 128,8 minutos en el aire, 17 km recorridos y hasta 24 m de altura.'],
    ['Energía', 'Un panel solar cargaba sus baterías: alcanzaba para un vuelo de 90 s por día marciano.']],
  'NEAR Shoemaker': [
    ['Descubrimiento', 'Eros no tiene campo magnético.'],
    ['En números', 'Unas 160.000 imágenes: 10 veces más datos de lo planeado.'],
    ['¿Sabías que?', 'Tocó Eros a unos 6,4 km/h y tomó 69 fotos durante la bajada.']],
  'Dawn': [
    ['Descubrimiento', 'Las manchas brillantes de Ceres son sales de un gran depósito de agua salada bajo la superficie.'],
    ['Además', 'Encontró material orgánico (moléculas con carbono) en Ceres.']],
  'Kepler': [
    ['Descubrimiento', 'Entre el 20 y el 50 % de las estrellas visibles podrían tener planetas pequeños en su zona habitable.'],
    ['¿Sabías que?', 'El tamaño de planeta más común, entre la Tierra y Neptuno, no existe en nuestro sistema solar.']],
  'Pioneer 10': [
    ['En números', 'Unas 500 fotos de Júpiter, con la Gran Mancha Roja.'],
    ['Velocidad', '51.682 km/h: más rápido que cualquier objeto humano anterior.'],
    ['Última señal', 'Viajó 12.230 millones de km: tardó 11 h 20 min en llegar a la Tierra.']]
};

window.MEDIA_EQUIPO = {
  'Apolo 11': {
    img: [['apolo11-eagle.jpg', 'El módulo lunar Eagle en el Mar de la Tranquilidad, con Buzz Aldrin.'],
          ['apolo11-tripulacion.jpg', 'La tripulación: Neil Armstrong, Michael Collins y Buzz Aldrin.'],
          ['modulo-lunar-esquema.png', 'Las partes del módulo lunar.']],
    audio: ['apolo11-pequeno-paso.mp3', 'Voz real de Neil Armstrong al pisar la Luna (julio de 1969)',
            '«That\'s one small step for man, one giant leap for mankind.» — «Es un pequeño paso para el hombre, un gran salto para la humanidad.»']
  },
  'Apolo 12': {
    img: [['apolo12-intrepid.jpg', 'El módulo lunar Intrepid sobre la Luna.'],
          ['apolo12-alan-bean.jpg', 'El astronauta Alan Bean baja a la superficie lunar.'],
          ['modulo-lunar-esquema.png', 'Las partes del módulo lunar.']]
  },
  'Apolo 15': {
    img: [['apolo15-lrv.jpg', 'El vehículo lunar (LRV), el primer "auto" en la Luna.'],
          ['apolo15-tripulacion.jpg', 'La tripulación del Apolo 15 con un vehículo lunar de entrenamiento.']]
  },
  'Surveyor 3': {
    img: [['surveyor3.jpg', 'Surveyor 3 en la Luna.'],
          ['surveyor3-conrad-3d.jpg', 'Pete Conrad (Apolo 12) visita a Surveyor 3 en 1969. Imagen 3D: se ve con lentes rojo y azul.']]
  },
  'Mars Pathfinder y Sojourner': {
    img: [['pathfinder.jpg', 'Sojourner junto al módulo Pathfinder y sus bolsas de aire, en Ares Vallis.']],
    video: ['sojourner', 'Sojourner en Marte (secuencia de imágenes).']
  },
  'Spirit': { img: [['mer-rover.jpg', 'Spirit y Opportunity eran gemelos: así eran.'], ['mer-instrumentos.jpg', 'Las cámaras, antenas e instrumentos de los rovers gemelos.']] },
  'Opportunity': { img: [['mer-rover.jpg', 'Spirit y Opportunity eran gemelos: así eran.'], ['mer-instrumentos.jpg', 'Las cámaras, antenas e instrumentos de los rovers gemelos.']] },
  'Viking 1': {
    img: [['viking-modelo.jpg', 'Modelo del módulo de aterrizaje Viking.'],
          ['viking-esquema.png', 'Las partes del módulo de aterrizaje Viking.']]
  },
  'InSight': {
    img: [['insight-icc.jpg', 'Foto real tomada por InSight: el sismómetro, bajo su cúpula, sobre Marte.'],
          ['insight-partes.jpg', 'Ilustración de InSight y sus partes.']],
    audio: ['insight-viento-marte.mp3', 'Viento de Marte captado por InSight (1 de diciembre de 2018)',
            'Ruido grave y suave del viento marciano, de unos 5 a 7 m/s. Los sensores registraron las vibraciones y la NASA las convirtió en un sonido que podemos oír.']
  },
  'Perseverance e Ingenuity': {
    img: [['ingenuity-marte.jpg', 'Ingenuity en Marte, fotografiado por el rover Perseverance.'],
          ['ingenuity-partes.jpg', 'Las partes de Ingenuity: hélices, paneles solares, baterías y cámaras.']]
  },
  'NEAR Shoemaker': { img: [['near-eros.jpg', 'Ilustración de NEAR Shoemaker junto al asteroide Eros.']] },
  'Dawn': { img: [['dawn.jpg', 'Ilustración de Dawn y el brillo azul de su motor de iones.']] },
  'Kepler': { img: [['kepler-modelo.jpg', 'Modelo del telescopio espacial Kepler.']] },
  'Pioneer 10': { img: [['pioneer10.jpg', 'Ilustración de Pioneer 10 cerca de Júpiter.']] }
};
