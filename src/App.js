import "./App.css";
import { Navbar, Home, About, Portfolio, Contact } from "./components/index";

function App() {
  document.title = "Paul's Portfolio";

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="sections">
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}

export default App;
