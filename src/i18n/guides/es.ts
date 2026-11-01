import type { GuideSet } from './types';

// Español — versión de referencia de todas las guías.
export const guidesEs: GuideSet = {
  ui: {
    home: 'Inicio',
    guidesLabel: 'Guía de Girona',
    relatedTitle: 'Apartamentos recomendados',
    upTo: 'Hasta',
    people: 'personas',
    viewApartment: 'Ver apartamento',
    contact: 'Escríbenos',
    zoneLink: 'Ver la guía de la zona',
    girona: 'Qué ver en Girona a pie desde el apartamento',
  },

  index: {
    metaTitle: 'Guía de Girona: qué ver, dónde aparcar y Temps de Flors',
    metaDescription: 'Guías prácticas para tu visita: qué ver a pie desde el Barri Vell de Girona, dónde aparcar, cómo llegar, Temps de Flors y la zona de Peratallada.',
    breadcrumb: 'Guía de Girona',
    eyebrow: 'Guías Aromatik',
    h1: 'Guía de Girona y el Empordà',
    lead: 'Lo que solemos explicar a nuestros huéspedes, ahora por escrito: qué ver, cómo llegar, dónde dejar el coche y qué hacer alrededor de nuestra casa de campo.',
    cards: {
      queVer: { title: 'Qué ver en Girona a pie', text: 'La Catedral, el Call, la muralla y las casas del Onyar, con una ruta de 1 y de 2 días saliendo de la Rambla de la Llibertat.' },
      aparcar: { title: 'Dónde aparcar y cómo llegar', text: 'El Barri Vell es peatonal: aparcamientos cercanos, qué hacer con las maletas y cómo llegar en tren o en avión.' },
      tempsDeFlors: { title: 'Temps de Flors', text: 'Qué es el festival de las flores de Girona, cómo visitarlo sin colas y por qué conviene reservar pronto.' },
      houseZona: { title: 'Peratallada y el Baix Empordà', text: 'Pueblos medievales, calas de la Costa Brava, rutas y gastronomía alrededor de Aromatik House.' },
    },
    readMore: 'Leer la guía',
  },

  houseZona: {
    metaTitle: 'Qué hacer cerca de Peratallada: guía del Baix Empordà',
    metaDescription: 'Pueblos medievales, calas de la Costa Brava, rutas a pie y en bici, gastronomía y planes con niños y perro cerca de Peratallada (Empordà).',
    breadcrumb: 'La zona',
    eyebrow: 'Aromatik House · Baix Empordà',
    h1: 'Qué hacer cerca de Aromatik House: Peratallada y el Baix Empordà',
    lead: 'El Baix Empordà es una de las comarcas más bonitas de Cataluña: pueblos de piedra entre campos de cultivo, calas de agua transparente y una cocina que mezcla mar y montaña. Esta es nuestra selección para sacar partido a tu estancia en [Aromatik House](/house), nuestra casa de campo con piscina privada junto a Peratallada.',
    sections: [
      {
        h2: 'Peratallada, el pueblo medieval de al lado',
        paragraphs: [
          'Peratallada es uno de los conjuntos medievales mejor conservados de Cataluña y está a unos 5 minutos en coche de la casa. Sus calles empedradas, las murallas, el castillo y el foso excavado en la roca —de ahí viene su nombre, «piedra tallada»— se recorren en una mañana tranquila.',
          'El pueblo es pequeño y en temporada alta se llena a media mañana. Si puedes, ve temprano o al atardecer, cuando la piedra se vuelve dorada y las terrazas se animan. Los coches se quedan fuera del núcleo antiguo, así que cuenta con un paseo corto desde el aparcamiento.',
        ],
      },
      {
        h2: 'Más pueblos medievales a pocos minutos',
        items: [
          { title: 'Ullastret', text: 'A 5 minutos. Un pueblo amurallado precioso y, a las afueras, el Poblado Ibérico de Ullastret, uno de los yacimientos íberos más importantes de Cataluña, con museo y restos de murallas sobre una antigua colina junto a lo que era un lago.' },
          { title: 'Pals', text: 'A 15 minutos. Su barrio gótico en lo alto de un cerro, con la Torre de les Hores y un mirador sobre los arrozales y las islas Medes, es uno de los paseos más fotogénicos del Empordà.' },
          { title: 'La Bisbal d’Empordà', text: 'A 15 minutos. La capital de la cerámica: tiendas y talleres de alfarería a lo largo de la calle principal y un castillo-palacio que fue residencia de los obispos de Girona.' },
          { title: 'Monells, Cruïlles y Vulpellac', text: 'Tres joyas pequeñas muy cerca unas de otras: la plaza porticada de Monells, la torre y el monasterio de Sant Miquel de Cruïlles y el castillo-palacio de Vulpellac. Perfectas para una tarde sin prisas.' },
          { title: 'Begur', text: 'A 25 minutos. Un pueblo en la colina coronado por las ruinas de su castillo, con vistas a toda la costa y las casas coloniales que levantaron los «indianos» que volvieron de América.' },
        ],
      },
      {
        h2: 'Calas y playas de la Costa Brava',
        paragraphs: [
          'La costa está a media hora y ofrece dos caras muy distintas: playas largas de arena al norte y calas rocosas entre pinos al sur de Begur.',
        ],
        items: [
          { title: 'Platja de Pals', text: 'A 25 minutos. Una playa larga y abierta, con dunas y pinar detrás. Hay espacio incluso en verano y es cómoda para ir con niños.' },
          { title: 'L’Estartit y las islas Medes', text: 'A 25 minutos. Las Medes son un espacio marino protegido y uno de los mejores lugares del Mediterráneo para hacer snorkel o submarinismo. Desde el puerto salen excursiones en barco para verlas.' },
          { title: 'Las calas de Begur', text: 'Aiguablava y Sa Riera (a 30 minutos), Sa Tuna, Aiguafreda o Fornells: calas pequeñas de agua turquesa entre rocas y pinos. Son las más bonitas y también las que antes se llenan.' },
          { title: 'Calella de Palafrugell, Llafranc y Tamariu', text: 'Calella está a 30 minutos. Pueblos de pescadores con casas blancas, barcas en la arena y los arcos del Port Bo. Ideales para un baño y una cena frente al mar.' },
        ],
      },
      {
        h2: 'Consejo para las calas en verano',
        paragraphs: [
          'En julio y agosto los aparcamientos de las calas son pequeños, suelen ser de pago y se llenan pronto. Lo mejor es llegar antes de las diez o a última hora de la tarde. En primavera y otoño el agua sigue siendo agradable y las tendrás casi para ti.',
        ],
      },
      {
        h2: 'Rutas a pie',
        items: [
          { title: 'El Camí de Ronda', text: 'El antiguo sendero de vigilancia que recorre la costa uniendo calas. El tramo entre Calella de Palafrugell y Llafranc es corto y fácil; el de las calas de Begur tiene más subidas y vistas espectaculares.' },
          { title: 'Entre campos, desde la casa', text: 'Los caminos agrícolas que rodean Peratallada y Ullastret son llanos y tranquilos, perfectos para caminar al atardecer entre olivos, girasoles o trigo según la época.' },
          { title: 'El Montgrí', text: 'El macizo que separa el Empordà del mar, con el castillo del Montgrí en lo alto sobre Torroella. La subida es exigente pero las vistas sobre toda la llanura compensan.' },
          { title: 'Les Gavarres', text: 'Las montañas boscosas entre el Empordà y Girona, con pistas forestales, ermitas y dólmenes para caminar a la sombra.' },
        ],
      },
      {
        h2: 'En bici por el Baix Empordà',
        paragraphs: [
          'Las carreteras secundarias que unen los pueblos son llanas, con poco tráfico y paisajes de postal: ideales para rodar en carretera, en gravel o con bicis de paseo. La red de vías verdes de las comarcas de Girona permite enlazar el interior con la costa por antiguos trazados de tren, sin coches.',
          'Si vienes a entrenar en serio, Girona —a 35 minutos— es una de las capitales mundiales del ciclismo. En nuestra página para [ciclistas](/ciclistas) tienes las rutas clásicas que salen desde allí.',
        ],
      },
      {
        h2: 'Gastronomía del Empordà',
        paragraphs: [
          'El Empordà presume de cocina propia. Prueba el arroz de Pals, cultivado en los arrozales que verás entre Pals y la costa; los platos de «mar i muntanya», que mezclan pescado o marisco con carne o setas; y los vinos de la DO Empordà, que se pueden conocer en muchas bodegas de la comarca.',
          'Los pueblos de la zona tienen mercados semanales y tiendas de productores donde llenar la nevera de la casa con aceite, embutidos, quesos y fruta de temporada. La cocina exterior y la barbacoa de gas de la casa están pensadas para aprovecharlo.',
        ],
      },
      {
        h2: 'Planes con niños',
        items: [
          { title: 'Jugar a ser íberos', text: 'El yacimiento de Ullastret es al aire libre y se recorre como una pequeña aventura entre murallas y casas de hace más de dos mil años.' },
          { title: 'Playa de arena', text: 'La Platja de Pals y las playas cercanas a L’Estartit tienen arena fina y mucho espacio para jugar.' },
          { title: 'Ver peces sin mojarse', text: 'Algunas excursiones a las islas Medes se hacen en barcos con fondo de cristal.' },
          { title: 'La piscina de casa', text: 'Tras una mañana de excursión, la piscina privada y el jardín de 6.500 m² son el mejor plan. Ojo: la piscina no tiene valla, así que vigila siempre a los más pequeños.' },
        ],
      },
      {
        h2: 'Con perro',
        paragraphs: [
          'La casa admite una mascota y el jardín es enorme. Los caminos entre campos son perfectos para paseos largos, y los pueblos medievales se visitan sin problema con el perro atado. En las playas las normas cambian según el municipio y la época del año —en verano muchas no permiten perros—, así que consulta la normativa local antes de ir.',
        ],
      },
      {
        h2: 'Cuándo venir',
        paragraphs: [
          'Primavera y otoño son las mejores épocas para descubrir los pueblos y caminar: temperaturas suaves y mucha menos gente. El verano es para las calas y la piscina. Y en invierno el Empordà es pura calma: pueblos tranquilos, chimenea encendida y días claros de tramontana.',
        ],
      },
    ],
    ctaTitle: 'Tu base en el Empordà',
    ctaText: 'Casa de campo para 5 personas con piscina privada todo el año, jardín de 6.500 m² y se admiten mascotas. Reserva directa, con cancelación gratuita hasta 30 días antes y sin fianza.',
    ctaButton: 'Ver disponibilidad',
  },

  queVer: {
    metaTitle: 'Qué ver en Girona a pie: ruta de 1 y 2 días, Barri Vell',
    metaDescription: 'Qué ver en Girona caminando desde la Rambla de la Llibertat: Catedral, Call, muralla, casas del Onyar y museos, con una ruta de 1 y de 2 días.',
    breadcrumb: 'Qué ver en Girona',
    eyebrow: 'Guía de Girona',
    h1: 'Qué ver en Girona a pie desde el Barri Vell',
    lead: 'Girona se recorre andando. Desde la Rambla de la Llibertat, donde están nuestros apartamentos, todo el Barri Vell queda a pocos minutos a pie: no necesitarás el coche en toda la estancia. Esta es la ruta que recomendamos a nuestros huéspedes, con un plan para 1 y para 2 días al final.',
    sections: [
      {
        h2: 'La Rambla de la Llibertat y las casas del Onyar',
        paragraphs: [
          'La Rambla es el paseo porticado que corre paralelo al río Onyar, con terrazas, librerías y comercios de toda la vida. Es el mejor punto de partida para cualquier paseo.',
          'La imagen más famosa de Girona son las casas de colores que se asoman al Onyar. Se ven mejor desde los puentes: el de Sant Agustí, el de Pedra y el de les Peixateries Velles, el puente rojo de hierro que se atribuye al taller de Gustave Eiffel. Al otro lado del río está la Plaça de la Independència, porticada y llena de restaurantes.',
        ],
      },
      {
        h2: 'La Catedral y su escalinata',
        paragraphs: [
          'La gran escalinata barroca que sube a la Catedral es uno de los rincones más fotografiados de la ciudad y salió en la sexta temporada de Juego de Tronos. Dentro sorprende su nave gótica, una de las más anchas del mundo. Vale la pena dedicarle tiempo al claustro románico y al museo del tesoro.',
        ],
      },
      {
        h2: 'El Call, el barrio judío',
        paragraphs: [
          'El Call de Girona es uno de los barrios judíos medievales mejor conservados de Europa: un laberinto de callejones estrechos, escaleras y patios alrededor de la calle de la Força. El Museo de Historia de los Judíos explica la vida de la comunidad que vivió aquí hasta finales del siglo XV.',
        ],
      },
      {
        h2: 'El Passeig de la Muralla',
        paragraphs: [
          'Puedes caminar por encima de la muralla medieval durante buena parte de su recorrido, subiendo a las torres para ver los tejados del Barri Vell, la Catedral y, en días claros, el Pirineo. Hay varios accesos, así que puedes hacer solo un tramo.',
        ],
      },
      {
        h2: 'Banys Àrabs, Sant Pere de Galligants y Sant Feliu',
        items: [
          { title: 'Banys Àrabs', text: 'Unos baños públicos medievales de estilo románico inspirados en los baños musulmanes, con una sala de columnas y cúpula muy fotogénica.' },
          { title: 'Sant Pere de Galligants', text: 'Antiguo monasterio románico con un claustro precioso, hoy sede del Museo de Arqueología de Cataluña en Girona.' },
          { title: 'Basílica de Sant Feliu', text: 'Una de las iglesias más importantes de la ciudad, reconocible por su campanario truncado.' },
          { title: 'El culo de la leona', text: 'Junto a Sant Feliu hay una columna con una leona de piedra. Dice la tradición que quien le da un beso volverá a Girona.' },
        ],
      },
      {
        h2: 'Museos para un día de lluvia',
        items: [
          { title: 'Museu del Cinema', text: 'Una colección única sobre los orígenes del cine: linternas mágicas, sombras chinescas y aparatos precinematográficos. Muy recomendable con niños.' },
          { title: 'Museu d’Art', text: 'En el antiguo palacio episcopal, junto a la Catedral, con arte románico y gótico de las comarcas de Girona.' },
          { title: 'Museu d’Història de Girona', text: 'Para entender la ciudad desde la época romana hasta hoy.' },
        ],
      },
      {
        h2: 'Un respiro verde: la Devesa y el valle de Sant Daniel',
        paragraphs: [
          'La Devesa es un gran parque urbano de plátanos altísimos junto al río Ter, a un paseo corto del centro. Y si te apetece salir al campo sin coger el coche, el valle de Sant Daniel empieza justo detrás del Barri Vell: un camino tranquilo entre huertas que lleva hasta el monasterio del mismo nombre.',
        ],
      },
      {
        h2: 'Ruta de 1 día',
        items: [
          { title: 'Mañana', text: 'Café en la Rambla de la Llibertat, cruza el puente de les Peixateries Velles para ver las casas del Onyar y sube por la calle de la Força a través del Call hasta la Catedral.' },
          { title: 'Mediodía', text: 'Visita la Catedral y baja por la escalinata hasta los Banys Àrabs y Sant Pere de Galligants. Comida en el Barri Vell.' },
          { title: 'Tarde', text: 'Sube al Passeig de la Muralla y recórrelo hacia el sur para ver la ciudad desde arriba. Baja hacia Sant Feliu y no olvides el beso a la leona.' },
          { title: 'Noche', text: 'Paseo por los puentes iluminados y cena en la Plaça de la Independència.' },
        ],
      },
      {
        h2: 'Ruta de 2 días',
        items: [
          { title: 'Día 1', text: 'La ruta anterior: Onyar, Call, Catedral, Banys Àrabs, muralla y Sant Feliu.' },
          { title: 'Día 2 · mañana', text: 'Museo de Historia de los Judíos y Museu d’Art, o el Museu del Cinema si vas con niños.' },
          { title: 'Día 2 · tarde', text: 'Paseo hasta la Devesa o caminata por el valle de Sant Daniel. A última hora, vermut en la Rambla.' },
        ],
      },
      {
        h2: 'Consejos prácticos',
        paragraphs: [
          'El Barri Vell está lleno de cuestas y escaleras: lleva calzado cómodo y, si vas con carrito, prepárate para cargarlo en algunos tramos. Los horarios de museos y monumentos cambian según la temporada, así que consúltalos antes de ir. Y si llegas en coche, lee nuestra guía sobre [dónde aparcar en Girona](/guia/aparcar-en-girona).',
        ],
      },
    ],
    ctaTitle: 'Duerme en el Barri Vell',
    ctaText: 'Nuestros 8 apartamentos están en la Rambla de la Llibertat, junto al Onyar: sales por la puerta y ya estás en la ruta. Reserva directa y sin comisiones.',
    ctaButton: 'Comprobar disponibilidad',
  },

  aparcar: {
    metaTitle: 'Dónde aparcar en Girona cerca del Barri Vell y cómo llegar',
    metaDescription: 'Dónde aparcar cerca del Barri Vell de Girona (gratis y de pago), qué hacer con las maletas y cómo llegar en coche, tren de alta velocidad o avión.',
    breadcrumb: 'Dónde aparcar en Girona',
    eyebrow: 'Guía de Girona',
    h1: 'Dónde aparcar en Girona y cómo llegar al Barri Vell',
    lead: 'La pregunta que más nos hacen antes de llegar. Resumen rápido: el Barri Vell y la Rambla de la Llibertat son zona peatonal, así que el coche se queda en un aparcamiento cercano y el resto lo harás a pie.',
    sections: [
      {
        h2: 'Lo primero: el casco antiguo es peatonal',
        paragraphs: [
          'El acceso de vehículos al Barri Vell está restringido y reservado a residentes y servicios autorizados. No te fíes ciegamente del GPS: algunos navegadores intentan llevarte por calles por las que no se puede circular. Pon como destino directamente el aparcamiento que hayas elegido.',
        ],
      },
      {
        h2: 'Llegar en coche',
        paragraphs: [
          'Girona está junto a la autopista AP-7, que la une con Barcelona y con Francia, y tiene salidas al norte y al sur de la ciudad. Desde cualquiera de ellas se llega al centro en pocos minutos siguiendo las indicaciones hacia el centro y, después, hacia el aparcamiento que hayas elegido.',
          'Si llegas de noche no hay problema: la entrada a nuestros apartamentos es autónoma, con código, así que puedes aparcar con calma y venir caminando a la hora que sea.',
        ],
      },
      {
        h2: 'Aparcamiento gratuito: La Copa',
        paragraphs: [
          'El aparcamiento de La Copa es gratuito y está a unos 10 minutos a pie de nuestros apartamentos. Es la opción más económica para estancias de varios días. Al ser gratuito es muy popular: en fines de semana, puentes y festivales como Temps de Flors puede estar lleno, así que conviene llegar con margen o tener una alternativa.',
        ],
      },
      {
        h2: 'Aparcamientos de pago cerca del centro',
        paragraphs: [
          'Alrededor del centro hay varios aparcamientos subterráneos de pago, entre ellos los de la cadena Saba, a pocos minutos a pie de la Rambla. Son la opción más cómoda si llegas con mucho equipaje, de noche o en días de mucha afluencia. Algunos ofrecen tarifas por día completo o bonos de varios días; compara precios antes de reservar.',
        ],
      },
      {
        h2: 'Aparcar en la calle',
        paragraphs: [
          'En los barrios que rodean el centro hay plazas en la calle, buena parte de ellas en zona regulada con tiempo limitado. Revisa siempre la señalización del tramo donde aparques. Para varios días es más práctico un aparcamiento.',
        ],
      },
      {
        h2: '¿Y las maletas?',
        paragraphs: [
          'Lo más práctico es aparcar y venir caminando con el equipaje, que en Girona son distancias cortas. Si vienes con mucha carga, con niños pequeños o con bicicletas, [escríbenos](/contacto) antes de llegar y te explicamos la mejor forma de acercarte según tu apartamento.',
          'Si vienes en bici, tranquilo: en nuestros apartamentos la bicicleta duerme dentro y los edificios tienen ascensor.',
        ],
      },
      {
        h2: 'Llegar sin coche: tren y alta velocidad',
        paragraphs: [
          'Girona tiene estación de tren con alta velocidad, que la conecta con Barcelona en poco tiempo y también con Francia. Además hay trenes regionales con Barcelona, Figueres y la costa. Desde la estación se llega al Barri Vell caminando en un paseo agradable o en taxi en pocos minutos.',
          'Viajar en tren es probablemente la forma más cómoda de llegar: te ahorras buscar aparcamiento y, una vez aquí, no necesitarás ningún transporte para moverte por la ciudad. Si luego quieres hacer alguna excursión a la costa, puedes alquilar un coche solo para ese día.',
        ],
      },
      {
        h2: 'En avión',
        items: [
          { title: 'Aeropuerto de Girona-Costa Brava', text: 'Está a las afueras, al sur de la ciudad. Hay autobuses hacia la ciudad y servicio de taxi.' },
          { title: 'Aeropuerto de Barcelona-El Prat', text: 'Con más vuelos y destinos. Desde allí puedes llegar a Girona en autobús directo o combinando con el tren de alta velocidad desde Barcelona.' },
        ],
      },
      {
        h2: 'Durante tu estancia, olvídate del coche',
        paragraphs: [
          'Una vez instalado, todo lo importante está a pie: el Call, la Catedral, la muralla, restaurantes y mercados. Si quieres ideas para llenar el día, lee [qué ver en Girona a pie](/guia/que-ver-en-girona).',
        ],
      },
      {
        h2: 'Preguntas frecuentes',
        items: [
          { title: '¿Los apartamentos tienen aparcamiento propio?', text: 'No. Están en la zona peatonal del Barri Vell, así que el coche se queda en uno de los aparcamientos de los alrededores.' },
          { title: '¿Puedo acercarme en coche hasta la puerta?', text: 'No es buena idea: el acceso está restringido y controlado. Aparca primero y ven caminando; si tienes una situación especial, escríbenos antes de llegar.' },
          { title: '¿Necesito el coche para visitar Girona?', text: 'No. Todo el casco antiguo se recorre a pie. El coche solo te hará falta para excursiones, por ejemplo a la Costa Brava o al Empordà.' },
          { title: '¿Y si me quedo varios días?', text: 'Para estancias largas compensa el aparcamiento gratuito de La Copa o una tarifa de varios días en un aparcamiento de pago. Compara precios antes de llegar.' },
          { title: '¿Dónde dejo la bicicleta?', text: 'Dentro del apartamento. Los edificios tienen ascensor, así que no tendrás que cargarla por la escalera ni dejarla en la calle.' },
          { title: '¿Y si llego en autocaravana o con remolque?', text: 'El centro no está pensado para vehículos grandes. Escríbenos antes de llegar y te orientamos sobre dónde dejarlo.' },
        ],
      },
    ],
    ctaTitle: 'Reserva tu apartamento en el centro',
    ctaText: 'Apartamentos en la Rambla de la Llibertat, con llegada autónoma: llegas cuando quieras y entras con tu código. Reserva directa y sin comisiones.',
    ctaButton: 'Comprobar disponibilidad',
  },

  tempsDeFlors: {
    metaTitle: 'Temps de Flors Girona: qué es, cómo visitarlo y dónde dormir',
    metaDescription: 'Qué es Temps de Flors, el festival de las flores de Girona: cómo visitarlo sin colas, consejos prácticos y por qué conviene alojarse en el Barri Vell.',
    breadcrumb: 'Temps de Flors',
    eyebrow: 'Guía de Girona',
    h1: 'Temps de Flors en Girona: guía para visitarlo',
    lead: 'Durante unos días de primavera, Girona se llena de flores. Temps de Flors es el gran festival de la ciudad: instalaciones florales en patios, monumentos, escaleras y calles del Barri Vell. Esto es lo que conviene saber para disfrutarlo.',
    sections: [
      {
        h2: 'Qué es Temps de Flors',
        paragraphs: [
          'Es una exposición de arte floral que se celebra cada año desde mediados del siglo XX y que ha crecido hasta convertirse en uno de los acontecimientos más visitados de Cataluña. Artistas, floristas, escuelas y vecinos decoran decenas de espacios del casco antiguo.',
          'Lo mejor es que permite entrar en patios, claustros y jardines que el resto del año están cerrados al público. La mayoría de espacios se pueden visitar libremente y sin entrada.',
        ],
      },
      {
        h2: 'Cuándo se celebra',
        paragraphs: [
          'Temps de Flors tiene lugar en primavera, normalmente en mayo, y dura alrededor de una semana. Las fechas cambian cada año, así que consulta la web oficial del Ayuntamiento de Girona antes de organizar el viaje.',
        ],
      },
      {
        h2: 'Cómo visitarlo',
        items: [
          { title: 'Hazte con el mapa', text: 'Los espacios están numerados y el plano oficial propone un recorrido. Elige primero los que más te interesan: verlos todos en un día es casi imposible.' },
          { title: 'Madruga o ve al anochecer', text: 'A media mañana y por la tarde, sobre todo el fin de semana, se forman colas en los puntos más populares, como la escalinata de la Catedral o los Banys Àrabs. A primera hora se ven con calma.' },
          { title: 'Entre semana, mejor', text: 'Si puedes elegir, los días laborables son mucho más tranquilos que el fin de semana.' },
          { title: 'Repite de noche', text: 'Algunos espacios se iluminan y el ambiente del Barri Vell al anochecer es muy distinto al del día.' },
        ],
      },
      {
        h2: 'Qué verás',
        paragraphs: [
          'Cada edición es distinta, pero hay rincones que suelen ser protagonistas: la escalinata de la Catedral cubierta de flores, los Banys Àrabs, los claustros y las iglesias del Barri Vell, los callejones del Call y los patios de casas particulares que solo se abren durante el festival. Muchas instalaciones juegan con la arquitectura del lugar, así que merece la pena fijarse en cómo cada artista ha interpretado el espacio.',
          'Además de las instalaciones, durante esos días suele haber actividades paralelas, como conciertos o propuestas gastronómicas. El programa cambia cada año: consúltalo en la web oficial.',
        ],
      },
      {
        h2: 'Por qué alojarse en el centro',
        paragraphs: [
          'Durante el festival el Barri Vell recibe muchísimos visitantes y aparcar se complica. Alojarte en el centro te permite ir a pie a todos los espacios, volver al apartamento a mediodía para descansar y salir de nuevo cuando se va la gente. Nuestros apartamentos están en la Rambla de la Llibertat, en plena zona del festival.',
          'Si aun así vienes en coche, lee nuestra guía sobre [dónde aparcar en Girona](/guia/aparcar-en-girona) y cuenta con que los aparcamientos se llenan antes de lo habitual.',
        ],
      },
      {
        h2: 'Reserva con mucha antelación',
        paragraphs: [
          'Es una de las semanas con más demanda del año en Girona. Los alojamientos del centro se reservan con meses de antelación, así que en cuanto conozcas las fechas, reserva. Haciéndolo directamente en nuestra web evitas comisiones de intermediarios.',
          'Si vienes en grupo o en familia, nuestros apartamentos más grandes, [Bergamota](/apartamentos/bergamota) y [Árbol de té](/apartamentos/arbol-de-te), son para hasta 6 personas: son los primeros que se reservan para estas fechas. Para parejas tenemos varios apartamentos con vistas al Onyar.',
        ],
      },
      {
        h2: 'Consejos prácticos',
        items: [
          { title: 'Calzado cómodo', text: 'Se camina mucho y hay escaleras y cuestas por todo el casco antiguo.' },
          { title: 'Con carrito o silla de ruedas', text: 'Algunos espacios tienen escaleras y en las horas punta hay mucha gente. Planifica el recorrido y ve en las horas tranquilas.' },
          { title: 'Respeta las instalaciones', text: 'Mira, fotografía y disfruta, pero no toques las flores: tienen que aguantar todo el festival.' },
          { title: 'Ligero de equipaje', text: 'Una mochila pequeña y agua son suficientes. En los espacios más estrechos agradecerás no llevar bolsas grandes.' },
          { title: 'Más allá de las flores', text: 'Aprovecha para descubrir el resto de la ciudad con nuestra guía de [qué ver en Girona](/guia/que-ver-en-girona).' },
        ],
      },
      {
        h2: 'Comer durante el festival',
        paragraphs: [
          'Los restaurantes del Barri Vell se llenan durante Temps de Flors, sobre todo a mediodía del fin de semana. Reserva mesa con antelación o come un poco antes o después de las horas punta. Un apartamento con cocina te da flexibilidad: puedes desayunar con calma antes de salir temprano o cenar en casa después de un día largo.',
        ],
      },
      {
        h2: 'La primavera en Girona y alrededores',
        paragraphs: [
          'Mayo es una época estupenda para quedarse unos días más. Los paseos por la muralla y por la Devesa son muy agradables con el buen tiempo, y a menos de una hora tienes los pueblos medievales del Empordà y las primeras calas de la temporada, todavía tranquilas. Si te apetece combinar ciudad y campo, mira nuestra guía de [Peratallada y el Baix Empordà](/house/zona).',
        ],
      },
    ],
    ctaTitle: 'Duerme en pleno Temps de Flors',
    ctaText: 'Apartamentos en la Rambla de la Llibertat, a pocos pasos de los espacios del festival. Reserva directa, sin comisiones.',
    ctaButton: 'Comprobar disponibilidad',
  },

  cycling: {
    eyebrow: 'Rutas desde la puerta',
    h2: 'Rutas en bici desde Girona',
    intro: 'Algunas de las salidas clásicas que hacen nuestros huéspedes ciclistas, todas saliendo del Barri Vell sin coger el coche.',
    routes: [
      { title: 'Els Àngels', text: 'La subida al santuario dels Àngels por la carretera de les Gavarres es el puerto de referencia para entrenar desde Girona: regular, con buen asfalto y vistas sobre la ciudad y el Empordà.' },
      { title: 'Rocacorba', text: 'El puerto mítico al norte de Banyoles. Largo y muy duro en su parte final, es el que usan los profesionales para medir su forma. Se llega por carreteras secundarias tranquilas.' },
      { title: 'El lago de Banyoles', text: 'Una salida llana hasta Banyoles con vuelta al lago: perfecta para rodar suave o para un día de recuperación.' },
      { title: 'Vía verde del Carrilet hacia Olot', text: 'Un antiguo trazado de tren convertido en vía verde que remonta suavemente hacia la Garrotxa. Ideal para gravel, bicis de paseo y familias.' },
      { title: 'Vía verde hacia Sant Feliu de Guíxols', text: 'La otra vía verde del Carrilet baja desde Girona hasta la Costa Brava atravesando el valle del Ter y las faldas de les Gavarres.' },
      { title: 'Costa Brava por les Gavarres', text: 'Cruza les Gavarres hacia la costa y vuelve por la carretera de curvas entre Sant Feliu de Guíxols y Tossa de Mar: una de las más bonitas del Mediterráneo para ir en bici.' },
    ],
    note: 'Las distancias y desniveles dependen de la variante que elijas: planifica la ruta con tu aplicación habitual y consulta el estado de las vías verdes antes de salir.',
  },
};
