import Navigation from '@components/layout/Navigation';
import Footer from '@components/layout/Footer';
import Hero from '@sections/Hero';
import About from '@sections/About';
import Services from '@sections/Services';
import WhyChooseUs from '@sections/WhyChooseUs';
import Contact from '@sections/Contact';

/**
 * Main Application Component
 * 
 * This is the root component that assembles all sections
 * of the PixelMinds Solutions website.
 */
function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
