import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '@components/layout/Navigation';
import Footer from '@components/layout/Footer';
import Hero from '@sections/Hero';
import About from '@sections/About';
import Services from '@sections/Services';
import WhyChooseUs from '@sections/WhyChooseUs';
import Contact from '@sections/Contact';
import Careers from './pages/Careers';

/**
 * Main Application Component
 * 
 * This is the root component that assembles all sections
 * of the PixelMinds Solutions website.
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Services />
                <WhyChooseUs />
                <Contact />
              </>
            } />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
