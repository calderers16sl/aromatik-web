import type { GuideSet } from './types';

// English — translated from es.ts (reference version).
export const guidesEn: GuideSet = {
  ui: {
    home: 'Home',
    guidesLabel: 'Girona Guide',
    relatedTitle: 'Recommended apartments',
    upTo: 'Up to',
    people: 'people',
    viewApartment: 'View apartment',
    contact: 'Get in touch',
    zoneLink: 'Read the area guide',
    girona: 'What to see in Girona on foot from the apartment',
  },

  index: {
    metaTitle: 'Girona Guide: Things to Do, Parking & Temps de Flors',
    metaDescription: 'Practical guides for your trip: what to see on foot from Girona’s Barri Vell, where to park, getting here, Temps de Flors and the Peratallada area.',
    breadcrumb: 'Girona Guide',
    eyebrow: 'Aromatik Guides',
    h1: 'A Guide to Girona and the Empordà',
    lead: 'What we usually tell our guests, now written down: what to see, how to get here, where to leave the car and what to do around our country house.',
    cards: {
      queVer: { title: 'What to see in Girona on foot', text: 'The Cathedral, the Call, the city walls and the houses along the Onyar, with a 1-day and a 2-day route starting from the Rambla de la Llibertat.' },
      aparcar: { title: 'Where to park and how to get here', text: 'The Barri Vell is pedestrianised: nearby car parks, what to do with your luggage and how to arrive by train or plane.' },
      tempsDeFlors: { title: 'Temps de Flors', text: 'What Girona’s flower festival is all about, how to visit without the queues and why it pays to book early.' },
      houseZona: { title: 'Peratallada and the Baix Empordà', text: 'Medieval villages, Costa Brava coves, walking and cycling routes and great food around Aromatik House.' },
    },
    readMore: 'Read the guide',
  },

  houseZona: {
    metaTitle: 'Things to Do Near Peratallada: Baix Empordà Guide',
    metaDescription: 'Medieval villages, Costa Brava coves, walking and cycling routes, local food and ideas for kids and dogs near Peratallada in the Empordà.',
    breadcrumb: 'The area',
    eyebrow: 'Aromatik House · Baix Empordà',
    h1: 'Things to Do Near Aromatik House: Peratallada and the Baix Empordà',
    lead: 'The Baix Empordà is one of the loveliest corners of Catalonia: stone villages set among farmland, coves of crystal-clear water and a cuisine that blends sea and mountain. Here is our pick of the best ways to make the most of your stay at [Aromatik House](/house), our country house with a private pool next to Peratallada.',
    sections: [
      {
        h2: 'Peratallada, the medieval village next door',
        paragraphs: [
          'Peratallada is one of the best-preserved medieval villages in Catalonia, about 5 minutes’ drive from the house. Its cobbled streets, walls, castle and moat carved out of the rock — hence the name, meaning «carved stone» — make for an easy, unhurried morning.',
          'The village is small and in high season it fills up by mid-morning. If you can, go early or at sunset, when the stone turns golden and the terraces come to life. Cars stay outside the old centre, so allow for a short walk from the car park.',
        ],
      },
      {
        h2: 'More medieval villages just minutes away',
        items: [
          { title: 'Ullastret', text: '5 minutes away. A beautiful walled village and, just outside it, the Iberian Settlement of Ullastret, one of the most important Iberian sites in Catalonia, with a museum and the remains of walls on an old hill beside what was once a lake.' },
          { title: 'Pals', text: '15 minutes away. Its Gothic quarter on a hilltop, with the Torre de les Hores and a viewpoint over the rice fields and the Medes Islands, is one of the most photogenic walks in the Empordà.' },
          { title: 'La Bisbal d’Empordà', text: '15 minutes away. The capital of ceramics: pottery shops and workshops line the main street, and there is a castle-palace that was once home to the bishops of Girona.' },
          { title: 'Monells, Cruïlles and Vulpellac', text: 'Three little gems very close to one another: the arcaded square of Monells, the tower and the monastery of Sant Miquel de Cruïlles, and the castle-palace of Vulpellac. Perfect for a leisurely afternoon.' },
          { title: 'Begur', text: '25 minutes away. A hilltop village crowned by the ruins of its castle, with views along the whole coast and the colonial-style houses built by the «indianos», locals who made their fortune in the Americas and came home.' },
        ],
      },
      {
        h2: 'Costa Brava coves and beaches',
        paragraphs: [
          'The coast is half an hour away and has two very different sides: long sandy beaches to the north and rocky coves among the pines south of Begur.',
        ],
        items: [
          { title: 'Platja de Pals', text: '25 minutes away. A long, open beach backed by dunes and pine woods. There is room to spread out even in summer, and it is easy with children.' },
          { title: 'L’Estartit and the Medes Islands', text: '25 minutes away. The Medes are a protected marine area and one of the best spots in the Mediterranean for snorkelling or diving. Boat trips leave from the harbour to see them.' },
          { title: 'The coves of Begur', text: 'Aiguablava and Sa Riera (30 minutes away), Sa Tuna, Aiguafreda or Fornells: small coves of turquoise water among rocks and pines. They are the prettiest, and also the first to fill up.' },
          { title: 'Calella de Palafrugell, Llafranc and Tamariu', text: 'Calella is 30 minutes away. Fishing villages with whitewashed houses, boats pulled up on the sand and the arches of Port Bo. Ideal for a swim and dinner by the sea.' },
        ],
      },
      {
        h2: 'A tip for the coves in summer',
        paragraphs: [
          'In July and August the car parks at the coves are small, usually paid and fill up early. Your best bet is to arrive before ten or late in the afternoon. In spring and autumn the water is still pleasant and you will have them almost to yourself.',
        ],
      },
      {
        h2: 'Walking routes',
        items: [
          { title: 'The Camí de Ronda', text: 'The old coastal watch path that links cove to cove. The stretch between Calella de Palafrugell and Llafranc is short and easy; the one around the coves of Begur has more climbs and spectacular views.' },
          { title: 'Through the fields, from the house', text: 'The farm tracks around Peratallada and Ullastret are flat and peaceful, perfect for an evening stroll among olive trees, sunflowers or wheat, depending on the season.' },
          { title: 'The Montgrí', text: 'The massif that separates the Empordà from the sea, topped by Montgrí Castle above Torroella. The climb is demanding, but the views over the whole plain make it worthwhile.' },
          { title: 'Les Gavarres', text: 'The wooded hills between the Empordà and Girona, with forest tracks, hermitages and dolmens for shady walks.' },
        ],
      },
      {
        h2: 'Cycling in the Baix Empordà',
        paragraphs: [
          'The back roads linking the villages are flat, quiet and picture-postcard pretty: ideal for road riding, gravel or leisure bikes. The network of greenways across the Girona region lets you connect the inland area with the coast along old railway lines, with no cars.',
          'If you are coming to train seriously, Girona — 35 minutes away — is one of the world’s cycling capitals. Our page for [cyclists](/ciclistas) has the classic routes that start from there.',
        ],
      },
      {
        h2: 'Food and wine of the Empordà',
        paragraphs: [
          'The Empordà is proud of its own cuisine. Try Pals rice, grown in the paddies you will see between Pals and the coast; «mar i muntanya» (sea and mountain) dishes, which pair fish or seafood with meat or mushrooms; and the wines of the DO Empordà, which you can get to know at many wineries in the area.',
          'The local villages have weekly markets and producers’ shops where you can stock the house fridge with olive oil, cured meats, cheeses and seasonal fruit. The house’s outdoor kitchen and gas barbecue are made for exactly that.',
        ],
      },
      {
        h2: 'Ideas with children',
        items: [
          { title: 'Playing at being Iberians', text: 'The Ullastret archaeological site is open-air and feels like a small adventure among walls and houses more than two thousand years old.' },
          { title: 'Sandy beaches', text: 'Platja de Pals and the beaches near L’Estartit have fine sand and plenty of room to play.' },
          { title: 'Seeing fish without getting wet', text: 'Some trips to the Medes Islands are on glass-bottomed boats.' },
          { title: 'The pool at home', text: 'After a morning out, the private pool and the 6,500 m² garden are the best plan of all. Please note: the pool is not fenced, so always keep an eye on little ones.' },
        ],
      },
      {
        h2: 'With your dog',
        paragraphs: [
          'The house accepts one pet and the garden is huge. The tracks through the fields are perfect for long walks, and the medieval villages are easy to visit with your dog on a lead. On the beaches the rules vary by municipality and time of year — in summer many do not allow dogs — so check local regulations before you go.',
        ],
      },
      {
        h2: 'When to come',
        paragraphs: [
          'Spring and autumn are the best times to explore the villages and go walking: mild temperatures and far fewer people. Summer is for the coves and the pool. And in winter the Empordà is pure calm: quiet villages, a crackling fire and clear days swept by the tramontana wind.',
        ],
      },
    ],
    ctaTitle: 'Your base in the Empordà',
    ctaText: 'Country house for 5 people with a private pool all year round, a 6,500 m² garden, and pets welcome. Book direct, with free cancellation up to 30 days before arrival and no security deposit.',
    ctaButton: 'Check availability',
  },

  queVer: {
    metaTitle: 'Things to Do in Girona on Foot: 1 & 2-Day Old Town Walk',
    metaDescription: 'What to see in Girona on foot from the Rambla de la Llibertat: the Cathedral, the Call, the walls, the Onyar houses and museums, with 1- and 2-day routes.',
    breadcrumb: 'What to see in Girona',
    eyebrow: 'Girona Guide',
    h1: 'What to See in Girona on Foot from the Barri Vell',
    lead: 'Girona is a city to explore on foot. From the Rambla de la Llibertat, where our apartments are, the whole Barri Vell (old town) is just a few minutes’ walk away: you will not need the car for your entire stay. This is the route we recommend to our guests, with a 1-day and a 2-day plan at the end.',
    sections: [
      {
        h2: 'The Rambla de la Llibertat and the houses on the Onyar',
        paragraphs: [
          'The Rambla is the arcaded promenade that runs alongside the river Onyar, lined with terraces, bookshops and long-established shops. It is the best starting point for any walk.',
          'Girona’s most famous view is the row of colourful houses overlooking the Onyar. They are best seen from the bridges: Sant Agustí, the Pont de Pedra and the Pont de les Peixateries Velles, the red iron bridge attributed to Gustave Eiffel’s workshop. On the other side of the river is the Plaça de la Independència, an arcaded square full of restaurants.',
        ],
      },
      {
        h2: 'The Cathedral and its steps',
        paragraphs: [
          'The grand Baroque staircase leading up to the Cathedral is one of the most photographed spots in the city and featured in the sixth season of Game of Thrones. Inside, its Gothic nave — one of the widest in the world — is a real surprise. Allow time for the Romanesque cloister and the treasury museum.',
        ],
      },
      {
        h2: 'The Call, the Jewish quarter',
        paragraphs: [
          'Girona’s Call is one of the best-preserved medieval Jewish quarters in Europe: a maze of narrow alleys, steps and courtyards around Carrer de la Força. The Museum of Jewish History tells the story of the community that lived here until the end of the 15th century.',
        ],
      },
      {
        h2: 'The Passeig de la Muralla',
        paragraphs: [
          'You can walk along the top of the medieval city walls for much of their length, climbing the towers to look out over the rooftops of the Barri Vell, the Cathedral and, on clear days, the Pyrenees. There are several access points, so you can do just one stretch.',
        ],
      },
      {
        h2: 'Banys Àrabs, Sant Pere de Galligants and Sant Feliu',
        items: [
          { title: 'Banys Àrabs', text: 'Medieval public baths in the Romanesque style, inspired by Muslim bathhouses, with a very photogenic columned hall and dome.' },
          { title: 'Sant Pere de Galligants', text: 'A former Romanesque monastery with a beautiful cloister, now home to the Archaeology Museum of Catalonia in Girona.' },
          { title: 'Basilica of Sant Feliu', text: 'One of the city’s most important churches, easy to spot by its truncated bell tower.' },
          { title: 'The lioness’s bottom', text: 'Next to Sant Feliu stands a column topped by a stone lioness. Tradition has it that whoever kisses it will return to Girona.' },
        ],
      },
      {
        h2: 'Museums for a rainy day',
        items: [
          { title: 'Museu del Cinema', text: 'A unique collection on the origins of cinema: magic lanterns, shadow puppets and pre-cinema devices. Highly recommended with children.' },
          { title: 'Museu d’Art', text: 'In the former bishop’s palace next to the Cathedral, with Romanesque and Gothic art from across the Girona region.' },
          { title: 'Museu d’Història de Girona', text: 'To understand the city from Roman times to the present day.' },
        ],
      },
      {
        h2: 'A breath of green: the Devesa and the Sant Daniel valley',
        paragraphs: [
          'The Devesa is a large city park of towering plane trees beside the river Ter, a short walk from the centre. And if you fancy heading into the countryside without taking the car, the Sant Daniel valley starts right behind the Barri Vell: a peaceful path between vegetable gardens leading to the monastery of the same name.',
        ],
      },
      {
        h2: '1-day route',
        items: [
          { title: 'Morning', text: 'Coffee on the Rambla de la Llibertat, then cross the Pont de les Peixateries Velles to see the houses on the Onyar and head up Carrer de la Força through the Call to the Cathedral.' },
          { title: 'Midday', text: 'Visit the Cathedral and walk down the steps to the Banys Àrabs and Sant Pere de Galligants. Lunch in the Barri Vell.' },
          { title: 'Afternoon', text: 'Climb up to the Passeig de la Muralla and follow it south to see the city from above. Head down towards Sant Feliu and don’t forget to kiss the lioness.' },
          { title: 'Evening', text: 'A stroll across the illuminated bridges and dinner in the Plaça de la Independència.' },
        ],
      },
      {
        h2: '2-day route',
        items: [
          { title: 'Day 1', text: 'The route above: the Onyar, the Call, the Cathedral, the Banys Àrabs, the walls and Sant Feliu.' },
          { title: 'Day 2 · morning', text: 'The Museum of Jewish History and the Museu d’Art, or the Museu del Cinema if you have children with you.' },
          { title: 'Day 2 · afternoon', text: 'A walk to the Devesa or a hike up the Sant Daniel valley. Later on, a vermouth on the Rambla.' },
        ],
      },
      {
        h2: 'Practical tips',
        paragraphs: [
          'The Barri Vell is full of slopes and steps: wear comfortable shoes and, if you have a pushchair, be ready to carry it on some stretches. Opening hours for museums and monuments vary by season, so check them before you go. And if you are arriving by car, read our guide on [where to park in Girona](/guia/aparcar-en-girona).',
        ],
      },
    ],
    ctaTitle: 'Stay in the Barri Vell',
    ctaText: 'Our 8 apartments are on the Rambla de la Llibertat, next to the Onyar: step out of the door and you are already on the route. Book direct, with no commission.',
    ctaButton: 'Check availability',
  },

  aparcar: {
    metaTitle: 'Where to Park in Girona Near the Old Town & How to Get Here',
    metaDescription: 'Where to park near Girona’s Barri Vell (free and paid), what to do with your luggage, and how to get here by car, high-speed train or plane.',
    breadcrumb: 'Where to park in Girona',
    eyebrow: 'Girona Guide',
    h1: 'Where to Park in Girona and How to Get to the Barri Vell',
    lead: 'The question we are asked most before guests arrive. In short: the Barri Vell and the Rambla de la Llibertat are pedestrian areas, so the car stays in a nearby car park and you do the rest on foot.',
    sections: [
      {
        h2: 'First things first: the old town is pedestrianised',
        paragraphs: [
          'Vehicle access to the Barri Vell is restricted to residents and authorised services. Don’t blindly trust your GPS: some sat-navs try to take you down streets you are not allowed to drive on. Set the car park you have chosen as your destination instead.',
        ],
      },
      {
        h2: 'Arriving by car',
        paragraphs: [
          'Girona sits right on the AP-7 motorway, which links it to Barcelona and France, with exits to the north and south of the city. From either one you can reach the centre in a few minutes by following the signs for the centre and then for the car park you have chosen.',
          'Arriving at night is no problem: check-in at our apartments is self-service with a code, so you can park without rushing and walk over at any time.',
        ],
      },
      {
        h2: 'Free parking: La Copa',
        paragraphs: [
          'La Copa car park is free and about a 10-minute walk from our apartments. It is the cheapest option for stays of several days. Because it is free it is very popular: at weekends, on bank holidays and during festivals such as Temps de Flors it can be full, so allow some extra time or have a back-up plan.',
        ],
      },
      {
        h2: 'Paid car parks near the centre',
        paragraphs: [
          'There are several paid underground car parks around the centre, including those run by Saba, just a few minutes’ walk from the Rambla. They are the most convenient option if you arrive with lots of luggage, at night or on very busy days. Some offer full-day rates or multi-day passes; compare prices before you book.',
        ],
      },
      {
        h2: 'Street parking',
        paragraphs: [
          'In the neighbourhoods around the centre there are on-street spaces, many of them in regulated zones with time limits. Always check the signs on the stretch where you park. For several days, a car park is more practical.',
        ],
      },
      {
        h2: 'What about the luggage?',
        paragraphs: [
          'The easiest thing is to park and walk over with your luggage — distances in Girona are short. If you are bringing a lot, travelling with young children or with bikes, [get in touch](/contacto) before you arrive and we will explain the best way to get close to your apartment.',
          'If you are coming by bike, don’t worry: in our apartments your bike sleeps indoors and the buildings have a lift.',
        ],
      },
      {
        h2: 'Arriving without a car: train and high-speed rail',
        paragraphs: [
          'Girona has a railway station with high-speed services, connecting it quickly to Barcelona and also to France. There are also regional trains to Barcelona, Figueres and the coast. From the station you can reach the Barri Vell on a pleasant walk or in a few minutes by taxi.',
          'Travelling by train is probably the easiest way to get here: you won’t have to look for parking and, once you are here, you won’t need any transport to get around the city. If you then fancy a day trip to the coast, you can hire a car just for that day.',
        ],
      },
      {
        h2: 'By plane',
        items: [
          { title: 'Girona-Costa Brava Airport', text: 'On the outskirts, south of the city. There are buses into town and a taxi service.' },
          { title: 'Barcelona-El Prat Airport', text: 'With more flights and destinations. From there you can reach Girona by direct bus or by combining with the high-speed train from Barcelona.' },
        ],
      },
      {
        h2: 'During your stay, forget about the car',
        paragraphs: [
          'Once you have settled in, everything that matters is within walking distance: the Call, the Cathedral, the walls, restaurants and markets. For ideas to fill your days, read [what to see in Girona on foot](/guia/que-ver-en-girona).',
        ],
      },
      {
        h2: 'Frequently asked questions',
        items: [
          { title: 'Do the apartments have their own parking?', text: 'No. They are in the pedestrian zone of the Barri Vell, so the car stays in one of the car parks nearby.' },
          { title: 'Can I drive right up to the door?', text: 'It’s not a good idea: access is restricted and monitored. Park first and walk over; if you have special circumstances, get in touch before you arrive.' },
          { title: 'Do I need a car to visit Girona?', text: 'No. The whole old town is easy to explore on foot. You will only need the car for day trips, for example to the Costa Brava or the Empordà.' },
          { title: 'What if I’m staying several days?', text: 'For longer stays, the free La Copa car park or a multi-day rate at a paid car park is worth it. Compare prices before you arrive.' },
          { title: 'Where do I leave my bike?', text: 'Inside the apartment. The buildings have a lift, so you won’t have to carry it up the stairs or leave it on the street.' },
          { title: 'What if I’m arriving in a motorhome or towing a trailer?', text: 'The centre is not designed for large vehicles. Get in touch before you arrive and we will advise you on where to leave it.' },
        ],
      },
    ],
    ctaTitle: 'Book your apartment in the centre',
    ctaText: 'Apartments on the Rambla de la Llibertat with self check-in: arrive whenever you like and let yourself in with your code. Book direct, with no commission.',
    ctaButton: 'Check availability',
  },

  tempsDeFlors: {
    metaTitle: 'Temps de Flors Girona: Flower Festival Guide & Where to Stay',
    metaDescription: 'What is Temps de Flors, Girona’s flower festival? How to visit without the queues, practical tips and why it’s worth staying in the Barri Vell.',
    breadcrumb: 'Temps de Flors',
    eyebrow: 'Girona Guide',
    h1: 'Temps de Flors in Girona: A Visitor’s Guide',
    lead: 'For a few days each spring, Girona fills with flowers. Temps de Flors is the city’s great festival: floral installations in courtyards, monuments, stairways and streets across the Barri Vell. Here is what you need to know to make the most of it.',
    sections: [
      {
        h2: 'What is Temps de Flors?',
        paragraphs: [
          'It is an exhibition of floral art held every year since the mid-20th century, and it has grown into one of the most visited events in Catalonia. Artists, florists, schools and local residents decorate dozens of spaces in the old town.',
          'Best of all, it lets you step into courtyards, cloisters and gardens that are closed to the public the rest of the year. Most spaces can be visited freely, with no ticket needed.',
        ],
      },
      {
        h2: 'When is it held?',
        paragraphs: [
          'Temps de Flors takes place in spring, usually in May, and lasts around a week. The dates change every year, so check Girona City Council’s official website before planning your trip.',
        ],
      },
      {
        h2: 'How to visit',
        items: [
          { title: 'Get the map', text: 'The spaces are numbered and the official map suggests a route. Pick the ones that interest you most first: seeing them all in one day is almost impossible.' },
          { title: 'Go early or at dusk', text: 'From mid-morning and in the afternoon, especially at weekends, queues form at the most popular spots, such as the Cathedral steps or the Banys Àrabs. First thing in the morning you can see them in peace.' },
          { title: 'Weekdays are better', text: 'If you can choose, weekdays are much quieter than the weekend.' },
          { title: 'Come back at night', text: 'Some spaces are lit up, and the atmosphere in the Barri Vell after dark is very different from the daytime.' },
        ],
      },
      {
        h2: 'What you’ll see',
        paragraphs: [
          'Every edition is different, but some spots tend to take centre stage: the Cathedral steps covered in flowers, the Banys Àrabs, the cloisters and churches of the Barri Vell, the alleyways of the Call and the courtyards of private houses that only open during the festival. Many installations play with the architecture of their setting, so it is worth noticing how each artist has interpreted the space.',
          'Alongside the installations, there are usually parallel events during the festival, such as concerts or food-related activities. The programme changes every year: check it on the official website.',
        ],
      },
      {
        h2: 'Why stay in the centre',
        paragraphs: [
          'During the festival the Barri Vell gets a huge number of visitors and parking becomes tricky. Staying in the centre lets you walk to every space, pop back to the apartment at midday for a rest and head out again once the crowds thin. Our apartments are on the Rambla de la Llibertat, right in the heart of the festival.',
          'If you are still coming by car, read our guide on [where to park in Girona](/guia/aparcar-en-girona) and expect the car parks to fill up earlier than usual.',
        ],
      },
      {
        h2: 'Book well in advance',
        paragraphs: [
          'It is one of the busiest weeks of the year in Girona. Accommodation in the centre gets booked up months ahead, so as soon as you know the dates, book. Booking directly on our website saves you third-party commission.',
          'If you are coming as a group or a family, our largest apartments, [Bergamota](/apartamentos/bergamota) and [Árbol de té](/apartamentos/arbol-de-te), sleep up to 6 people: they are the first to be booked for these dates. For couples, we have several apartments with views over the Onyar.',
        ],
      },
      {
        h2: 'Practical tips',
        items: [
          { title: 'Comfortable shoes', text: 'You will walk a lot, and there are steps and slopes all over the old town.' },
          { title: 'With a pushchair or wheelchair', text: 'Some spaces have steps, and at peak times it gets very crowded. Plan your route and go at quieter times.' },
          { title: 'Respect the installations', text: 'Look, take photos and enjoy, but don’t touch the flowers: they have to last the whole festival.' },
          { title: 'Travel light', text: 'A small backpack and some water are all you need. In the narrowest spaces you will be glad not to be carrying large bags.' },
          { title: 'Beyond the flowers', text: 'Make the most of your trip to discover the rest of the city with our guide to [what to see in Girona](/guia/que-ver-en-girona).' },
        ],
      },
      {
        h2: 'Eating during the festival',
        paragraphs: [
          'Restaurants in the Barri Vell fill up during Temps de Flors, especially at weekend lunchtimes. Book a table in advance or eat a little before or after peak times. An apartment with a kitchen gives you flexibility: you can enjoy a relaxed breakfast before heading out early, or have dinner at home after a long day.',
        ],
      },
      {
        h2: 'Spring in Girona and the surrounding area',
        paragraphs: [
          'May is a wonderful time to stay on for a few extra days. Walks along the city walls and through the Devesa are lovely in the good weather, and less than an hour away you have the medieval villages of the Empordà and the first coves of the season, still quiet. If you fancy combining city and countryside, take a look at our guide to [Peratallada and the Baix Empordà](/house/zona).',
        ],
      },
    ],
    ctaTitle: 'Stay right in the heart of Temps de Flors',
    ctaText: 'Apartments on the Rambla de la Llibertat, a few steps from the festival spaces. Book direct, with no commission.',
    ctaButton: 'Check availability',
  },

  cycling: {
    eyebrow: 'Routes from the door',
    h2: 'Cycling routes from Girona',
    intro: 'Some of the classic rides our cycling guests do, all starting from the Barri Vell without needing the car.',
    routes: [
      { title: 'Els Àngels', text: 'The climb to the Els Àngels sanctuary along the Gavarres road is the go-to climb for training from Girona: steady, with good tarmac and views over the city and the Empordà.' },
      { title: 'Rocacorba', text: 'The legendary climb north of Banyoles. Long and very tough in its final section, it is the one the pros use to test their form. You get there on quiet back roads.' },
      { title: 'Lake Banyoles', text: 'A flat ride out to Banyoles with a loop around the lake: perfect for an easy spin or a recovery day.' },
      { title: 'Carrilet greenway towards Olot', text: 'An old railway line turned greenway that climbs gently towards the Garrotxa. Ideal for gravel, leisure bikes and families.' },
      { title: 'Greenway towards Sant Feliu de Guíxols', text: 'The other Carrilet greenway runs down from Girona to the Costa Brava through the Ter valley and the foothills of Les Gavarres.' },
      { title: 'Costa Brava via Les Gavarres', text: 'Cross Les Gavarres to the coast and come back on the winding road between Sant Feliu de Guíxols and Tossa de Mar: one of the most beautiful rides in the Mediterranean.' },
    ],
    note: 'Distances and elevation depend on the variant you choose: plan your route with your usual app and check the condition of the greenways before setting off.',
  },
};
