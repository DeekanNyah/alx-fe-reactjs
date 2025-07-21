// src/components/ProfilePage.jsx
import React from 'react';
import UserInfo from './UserInfo';
import UserDetails from './UserDetails';

function ProfilePage() {
  return (
    <div>
      <h1>User Profile</h1>
      <UserInfo name="Heavenelle Nyah" email="heavenelle@example.com" />
      <UserDetails age={24} location="Nigeria" />
    </div>
  );
}

export default ProfilePage;
