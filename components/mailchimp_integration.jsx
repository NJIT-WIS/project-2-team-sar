import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function EmailForm() {
  const [email, setEmail] = useState('');

  console.log('API key:', process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY);
  console.log('List ID:', process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with email:', email);
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

    if (response.ok) {
      setEmail('');
      alert('Thanks for subscribing!');
    } else {
      alert('Sorry, something went wrong. Please try again later.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formEmail">
        <Form.Label>Enter your email address to receive updates:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </Form.Group>
      <Button variant="primary" type="submit">Subscribe</Button>
    </Form>
  );
}

export default EmailForm;
