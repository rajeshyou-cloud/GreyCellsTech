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
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="/process" element={<Process />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}


export default App;