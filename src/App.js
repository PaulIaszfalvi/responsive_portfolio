import "./App.css";
import { Navbar, Home, About, Portfolio, Contact } from "./components/index";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <Home />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
