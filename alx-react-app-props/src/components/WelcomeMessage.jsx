// src/components/WelcomeMessage.jsx
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function WelcomeMessage() {
  const { user } = useContext(UserContext);

  return <h2>Hello, {user.name}! 👋</h2>;
}

export default WelcomeMessage;
