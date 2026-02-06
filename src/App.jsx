import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Landing from './pages/Landing.jsx';
import Services from './pages/Services.jsx';
import Industries from './pages/Industries.jsx';
import CaseStudies from './pages/CaseStudies.jsx';
import Process from './pages/Process.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Careers from './pages/Careers.jsx';
import Contact from './pages/Contact.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import FAQ from './pages/FAQ.jsx';
import Resources from './pages/Resources.jsx';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename="/greycells">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}


export default App;