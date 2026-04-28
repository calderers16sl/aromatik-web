export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const formData = await request.formData();
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const phone = formData.get('phone') || '';
    const subject = formData.get('subject') || '';
    const message = formData.get('message') || '';

    const RESEND_API_KEY = env.RESEND_API_KEY;
    const TO_EMAIL = env.CONTACT_EMAIL || 'hola@aromatik.apartments';

    if (!RESEND_API_KEY) {
      console.log('Contact form submission (no API key):', { name, email, subject });
      return new Response(JSON.stringify({ ok: true }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const emailBody = `Nuevo mensaje desde aromatik.apartments\n\nNombre: ${name}\nEmail: ${email}\nTeléfono: ${phone || 'No facilitado'}\nAsunto: ${subject || 'No especificado'}\n\nMensaje:\n${message}`;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + RESEND_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Aromatik Apartments <web@aromatik.apartments>',
        to: [TO_EMAIL],
        reply_to: email,
        subject: '[Web] ' + (subject || 'Consulta') + ' — ' + name,
        text: emailBody,
      }),
    });

    if (res.ok) {
      return new Response(JSON.stringify({ ok: true }), {
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      throw new Error('Resend error: ' + res.status);
    }
  } catch (err) {
    console.error('Contact function error:', err);
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
