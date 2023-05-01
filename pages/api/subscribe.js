import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
  const response = await fetch(`https://us6.api.mailchimp.com/3.0/lists/${process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID}/members`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${Buffer.from(`anystring:${process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY}`).toString('base64')}`
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed'
    })
  });

  const responseData = await response.json();

  if (response.ok) {
    res.status(200).json({ message: 'Thanks for subscribing!' });
  } else {
    console.error('Mailchimp API error:', responseData);
    res.status(500).json({ message: 'Sorry, something went wrong. Please try again later.' });
  }
} catch (error) {
  console.error('Error:', error);
  res.status(500).json({ message: 'Sorry, something went wrong. Please try again later.' });
}
