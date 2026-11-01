import type { GuideSet } from './types';

// Català — traducció de la versió de referència (es.ts).
export const guidesCa: GuideSet = {
  ui: {
    home: 'Inici',
    guidesLabel: 'Guia de Girona',
    relatedTitle: 'Apartaments recomanats',
    upTo: 'Fins a',
    people: 'persones',
    viewApartment: 'Veure l’apartament',
    contact: 'Escriu-nos',
    zoneLink: 'Veure la guia de la zona',
    girona: 'Què veure a Girona a peu des de l’apartament',
  },

  index: {
    metaTitle: 'Guia de Girona: què veure, on aparcar i Temps de Flors',
    metaDescription: 'Guies pràctiques per a la teva visita: què veure a peu des del Barri Vell de Girona, on aparcar, com arribar-hi, Temps de Flors i la zona de Peratallada.',
    breadcrumb: 'Guia de Girona',
    eyebrow: 'Guies Aromatik',
    h1: 'Guia de Girona i l’Empordà',
    lead: 'El que acostumem a explicar als nostres hostes, ara per escrit: què veure, com arribar-hi, on deixar el cotxe i què fer al voltant de la nostra casa de camp.',
    cards: {
      queVer: { title: 'Què veure a Girona a peu', text: 'La Catedral, el Call, la muralla i les cases de l’Onyar, amb una ruta d’un dia i una de dos dies sortint de la Rambla de la Llibertat.' },
      aparcar: { title: 'On aparcar i com arribar-hi', text: 'El Barri Vell és de vianants: aparcaments propers, què fer amb les maletes i com arribar-hi en tren o en avió.' },
      tempsDeFlors: { title: 'Temps de Flors', text: 'Què és el festival de les flors de Girona, com visitar-lo sense cues i per què convé reservar aviat.' },
      houseZona: { title: 'Peratallada i el Baix Empordà', text: 'Pobles medievals, cales de la Costa Brava, rutes i gastronomia al voltant d’Aromatik House.' },
    },
    readMore: 'Llegir la guia',
  },

  houseZona: {
    metaTitle: 'Què fer a prop de Peratallada: guia del Baix Empordà',
    metaDescription: 'Pobles medievals, cales de la Costa Brava, rutes a peu i en bici, gastronomia i plans amb nens i gos a prop de Peratallada (Empordà).',
    breadcrumb: 'La zona',
    eyebrow: 'Aromatik House · Baix Empordà',
    h1: 'Què fer a prop d’Aromatik House: Peratallada i el Baix Empordà',
    lead: 'El Baix Empordà és una de les comarques més boniques de Catalunya: pobles de pedra entre camps de conreu, cales d’aigua transparent i una cuina que barreja mar i muntanya. Aquesta és la nostra selecció per treure tot el suc a la teva estada a [Aromatik House](/house), la nostra casa de camp amb piscina privada al costat de Peratallada.',
    sections: [
      {
        h2: 'Peratallada, el poble medieval del costat',
        paragraphs: [
          'Peratallada és un dels conjunts medievals més ben conservats de Catalunya i és a uns 5 minuts en cotxe de la casa. Els carrers empedrats, les muralles, el castell i el fossat excavat a la roca —d’aquí li ve el nom, «pedra tallada»— es recorren en un matí tranquil.',
          'El poble és petit i en temporada alta s’omple a mig matí. Si pots, ves-hi d’hora o al capvespre, quan la pedra es torna daurada i les terrasses s’animen. Els cotxes es queden fora del nucli antic, així que compta amb un passeig curt des de l’aparcament.',
        ],
      },
      {
        h2: 'Més pobles medievals a pocs minuts',
        items: [
          { title: 'Ullastret', text: 'A 5 minuts. Un poble emmurallat preciós i, als afores, el Poblat Ibèric d’Ullastret, un dels jaciments ibers més importants de Catalunya, amb museu i restes de muralles dalt d’un antic turó al costat del que era un estany.' },
          { title: 'Pals', text: 'A 15 minuts. El seu barri gòtic dalt d’un turó, amb la Torre de les Hores i un mirador sobre els arrossars i les illes Medes, és un dels passejos més fotogènics de l’Empordà.' },
          { title: 'La Bisbal d’Empordà', text: 'A 15 minuts. La capital de la ceràmica: botigues i tallers de terrissa al llarg del carrer principal i un castell-palau que va ser residència dels bisbes de Girona.' },
          { title: 'Monells, Cruïlles i Vulpellac', text: 'Tres petites joies molt a prop les unes de les altres: la plaça porticada de Monells, la torre i el monestir de Sant Miquel de Cruïlles i el castell-palau de Vulpellac. Perfectes per a una tarda sense presses.' },
          { title: 'Begur', text: 'A 25 minuts. Un poble dalt del turó coronat per les ruïnes del castell, amb vistes a tota la costa i les cases colonials que van aixecar els «indians» que van tornar d’Amèrica.' },
        ],
      },
      {
        h2: 'Cales i platges de la Costa Brava',
        paragraphs: [
          'La costa és a mitja hora i té dues cares molt diferents: platges llargues de sorra al nord i cales rocoses entre pins al sud de Begur.',
        ],
        items: [
          { title: 'Platja de Pals', text: 'A 25 minuts. Una platja llarga i oberta, amb dunes i pineda al darrere. Hi ha espai fins i tot a l’estiu i és còmoda per anar-hi amb nens.' },
          { title: 'L’Estartit i les illes Medes', text: 'A 25 minuts. Les Medes són un espai marí protegit i un dels millors llocs de la Mediterrània per fer snorkel o submarinisme. Des del port surten excursions en vaixell per veure-les.' },
          { title: 'Les cales de Begur', text: 'Aiguablava i Sa Riera (a 30 minuts), Sa Tuna, Aiguafreda o Fornells: cales petites d’aigua turquesa entre roques i pins. Són les més boniques i també les que s’omplen abans.' },
          { title: 'Calella de Palafrugell, Llafranc i Tamariu', text: 'Calella és a 30 minuts. Pobles de pescadors amb cases blanques, barques a la sorra i les voltes del Port Bo. Ideals per a un bany i un sopar davant del mar.' },
        ],
      },
      {
        h2: 'Consell per a les cales a l’estiu',
        paragraphs: [
          'Al juliol i a l’agost els aparcaments de les cales són petits, acostumen a ser de pagament i s’omplen aviat. El millor és arribar-hi abans de les deu o a última hora de la tarda. A la primavera i a la tardor l’aigua encara és agradable i les tindràs gairebé per a tu.',
        ],
      },
      {
        h2: 'Rutes a peu',
        items: [
          { title: 'El Camí de Ronda', text: 'L’antic sender de vigilància que recorre la costa unint cales. El tram entre Calella de Palafrugell i Llafranc és curt i fàcil; el de les cales de Begur té més pujades i unes vistes espectaculars.' },
          { title: 'Entre camps, des de la casa', text: 'Els camins agrícoles que envolten Peratallada i Ullastret són plans i tranquils, perfectes per caminar al capvespre entre oliveres, gira-sols o blat segons l’època.' },
          { title: 'El Montgrí', text: 'El massís que separa l’Empordà del mar, amb el castell del Montgrí al cim, sobre Torroella. La pujada és exigent, però les vistes sobre tota la plana s’ho valen.' },
          { title: 'Les Gavarres', text: 'Les muntanyes boscoses entre l’Empordà i Girona, amb pistes forestals, ermites i dòlmens per caminar a l’ombra.' },
        ],
      },
      {
        h2: 'En bici pel Baix Empordà',
        paragraphs: [
          'Les carreteres secundàries que uneixen els pobles són planes, amb poc trànsit i paisatges de postal: ideals per rodar en carretera, en gravel o amb bicis de passeig. La xarxa de vies verdes de les comarques de Girona permet enllaçar l’interior amb la costa per antics traçats de tren, sense cotxes.',
          'Si vens a entrenar de debò, Girona —a 35 minuts— és una de les capitals mundials del ciclisme. A la nostra pàgina per a [ciclistes](/ciclistas) hi trobaràs les rutes clàssiques que surten des d’allà.',
        ],
      },
      {
        h2: 'Gastronomia de l’Empordà',
        paragraphs: [
          'L’Empordà presumeix de cuina pròpia. Tasta l’arròs de Pals, conreat als arrossars que veuràs entre Pals i la costa; els plats de «mar i muntanya», que barregen peix o marisc amb carn o bolets; i els vins de la DO Empordà, que pots conèixer a molts cellers de la comarca.',
          'Els pobles de la zona tenen mercats setmanals i botigues de productors on omplir la nevera de la casa amb oli, embotits, formatges i fruita de temporada. La cuina exterior i la barbacoa de gas de la casa estan pensades per aprofitar-ho.',
        ],
      },
      {
        h2: 'Plans amb nens',
        items: [
          { title: 'Jugar a ser ibers', text: 'El jaciment d’Ullastret és a l’aire lliure i es recorre com una petita aventura entre muralles i cases de fa més de dos mil anys.' },
          { title: 'Platja de sorra', text: 'La Platja de Pals i les platges properes a l’Estartit tenen sorra fina i molt d’espai per jugar.' },
          { title: 'Veure peixos sense mullar-se', text: 'Algunes excursions a les illes Medes es fan amb vaixells amb fons de vidre.' },
          { title: 'La piscina de casa', text: 'Després d’un matí d’excursió, la piscina privada i el jardí de 6.500 m² són el millor pla. Compte: la piscina no té tanca, així que vigila sempre els més petits.' },
        ],
      },
      {
        h2: 'Amb gos',
        paragraphs: [
          'La casa admet una mascota i el jardí és enorme. Els camins entre camps són perfectes per a passejades llargues, i els pobles medievals es visiten sense problema amb el gos lligat. A les platges les normes canvien segons el municipi i l’època de l’any —a l’estiu moltes no permeten gossos—, així que consulta la normativa local abans d’anar-hi.',
        ],
      },
      {
        h2: 'Quan venir',
        paragraphs: [
          'La primavera i la tardor són les millors èpoques per descobrir els pobles i caminar: temperatures suaus i molta menys gent. L’estiu és per a les cales i la piscina. I a l’hivern l’Empordà és pura calma: pobles tranquils, la llar de foc encesa i dies clars de tramuntana.',
        ],
      },
    ],
    ctaTitle: 'La teva base a l’Empordà',
    ctaText: 'Casa de camp per a 5 persones amb piscina privada tot l’any, jardí de 6.500 m² i s’hi admeten mascotes. Reserva directa, amb cancel·lació gratuïta fins a 30 dies abans i sense fiança.',
    ctaButton: 'Veure disponibilitat',
  },

  queVer: {
    metaTitle: 'Què veure a Girona a peu: ruta d’1 i 2 dies pel Barri Vell',
    metaDescription: 'Què veure a Girona caminant des de la Rambla de la Llibertat: Catedral, Call, muralla, cases de l’Onyar i museus, amb una ruta d’un dia i de dos.',
    breadcrumb: 'Què veure a Girona',
    eyebrow: 'Guia de Girona',
    h1: 'Què veure a Girona a peu des del Barri Vell',
    lead: 'Girona es recorre caminant. Des de la Rambla de la Llibertat, on hi ha els nostres apartaments, tot el Barri Vell queda a pocs minuts a peu: no et caldrà el cotxe en tota l’estada. Aquesta és la ruta que recomanem als nostres hostes, amb un pla per a un dia i per a dos dies al final.',
    sections: [
      {
        h2: 'La Rambla de la Llibertat i les cases de l’Onyar',
        paragraphs: [
          'La Rambla és el passeig porticat que corre paral·lel al riu Onyar, amb terrasses, llibreries i botigues de tota la vida. És el millor punt de partida per a qualsevol passeig.',
          'La imatge més famosa de Girona són les cases de colors que s’aboquen a l’Onyar. Es veuen millor des dels ponts: el de Sant Agustí, el de Pedra i el de les Peixateries Velles, el pont vermell de ferro que s’atribueix al taller de Gustave Eiffel. A l’altra banda del riu hi ha la Plaça de la Independència, porticada i plena de restaurants.',
        ],
      },
      {
        h2: 'La Catedral i la seva escalinata',
        paragraphs: [
          'La gran escalinata barroca que puja a la Catedral és un dels racons més fotografiats de la ciutat i va sortir a la sisena temporada de Joc de Trons. A dins sorprèn la nau gòtica, una de les més amples del món. Val la pena dedicar temps al claustre romànic i al museu del tresor.',
        ],
      },
      {
        h2: 'El Call, el barri jueu',
        paragraphs: [
          'El Call de Girona és un dels barris jueus medievals més ben conservats d’Europa: un laberint de carrerons estrets, escales i patis al voltant del carrer de la Força. El Museu d’Història dels Jueus explica la vida de la comunitat que va viure aquí fins a finals del segle XV.',
        ],
      },
      {
        h2: 'El Passeig de la Muralla',
        paragraphs: [
          'Pots caminar per sobre de la muralla medieval durant bona part del seu recorregut i pujar a les torres per veure les teulades del Barri Vell, la Catedral i, els dies clars, el Pirineu. Hi ha diversos accessos, així que pots fer-ne només un tram.',
        ],
      },
      {
        h2: 'Banys Àrabs, Sant Pere de Galligants i Sant Feliu',
        items: [
          { title: 'Banys Àrabs', text: 'Uns banys públics medievals d’estil romànic inspirats en els banys musulmans, amb una sala de columnes i cúpula molt fotogènica.' },
          { title: 'Sant Pere de Galligants', text: 'Antic monestir romànic amb un claustre preciós, avui seu del Museu d’Arqueologia de Catalunya a Girona.' },
          { title: 'Basílica de Sant Feliu', text: 'Una de les esglésies més importants de la ciutat, que es reconeix pel campanar truncat.' },
          { title: 'El cul de la lleona', text: 'Al costat de Sant Feliu hi ha una columna amb una lleona de pedra. Diu la tradició que qui li fa un petó tornarà a Girona.' },
        ],
      },
      {
        h2: 'Museus per a un dia de pluja',
        items: [
          { title: 'Museu del Cinema', text: 'Una col·lecció única sobre els orígens del cinema: llanternes màgiques, ombres xineses i aparells precinematogràfics. Molt recomanable amb nens.' },
          { title: 'Museu d’Art', text: 'A l’antic palau episcopal, al costat de la Catedral, amb art romànic i gòtic de les comarques de Girona.' },
          { title: 'Museu d’Història de Girona', text: 'Per entendre la ciutat des de l’època romana fins avui.' },
        ],
      },
      {
        h2: 'Un respir verd: la Devesa i la vall de Sant Daniel',
        paragraphs: [
          'La Devesa és un gran parc urbà de plàtans altíssims al costat del riu Ter, a un passeig curt del centre. I si et ve de gust sortir al camp sense agafar el cotxe, la vall de Sant Daniel comença just darrere del Barri Vell: un camí tranquil entre horts que porta fins al monestir del mateix nom.',
        ],
      },
      {
        h2: 'Ruta d’un dia',
        items: [
          { title: 'Matí', text: 'Cafè a la Rambla de la Llibertat, travessa el pont de les Peixateries Velles per veure les cases de l’Onyar i puja pel carrer de la Força, a través del Call, fins a la Catedral.' },
          { title: 'Migdia', text: 'Visita la Catedral i baixa per l’escalinata fins als Banys Àrabs i Sant Pere de Galligants. Dinar al Barri Vell.' },
          { title: 'Tarda', text: 'Puja al Passeig de la Muralla i recorre’l cap al sud per veure la ciutat des de dalt. Baixa cap a Sant Feliu i no t’oblidis del petó a la lleona.' },
          { title: 'Nit', text: 'Passeig pels ponts il·luminats i sopar a la Plaça de la Independència.' },
        ],
      },
      {
        h2: 'Ruta de dos dies',
        items: [
          { title: 'Dia 1', text: 'La ruta anterior: Onyar, Call, Catedral, Banys Àrabs, muralla i Sant Feliu.' },
          { title: 'Dia 2 · matí', text: 'Museu d’Història dels Jueus i Museu d’Art, o el Museu del Cinema si vas amb nens.' },
          { title: 'Dia 2 · tarda', text: 'Passeig fins a la Devesa o caminada per la vall de Sant Daniel. A última hora, vermut a la Rambla.' },
        ],
      },
      {
        h2: 'Consells pràctics',
        paragraphs: [
          'El Barri Vell és ple de pujades i escales: porta calçat còmode i, si vas amb cotxet, prepara’t per carregar-lo en alguns trams. Els horaris de museus i monuments canvien segons la temporada, així que consulta’ls abans d’anar-hi. I si arribes en cotxe, llegeix la nostra guia sobre [on aparcar a Girona](/guia/aparcar-en-girona).',
        ],
      },
    ],
    ctaTitle: 'Dorm al Barri Vell',
    ctaText: 'Els nostres 8 apartaments són a la Rambla de la Llibertat, al costat de l’Onyar: surts per la porta i ja ets a la ruta. Reserva directa i sense comissions.',
    ctaButton: 'Comprovar disponibilitat',
  },

  aparcar: {
    metaTitle: 'On aparcar a Girona a prop del Barri Vell i com arribar-hi',
    metaDescription: 'On aparcar a prop del Barri Vell de Girona (gratis i de pagament), què fer amb les maletes i com arribar-hi en cotxe, tren d’alta velocitat o avió.',
    breadcrumb: 'On aparcar a Girona',
    eyebrow: 'Guia de Girona',
    h1: 'On aparcar a Girona i com arribar al Barri Vell',
    lead: 'La pregunta que més ens fan abans d’arribar. Resum ràpid: el Barri Vell i la Rambla de la Llibertat són zona de vianants, així que el cotxe es queda en un aparcament proper i la resta la faràs a peu.',
    sections: [
      {
        h2: 'El primer: el nucli antic és de vianants',
        paragraphs: [
          'L’accés de vehicles al Barri Vell està restringit i reservat a residents i serveis autoritzats. No et refiïs cegament del GPS: alguns navegadors intenten portar-te per carrers per on no es pot circular. Posa com a destinació directament l’aparcament que hagis triat.',
        ],
      },
      {
        h2: 'Arribar en cotxe',
        paragraphs: [
          'Girona és al costat de l’autopista AP-7, que la uneix amb Barcelona i amb França, i té sortides al nord i al sud de la ciutat. Des de qualsevol d’elles s’arriba al centre en pocs minuts seguint les indicacions cap al centre i, després, cap a l’aparcament que hagis triat.',
          'Si arribes de nit, cap problema: l’entrada als nostres apartaments és autònoma, amb codi, així que pots aparcar amb calma i venir caminant a l’hora que sigui.',
        ],
      },
      {
        h2: 'Aparcament gratuït: La Copa',
        paragraphs: [
          'L’aparcament de La Copa és gratuït i és a uns 10 minuts a peu dels nostres apartaments. És l’opció més econòmica per a estades de diversos dies. Com que és gratuït, és molt popular: els caps de setmana, ponts i festivals com Temps de Flors pot estar ple, així que convé arribar-hi amb marge o tenir una alternativa.',
        ],
      },
      {
        h2: 'Aparcaments de pagament a prop del centre',
        paragraphs: [
          'Al voltant del centre hi ha diversos aparcaments subterranis de pagament, entre ells els de la cadena Saba, a pocs minuts a peu de la Rambla. Són l’opció més còmoda si arribes amb molt d’equipatge, de nit o en dies de molta afluència. Alguns ofereixen tarifes per dia complet o abonaments de diversos dies; compara preus abans de reservar.',
        ],
      },
      {
        h2: 'Aparcar al carrer',
        paragraphs: [
          'Als barris que envolten el centre hi ha places al carrer, bona part d’elles en zona regulada amb temps limitat. Revisa sempre la senyalització del tram on aparquis. Per a diversos dies és més pràctic un aparcament.',
        ],
      },
      {
        h2: 'I les maletes?',
        paragraphs: [
          'El més pràctic és aparcar i venir caminant amb l’equipatge, que a Girona les distàncies són curtes. Si vens molt carregat, amb nens petits o amb bicicletes, [escriu-nos](/contacto) abans d’arribar i t’explicarem la millor manera d’acostar-t’hi segons el teu apartament.',
          'Si vens en bici, tranquil: als nostres apartaments la bicicleta dorm a dins i els edificis tenen ascensor.',
        ],
      },
      {
        h2: 'Arribar sense cotxe: tren i alta velocitat',
        paragraphs: [
          'Girona té estació de tren amb alta velocitat, que la connecta amb Barcelona en poc temps i també amb França. A més, hi ha trens regionals amb Barcelona, Figueres i la costa. Des de l’estació s’arriba al Barri Vell amb un passeig agradable a peu o en taxi en pocs minuts.',
          'Viatjar en tren és probablement la manera més còmoda d’arribar: t’estalvies buscar aparcament i, un cop aquí, no et caldrà cap transport per moure’t per la ciutat. Si després vols fer alguna excursió a la costa, pots llogar un cotxe només per a aquell dia.',
        ],
      },
      {
        h2: 'En avió',
        items: [
          { title: 'Aeroport de Girona-Costa Brava', text: 'És als afores, al sud de la ciutat. Hi ha autobusos cap a la ciutat i servei de taxi.' },
          { title: 'Aeroport de Barcelona-el Prat', text: 'Amb més vols i destinacions. Des d’allà pots arribar a Girona amb autobús directe o combinant-ho amb el tren d’alta velocitat des de Barcelona.' },
        ],
      },
      {
        h2: 'Durant l’estada, oblida’t del cotxe',
        paragraphs: [
          'Un cop instal·lat, tot el que és important és a peu: el Call, la Catedral, la muralla, restaurants i mercats. Si vols idees per omplir el dia, llegeix [què veure a Girona a peu](/guia/que-ver-en-girona).',
        ],
      },
      {
        h2: 'Preguntes freqüents',
        items: [
          { title: 'Els apartaments tenen aparcament propi?', text: 'No. Són a la zona de vianants del Barri Vell, així que el cotxe es queda en un dels aparcaments dels voltants.' },
          { title: 'Puc arribar en cotxe fins a la porta?', text: 'No és bona idea: l’accés està restringit i controlat. Aparca primer i vine caminant; si tens una situació especial, escriu-nos abans d’arribar.' },
          { title: 'Necessito el cotxe per visitar Girona?', text: 'No. Tot el nucli antic es recorre a peu. El cotxe només et caldrà per a excursions, per exemple a la Costa Brava o a l’Empordà.' },
          { title: 'I si m’hi quedo uns quants dies?', text: 'Per a estades llargues surt a compte l’aparcament gratuït de La Copa o una tarifa de diversos dies en un aparcament de pagament. Compara preus abans d’arribar.' },
          { title: 'On deixo la bicicleta?', text: 'Dins de l’apartament. Els edificis tenen ascensor, així que no l’hauràs de carregar per l’escala ni deixar-la al carrer.' },
          { title: 'I si arribo amb autocaravana o amb remolc?', text: 'El centre no està pensat per a vehicles grans. Escriu-nos abans d’arribar i t’orientarem sobre on deixar-lo.' },
        ],
      },
    ],
    ctaTitle: 'Reserva el teu apartament al centre',
    ctaText: 'Apartaments a la Rambla de la Llibertat, amb arribada autònoma: arribes quan vols i entres amb el teu codi. Reserva directa i sense comissions.',
    ctaButton: 'Comprovar disponibilitat',
  },

  tempsDeFlors: {
    metaTitle: 'Temps de Flors Girona: què és, com visitar-lo i on dormir',
    metaDescription: 'Què és Temps de Flors, el festival de les flors de Girona: com visitar-lo sense cues, consells pràctics i per què convé allotjar-se al Barri Vell.',
    breadcrumb: 'Temps de Flors',
    eyebrow: 'Guia de Girona',
    h1: 'Temps de Flors a Girona: guia per visitar-lo',
    lead: 'Durant uns dies de primavera, Girona s’omple de flors. Temps de Flors és el gran festival de la ciutat: instal·lacions florals en patis, monuments, escales i carrers del Barri Vell. Això és el que convé saber per gaudir-ne.',
    sections: [
      {
        h2: 'Què és Temps de Flors',
        paragraphs: [
          'És una exposició d’art floral que se celebra cada any des de mitjan segle XX i que ha crescut fins a convertir-se en un dels esdeveniments més visitats de Catalunya. Artistes, floristes, escoles i veïns decoren desenes d’espais del nucli antic.',
          'El millor és que permet entrar en patis, claustres i jardins que la resta de l’any són tancats al públic. La majoria d’espais es poden visitar lliurement i sense entrada.',
        ],
      },
      {
        h2: 'Quan se celebra',
        paragraphs: [
          'Temps de Flors té lloc a la primavera, normalment al maig, i dura al voltant d’una setmana. Les dates canvien cada any, així que consulta el web oficial de l’Ajuntament de Girona abans d’organitzar el viatge.',
        ],
      },
      {
        h2: 'Com visitar-lo',
        items: [
          { title: 'Agafa el mapa', text: 'Els espais estan numerats i el plànol oficial proposa un recorregut. Tria primer els que més t’interessen: veure’ls tots en un dia és gairebé impossible.' },
          { title: 'Matina o ves-hi al vespre', text: 'A mig matí i a la tarda, sobretot el cap de setmana, es formen cues als punts més populars, com l’escalinata de la Catedral o els Banys Àrabs. A primera hora es veuen amb calma.' },
          { title: 'Entre setmana, millor', text: 'Si pots triar, els dies feiners són molt més tranquils que el cap de setmana.' },
          { title: 'Repeteix de nit', text: 'Alguns espais s’il·luminen i l’ambient del Barri Vell al vespre és molt diferent del de dia.' },
        ],
      },
      {
        h2: 'Què hi veuràs',
        paragraphs: [
          'Cada edició és diferent, però hi ha racons que acostumen a ser protagonistes: l’escalinata de la Catedral coberta de flors, els Banys Àrabs, els claustres i les esglésies del Barri Vell, els carrerons del Call i els patis de cases particulars que només s’obren durant el festival. Moltes instal·lacions juguen amb l’arquitectura del lloc, així que val la pena fixar-se en com cada artista ha interpretat l’espai.',
          'A més de les instal·lacions, durant aquells dies sol haver-hi activitats paral·leles, com concerts o propostes gastronòmiques. El programa canvia cada any: consulta’l al web oficial.',
        ],
      },
      {
        h2: 'Per què allotjar-se al centre',
        paragraphs: [
          'Durant el festival el Barri Vell rep moltíssims visitants i aparcar es complica. Allotjar-te al centre et permet anar a peu a tots els espais, tornar a l’apartament al migdia per descansar i tornar a sortir quan marxa la gent. Els nostres apartaments són a la Rambla de la Llibertat, en plena zona del festival.',
          'Si tot i així vens en cotxe, llegeix la nostra guia sobre [on aparcar a Girona](/guia/aparcar-en-girona) i compta que els aparcaments s’omplen abans del que és habitual.',
        ],
      },
      {
        h2: 'Reserva amb molta antelació',
        paragraphs: [
          'És una de les setmanes amb més demanda de l’any a Girona. Els allotjaments del centre es reserven amb mesos d’antelació, així que tan bon punt sàpigues les dates, reserva. Si ho fas directament al nostre web, t’estalvies les comissions d’intermediaris.',
          'Si vens en grup o en família, els nostres apartaments més grans, [Bergamota](/apartamentos/bergamota) i [Arbre de te](/apartamentos/arbol-de-te), són per a fins a 6 persones: són els primers que es reserven per a aquestes dates. Per a parelles tenim diversos apartaments amb vistes a l’Onyar.',
        ],
      },
      {
        h2: 'Consells pràctics',
        items: [
          { title: 'Calçat còmode', text: 'Es camina molt i hi ha escales i pujades per tot el nucli antic.' },
          { title: 'Amb cotxet o cadira de rodes', text: 'Alguns espais tenen escales i a les hores punta hi ha molta gent. Planifica el recorregut i ves-hi a les hores tranquil·les.' },
          { title: 'Respecta les instal·lacions', text: 'Mira, fotografia i gaudeix, però no toquis les flors: han d’aguantar tot el festival.' },
          { title: 'Lleuger d’equipatge', text: 'Una motxilla petita i aigua són suficients. Als espais més estrets agrairàs no portar bosses grans.' },
          { title: 'Més enllà de les flors', text: 'Aprofita per descobrir la resta de la ciutat amb la nostra guia de [què veure a Girona](/guia/que-ver-en-girona).' },
        ],
      },
      {
        h2: 'Menjar durant el festival',
        paragraphs: [
          'Els restaurants del Barri Vell s’omplen durant Temps de Flors, sobretot al migdia del cap de setmana. Reserva taula amb antelació o dina una mica abans o després de les hores punta. Un apartament amb cuina et dona flexibilitat: pots esmorzar amb calma abans de sortir d’hora o sopar a casa després d’un dia llarg.',
        ],
      },
      {
        h2: 'La primavera a Girona i rodalia',
        paragraphs: [
          'El maig és una època fantàstica per quedar-s’hi uns quants dies més. Els passejos per la muralla i per la Devesa són molt agradables amb el bon temps, i a menys d’una hora tens els pobles medievals de l’Empordà i les primeres cales de la temporada, encara tranquil·les. Si et ve de gust combinar ciutat i camp, mira la nostra guia de [Peratallada i el Baix Empordà](/house/zona).',
        ],
      },
    ],
    ctaTitle: 'Dorm en ple Temps de Flors',
    ctaText: 'Apartaments a la Rambla de la Llibertat, a quatre passes dels espais del festival. Reserva directa, sense comissions.',
    ctaButton: 'Comprovar disponibilitat',
  },

  cycling: {
    eyebrow: 'Rutes des de la porta',
    h2: 'Rutes en bici des de Girona',
    intro: 'Algunes de les sortides clàssiques que fan els nostres hostes ciclistes, totes sortint del Barri Vell sense agafar el cotxe.',
    routes: [
      { title: 'Els Àngels', text: 'La pujada al santuari dels Àngels per la carretera de les Gavarres és el port de referència per entrenar des de Girona: regular, amb bon asfalt i vistes sobre la ciutat i l’Empordà.' },
      { title: 'Rocacorba', text: 'El port mític al nord de Banyoles. Llarg i molt dur en el tram final, és el que fan servir els professionals per mesurar la seva forma. S’hi arriba per carreteres secundàries tranquil·les.' },
      { title: 'L’estany de Banyoles', text: 'Una sortida plana fins a Banyoles amb volta a l’estany: perfecta per rodar suau o per a un dia de recuperació.' },
      { title: 'Via verda del Carrilet cap a Olot', text: 'Un antic traçat de tren convertit en via verda que remunta suaument cap a la Garrotxa. Ideal per a gravel, bicis de passeig i famílies.' },
      { title: 'Via verda cap a Sant Feliu de Guíxols', text: 'L’altra via verda del Carrilet baixa des de Girona fins a la Costa Brava travessant la vall del Ter i els peus de les Gavarres.' },
      { title: 'Costa Brava per les Gavarres', text: 'Travessa les Gavarres cap a la costa i torna per la carretera de revolts entre Sant Feliu de Guíxols i Tossa de Mar: una de les més boniques de la Mediterrània per anar en bici.' },
    ],
    note: 'Les distàncies i els desnivells depenen de la variant que triïs: planifica la ruta amb la teva aplicació habitual i consulta l’estat de les vies verdes abans de sortir.',
  },
};
