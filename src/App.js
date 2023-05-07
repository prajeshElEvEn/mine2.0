
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomeNav from './components/HomeNav';

function App() {
  return (
    <>
      <HomeNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
