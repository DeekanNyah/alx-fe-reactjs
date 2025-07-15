import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = {
    name: "Jane Doe",
    age: 28,
    bio: "Loves hiking and photography"
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
