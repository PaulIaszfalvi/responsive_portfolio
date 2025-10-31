import "./App.css";
import { Navbar, Home, About, Portfolio, Contact } from "./components/index";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="sections">
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
