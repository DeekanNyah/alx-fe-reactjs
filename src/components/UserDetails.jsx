// src/components/UserDetails.jsx
import React from 'react';

function UserDetails({ age, location }) {
  return (
    <div>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default UserDetails;
