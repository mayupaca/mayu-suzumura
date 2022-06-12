// import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Skill from "./components/pages/Skill";
import Work from "./components/pages/Work";
// import Router from "./router/Router";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Work />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
