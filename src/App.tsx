import "./App.css";
import Hero from "./components/Hero";
import Snapshot from "./components/Snapshot/Snapshot";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import ZaloCaseStudy from "./components/Project/Zalo/ZaloCaseStudy";
import ReuseUniShowcase from "./components/Project/ReuseUni/ReuseShowcase";

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to top">
          <span className="wordmark-mark">C</span>
          <span>Anh Thu / Product</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a className="nav-contact" href="#contact">
            Let's talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>
      <main id="top">
        <Hero />
        <Snapshot />
        <ReuseUniShowcase/>
        <ZaloCaseStudy />
        <Experience />
        <Contact />
      </main>
      <footer>
        <span>© 2024 Anh Thu</span>
        <span>Built with curiosity &amp; care</span>
      </footer>
    </div>
  );
}

export default App;
