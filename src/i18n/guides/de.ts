import type { GuideSet } from './types';

// Deutsch — Übersetzung von es.ts (gleiche Struktur und Reihenfolge).
export const guidesDe: GuideSet = {
  ui: {
    home: 'Startseite',
    guidesLabel: 'Girona-Reiseführer',
    relatedTitle: 'Empfohlene Apartments',
    upTo: 'Bis zu',
    people: 'Personen',
    viewApartment: 'Apartment ansehen',
    contact: 'Schreiben Sie uns',
    zoneLink: 'Zum Reiseführer für die Umgebung',
    girona: 'Girona zu Fuß vom Apartment aus entdecken',
  },

  index: {
    metaTitle: 'Girona Reiseführer: Sehenswertes, Parken, Temps de Flors',
    metaDescription: 'Praktische Tipps für Ihren Besuch: Sehenswertes zu Fuß ab dem Barri Vell, Parken, Anreise, Temps de Flors und die Gegend um Peratallada.',
    breadcrumb: 'Girona-Reiseführer',
    eyebrow: 'Aromatik Reiseführer',
    h1: 'Reiseführer für Girona und das Empordà',
    lead: 'Was wir unseren Gästen sonst persönlich erzählen, jetzt zum Nachlesen: was es zu sehen gibt, wie Sie anreisen, wo Sie das Auto abstellen und was Sie rund um unser Landhaus unternehmen können.',
    cards: {
      queVer: { title: 'Girona zu Fuß entdecken', text: 'Die Kathedrale, das Call, die Stadtmauer und die Häuser am Onyar – mit einer Route für 1 und für 2 Tage ab der Rambla de la Llibertat.' },
      aparcar: { title: 'Parken und Anreise', text: 'Das Barri Vell ist Fußgängerzone: Parkhäuser in der Nähe, wohin mit dem Gepäck und wie Sie mit Zug oder Flugzeug anreisen.' },
      tempsDeFlors: { title: 'Temps de Flors', text: 'Was hinter Gironas Blumenfest steckt, wie Sie es ohne Warteschlangen besuchen und warum Sie früh buchen sollten.' },
      houseZona: { title: 'Peratallada und das Baix Empordà', text: 'Mittelalterliche Dörfer, Buchten der Costa Brava, Wander- und Radtouren und gutes Essen rund um Aromatik House.' },
    },
    readMore: 'Zum Reiseführer',
  },

  houseZona: {
    metaTitle: 'Ausflüge rund um Peratallada: Baix Empordà Reiseführer',
    metaDescription: 'Mittelalterliche Dörfer, Buchten der Costa Brava, Wander- und Radtouren, Gastronomie und Ausflüge mit Kindern und Hund rund um Peratallada.',
    breadcrumb: 'Die Umgebung',
    eyebrow: 'Aromatik House · Baix Empordà',
    h1: 'Ausflüge rund um Aromatik House: Peratallada und das Baix Empordà',
    lead: 'Das Baix Empordà gehört zu den schönsten Landstrichen Kataloniens: Steindörfer zwischen Feldern, Buchten mit glasklarem Wasser und eine Küche, die Meer und Berge verbindet. Hier ist unsere Auswahl, damit Sie das Beste aus Ihrem Aufenthalt im [Aromatik House](/house) herausholen – unserem Landhaus mit privatem Pool direkt bei Peratallada.',
    sections: [
      {
        h2: 'Peratallada, das mittelalterliche Dorf nebenan',
        paragraphs: [
          'Peratallada ist eines der am besten erhaltenen mittelalterlichen Ensembles Kataloniens und liegt nur etwa 5 Autominuten vom Haus entfernt. Die gepflasterten Gassen, die Stadtmauern, die Burg und der in den Fels gehauene Graben – daher der Name, „behauener Stein“ – lassen sich bequem an einem ruhigen Vormittag erkunden.',
          'Das Dorf ist klein und füllt sich in der Hochsaison schon am späten Vormittag. Kommen Sie, wenn möglich, früh oder zum Sonnenuntergang, wenn der Stein golden leuchtet und sich die Terrassen beleben. Autos bleiben außerhalb des historischen Kerns, rechnen Sie also mit einem kurzen Fußweg vom Parkplatz.',
        ],
      },
      {
        h2: 'Weitere mittelalterliche Dörfer ganz in der Nähe',
        items: [
          { title: 'Ullastret', text: '5 Minuten entfernt. Ein wunderschönes ummauertes Dorf und vor seinen Toren die iberische Siedlung von Ullastret, eine der bedeutendsten iberischen Ausgrabungsstätten Kataloniens, mit Museum und Mauerresten auf einem einstigen Hügel an einem früheren See.' },
          { title: 'Pals', text: '15 Minuten entfernt. Das gotische Viertel auf einer Anhöhe mit der Torre de les Hores und einem Aussichtspunkt über die Reisfelder und die Medes-Inseln ist einer der fotogensten Spaziergänge im Empordà.' },
          { title: 'La Bisbal d’Empordà', text: '15 Minuten entfernt. Die Hauptstadt der Keramik: Läden und Töpferwerkstätten entlang der Hauptstraße und ein Burgpalast, der einst den Bischöfen von Girona als Residenz diente.' },
          { title: 'Monells, Cruïlles und Vulpellac', text: 'Drei kleine Juwelen dicht beieinander: der Arkadenplatz von Monells, der Turm und das Kloster Sant Miquel de Cruïlles sowie der Burgpalast von Vulpellac. Ideal für einen gemütlichen Nachmittag.' },
          { title: 'Begur', text: '25 Minuten entfernt. Ein Hügeldorf, gekrönt von seiner Burgruine, mit Blick über die ganze Küste und den Kolonialhäusern, die die „Indianos“ nach ihrer Rückkehr aus Amerika errichteten.' },
        ],
      },
      {
        h2: 'Buchten und Strände der Costa Brava',
        paragraphs: [
          'Die Küste liegt eine halbe Stunde entfernt und zeigt zwei ganz unterschiedliche Gesichter: lange Sandstrände im Norden und felsige Buchten zwischen Pinien südlich von Begur.',
        ],
        items: [
          { title: 'Platja de Pals', text: '25 Minuten entfernt. Ein langer, offener Strand mit Dünen und Pinienwald im Hintergrund. Selbst im Sommer gibt es hier Platz, und mit Kindern ist er besonders bequem.' },
          { title: 'L’Estartit und die Medes-Inseln', text: '25 Minuten entfernt. Die Medes sind ein Meeresschutzgebiet und einer der besten Orte im Mittelmeer zum Schnorcheln und Tauchen. Vom Hafen aus starten Bootsausflüge zu den Inseln.' },
          { title: 'Die Buchten von Begur', text: 'Aiguablava und Sa Riera (30 Minuten entfernt), Sa Tuna, Aiguafreda oder Fornells: kleine Buchten mit türkisfarbenem Wasser zwischen Felsen und Pinien. Sie sind die schönsten – und auch die, die sich zuerst füllen.' },
          { title: 'Calella de Palafrugell, Llafranc und Tamariu', text: 'Calella ist 30 Minuten entfernt. Fischerdörfer mit weißen Häusern, Booten im Sand und den Arkaden des Port Bo. Ideal für ein Bad im Meer und ein Abendessen direkt am Wasser.' },
        ],
      },
      {
        h2: 'Tipp für die Buchten im Sommer',
        paragraphs: [
          'Im Juli und August sind die Parkplätze an den Buchten klein, meist gebührenpflichtig und schnell voll. Am besten kommen Sie vor zehn Uhr oder am späten Nachmittag. Im Frühling und Herbst ist das Wasser noch angenehm, und Sie haben die Buchten fast für sich allein.',
        ],
      },
      {
        h2: 'Wanderungen',
        items: [
          { title: 'Der Camí de Ronda', text: 'Der alte Wachpfad entlang der Küste, der die Buchten miteinander verbindet. Der Abschnitt zwischen Calella de Palafrugell und Llafranc ist kurz und leicht; der bei den Buchten von Begur hat mehr Anstiege und spektakuläre Ausblicke.' },
          { title: 'Durch die Felder, direkt ab dem Haus', text: 'Die Feldwege rund um Peratallada und Ullastret sind flach und ruhig – perfekt für einen Abendspaziergang zwischen Olivenbäumen, Sonnenblumen oder Weizen, je nach Jahreszeit.' },
          { title: 'Der Montgrí', text: 'Das Massiv zwischen dem Empordà und dem Meer, mit der Burg Montgrí hoch über Torroella. Der Aufstieg ist anspruchsvoll, doch der Blick über die ganze Ebene entschädigt dafür.' },
          { title: 'Les Gavarres', text: 'Die bewaldeten Berge zwischen dem Empordà und Girona, mit Forstwegen, Einsiedeleien und Dolmen – zum Wandern im Schatten.' },
        ],
      },
      {
        h2: 'Mit dem Rad durchs Baix Empordà',
        paragraphs: [
          'Die Nebenstraßen zwischen den Dörfern sind flach, wenig befahren und führen durch Landschaften wie auf einer Postkarte: ideal für Rennrad, Gravelbike oder Tourenrad. Über das Netz der Vías Verdes – Radwege auf ehemaligen Bahntrassen in der Region Girona – gelangen Sie autofrei vom Hinterland an die Küste.',
          'Wenn Sie ernsthaft trainieren möchten: Girona – 35 Minuten entfernt – ist eine der Welthauptstädte des Radsports. Auf unserer Seite für [Radfahrer](/ciclistas) finden Sie die klassischen Touren, die dort starten.',
        ],
      },
      {
        h2: 'Die Küche des Empordà',
        paragraphs: [
          'Das Empordà ist stolz auf seine eigene Küche. Probieren Sie den Reis aus Pals, der auf den Reisfeldern zwischen Pals und der Küste wächst; Gerichte nach Art „mar i muntanya“ (Meer und Berg), die Fisch oder Meeresfrüchte mit Fleisch oder Pilzen kombinieren; und die Weine der DO Empordà, die Sie in vielen Weingütern der Gegend kennenlernen können.',
          'Die Dörfer der Umgebung haben Wochenmärkte und Hofläden, in denen Sie den Kühlschrank des Hauses mit Olivenöl, Wurst, Käse und Obst der Saison füllen können. Die Außenküche und der Gasgrill des Hauses sind genau dafür gemacht.',
        ],
      },
      {
        h2: 'Ausflüge mit Kindern',
        items: [
          { title: 'Auf den Spuren der Iberer', text: 'Die Ausgrabungsstätte von Ullastret liegt unter freiem Himmel und lässt sich wie ein kleines Abenteuer zwischen Mauern und über zweitausend Jahre alten Häusern erkunden.' },
          { title: 'Sandstrand', text: 'Die Platja de Pals und die Strände bei L’Estartit haben feinen Sand und viel Platz zum Spielen.' },
          { title: 'Fische sehen, ohne nass zu werden', text: 'Einige Ausflüge zu den Medes-Inseln finden in Glasbodenbooten statt.' },
          { title: 'Der Pool am Haus', text: 'Nach einem Vormittag voller Ausflüge sind der private Pool und der 6.500 m² große Garten das beste Programm. Achtung: Der Pool ist nicht eingezäunt, behalten Sie die Kleinen also immer im Blick.' },
        ],
      },
      {
        h2: 'Mit Hund',
        paragraphs: [
          'Im Haus ist ein Haustier erlaubt, und der Garten ist riesig. Die Wege zwischen den Feldern eignen sich perfekt für lange Spaziergänge, und die mittelalterlichen Dörfer lassen sich problemlos mit angeleintem Hund besuchen. An den Stränden gelten je nach Gemeinde und Jahreszeit unterschiedliche Regeln – im Sommer sind Hunde an vielen nicht erlaubt –, informieren Sie sich also vorher über die örtlichen Vorschriften.',
        ],
      },
      {
        h2: 'Die beste Reisezeit',
        paragraphs: [
          'Frühling und Herbst sind die besten Jahreszeiten, um die Dörfer zu entdecken und zu wandern: milde Temperaturen und viel weniger Besucher. Der Sommer gehört den Buchten und dem Pool. Und im Winter ist das Empordà die reine Ruhe: stille Dörfer, ein knisterndes Kaminfeuer und klare Tage mit Tramontana.',
        ],
      },
    ],
    ctaTitle: 'Ihr Zuhause im Empordà',
    ctaText: 'Landhaus für 5 Personen mit ganzjährig nutzbarem privatem Pool, 6.500 m² Garten, Haustiere willkommen. Direkt buchen, mit kostenloser Stornierung bis 30 Tage vorher und ohne Kaution.',
    ctaButton: 'Verfügbarkeit ansehen',
  },

  queVer: {
    metaTitle: 'Girona Sehenswürdigkeiten zu Fuß: Route für 1 und 2 Tage',
    metaDescription: 'Girona zu Fuß ab der Rambla de la Llibertat: Kathedrale, Call, Stadtmauer, Häuser am Onyar und Museen – mit einer Route für 1 und für 2 Tage.',
    breadcrumb: 'Girona Sehenswürdigkeiten',
    eyebrow: 'Girona-Reiseführer',
    h1: 'Girona zu Fuß entdecken: Sehenswertes rund um das Barri Vell',
    lead: 'Girona erkunden Sie am besten zu Fuß. Von der Rambla de la Llibertat, wo unsere Apartments liegen, ist das gesamte Barri Vell (die Altstadt) in wenigen Gehminuten erreichbar: Ein Auto brauchen Sie während Ihres Aufenthalts nicht. Hier ist die Route, die wir unseren Gästen empfehlen, mit einem Plan für 1 und für 2 Tage am Ende.',
    sections: [
      {
        h2: 'Die Rambla de la Llibertat und die Häuser am Onyar',
        paragraphs: [
          'Die Rambla ist die Arkadenpromenade parallel zum Fluss Onyar, mit Straßencafés, Buchhandlungen und alteingesessenen Geschäften. Der ideale Ausgangspunkt für jeden Spaziergang.',
          'Das bekannteste Bild von Girona sind die bunten Häuser, die sich über den Onyar neigen. Am besten sehen Sie sie von den Brücken aus: Pont de Sant Agustí, Pont de Pedra und Pont de les Peixateries Velles, die rote Eisenbrücke, die der Werkstatt von Gustave Eiffel zugeschrieben wird. Auf der anderen Flussseite liegt die Plaça de la Independència, ein Arkadenplatz voller Restaurants.',
        ],
      },
      {
        h2: 'Die Kathedrale und ihre Freitreppe',
        paragraphs: [
          'Die große barocke Freitreppe hinauf zur Kathedrale ist eines der meistfotografierten Motive der Stadt und war in der sechsten Staffel von Game of Thrones zu sehen. Im Inneren beeindruckt das gotische Kirchenschiff, eines der breitesten der Welt. Nehmen Sie sich auch Zeit für den romanischen Kreuzgang und das Schatzmuseum.',
        ],
      },
      {
        h2: 'Das Call, das jüdische Viertel',
        paragraphs: [
          'Das Call von Girona ist eines der am besten erhaltenen mittelalterlichen jüdischen Viertel Europas: ein Labyrinth aus engen Gassen, Treppen und Innenhöfen rund um die Carrer de la Força. Das Museum für die Geschichte der Juden erzählt vom Leben der Gemeinde, die hier bis Ende des 15. Jahrhunderts lebte.',
        ],
      },
      {
        h2: 'Der Passeig de la Muralla',
        paragraphs: [
          'Auf einem großen Teil der mittelalterlichen Stadtmauer können Sie oben entlanggehen und auf die Türme steigen – mit Blick auf die Dächer des Barri Vell, die Kathedrale und an klaren Tagen bis zu den Pyrenäen. Es gibt mehrere Zugänge, Sie können also auch nur einen Abschnitt gehen.',
        ],
      },
      {
        h2: 'Banys Àrabs, Sant Pere de Galligants und Sant Feliu',
        items: [
          { title: 'Banys Àrabs', text: 'Mittelalterliche öffentliche Bäder im romanischen Stil nach dem Vorbild muslimischer Badehäuser, mit einem sehr fotogenen Säulensaal unter einer Kuppel.' },
          { title: 'Sant Pere de Galligants', text: 'Ein ehemaliges romanisches Kloster mit einem wunderschönen Kreuzgang, heute Sitz des Archäologischen Museums Kataloniens in Girona.' },
          { title: 'Basilika Sant Feliu', text: 'Eine der wichtigsten Kirchen der Stadt, erkennbar an ihrem abgestumpften Glockenturm.' },
          { title: 'Der Po der Löwin', text: 'Neben Sant Feliu steht eine Säule mit einer steinernen Löwin. Der Überlieferung nach kehrt nach Girona zurück, wer ihr einen Kuss gibt.' },
        ],
      },
      {
        h2: 'Museen für einen Regentag',
        items: [
          { title: 'Museu del Cinema', text: 'Eine einzigartige Sammlung zu den Anfängen des Kinos: Laterna magica, Schattentheater und vorkinematografische Apparate. Mit Kindern sehr zu empfehlen.' },
          { title: 'Museu d’Art', text: 'Im ehemaligen Bischofspalast neben der Kathedrale, mit romanischer und gotischer Kunst aus der Region Girona.' },
          { title: 'Museu d’Història de Girona', text: 'Hier verstehen Sie die Stadt von der Römerzeit bis heute.' },
        ],
      },
      {
        h2: 'Grüne Verschnaufpause: die Devesa und das Tal von Sant Daniel',
        paragraphs: [
          'Die Devesa ist ein großer Stadtpark mit riesigen Platanen am Fluss Ter, nur einen kurzen Spaziergang vom Zentrum entfernt. Und wenn Sie ohne Auto ins Grüne möchten: Das Tal von Sant Daniel beginnt direkt hinter dem Barri Vell – ein ruhiger Weg zwischen Gemüsegärten führt bis zum gleichnamigen Kloster.',
        ],
      },
      {
        h2: 'Route für 1 Tag',
        items: [
          { title: 'Vormittag', text: 'Kaffee auf der Rambla de la Llibertat, dann über die Pont de les Peixateries Velles zu den Häusern am Onyar und durch das Call die Carrer de la Força hinauf zur Kathedrale.' },
          { title: 'Mittag', text: 'Besichtigen Sie die Kathedrale und gehen Sie die Freitreppe hinunter zu den Banys Àrabs und nach Sant Pere de Galligants. Mittagessen im Barri Vell.' },
          { title: 'Nachmittag', text: 'Steigen Sie auf den Passeig de la Muralla und folgen Sie ihm Richtung Süden, um die Stadt von oben zu sehen. Gehen Sie dann hinunter nach Sant Feliu – und vergessen Sie den Kuss für die Löwin nicht.' },
          { title: 'Abend', text: 'Spaziergang über die beleuchteten Brücken und Abendessen auf der Plaça de la Independència.' },
        ],
      },
      {
        h2: 'Route für 2 Tage',
        items: [
          { title: 'Tag 1', text: 'Die Route oben: Onyar, Call, Kathedrale, Banys Àrabs, Stadtmauer und Sant Feliu.' },
          { title: 'Tag 2 · Vormittag', text: 'Museum für die Geschichte der Juden und Museu d’Art – oder das Museu del Cinema, wenn Sie mit Kindern unterwegs sind.' },
          { title: 'Tag 2 · Nachmittag', text: 'Spaziergang zur Devesa oder Wanderung durch das Tal von Sant Daniel. Zum Abschluss ein Wermut auf der Rambla.' },
        ],
      },
      {
        h2: 'Praktische Tipps',
        paragraphs: [
          'Im Barri Vell geht es ständig bergauf und bergab, mit vielen Treppen: Tragen Sie bequeme Schuhe, und wenn Sie mit Kinderwagen unterwegs sind, müssen Sie ihn stellenweise tragen. Die Öffnungszeiten von Museen und Sehenswürdigkeiten ändern sich je nach Saison, prüfen Sie sie also vor dem Besuch. Und wenn Sie mit dem Auto anreisen, lesen Sie unseren Ratgeber zum [Parken in Girona](/guia/aparcar-en-girona).',
        ],
      },
    ],
    ctaTitle: 'Übernachten Sie im Barri Vell',
    ctaText: 'Unsere 8 Apartments liegen an der Rambla de la Llibertat direkt am Onyar: Sie treten aus der Tür und sind schon mitten auf der Route. Direkt buchen, ohne Provision.',
    ctaButton: 'Verfügbarkeit prüfen',
  },

  aparcar: {
    metaTitle: 'Parken in Girona am Barri Vell: Parkplätze und Anreise',
    metaDescription: 'Parken in Girona nahe dem Barri Vell (gratis und kostenpflichtig), wohin mit dem Gepäck und Anreise mit Auto, Schnellzug oder Flugzeug.',
    breadcrumb: 'Parken in Girona',
    eyebrow: 'Girona-Reiseführer',
    h1: 'Parken in Girona und Anreise ins Barri Vell',
    lead: 'Die Frage, die uns vor der Anreise am häufigsten gestellt wird. Kurz gesagt: Das Barri Vell und die Rambla de la Llibertat sind Fußgängerzone. Das Auto bleibt also in einem nahen Parkhaus, und den Rest erledigen Sie zu Fuß.',
    sections: [
      {
        h2: 'Vorab: Die Altstadt ist Fußgängerzone',
        paragraphs: [
          'Die Zufahrt ins Barri Vell ist beschränkt und Anwohnern sowie berechtigten Diensten vorbehalten. Verlassen Sie sich nicht blind auf das Navi: Manche Navigationsgeräte wollen Sie durch Straßen leiten, die nicht befahren werden dürfen. Geben Sie als Ziel direkt den Parkplatz ein, den Sie gewählt haben.',
        ],
      },
      {
        h2: 'Anreise mit dem Auto',
        paragraphs: [
          'Girona liegt direkt an der Autobahn AP-7, die die Stadt mit Barcelona und Frankreich verbindet, und hat Ausfahrten im Norden und im Süden der Stadt. Von jeder davon sind Sie in wenigen Minuten im Zentrum: Folgen Sie der Beschilderung Richtung Zentrum und dann zu dem Parkplatz, den Sie gewählt haben.',
          'Auch eine Ankunft am Abend ist kein Problem: Der Zugang zu unseren Apartments erfolgt selbstständig per Code. Sie können also in Ruhe parken und zu jeder Uhrzeit zu Fuß herkommen.',
        ],
      },
      {
        h2: 'Kostenlos parken: La Copa',
        paragraphs: [
          'Der Parkplatz La Copa ist kostenlos und liegt etwa 10 Gehminuten von unseren Apartments entfernt. Für Aufenthalte von mehreren Tagen ist er die günstigste Lösung. Weil er gratis ist, ist er sehr beliebt: An Wochenenden, Brückentagen und bei Festen wie Temps de Flors kann er voll sein. Planen Sie also etwas Puffer ein oder halten Sie eine Alternative bereit.',
        ],
      },
      {
        h2: 'Kostenpflichtige Parkhäuser nahe dem Zentrum',
        paragraphs: [
          'Rund um das Zentrum gibt es mehrere kostenpflichtige Tiefgaragen, darunter die der Kette Saba, wenige Gehminuten von der Rambla entfernt. Sie sind die bequemste Wahl, wenn Sie mit viel Gepäck, nachts oder an Tagen mit großem Andrang ankommen. Einige bieten Tagestarife oder Mehrtagestickets an; vergleichen Sie die Preise vor der Buchung.',
        ],
      },
      {
        h2: 'Parken am Straßenrand',
        paragraphs: [
          'In den Vierteln rund um das Zentrum gibt es Parkplätze am Straßenrand, viele davon in gebührenpflichtigen Zonen mit begrenzter Parkdauer. Achten Sie immer auf die Beschilderung des jeweiligen Abschnitts. Für mehrere Tage ist ein Parkhaus praktischer.',
        ],
      },
      {
        h2: 'Und das Gepäck?',
        paragraphs: [
          'Am praktischsten ist es, zu parken und mit dem Gepäck zu Fuß zu kommen – in Girona sind die Wege kurz. Wenn Sie viel dabeihaben, mit kleinen Kindern oder mit Fahrrädern reisen, [schreiben Sie uns](/contacto) vor der Anreise, und wir erklären Ihnen, wie Sie Ihr Apartment am besten erreichen.',
          'Und wenn Sie mit dem Rad kommen, keine Sorge: In unseren Apartments übernachtet das Fahrrad drinnen, und die Gebäude haben einen Aufzug.',
        ],
      },
      {
        h2: 'Anreise ohne Auto: Zug und Hochgeschwindigkeitszug',
        paragraphs: [
          'Girona hat einen Bahnhof mit Hochgeschwindigkeitsanschluss, der die Stadt schnell mit Barcelona und auch mit Frankreich verbindet. Dazu kommen Regionalzüge nach Barcelona, Figueres und an die Küste. Vom Bahnhof erreichen Sie das Barri Vell mit einem angenehmen Spaziergang oder in wenigen Minuten mit dem Taxi.',
          'Mit dem Zug anzureisen ist wohl die bequemste Variante: Sie sparen sich die Parkplatzsuche und brauchen vor Ort kein Verkehrsmittel, um sich in der Stadt zu bewegen. Wenn Sie später einen Ausflug an die Küste machen möchten, können Sie nur für diesen Tag ein Auto mieten.',
        ],
      },
      {
        h2: 'Mit dem Flugzeug',
        items: [
          { title: 'Flughafen Girona-Costa Brava', text: 'Er liegt außerhalb, südlich der Stadt. Es gibt Busse in die Stadt und Taxis.' },
          { title: 'Flughafen Barcelona-El Prat', text: 'Mit mehr Flügen und Zielen. Von dort kommen Sie mit dem Direktbus nach Girona oder kombiniert mit dem Hochgeschwindigkeitszug ab Barcelona.' },
        ],
      },
      {
        h2: 'Während des Aufenthalts: Vergessen Sie das Auto',
        paragraphs: [
          'Sobald Sie angekommen sind, erreichen Sie alles Wichtige zu Fuß: das Call, die Kathedrale, die Stadtmauer, Restaurants und Märkte. Ideen für Ihren Tag finden Sie in unserem Ratgeber [Girona zu Fuß entdecken](/guia/que-ver-en-girona).',
        ],
      },
      {
        h2: 'Häufige Fragen',
        items: [
          { title: 'Haben die Apartments eigene Parkplätze?', text: 'Nein. Sie liegen in der Fußgängerzone des Barri Vell, das Auto bleibt also auf einem der Parkplätze in der Umgebung.' },
          { title: 'Kann ich mit dem Auto bis vor die Tür fahren?', text: 'Keine gute Idee: Die Zufahrt ist beschränkt und wird kontrolliert. Parken Sie zuerst und kommen Sie zu Fuß; wenn bei Ihnen besondere Umstände vorliegen, schreiben Sie uns vor der Anreise.' },
          { title: 'Brauche ich ein Auto, um Girona zu besichtigen?', text: 'Nein. Die ganze Altstadt erkunden Sie zu Fuß. Ein Auto brauchen Sie nur für Ausflüge, zum Beispiel an die Costa Brava oder ins Empordà.' },
          { title: 'Und wenn ich mehrere Tage bleibe?', text: 'Bei längeren Aufenthalten lohnt sich der kostenlose Parkplatz La Copa oder ein Mehrtagestarif in einem kostenpflichtigen Parkhaus. Vergleichen Sie die Preise vor der Anreise.' },
          { title: 'Wo lasse ich das Fahrrad?', text: 'Im Apartment. Die Gebäude haben einen Aufzug, Sie müssen es also weder die Treppe hinauftragen noch auf der Straße stehen lassen.' },
          { title: 'Und wenn ich mit Wohnmobil oder Anhänger komme?', text: 'Das Zentrum ist nicht für große Fahrzeuge ausgelegt. Schreiben Sie uns vor der Anreise, und wir sagen Ihnen, wo Sie es abstellen können.' },
        ],
      },
    ],
    ctaTitle: 'Buchen Sie Ihr Apartment im Zentrum',
    ctaText: 'Apartments an der Rambla de la Llibertat mit Self-Check-in: Sie kommen an, wann Sie möchten, und öffnen mit Ihrem Code. Direkt buchen, ohne Provision.',
    ctaButton: 'Verfügbarkeit prüfen',
  },

  tempsDeFlors: {
    metaTitle: 'Temps de Flors Girona: Blumenfest, Tipps und Unterkunft',
    metaDescription: 'Temps de Flors, das Blumenfest in Girona: wie Sie es ohne Warteschlangen besuchen, praktische Tipps und warum sich eine Unterkunft im Barri Vell lohnt.',
    breadcrumb: 'Temps de Flors',
    eyebrow: 'Girona-Reiseführer',
    h1: 'Temps de Flors in Girona: Tipps für Ihren Besuch',
    lead: 'An einigen Tagen im Frühling verwandelt sich Girona in ein Blütenmeer. Temps de Flors ist das große Fest der Stadt: Blumeninstallationen in Innenhöfen, an Baudenkmälern, auf Treppen und in den Gassen des Barri Vell. Das sollten Sie wissen, um es richtig zu genießen.',
    sections: [
      {
        h2: 'Was ist Temps de Flors?',
        paragraphs: [
          'Eine Ausstellung floraler Kunst, die seit Mitte des 20. Jahrhunderts jedes Jahr stattfindet und zu einer der meistbesuchten Veranstaltungen Kataloniens geworden ist. Künstler, Floristen, Schulen und Anwohner schmücken Dutzende Orte in der Altstadt.',
          'Das Beste daran: Sie können Innenhöfe, Kreuzgänge und Gärten betreten, die den Rest des Jahres für die Öffentlichkeit geschlossen sind. Die meisten Orte sind frei und ohne Eintritt zugänglich.',
        ],
      },
      {
        h2: 'Wann findet es statt?',
        paragraphs: [
          'Temps de Flors findet im Frühling statt, meist im Mai, und dauert etwa eine Woche. Die Termine ändern sich jedes Jahr, schauen Sie also vor der Reiseplanung auf der offiziellen Website der Stadt Girona nach.',
        ],
      },
      {
        h2: 'So besuchen Sie das Fest',
        items: [
          { title: 'Besorgen Sie sich den Plan', text: 'Die Orte sind nummeriert, und der offizielle Plan schlägt einen Rundgang vor. Wählen Sie zuerst die aus, die Sie am meisten interessieren: Alle an einem Tag zu sehen, ist kaum möglich.' },
          { title: 'Früh aufstehen oder abends kommen', text: 'Am späten Vormittag und am Nachmittag, vor allem am Wochenende, bilden sich an den beliebtesten Stellen Schlangen, etwa an der Freitreppe der Kathedrale oder an den Banys Àrabs. Früh am Morgen sehen Sie alles in Ruhe.' },
          { title: 'Lieber unter der Woche', text: 'Wenn Sie die Wahl haben: Werktage sind deutlich ruhiger als das Wochenende.' },
          { title: 'Nachts noch einmal', text: 'Einige Orte werden beleuchtet, und die Stimmung im Barri Vell bei Einbruch der Dunkelheit ist ganz anders als tagsüber.' },
        ],
      },
      {
        h2: 'Was Sie erwartet',
        paragraphs: [
          'Jede Ausgabe ist anders, doch einige Orte stehen fast immer im Mittelpunkt: die blumengeschmückte Freitreppe der Kathedrale, die Banys Àrabs, die Kreuzgänge und Kirchen des Barri Vell, die Gassen des Call und die Innenhöfe von Privathäusern, die nur während des Festes geöffnet sind. Viele Installationen spielen mit der Architektur des Ortes – achten Sie darauf, wie jeder Künstler den Raum interpretiert hat.',
          'Neben den Installationen gibt es in diesen Tagen meist ein Rahmenprogramm, etwa Konzerte oder kulinarische Angebote. Das Programm ändert sich jedes Jahr: Sie finden es auf der offiziellen Website.',
        ],
      },
      {
        h2: 'Warum Sie im Zentrum übernachten sollten',
        paragraphs: [
          'Während des Festes strömen sehr viele Besucher ins Barri Vell, und das Parken wird schwierig. Wenn Sie im Zentrum wohnen, erreichen Sie alle Orte zu Fuß, können mittags im Apartment ausruhen und wieder losziehen, wenn sich die Menge verläuft. Unsere Apartments liegen an der Rambla de la Llibertat, mitten im Festgebiet.',
          'Falls Sie trotzdem mit dem Auto kommen, lesen Sie unseren Ratgeber zum [Parken in Girona](/guia/aparcar-en-girona) und rechnen Sie damit, dass die Parkplätze früher als sonst voll sind.',
        ],
      },
      {
        h2: 'Buchen Sie frühzeitig',
        paragraphs: [
          'Es ist eine der gefragtesten Wochen des Jahres in Girona. Unterkünfte im Zentrum sind Monate im Voraus ausgebucht – buchen Sie also, sobald die Termine feststehen. Wenn Sie direkt über unsere Website buchen, sparen Sie sich die Provisionen von Vermittlern.',
          'Wenn Sie als Gruppe oder Familie reisen: Unsere größten Apartments, [Bergamota](/apartamentos/bergamota) und [Árbol de té](/apartamentos/arbol-de-te), bieten Platz für bis zu 6 Personen – und sind für diese Tage als Erste ausgebucht. Für Paare haben wir mehrere Apartments mit Blick auf den Onyar.',
        ],
      },
      {
        h2: 'Praktische Tipps',
        items: [
          { title: 'Bequeme Schuhe', text: 'Sie laufen viel, und in der ganzen Altstadt gibt es Treppen und steile Gassen.' },
          { title: 'Mit Kinderwagen oder Rollstuhl', text: 'Einige Orte sind nur über Treppen erreichbar, und zu Stoßzeiten ist es sehr voll. Planen Sie Ihren Rundgang und kommen Sie zu ruhigeren Zeiten.' },
          { title: 'Respektieren Sie die Installationen', text: 'Schauen, fotografieren und genießen Sie – aber berühren Sie die Blumen nicht: Sie müssen das ganze Fest über halten.' },
          { title: 'Mit leichtem Gepäck', text: 'Ein kleiner Rucksack und Wasser genügen. An den engsten Stellen werden Sie froh sein, keine großen Taschen dabeizuhaben.' },
          { title: 'Mehr als nur Blumen', text: 'Entdecken Sie bei der Gelegenheit auch den Rest der Stadt mit unserem Ratgeber [Girona zu Fuß entdecken](/guia/que-ver-en-girona).' },
        ],
      },
      {
        h2: 'Essen während des Festes',
        paragraphs: [
          'Während Temps de Flors sind die Restaurants im Barri Vell voll, vor allem mittags am Wochenende. Reservieren Sie rechtzeitig einen Tisch oder essen Sie etwas vor oder nach den Stoßzeiten. Ein Apartment mit Küche macht Sie flexibel: Sie können in Ruhe frühstücken, bevor Sie früh losziehen, oder nach einem langen Tag zu Hause zu Abend essen.',
        ],
      },
      {
        h2: 'Frühling in Girona und Umgebung',
        paragraphs: [
          'Der Mai ist eine herrliche Zeit, um ein paar Tage länger zu bleiben. Spaziergänge auf der Stadtmauer und durch die Devesa sind bei schönem Wetter besonders angenehm, und in weniger als einer Stunde erreichen Sie die mittelalterlichen Dörfer des Empordà und die ersten Buchten der Saison, die noch ruhig sind. Wenn Sie Stadt und Land verbinden möchten, werfen Sie einen Blick in unseren Reiseführer zu [Peratallada und dem Baix Empordà](/house/zona).',
        ],
      },
    ],
    ctaTitle: 'Übernachten Sie mitten im Temps de Flors',
    ctaText: 'Apartments an der Rambla de la Llibertat, nur wenige Schritte von den Schauplätzen des Festes entfernt. Direkt buchen, ohne Provision.',
    ctaButton: 'Verfügbarkeit prüfen',
  },

  cycling: {
    eyebrow: 'Touren direkt ab der Haustür',
    h2: 'Radtouren ab Girona',
    intro: 'Einige der klassischen Ausfahrten unserer radelnden Gäste – alle starten im Barri Vell, ganz ohne Auto.',
    routes: [
      { title: 'Els Àngels', text: 'Der Anstieg zur Wallfahrtskirche Els Àngels über die Straße durch Les Gavarres ist der Referenzanstieg für das Training ab Girona: gleichmäßig, mit gutem Asphalt und Blick über die Stadt und das Empordà.' },
      { title: 'Rocacorba', text: 'Der legendäre Anstieg nördlich von Banyoles. Lang und im letzten Abschnitt sehr hart – hier testen die Profis ihre Form. Die Anfahrt führt über ruhige Nebenstraßen.' },
      { title: 'Der See von Banyoles', text: 'Eine flache Ausfahrt nach Banyoles mit einer Runde um den See: perfekt zum lockeren Rollen oder für einen Regenerationstag.' },
      { title: 'Vía Verde des Carrilet nach Olot', text: 'Eine ehemalige Bahntrasse, heute ein Radweg, der sanft ansteigend in die Garrotxa führt. Ideal für Gravelbikes, Tourenräder und Familien.' },
      { title: 'Vía Verde nach Sant Feliu de Guíxols', text: 'Die andere Vía Verde des Carrilet führt von Girona hinunter an die Costa Brava, durch das Tal des Ter und am Fuß von Les Gavarres entlang.' },
      { title: 'Costa Brava über Les Gavarres', text: 'Überqueren Sie Les Gavarres in Richtung Küste und kehren Sie über die kurvige Straße zwischen Sant Feliu de Guíxols und Tossa de Mar zurück: eine der schönsten Radstrecken am Mittelmeer.' },
    ],
    note: 'Distanzen und Höhenmeter hängen von der gewählten Variante ab: Planen Sie Ihre Route mit Ihrer gewohnten App und informieren Sie sich vor dem Start über den Zustand der Vías Verdes.',
  },
};
