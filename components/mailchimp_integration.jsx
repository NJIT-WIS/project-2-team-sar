import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function EmailForm() {
  const [email, setEmail] = useState('');

  console.log('API key:', process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY);
  console.log('List ID:', process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID);

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('handleSubmit called');

  const response = await fetch('/api/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
    }),
  });

  const result = await response.json();

  if (response.ok) {
    setEmail('');
    alert(result.message);
  } else {
    alert(result.message);
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
