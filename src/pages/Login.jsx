import React from "react";
import { Mail, Lock, ShieldCheck, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {

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
            Welcome Back!
          </h1>

          <p className="mt-6 text-blue-100 text-lg leading-relaxed">
            Access your loan dashboard, track applications, manage EMI
            schedules, and enjoy secure financial services with ease.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span>100% Secure Login</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span>Fast Loan Approval</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span>Track Loan Status Anytime</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-10 lg:p-14">
          <div className="max-w-md mx-auto">

            <h2 className="text-3xl font-bold text-gray-800">
              Login
            </h2>

            <p className="text-gray-500 mt-2">
              Sign in to continue to your account.
            </p>

            <form className="mt-8 space-y-6">

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

              {/* Password */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Password
                </label>

                <div className="flex items-center border rounded-xl px-4 py-3 focus-within:border-blue-600">
                  <Lock className="text-gray-400 mr-3" size={20} />

                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full outline-none"
                  />
                </div>
              </div>

              {/* Remember */}
              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2 text-gray-600 text-sm">
                  <input type="checkbox" />
                  Remember Me
                </label>

                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login */}
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2 transition"
              >
                Login
                <ArrowRight size={18} />
              </button>

              {/* Register */}
              <button
                type="button"
              onClick={()=>{navigate('/register')}}
                className="w-full border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white py-3 rounded-xl font-semibold transition"
              >
                Create New Account
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

export default Login;