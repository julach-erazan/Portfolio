import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <div id="home">
        <Home/>
      </div>

      <div id="about">
        <About/>
      </div>

      <div id="projects">
        <Projects/>
      </div>

      <div id="contact">
        <Contact/>
      </div>
  </>
  );
}

export default App;
