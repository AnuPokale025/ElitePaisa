import React, { useState, useRef, useEffect } from "react";
import { ShieldCheck, ArrowRight, ArrowLeft, MailCheck } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthApi from "../api/auth.api";

const OTP_LENGTH = 6;
const RESEND_SECONDS = 30;

const OtpVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Email is passed from the Forgot Password page:
  // navigate("/verify-otp", { state: { email } })
  const email = location.state?.email || "";

  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [timer, setTimer] = useState(RESEND_SECONDS);
  const inputsRef = useRef([]);

  // Send the user back if they landed here without an email
  useEffect(() => {
    if (!email) navigate("/forget", { replace: true });
  }, [email, navigate]);

  // Focus first box on load
  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  // Resend countdown
  useEffect(() => {
    if (timer <= 0) return;
    const id = setTimeout(() => setTimer((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timer]);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; // digits only
    const next = [...otp];
    next[index] = value;
    setOtp(next);
    setError("");

    if (value && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH);
    if (!pasted) return;

    const next = Array(OTP_LENGTH).fill("");
    pasted.split("").forEach((digit, i) => (next[i] = digit));
    setOtp(next);
    setError("");
    inputsRef.current[Math.min(pasted.length, OTP_LENGTH - 1)]?.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setInfo("");

    const code = otp.join("");
    if (code.length < OTP_LENGTH) {
      setError(`Enter the ${OTP_LENGTH}-digit code`);
      return;
    }

    try {
      setLoading(true);

      // Adjust this to match your API method / endpoint
      const response = await AuthApi.verifyOtp({ email, otp: code });
      const payload = response?.data ?? response;

      navigate("/reset-password", {
        replace: true,
        state: { email, resetToken: payload?.resetToken, otp: code },
      });
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Invalid or expired code. Please try again.";
      setError(message);
      setOtp(Array(OTP_LENGTH).fill(""));
      inputsRef.current[0]?.focus();
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (timer > 0) return;
    setError("");
    setInfo("");

    try {
      await AuthApi.forgotPassword({ email });
      setOtp(Array(OTP_LENGTH).fill(""));
      setTimer(RESEND_SECONDS);
      setInfo("A new code has been sent to your email.");
      inputsRef.current[0]?.focus();
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Could not resend the code. Please try again.";
      setError(message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">
        {/* Left Section */}
        <div className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white p-12 flex flex-col justify-center">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-8">
            <ShieldCheck size={42} />
          </div>

          <h1 className="text-4xl font-bold leading-tight">
            Verify it's you
          </h1>

          <p className="mt-6 text-blue-100 text-lg leading-relaxed">
            For your security, we sent a one-time code to your email. Enter it
            to continue resetting your password.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span>Code is valid for a short time only</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span>Never share your code with anyone</span>
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
            <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-6">
              <MailCheck size={30} />
            </div>

            <h2 className="text-3xl font-bold text-gray-800">
              Enter verification code
            </h2>

            <p className="text-gray-500 mt-2">
              We sent a {OTP_LENGTH}-digit code to
            </p>
            <p className="font-semibold text-gray-800 break-all">{email}</p>

            <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
              {/* OTP inputs */}
              <div>
                <div className="flex justify-between gap-2 sm:gap-3">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputsRef.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      autoComplete={index === 0 ? "one-time-code" : "off"}
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={handlePaste}
                      onFocus={(e) => e.target.select()}
                      aria-label={`Digit ${index + 1}`}
                      className={`w-full aspect-square max-w-[3.5rem] text-center text-2xl font-semibold text-gray-800 border rounded-xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 ${
                        error ? "border-red-400" : ""
                      }`}
                    />
                  ))}
                </div>

                {error && (
                  <p className="mt-3 text-sm text-red-600" role="alert">
                    {error}
                  </p>
                )}
                {info && !error && (
                  <p className="mt-3 text-sm text-green-600">{info}</p>
                )}
              </div>

              {/* Verify */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2 transition"
              >
                {loading ? "Verifying..." : "Verify code"}
                {!loading && <ArrowRight size={18} />}
              </button>

              {/* Resend */}
              <div className="text-center text-sm text-gray-500">
                Didn't get the code?{" "}
                {timer > 0 ? (
                  <span className="font-semibold text-gray-700">
                    Resend in {timer}s
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={handleResend}
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Resend code
                  </button>
                )}
              </div>

              {/* Back */}
              <button
                type="button"
                onClick={() => navigate("/forget")}
                className="w-full border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white py-3 rounded-xl font-semibold transition flex justify-center items-center gap-2"
              >
                <ArrowLeft size={18} />
                Use a different email
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

export default OtpVerification;