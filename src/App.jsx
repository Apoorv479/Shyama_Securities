// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import SecurityGuard from "./pages/services/SecurityGuard";
import Bouncer from "./pages/services/Bouncer";
import IndustrialWorkforce from "./pages/services/IndustrialWorkforce";
import OfficeSupportStaff from "./pages/services/OfficeSupportStaff";
import PantryBoy from "./pages/services/PantryBoy";
import Housekeeping from "./pages/services/Housekeeping";
import DataEntryOperator from "./pages/services/DataEntryOperator";
import Receptionist from "./pages/services/Receptionist";
import LogisticsStaff from "./pages/services/LogisticsStaff";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/security-guard" element={<SecurityGuard />} />
        <Route path="/services/bouncer" element={<Bouncer />} />
        <Route path="/services/industrial-workforce" element={<IndustrialWorkforce />} />
        <Route path="/services/office-support-staff" element={<OfficeSupportStaff/>} />
        <Route path="/services/pantry-boy" element={<PantryBoy />} />
        <Route path="/services/housekeeping" element={<Housekeeping />} />
        <Route path="/services/data-entry-operator" element={<DataEntryOperator />} />
        <Route path="/services/receptionist" element={<Receptionist />} />
        <Route path="/services/logistics-staff" element={< LogisticsStaff/>} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
