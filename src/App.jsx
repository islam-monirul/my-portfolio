import GlowOrb from './components/GlowOrb.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Experience from './sections/Experience.jsx';
import Education from './sections/Education.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink-950 text-ink-200">
      {/* Subtle grid backdrop */}
      <div className="pointer-events-none fixed inset-0 -z-20 grid-bg opacity-60" />
      {/* Soft top-down vignette */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-gradient-to-b from-ink-950 via-ink-950/60 to-ink-950" />

      {/* The continuously moving glowing ocean blue thing */}
      <GlowOrb />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
