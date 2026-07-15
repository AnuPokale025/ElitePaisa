import React from "react";
import {
  User,
  Mail,
  Phone,
  Lock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Section */}
        <div className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white p-12 flex flex-col justify-center">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-8">
            <ShieldCheck size={42} />
          </div>

          <h1 className="text-4xl font-bold leading-tight">
            Join Elite Loan Associates
          </h1>

          <p className="mt-6 text-blue-100 text-lg leading-relaxed">
            Create your account to apply for loans, track application
            status, manage EMI schedules, and enjoy secure financial
            services anytime.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span>Quick Registration</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span>Secure Personal Information</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span>Easy Loan Application Process</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-10 lg:p-14">
          <div className="max-w-md mx-auto">

            <h2 className="text-3xl font-bold text-gray-800">
              Create Account
            </h2>

            <p className="text-gray-500 mt-2">
              Register to access our loan services.
            </p>

            <form className="mt-8 space-y-5">

              {/* Full Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>

                <div className="flex items-center border rounded-xl px-4 py-3 focus-within:border-blue-600">
                  <User className="text-gray-400 mr-3" size={20} />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>

                <div className="flex items-center border rounded-xl px-4 py-3 focus-within:border-blue-600">
                  <Mail className="text-gray-400 mr-3" size={20} />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full outline-none"
                  />
                </div>
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Mobile Number
                </label>

                <div className="flex items-center border rounded-xl px-4 py-3 focus-within:border-blue-600">
                  <Phone className="text-gray-400 mr-3" size={20} />

                  <input
                    type="tel"
                    placeholder="Enter mobile number"
                    className="w-full outline-none"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Password
                </label>

                <div className="flex items-center border rounded-xl px-4 py-3 focus-within:border-blue-600">
                  <Lock className="text-gray-400 mr-3" size={20} />

                  <input
                    type="password"
                    placeholder="Create password"
                    className="w-full outline-none"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Confirm Password
                </label>

                <div className="flex items-center border rounded-xl px-4 py-3 focus-within:border-blue-600">
                  <Lock className="text-gray-400 mr-3" size={20} />

                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="w-full outline-none"
                  />
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  className="mt-1"
                />

                <p className="text-sm text-gray-600">
                  I agree to the{" "}
                  <span className="text-blue-700 font-semibold cursor-pointer">
                    Terms & Conditions
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-700 font-semibold cursor-pointer">
                    Privacy Policy
                  </span>
                </p>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2 transition"
              >
                Create Account
                <ArrowRight size={18} />
              </button>

              {/* Login */}
              <button

              onClick={()=>{navigate('/login')}}
                type="button"
                className="w-full border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white py-3 rounded-xl font-semibold transition"
              >
                Already Have an Account?
              </button>
            </form>

            <div className="mt-10 text-center text-gray-500 text-sm">
              © 2026 Elite Loan Associates. All Rights Reserved.
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Register;