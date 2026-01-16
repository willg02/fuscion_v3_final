import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message, formType } = req.body;

  // Validate required fields
  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required' });
  }

  // Determine email subject based on form type
  const subject = formType === 'journey' 
    ? 'New Journey Reflection from FUSCION' 
    : 'New Alignment Conversation Request from FUSCION';

  // Build email content
  const emailContent = formType === 'journey'
    ? `
      <h2>New Journey Reflection</h2>
      <p><strong>Reflection:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `
    : `
      <h2>New Alignment Conversation Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

  try {
    const data = await resend.emails.send({
      from: 'FUSCION <onboarding@resend.dev>',
      to: ['drdalsania@gmail.com'],
      replyTo: email,
      subject: subject,
      html: emailContent,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
