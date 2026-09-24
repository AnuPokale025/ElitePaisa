import { Routes, Route, useLocation } from "react-router-dom";
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
import Profile from "./pages/Profile";
import ForgotPassword from "./components/Forget";


function App() {
  const { pathname } = useLocation();
  const hideFooter = pathname === "/login" || pathname === "/register";

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
        <Route path="/profile" element={<Profile />} />
        <Route path="/forget" element={<ForgotPassword />} />
        <Route path="*" element={<h1 className="text-center text-3xl mt-20">404 Not Found</h1>} />
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
}

export default App;