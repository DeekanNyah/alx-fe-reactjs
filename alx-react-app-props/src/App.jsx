// src/App.jsx
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <div className="app">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
