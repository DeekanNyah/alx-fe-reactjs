import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* 👤 Introduce yourself first */}
      <UserProfile
        name="Deekan"
        age={28}
        bio="I love gaming, exploring new tech, and photography."
      />

      {/* 🏙️ Then talk about the places you love */}
      <Header />
      <MainContent />

      <Footer />
    </>
  );
}

export default App;
