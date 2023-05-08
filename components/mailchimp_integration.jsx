import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import myHtml from '!!raw-loader!./embedded_form.html';

const EmailForm = () => {
  return <div dangerouslySetInnerHTML={{ __html: myHtml }} />;
};

export default EmailForm;
