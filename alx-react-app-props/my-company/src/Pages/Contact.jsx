import { useState } from 'react';

function Contact() {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <textarea value={message} onChange={handleChange} placeholder="Type your message..." />
      <p>You typed: {message}</p>
    </div>
  );
}

export default Contact;
