import React, { useState } from "react";
import { Mail, KeyRound, ArrowRight, ArrowLeft, MailCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AuthApi from "../api/auth.api";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email address is required");
      return;
    }

    if (!isValidEmail(email.trim())) {
      setError("Enter a valid email address");
      return;
    }

    try {
      setLoading(true);

      // Adjust this to match your API method / endpoint
      await AuthApi.forgotPassword({ email: email.trim() });

      setSent(true);
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Could not send reset link. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = () => {
    setSent(false);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">
        {/* Left Section */}
        <div className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white p-12 flex flex-col justify-center">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-8">
            <KeyRound size={42} />
          </div>

          <h1 className="text-4xl font-bold leading-tight">
            Forgot your password?
          </h1>

          <p className="mt-6 text-blue-100 text-lg leading-relaxed">
            It happens. Enter the email linked to your account and we'll send
            you a link to set a new password.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span>Reset link sent to your email</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span>Link expires for your safety</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span>Your loan data stays protected</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-10 lg:p-14 flex items-center">
          <div className="max-w-md mx-auto w-full">
            {!sent ? (
              <>
                <h2 className="text-3xl font-bold text-gray-800">
                  Reset password
                </h2>

                <p className="text-gray-500 mt-2">
                  We'll email you a link to create a new password.
                </p>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email Address
                    </label>

                    <div
                      className={`flex items-center border rounded-xl px-4 py-3 focus-within:border-blue-600 ${
                        error ? "border-red-400" : ""
                      }`}
                    >
                      <Mail className="text-gray-400 mr-3" size={20} />

                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError("");
                        }}
                        placeholder="Enter your registered email"
                        autoComplete="email"
                        className="w-full outline-none"
                      />
                    </div>

                    {error && (
                      <p className="mt-2 text-sm text-red-600" role="alert">
                        {error}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2 transition"
                  >
                    {loading ? "Sending link..." : "Send reset link"}
                    {!loading && <ArrowRight size={18} />}
                  </button>

                  {/* Back to login */}
                  <button
                    type="button"
                    onClick={() => navigate("/login")}
                    className="w-full border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white py-3 rounded-xl font-semibold transition flex justify-center items-center gap-2"
                  >
                    <ArrowLeft size={18} />
                    Back to login
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
                  <MailCheck size={40} />
                </div>

                <h2 className="text-3xl font-bold text-gray-800">
                  Check your email
                </h2>

                <p className="text-gray-500 mt-3">
                  We sent a password reset link to
                </p>
                <p className="font-semibold text-gray-800 break-all">{email}</p>

                <p className="text-gray-500 text-sm mt-4">
                  Can't find it? Check your spam folder, or try again with a
                  different email.
                </p>

                <div className="mt-8 space-y-4">
                  <button
                    type="button"
                    onClick={() => navigate("/login")}
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2 transition"
                  >
                    Back to login
                    <ArrowRight size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={handleResend}
                    className="w-full border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white py-3 rounded-xl font-semibold transition"
                  >
                    Use a different email
                  </button>
                </div>
              </div>
            )}

            <div className="mt-10 text-center text-gray-500 text-sm">
              © 2026 Elite Loan Associates. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;