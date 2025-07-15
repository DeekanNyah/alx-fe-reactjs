import UserContext from './UserContext';
import ProfilePage from './ProfilePage';

function App() {
  const userData = { name: "Jane Doe", age: 28, bio: "Loves hiking" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
