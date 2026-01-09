import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./home/Home";
import Footer from "./components/Footer";
import About from "./about/About";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import ScrollToTop from "./components/scroll/ScrollToTop";
import ScrollButton from "./components/scroll/ScrollButton";

function App() {
  return (
    <div className="bg-[#F6EFD2] text-[#000000] min-h-screen">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route index path="/" element={<><Navbar /> <Home /> <Footer /> <ScrollButton /></>} />
          <Route path="/about" element={<><Navbar /> <About /> <Footer /> <ScrollButton /> </>} />
          <Route path="/contact" element={<><Navbar /> <Contact /> <Footer /> <ScrollButton /> </>} />
          <Route path="/our-projects" element={<><Navbar /> <Projects /> <Footer /> <ScrollButton /> </>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
