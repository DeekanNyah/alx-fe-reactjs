import './UserProfile.css';

const UserProfile = ({ name, age, bio, image }) => {
  return (
    <div className="user-card">
      {image && <img src={image} alt={`${name}'s avatar`} className="avatar" />}
      <div className="user-info">
        <h2>{name}</h2>
        <p><strong>Age:</strong> {age}</p>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default UserProfile;
