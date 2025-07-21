// src/components/UserInfo.jsx
import React from 'react';

function UserInfo({ name, email }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default UserInfo;
