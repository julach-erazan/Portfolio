import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div id="home" className="bg-[url('/src/img/background.png')] w-full min-w-[300px] h-screen bg-cover bg-center">
        <Nav/>
        <div>
          <h1 className="text-white">
            Hello, Im Julach Earzan<br/>
            <div className="inline-block">
              <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white
              pr-10 text-[40px] text-white font-bold font-moonhouse"> Hello, I,m Front-End Developer</p>
            </div>
          </h1>
        </div>
      </div>

      <div id="about"className="bg-[url('/src/img/background.jpg')] w-full h-screen bg-cover">
        <p className="font-moonhouse text-white text-3xl">Hello</p>
        <div className="inline-block">
          <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white
           pr-10 text-5xl text-white font-bold font-moonhouse"> Hello, I,m Front-End Developer</p>
        </div>
      </div>

      <div id="projects"className="bg-[url('/src/img/background.jpg')] w-full h-screen bg-cover">
        <p className="font-moonhouse text-white text-3xl">Hello</p>
      </div>

      <div id="contact"className="bg-[url('/src/img/background.jpg')] w-full h-screen bg-cover">
        <p className="font-moonhouse text-white text-3xl">Hello</p>
        <div className="inline-block">
          <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white
           pr-10 text-5xl text-white font-bold font-moonhouse"> Hello, I,m Front-End Developer</p>
        </div>
      </div>
  </>
  );
}

export default App;
