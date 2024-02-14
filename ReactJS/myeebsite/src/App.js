import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactMe from "./ContactPage.js";
import Home from "./Home.js";
import Projects from "./Projects.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
