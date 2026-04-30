export async function onRequestGet(context) {
  const { env } = context;
  const apiKey = env.GOOGLE_PLACES_API_KEY;
  const placeId = 'ChIJXaF0pMTnuhIRDyEJziGYj2c';

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  if (!apiKey) {
    // Return mock data when no API key is set (dev / first deploy)
    return new Response(JSON.stringify({
      name: 'Aromatik Apartments',
      rating: 5.0,
      user_ratings_total: 0,
      reviews: []
    }), { headers });
  }

  try {
    const fields = 'name,rating,user_ratings_total,reviews';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&language=es&key=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.status !== 'OK') {
      return new Response(JSON.stringify({ error: data.status }), { status: 500, headers });
    }

    const { name, rating, user_ratings_total, reviews } = data.result;

    // Sort by most recent, cap at 6
    const sorted = (reviews || [])
      .sort((a, b) => b.time - a.time)
      .slice(0, 6);

    return new Response(JSON.stringify({
      name: name || 'Aromatik Apartments',
      rating: rating || 0,
      user_ratings_total: user_ratings_total || 0,
      reviews: sorted.map(r => ({
        author: r.author_name,
        avatar: r.profile_photo_url || '',
        rating: r.rating,
        text: r.text,
        time: r.relative_time_description,
      }))
    }), { headers });

  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500, headers });
  }
}
