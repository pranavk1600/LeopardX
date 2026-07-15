import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import TechnologiesPage from './pages/TechnologiesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import Analytics from './components/Analytics';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <ScrollToTop />
      <Analytics />
      <Routes>
        {/* Home page renders directly as it contains its own Navbar and Footer */}
        <Route path="/" element={<Home />} />
        
        {/* Subpages render inside the reusable Layout wrapper */}
        <Route element={<Layout />}>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<ProjectsPage />} />
          <Route path="/technologies" element={<TechnologiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;