import { CanvasBackground } from './components/Background/CanvasBackground';
import { CustomCursor } from './components/Cursor/CustomCursor';
import { Navbar } from './components/Layout/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Certifications } from './sections/Certifications';
import { Contact } from './sections/Contact';
import { Footer } from './components/Layout/Footer';

export default function App() {
  return (
    <main className="relative min-h-screen selection:bg-primary/30">
      <CustomCursor />
      <CanvasBackground />
      <Navbar />

      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}