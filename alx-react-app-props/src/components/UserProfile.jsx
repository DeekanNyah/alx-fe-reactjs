// src/components/UserProfile.jsx
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function UserProfile() {
  const { user } = useContext(UserContext);

  return (
    <section>
      <h3>User Profile</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </section>
  );
}

export default UserProfile;
