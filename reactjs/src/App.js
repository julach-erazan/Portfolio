import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact"; 
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <div id="home" className="bg-[url('/src/img/background.png')] w-full h-screen bg-cover bg-center">
        <Home/>
      </div>

      <div id="about" className="lg:bg-[url('/src/img/about_bg.png')] bg-[url('/src/img/trans.png')] w-full min-h-screen bg-cover">
        <About/>
      </div>

      <div id="projects">
        <Projects/>
      </div>

      <div id="contact">
        <Contact/>
      </div>
      <div className="w-full h-[40px] bg-black">
        <p className="text-[#999] text-center pt-[7px]">© 2023 Julach Earzan. All copyright rights reserved</p>
      </div>
      <Slider/>
  </>
  );
}

export default App;
