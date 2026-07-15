import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoanLandingPage from "./pages/LoanLandingpage";
import EMICalculator from "./pages/EMICalculator";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import HomeLoan from "./pages/HomeLoan";
import BusinessLoan from "./pages/BusinessLoan";
import EducationLoan from "./pages/EducationLoan";
import VehicleLoan from "./pages/VehicleLoan"
import Login from "./pages/Login";
import Register from "../src/pages/Register"
import PersonalLoan from "./pages/PersonalLoan";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LoanLandingPage />} />
        <Route path="/emi" element={<EMICalculator />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="personal-loan" element={<PersonalLoan />} />
        <Route path="home-loan" element={<HomeLoan />} />
        <Route path="business-loan" element={<BusinessLoan />} />
        <Route path="education-loan" element={<EducationLoan />} />
        <Route path="vehicle-loan" element={<VehicleLoan />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;