import "./App.css";
import Hero from "./Hero/Hero";
import Stun from "./Stun/Stun";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./About/About";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/r5"
          element={[<Hero />, <Projects />, <Stun />, <Contact />, <Footer />]}
        ></Route>
        <Route path="/about" element={[<About />]}></Route>
      </Routes>
    </div>
  );
}

export default App;
