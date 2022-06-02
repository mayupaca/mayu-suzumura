import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Router from "./router/Router";


function App() {
  return (
    <BrowserRouter>
      {/* <div className="App">
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/work">work</Link>
        <Link to="/skill">skill</Link>
        <Link to="/contact">contact</Link>
      </div> */}

      <Router />
      
    </BrowserRouter>
  );
}

export default App;
