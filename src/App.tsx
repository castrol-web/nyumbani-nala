import { useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Home from "./home/Home";
import Footer from "./components/Footer";
import About from "./about/About";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import ScrollToTop from "./components/scroll/ScrollToTop";
import ScrollButton from "./components/scroll/ScrollButton";
import AdminLayout from "./Admin/dashboard/AdminLayout";
import OverviewView from "./Admin/dashboard/OverviewView";
import ManageDonations from "./Admin/Donations/ManageDonations";
import ManageContacts from "./Admin/Contact/ManageContacts";
import DonatePage from "./Donation/DonatePage";
import ThankYou from "./components/ThankYou";
import BecomePartner from "./components/Actions/BecomePartner";
import HowToHelp from "./components/HowToHelp/HowToHelp";
import ProjectsView from "./Admin/Projects/ProjectsView";
import ChangeMaker from "./components/Actions/ChangeMaker";
import Changemakers from "./Admin/changemakers/Changemakers";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="bg-[#111F35] text-white min-h-screen">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route index path="/" element={<><Navbar /> <Home /> <Footer /> <ScrollButton /></>} />
          <Route path="/about" element={<><Navbar /> <About /> <Footer /> <ScrollButton /> </>} />
          <Route path="/donate" element={<><Navbar /> <DonatePage /> <Footer /> <ScrollButton /> </>} />
          <Route path="/contact" element={<><Navbar /> <Contact /> <Footer /> <ScrollButton /> </>} />
          <Route path="/change-maker" element={<><Navbar /> <ChangeMaker /> <Footer /> <ScrollButton /> </>} />
          <Route path="/get-involved" element={<><Navbar /> <HowToHelp /> <Footer /> <ScrollButton /> </>} />
          <Route path="/our-projects" element={<><Navbar /> <Projects /> <Footer /> <ScrollButton /> </>} />
          <Route path="/donation/thank-you" element={<><Navbar /> <ThankYou /> <Footer /> <ScrollButton /> </>} />
          <Route path="/partner" element={<><Navbar /> <BecomePartner /> <Footer /> <ScrollButton /></>} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<OverviewView />} />
            <Route path="projects" element={<ProjectsView />} />
            <Route path="donations" element={<ManageDonations />} />
            <Route path="changemakers" element={<Changemakers />} />
            <Route path="contacts" element={<ManageContacts />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
