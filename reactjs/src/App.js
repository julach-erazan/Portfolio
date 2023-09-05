import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav/>
      <div className="bg-[url('/src/img/background.jpg')] w-full h-screen">
        <div className="text-white">
          <ul className="flex">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
      </div>
  </>
  );
}

export default App;
