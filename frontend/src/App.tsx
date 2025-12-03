import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./home/Home";
import Footer from "./components/Footer";
import About from "./about/About";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";

function App() {
  return (
    <div className="bg-[#F6EFD2] text-[#000000] min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar /> <Home /> <Footer /></>} />
          <Route path="/about" element={<><Navbar /> <About /> <Footer /></>} />
          <Route path="/contact" element={<><Navbar /> <Contact /> <Footer /></>} />
          <Route path="/our-projects" element={<><Navbar /> <Projects /> <Footer /></>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
