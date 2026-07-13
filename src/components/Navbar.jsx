import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Search, Menu } from "lucide-react"
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [selectedLoan, setSelectedLoan] = useState("");


  const [loanOpen, setLoanOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div onClick={()=>{navigate('/')}} className="flex items-center space-x-2">
            <div  className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl">
              E
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Elite<span className="text-blue-600">Paisa</span>
              </h1>
              <p className="text-xs text-gray-500">
                Fast & Secure Loans
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">

            <a
              href="/"
              className="font-medium text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </a>

            {/* Dropdown */}
            <div className="relative">

              <button
                onClick={() => setLoanOpen(!loanOpen)}
                className="flex items-center gap-2 font-medium text-gray-700 hover:text-blue-600"
              >
                Loans
                <ChevronDown
                  size={18}
                  className={`transition-transform ${loanOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {loanOpen && (
                <div className="absolute top-12 left-0 w-60 bg-white rounded-xl shadow-xl border overflow-hidden z-50">

                  <button
                    onClick={() => {
                      navigate("/personal-loan");
                      setLoanOpen(false);
                    }}
                    className="w-full text-left px-5 py-3 hover:bg-blue-50"
                  >
                    Personal Loan
                  </button>

                  <button
                    onClick={() => {
                      navigate("/home-loan");
                      setLoanOpen(false);
                    }}
                    className="w-full text-left px-5 py-3 hover:bg-blue-50"
                  >
                    Home Loan
                  </button>

                  <button
                    onClick={() => {
                      navigate("/business-loan");
                      setLoanOpen(false);
                    }}
                    className="w-full text-left px-5 py-3 hover:bg-blue-50"
                  >
                    Business Loan
                  </button>

                  <button
                    onClick={() => {
                      navigate("/education-loan");
                      setLoanOpen(false);
                    }}
                    className="w-full text-left px-5 py-3 hover:bg-blue-50"
                  >
                    Education Loan
                  </button>

                  <button
                    onClick={() => {
                      navigate("/vehicle-loan");
                      setLoanOpen(false);
                    }}
                    className="w-full text-left px-5 py-3 hover:bg-blue-50"
                  >
                    Vehicle Loan
                  </button>

                </div>
              )}

            </div>

            <a
              href="/emi"
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              EMI Calculator
            </a>

            <a
              href="/about"
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              About
            </a>
            <a href="/FAQ"
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              FAQ
            </a>
            <a href="/blog"
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              Blogs
            </a>

            <a
              href="/contact"
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              Contact
            </a>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">



            <button 
            onClick={()=>{navigate('/login')}}
            className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
              Login
            </button>

            <button
            onClick={()=>{navigate('/register')}}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition">
              Register
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">

          <a
            href="/"
            className="block px-6 py-4 border-b"
          >
            Home
          </a>

          <a
            href="/personal-loan"
            className="block px-6 py-4 border-b"
          >
            Personal Loan
          </a>

          <a
            href="/home-loan"
            className="block px-6 py-4 border-b"
          >
            Home Loan
          </a>

          <a
            href="/business-loan"
            className="block px-6 py-4 border-b"
          >
            Business Loan
          </a>

          <a
            href="/education-loan"
            className="block px-6 py-4 border-b"
          >
            Education Loan
          </a>

          <a
            href="/vehicle-loan"
            className="block px-6 py-4 border-b"
          >
            Vehicle Loan
          </a>

          <a
            href="/emi"
            className="block px-6 py-4 border-b"
          >
            EMI Calculator
          </a>

          <a
            href="/about"
            className="block px-6 py-4 border-b"
          >
            About
          </a>

          <a
            href="/contact"
            className="block px-6 py-4 border-b"
          >
            Contact
          </a>

          <div className="p-6 space-y-3">

            <button className="w-full border border-blue-600 py-3 rounded-lg text-blue-600 font-semibold">
              Login
            </button>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">
              Apply Now
            </button>

          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;