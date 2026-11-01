import type { GuideSet } from './types';

// Français — traduit depuis es.ts (version de référence).
export const guidesFr: GuideSet = {
  ui: {
    home: 'Accueil',
    guidesLabel: 'Guide de Girona',
    relatedTitle: 'Appartements recommandés',
    upTo: 'Jusqu’à',
    people: 'personnes',
    viewApartment: 'Voir l’appartement',
    contact: 'Écrivez-nous',
    zoneLink: 'Voir le guide de la région',
    girona: 'Que voir à Girona à pied depuis l’appartement',
  },

  index: {
    metaTitle: 'Guide de Girona : que voir, où se garer, Temps de Flors',
    metaDescription: 'Guides pratiques pour visiter Gérone : que voir à pied dans le Barri Vell, où se garer, comment venir, Temps de Flors et la région de Peratallada.',
    breadcrumb: 'Guide de Girona',
    eyebrow: 'Guides Aromatik',
    h1: 'Guide de Girona et de l’Empordà',
    lead: 'Ce que nous expliquons habituellement à nos hôtes, désormais par écrit : que voir, comment venir, où laisser la voiture et que faire autour de notre maison de campagne.',
    cards: {
      queVer: { title: 'Que voir à Girona à pied', text: 'La cathédrale, le Call, les remparts et les maisons de l’Onyar, avec un itinéraire de 1 jour et de 2 jours au départ de la Rambla de la Llibertat.' },
      aparcar: { title: 'Où se garer et comment venir', text: 'Le Barri Vell est piéton : parkings à proximité, que faire des valises et comment venir en train ou en avion.' },
      tempsDeFlors: { title: 'Temps de Flors', text: 'Ce qu’est le festival des fleurs de Girona, comment le visiter sans faire la queue et pourquoi il vaut mieux réserver tôt.' },
      houseZona: { title: 'Peratallada et le Baix Empordà', text: 'Villages médiévaux, criques de la Costa Brava, balades et gastronomie autour d’Aromatik House.' },
    },
    readMore: 'Lire le guide',
  },

  houseZona: {
    metaTitle: 'Que faire près de Peratallada : guide du Baix Empordà',
    metaDescription: 'Villages médiévaux, criques de la Costa Brava, balades à pied et à vélo, gastronomie et sorties avec enfants ou chien près de Peratallada (Empordà).',
    breadcrumb: 'La région',
    eyebrow: 'Aromatik House · Baix Empordà',
    h1: 'Que faire près d’Aromatik House : Peratallada et le Baix Empordà',
    lead: 'Le Baix Empordà est l’une des plus belles régions de Catalogne : des villages de pierre au milieu des champs, des criques aux eaux transparentes et une cuisine qui marie la mer et la montagne. Voici notre sélection pour profiter au mieux de votre séjour à [Aromatik House](/house), notre maison de campagne avec piscine privée près de Peratallada.',
    sections: [
      {
        h2: 'Peratallada, le village médiéval voisin',
        paragraphs: [
          'Peratallada est l’un des ensembles médiévaux les mieux conservés de Catalogne, à environ 5 minutes en voiture de la maison. Ses ruelles pavées, ses remparts, son château et ses douves creusées dans la roche — d’où son nom, « pierre taillée » — se découvrent en une matinée tranquille.',
          'Le village est petit et, en haute saison, il se remplit dès le milieu de la matinée. Si vous le pouvez, allez-y tôt ou en fin de journée, quand la pierre prend une teinte dorée et que les terrasses s’animent. Les voitures restent à l’extérieur du centre historique : prévoyez une courte marche depuis le parking.',
        ],
      },
      {
        h2: 'D’autres villages médiévaux à quelques minutes',
        items: [
          { title: 'Ullastret', text: 'À 5 minutes. Un superbe village fortifié et, juste à côté, le site ibère d’Ullastret, l’un des plus importants gisements ibères de Catalogne, avec un musée et des vestiges de remparts sur une ancienne colline qui bordait autrefois un lac.' },
          { title: 'Pals', text: 'À 15 minutes. Son quartier gothique perché sur une butte, avec la Torre de les Hores et un belvédère sur les rizières et les îles Medes, offre l’une des promenades les plus photogéniques de l’Empordà.' },
          { title: 'La Bisbal d’Empordà', text: 'À 15 minutes. La capitale de la céramique : boutiques et ateliers de potiers tout le long de la rue principale, et un château-palais qui fut la résidence des évêques de Girona.' },
          { title: 'Monells, Cruïlles et Vulpellac', text: 'Trois petits joyaux tout proches les uns des autres : la place à arcades de Monells, la tour et le monastère de Sant Miquel de Cruïlles, et le château-palais de Vulpellac. Parfaits pour un après-midi sans se presser.' },
          { title: 'Begur', text: 'À 25 minutes. Un village perché sur une colline et couronné par les ruines de son château, avec une vue sur toute la côte et les maisons coloniales bâties par les « indianos » revenus d’Amérique.' },
        ],
      },
      {
        h2: 'Criques et plages de la Costa Brava',
        paragraphs: [
          'La côte est à une demi-heure et présente deux visages bien différents : de longues plages de sable au nord et des criques rocheuses entre les pins au sud de Begur.',
        ],
        items: [
          { title: 'Platja de Pals', text: 'À 25 minutes. Une longue plage ouverte, bordée de dunes et d’une pinède. On y trouve de la place même en été, et elle est pratique avec des enfants.' },
          { title: 'L’Estartit et les îles Medes', text: 'À 25 minutes. Les Medes sont une réserve marine protégée et l’un des meilleurs spots de Méditerranée pour le snorkeling ou la plongée. Des excursions en bateau partent du port pour les découvrir.' },
          { title: 'Les criques de Begur', text: 'Aiguablava et Sa Riera (à 30 minutes), Sa Tuna, Aiguafreda ou Fornells : de petites criques aux eaux turquoise entre rochers et pins. Ce sont les plus belles, et aussi celles qui se remplissent le plus vite.' },
          { title: 'Calella de Palafrugell, Llafranc et Tamariu', text: 'Calella est à 30 minutes. Des villages de pêcheurs aux maisons blanches, avec des barques sur le sable et les arcades du Port Bo. Idéal pour une baignade et un dîner face à la mer.' },
        ],
      },
      {
        h2: 'Notre conseil pour les criques en été',
        paragraphs: [
          'En juillet et en août, les parkings des criques sont petits, souvent payants, et se remplissent vite. Le mieux est d’arriver avant dix heures ou en fin d’après-midi. Au printemps et en automne, l’eau reste agréable et vous les aurez presque pour vous seuls.',
        ],
      },
      {
        h2: 'Randonnées à pied',
        items: [
          { title: 'Le Camí de Ronda', text: 'L’ancien sentier de surveillance qui longe la côte de crique en crique. Le tronçon entre Calella de Palafrugell et Llafranc est court et facile ; celui des criques de Begur compte plus de montées et offre des vues spectaculaires.' },
          { title: 'À travers champs, depuis la maison', text: 'Les chemins agricoles autour de Peratallada et d’Ullastret sont plats et paisibles, parfaits pour marcher en fin de journée entre oliviers, tournesols ou blé selon la saison.' },
          { title: 'Le Montgrí', text: 'Le massif qui sépare l’Empordà de la mer, avec le château du Montgrí tout en haut, au-dessus de Torroella. La montée est exigeante, mais la vue sur toute la plaine en vaut la peine.' },
          { title: 'Les Gavarres', text: 'Les montagnes boisées entre l’Empordà et Girona, avec des pistes forestières, des ermitages et des dolmens pour marcher à l’ombre.' },
        ],
      },
      {
        h2: 'À vélo dans le Baix Empordà',
        paragraphs: [
          'Les petites routes qui relient les villages sont plates, peu fréquentées et offrent des paysages de carte postale : idéales pour rouler sur route, en gravel ou à vélo de balade. Le réseau de voies vertes des comarques de Girona permet de relier l’intérieur des terres à la côte par d’anciennes voies ferrées, sans voitures.',
          'Si vous venez pour vous entraîner sérieusement, Girona — à 35 minutes — est l’une des capitales mondiales du cyclisme. Sur notre page pour les [cyclistes](/ciclistas), vous trouverez les parcours classiques qui en partent.',
        ],
      },
      {
        h2: 'La gastronomie de l’Empordà',
        paragraphs: [
          'L’Empordà est fier de sa cuisine. Goûtez le riz de Pals, cultivé dans les rizières que vous verrez entre Pals et la côte ; les plats « mar i muntanya », qui associent poisson ou fruits de mer avec viande ou champignons ; et les vins de la DO Empordà, à découvrir dans de nombreuses caves de la région.',
          'Les villages alentour ont leurs marchés hebdomadaires et leurs boutiques de producteurs pour remplir le réfrigérateur de la maison d’huile d’olive, de charcuterie, de fromages et de fruits de saison. La cuisine extérieure et le barbecue au gaz de la maison sont faits pour en profiter.',
        ],
      },
      {
        h2: 'Idées avec des enfants',
        items: [
          { title: 'Jouer aux Ibères', text: 'Le site d’Ullastret est en plein air et se parcourt comme une petite aventure entre remparts et maisons vieilles de plus de deux mille ans.' },
          { title: 'Plage de sable', text: 'La Platja de Pals et les plages proches de L’Estartit ont du sable fin et beaucoup d’espace pour jouer.' },
          { title: 'Voir des poissons sans se mouiller', text: 'Certaines excursions vers les îles Medes se font en bateau à fond de verre.' },
          { title: 'La piscine de la maison', text: 'Après une matinée d’excursion, la piscine privée et le jardin de 6 500 m² sont le meilleur des programmes. Attention : la piscine n’est pas clôturée, gardez toujours un œil sur les plus petits.' },
        ],
      },
      {
        h2: 'Avec un chien',
        paragraphs: [
          'La maison accepte un animal et le jardin est immense. Les chemins à travers champs sont parfaits pour de longues promenades, et les villages médiévaux se visitent sans problème avec le chien en laisse. Sur les plages, les règles varient selon la commune et la saison — en été, beaucoup n’acceptent pas les chiens —, renseignez-vous donc sur la réglementation locale avant d’y aller.',
        ],
      },
      {
        h2: 'Quand venir',
        paragraphs: [
          'Le printemps et l’automne sont les meilleures saisons pour découvrir les villages et marcher : températures douces et beaucoup moins de monde. L’été, c’est le temps des criques et de la piscine. Et en hiver, l’Empordà n’est que calme : villages tranquilles, feu de cheminée et journées lumineuses de tramontane.',
        ],
      },
    ],
    ctaTitle: 'Votre point de chute dans l’Empordà',
    ctaText: 'Maison de campagne pour 5 personnes avec piscine privée toute l’année, jardin de 6 500 m² et animaux acceptés. Réservation directe, annulation gratuite jusqu’à 30 jours avant l’arrivée et sans caution.',
    ctaButton: 'Voir les disponibilités',
  },

  queVer: {
    metaTitle: 'Que voir à Girona à pied : itinéraire de 1 et 2 jours',
    metaDescription: 'Que voir à Gérone à pied depuis la Rambla de la Llibertat : cathédrale, Call, remparts, maisons de l’Onyar et musées, avec un itinéraire de 1 et 2 jours.',
    breadcrumb: 'Que voir à Girona',
    eyebrow: 'Guide de Girona',
    h1: 'Que voir à Girona à pied depuis le Barri Vell',
    lead: 'Girona se découvre à pied. Depuis la Rambla de la Llibertat, où se trouvent nos appartements, tout le Barri Vell est à quelques minutes de marche : vous n’aurez pas besoin de la voiture de tout le séjour. Voici l’itinéraire que nous recommandons à nos hôtes, avec un programme pour 1 et pour 2 jours à la fin.',
    sections: [
      {
        h2: 'La Rambla de la Llibertat et les maisons de l’Onyar',
        paragraphs: [
          'La Rambla est la promenade à arcades qui longe l’Onyar, bordée de terrasses, de librairies et de commerces de toujours. C’est le meilleur point de départ pour n’importe quelle balade.',
          'L’image la plus célèbre de Girona, ce sont les maisons colorées qui surplombent l’Onyar. On les voit le mieux depuis les ponts : celui de Sant Agustí, celui de Pedra et celui de les Peixateries Velles, le pont rouge en fer attribué aux ateliers de Gustave Eiffel. De l’autre côté de la rivière se trouve la Plaça de la Independència, entourée d’arcades et remplie de restaurants.',
        ],
      },
      {
        h2: 'La cathédrale et son grand escalier',
        paragraphs: [
          'Le grand escalier baroque qui monte à la cathédrale est l’un des lieux les plus photographiés de la ville ; il apparaît dans la sixième saison de Game of Thrones. À l’intérieur, sa nef gothique surprend : c’est l’une des plus larges du monde. Prenez le temps de visiter le cloître roman et le musée du trésor.',
        ],
      },
      {
        h2: 'Le Call, le quartier juif',
        paragraphs: [
          'Le Call de Girona est l’un des quartiers juifs médiévaux les mieux conservés d’Europe : un labyrinthe de ruelles étroites, d’escaliers et de cours autour de la rue de la Força. Le Musée d’histoire des Juifs retrace la vie de la communauté qui a vécu ici jusqu’à la fin du XVe siècle.',
        ],
      },
      {
        h2: 'Le Passeig de la Muralla',
        paragraphs: [
          'Vous pouvez marcher sur le rempart médiéval sur une bonne partie de son tracé et monter dans les tours pour admirer les toits du Barri Vell, la cathédrale et, par temps clair, les Pyrénées. Il y a plusieurs accès, vous pouvez donc n’en parcourir qu’une partie.',
        ],
      },
      {
        h2: 'Banys Àrabs, Sant Pere de Galligants et Sant Feliu',
        items: [
          { title: 'Banys Àrabs', text: 'Des bains publics médiévaux de style roman inspirés des bains musulmans, avec une salle à colonnes et à coupole très photogénique.' },
          { title: 'Sant Pere de Galligants', text: 'Un ancien monastère roman doté d’un superbe cloître, qui abrite aujourd’hui le Musée d’archéologie de Catalogne à Girona.' },
          { title: 'Basilique de Sant Feliu', text: 'L’une des églises les plus importantes de la ville, reconnaissable à son clocher tronqué.' },
          { title: 'Le derrière de la lionne', text: 'À côté de Sant Feliu se dresse une colonne surmontée d’une lionne en pierre. Selon la tradition, qui lui donne un baiser reviendra à Girona.' },
        ],
      },
      {
        h2: 'Des musées pour un jour de pluie',
        items: [
          { title: 'Museu del Cinema', text: 'Une collection unique sur les origines du cinéma : lanternes magiques, ombres chinoises et appareils précinématographiques. Vivement recommandé avec des enfants.' },
          { title: 'Museu d’Art', text: 'Dans l’ancien palais épiscopal, à côté de la cathédrale, avec de l’art roman et gothique des comarques de Girona.' },
          { title: 'Museu d’Història de Girona', text: 'Pour comprendre la ville, de l’époque romaine à nos jours.' },
        ],
      },
      {
        h2: 'Une bouffée de verdure : la Devesa et la vallée de Sant Daniel',
        paragraphs: [
          'La Devesa est un grand parc urbain planté de platanes immenses, au bord du Ter, à une courte promenade du centre. Et si l’envie vous prend de partir dans la nature sans prendre la voiture, la vallée de Sant Daniel commence juste derrière le Barri Vell : un chemin paisible entre les potagers qui mène jusqu’au monastère du même nom.',
        ],
      },
      {
        h2: 'Itinéraire d’une journée',
        items: [
          { title: 'Matin', text: 'Café sur la Rambla de la Llibertat, traversée du pont de les Peixateries Velles pour voir les maisons de l’Onyar, puis montée par la rue de la Força à travers le Call jusqu’à la cathédrale.' },
          { title: 'Midi', text: 'Visitez la cathédrale et descendez le grand escalier jusqu’aux Banys Àrabs et à Sant Pere de Galligants. Déjeuner dans le Barri Vell.' },
          { title: 'Après-midi', text: 'Montez sur le Passeig de la Muralla et parcourez-le vers le sud pour voir la ville d’en haut. Redescendez vers Sant Feliu sans oublier le baiser à la lionne.' },
          { title: 'Soir', text: 'Promenade sur les ponts illuminés et dîner sur la Plaça de la Independència.' },
        ],
      },
      {
        h2: 'Itinéraire de 2 jours',
        items: [
          { title: 'Jour 1', text: 'L’itinéraire ci-dessus : Onyar, Call, cathédrale, Banys Àrabs, remparts et Sant Feliu.' },
          { title: 'Jour 2 · matin', text: 'Musée d’histoire des Juifs et Museu d’Art, ou le Museu del Cinema si vous êtes avec des enfants.' },
          { title: 'Jour 2 · après-midi', text: 'Balade jusqu’à la Devesa ou randonnée dans la vallée de Sant Daniel. En fin de journée, vermouth sur la Rambla.' },
        ],
      },
      {
        h2: 'Conseils pratiques',
        paragraphs: [
          'Le Barri Vell est plein de pentes et d’escaliers : prévoyez des chaussures confortables et, si vous avez une poussette, attendez-vous à la porter sur certains passages. Les horaires des musées et des monuments varient selon la saison, vérifiez-les avant d’y aller. Et si vous arrivez en voiture, lisez notre guide [où se garer à Girona](/guia/aparcar-en-girona).',
        ],
      },
    ],
    ctaTitle: 'Dormez dans le Barri Vell',
    ctaText: 'Nos 8 appartements se trouvent sur la Rambla de la Llibertat, au bord de l’Onyar : vous passez la porte et vous êtes déjà sur l’itinéraire. Réservation directe, sans commission.',
    ctaButton: 'Vérifier les disponibilités',
  },

  aparcar: {
    metaTitle: 'Où se garer à Girona près du Barri Vell et comment venir',
    metaDescription: 'Où se garer près du Barri Vell de Girona (gratuit ou payant), que faire des valises et comment venir en voiture, en train à grande vitesse ou en avion.',
    breadcrumb: 'Où se garer à Girona',
    eyebrow: 'Guide de Girona',
    h1: 'Où se garer à Girona et comment rejoindre le Barri Vell',
    lead: 'C’est la question qu’on nous pose le plus avant l’arrivée. En bref : le Barri Vell et la Rambla de la Llibertat sont piétons, la voiture reste donc dans un parking à proximité et vous ferez le reste à pied.',
    sections: [
      {
        h2: 'D’abord : le centre historique est piéton',
        paragraphs: [
          'L’accès des véhicules au Barri Vell est restreint et réservé aux résidents et aux services autorisés. Ne vous fiez pas aveuglément au GPS : certaines applications de navigation essaient de vous faire passer par des rues interdites à la circulation. Indiquez directement comme destination le parking que vous avez choisi.',
        ],
      },
      {
        h2: 'Venir en voiture',
        paragraphs: [
          'Girona est desservie par l’autoroute AP-7, qui la relie à Barcelone et à la France, avec des sorties au nord et au sud de la ville. Depuis l’une ou l’autre, on rejoint le centre en quelques minutes en suivant les panneaux « centre », puis ceux du parking que vous avez choisi.',
          'Si vous arrivez de nuit, aucun problème : l’entrée de nos appartements est autonome, avec un code, vous pouvez donc vous garer tranquillement et venir à pied à n’importe quelle heure.',
        ],
      },
      {
        h2: 'Parking gratuit : La Copa',
        paragraphs: [
          'Le parking de La Copa est gratuit et se trouve à environ 10 minutes à pied de nos appartements. C’est l’option la plus économique pour un séjour de plusieurs jours. Comme il est gratuit, il est très prisé : le week-end, pendant les ponts et lors de festivals comme Temps de Flors, il peut être complet. Mieux vaut donc arriver avec de la marge ou prévoir une solution de repli.',
        ],
      },
      {
        h2: 'Parkings payants près du centre',
        paragraphs: [
          'Autour du centre, il y a plusieurs parkings souterrains payants, dont ceux de la chaîne Saba, à quelques minutes à pied de la Rambla. C’est l’option la plus pratique si vous arrivez avec beaucoup de bagages, de nuit ou les jours d’affluence. Certains proposent des tarifs à la journée ou des forfaits de plusieurs jours ; comparez les prix avant de réserver.',
        ],
      },
      {
        h2: 'Se garer dans la rue',
        paragraphs: [
          'Dans les quartiers qui entourent le centre, il y a des places dans la rue, dont une bonne partie en zone réglementée à durée limitée. Vérifiez toujours la signalisation à l’endroit où vous vous garez. Pour plusieurs jours, un parking est plus pratique.',
        ],
      },
      {
        h2: 'Et les valises ?',
        paragraphs: [
          'Le plus simple est de vous garer et de venir à pied avec vos bagages : à Girona, les distances sont courtes. Si vous êtes très chargés, avec de jeunes enfants ou des vélos, [écrivez-nous](/contacto) avant votre arrivée et nous vous expliquerons la meilleure façon d’approcher selon votre appartement.',
          'Si vous venez à vélo, pas d’inquiétude : dans nos appartements, le vélo dort à l’intérieur et les immeubles ont un ascenseur.',
        ],
      },
      {
        h2: 'Venir sans voiture : train et grande vitesse',
        paragraphs: [
          'Girona dispose d’une gare desservie par la grande vitesse, qui la relie rapidement à Barcelone ainsi qu’à la France. Il y a aussi des trains régionaux vers Barcelone, Figueres et la côte. Depuis la gare, on rejoint le Barri Vell par une agréable promenade à pied ou en quelques minutes de taxi.',
          'Le train est sans doute le moyen le plus confortable de venir : pas de place de parking à chercher et, une fois sur place, vous n’aurez besoin d’aucun transport pour vous déplacer en ville. Si vous voulez ensuite faire une excursion sur la côte, vous pouvez louer une voiture pour la journée seulement.',
        ],
      },
      {
        h2: 'En avion',
        items: [
          { title: 'Aéroport de Girona-Costa Brava', text: 'Il se trouve en périphérie, au sud de la ville. Des bus desservent la ville et il y a un service de taxis.' },
          { title: 'Aéroport de Barcelone-El Prat', text: 'Plus de vols et de destinations. De là, vous pouvez rejoindre Girona en bus direct ou en prenant le train à grande vitesse depuis Barcelone.' },
        ],
      },
      {
        h2: 'Pendant votre séjour, oubliez la voiture',
        paragraphs: [
          'Une fois installé, tout l’essentiel est accessible à pied : le Call, la cathédrale, les remparts, les restaurants et les marchés. Pour des idées de visites, lisez [que voir à Girona à pied](/guia/que-ver-en-girona).',
        ],
      },
      {
        h2: 'Questions fréquentes',
        items: [
          { title: 'Les appartements ont-ils un parking privé ?', text: 'Non. Ils se trouvent dans la zone piétonne du Barri Vell : la voiture reste donc dans l’un des parkings des environs.' },
          { title: 'Puis-je aller en voiture jusqu’à la porte ?', text: 'Ce n’est pas une bonne idée : l’accès est restreint et contrôlé. Garez-vous d’abord et venez à pied ; si vous avez une situation particulière, écrivez-nous avant votre arrivée.' },
          { title: 'Ai-je besoin d’une voiture pour visiter Girona ?', text: 'Non. Tout le centre historique se découvre à pied. La voiture ne vous servira que pour les excursions, par exemple sur la Costa Brava ou dans l’Empordà.' },
          { title: 'Et si je reste plusieurs jours ?', text: 'Pour un long séjour, le parking gratuit de La Copa ou un forfait de plusieurs jours dans un parking payant sont intéressants. Comparez les prix avant d’arriver.' },
          { title: 'Où laisser mon vélo ?', text: 'Dans l’appartement. Les immeubles ont un ascenseur : vous n’aurez ni à le porter dans l’escalier ni à le laisser dans la rue.' },
          { title: 'Et si j’arrive en camping-car ou avec une remorque ?', text: 'Le centre n’est pas adapté aux grands véhicules. Écrivez-nous avant votre arrivée et nous vous indiquerons où le laisser.' },
        ],
      },
    ],
    ctaTitle: 'Réservez votre appartement en plein centre',
    ctaText: 'Appartements sur la Rambla de la Llibertat, avec arrivée autonome : vous arrivez quand vous voulez et entrez avec votre code. Réservation directe, sans commission.',
    ctaButton: 'Vérifier les disponibilités',
  },

  tempsDeFlors: {
    metaTitle: 'Temps de Flors Girona : le festival, la visite, où dormir',
    metaDescription: 'Temps de Flors, le festival des fleurs de Girona : comment le visiter sans faire la queue, conseils pratiques et pourquoi loger dans le Barri Vell.',
    breadcrumb: 'Temps de Flors',
    eyebrow: 'Guide de Girona',
    h1: 'Temps de Flors à Girona : guide pour le visiter',
    lead: 'Pendant quelques jours au printemps, Girona se couvre de fleurs. Temps de Flors est le grand festival de la ville : des installations florales dans les cours, les monuments, les escaliers et les rues du Barri Vell. Voici ce qu’il faut savoir pour en profiter.',
    sections: [
      {
        h2: 'Qu’est-ce que Temps de Flors ?',
        paragraphs: [
          'C’est une exposition d’art floral organisée chaque année depuis le milieu du XXe siècle, devenue l’un des événements les plus visités de Catalogne. Artistes, fleuristes, écoles et habitants décorent des dizaines de lieux du centre historique.',
          'Le meilleur, c’est qu’elle permet d’entrer dans des cours, des cloîtres et des jardins fermés au public le reste de l’année. La plupart des lieux se visitent librement et sans billet.',
        ],
      },
      {
        h2: 'Quand a-t-il lieu ?',
        paragraphs: [
          'Temps de Flors se déroule au printemps, généralement en mai, et dure environ une semaine. Les dates changent chaque année : consultez le site officiel de la mairie de Girona avant d’organiser votre voyage.',
        ],
      },
      {
        h2: 'Comment le visiter',
        items: [
          { title: 'Procurez-vous le plan', text: 'Les lieux sont numérotés et le plan officiel propose un parcours. Choisissez d’abord ceux qui vous intéressent le plus : tout voir en une journée est presque impossible.' },
          { title: 'Levez-vous tôt ou venez à la tombée de la nuit', text: 'En milieu de matinée et l’après-midi, surtout le week-end, des files d’attente se forment aux endroits les plus populaires, comme le grand escalier de la cathédrale ou les Banys Àrabs. Tôt le matin, on les découvre en toute tranquillité.' },
          { title: 'En semaine, c’est mieux', text: 'Si vous avez le choix, les jours de semaine sont bien plus calmes que le week-end.' },
          { title: 'Revenez le soir', text: 'Certains lieux sont illuminés et l’ambiance du Barri Vell à la tombée de la nuit n’a rien à voir avec celle de la journée.' },
        ],
      },
      {
        h2: 'Ce que vous verrez',
        paragraphs: [
          'Chaque édition est différente, mais certains lieux sont souvent à l’honneur : le grand escalier de la cathédrale couvert de fleurs, les Banys Àrabs, les cloîtres et les églises du Barri Vell, les ruelles du Call et les cours de maisons particulières qui ne s’ouvrent que pendant le festival. Beaucoup d’installations jouent avec l’architecture des lieux : prenez le temps d’observer comment chaque artiste a interprété l’espace.',
          'En plus des installations, des activités parallèles sont souvent proposées pendant ces quelques jours, comme des concerts ou des rendez-vous gastronomiques. Le programme change chaque année : consultez-le sur le site officiel.',
        ],
      },
      {
        h2: 'Pourquoi loger dans le centre',
        paragraphs: [
          'Pendant le festival, le Barri Vell accueille énormément de visiteurs et se garer devient compliqué. Loger dans le centre vous permet de rejoindre tous les lieux à pied, de rentrer à l’appartement à midi pour vous reposer et de ressortir quand la foule s’en va. Nos appartements se trouvent sur la Rambla de la Llibertat, en plein cœur du festival.',
          'Si vous venez malgré tout en voiture, lisez notre guide [où se garer à Girona](/guia/aparcar-en-girona) et comptez sur des parkings complets plus tôt que d’habitude.',
        ],
      },
      {
        h2: 'Réservez longtemps à l’avance',
        paragraphs: [
          'C’est l’une des semaines les plus demandées de l’année à Girona. Les logements du centre se réservent des mois à l’avance : dès que vous connaissez les dates, réservez. En passant directement par notre site, vous évitez les commissions des intermédiaires.',
          'Si vous venez en groupe ou en famille, nos plus grands appartements, [Bergamota](/apartamentos/bergamota) et [Árbol de té](/apartamentos/arbol-de-te), accueillent jusqu’à 6 personnes : ce sont les premiers réservés pour ces dates. Pour les couples, nous avons plusieurs appartements avec vue sur l’Onyar.',
        ],
      },
      {
        h2: 'Conseils pratiques',
        items: [
          { title: 'Chaussures confortables', text: 'On marche beaucoup, et il y a des escaliers et des pentes dans tout le centre historique.' },
          { title: 'Avec une poussette ou en fauteuil roulant', text: 'Certains lieux ont des escaliers et il y a beaucoup de monde aux heures de pointe. Préparez votre parcours et sortez aux heures creuses.' },
          { title: 'Respectez les installations', text: 'Regardez, photographiez et profitez, mais ne touchez pas les fleurs : elles doivent tenir pendant tout le festival.' },
          { title: 'Voyagez léger', text: 'Un petit sac à dos et de l’eau suffisent. Dans les lieux les plus étroits, vous apprécierez de ne pas avoir de gros sacs.' },
          { title: 'Au-delà des fleurs', text: 'Profitez-en pour découvrir le reste de la ville avec notre guide [que voir à Girona](/guia/que-ver-en-girona).' },
        ],
      },
      {
        h2: 'Manger pendant le festival',
        paragraphs: [
          'Les restaurants du Barri Vell sont pris d’assaut pendant Temps de Flors, surtout le midi le week-end. Réservez votre table à l’avance ou déjeunez un peu avant ou après les heures de pointe. Un appartement avec cuisine vous laisse plus de liberté : vous pouvez prendre votre petit-déjeuner tranquillement avant de partir tôt ou dîner chez vous après une longue journée.',
        ],
      },
      {
        h2: 'Le printemps à Girona et dans les environs',
        paragraphs: [
          'Mai est une excellente période pour rester quelques jours de plus. Les promenades sur les remparts et dans la Devesa sont très agréables quand il fait beau, et à moins d’une heure vous trouverez les villages médiévaux de l’Empordà et les premières criques de la saison, encore tranquilles. Si vous avez envie de combiner ville et campagne, consultez notre guide [Peratallada et le Baix Empordà](/house/zona).',
        ],
      },
    ],
    ctaTitle: 'Dormez au cœur de Temps de Flors',
    ctaText: 'Appartements sur la Rambla de la Llibertat, à quelques pas des lieux du festival. Réservation directe, sans commission.',
    ctaButton: 'Vérifier les disponibilités',
  },

  cycling: {
    eyebrow: 'Itinéraires depuis la porte',
    h2: 'Itinéraires à vélo depuis Girona',
    intro: 'Quelques-unes des sorties classiques de nos hôtes cyclistes, toutes au départ du Barri Vell, sans prendre la voiture.',
    routes: [
      { title: 'Els Àngels', text: 'La montée au sanctuaire dels Àngels par la route des Gavarres est le col de référence pour s’entraîner depuis Girona : régulière, avec un bon revêtement et une vue sur la ville et l’Empordà.' },
      { title: 'Rocacorba', text: 'Le col mythique au nord de Banyoles. Long et très dur dans sa partie finale, c’est celui qu’utilisent les professionnels pour tester leur forme. On y accède par de petites routes tranquilles.' },
      { title: 'Le lac de Banyoles', text: 'Une sortie plate jusqu’à Banyoles avec le tour du lac : parfaite pour rouler en douceur ou pour une journée de récupération.' },
      { title: 'Voie verte du Carrilet vers Olot', text: 'Une ancienne voie ferrée transformée en voie verte, qui remonte en pente douce vers la Garrotxa. Idéale en gravel, à vélo de balade et en famille.' },
      { title: 'Voie verte vers Sant Feliu de Guíxols', text: 'L’autre voie verte du Carrilet descend de Girona jusqu’à la Costa Brava en traversant la vallée du Ter et les contreforts des Gavarres.' },
      { title: 'La Costa Brava par les Gavarres', text: 'Traversez les Gavarres vers la côte et revenez par la route en lacets entre Sant Feliu de Guíxols et Tossa de Mar : l’une des plus belles de Méditerranée à vélo.' },
    ],
    note: 'Les distances et les dénivelés dépendent de la variante choisie : préparez votre itinéraire avec votre application habituelle et vérifiez l’état des voies vertes avant de partir.',
  },
};
