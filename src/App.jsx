import "./App.scss";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="portfolio-container">
      <header className="hero-section">
        <h1>
          I build <span className="highlight">interactive</span> web
          experiences.
        </h1>
        <p>Front-End Developer • Animation Lover • UX Focused</p>
        <div className="scroll-down">
          <span>Scroll Down</span>
          <div className="arrow">↓</div>
        </div>
      </header>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
