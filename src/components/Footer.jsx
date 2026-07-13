import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                E
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  Elite<span className="text-blue-500">Paisa</span>
                </h2>
                <p className="text-sm text-gray-400">
                  Fast • Secure • Trusted
                </p>
              </div>
            </div>

            <p className="mt-6 leading-7 text-gray-400">
              LoanHub helps individuals and businesses achieve their financial
              goals with quick loan approvals, competitive interest rates, and
              transparent lending solutions.
            </p>

            {/* <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition"
              >
                <Twitter size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition"
              >
                <Linkedin size={18} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {[
                "Home",
                "About Us",
                "Services",
                "EMI Calculator",
                "Contact",
                "FAQs",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Loan Services */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Loan Services
            </h3>

            <ul className="space-y-3">
              {[
                "Personal Loan",
                "Home Loan",
                "Business Loan",
                "Education Loan",
                "Car Loan",
                "Gold Loan",
              ].map((loan) => (
                <li key={loan}>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition"
                  >
                    {loan}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin className="text-blue-500 mt-1" size={20} />
                <p>
                  123 Finance Street,
                  <br />
                  Mumbai, Maharashtra
                </p>
              </div>

              <div className="flex gap-3">
                <Phone className="text-blue-500" size={20} />
                <p>+91 98765 43210</p>
              </div>

              <div className="flex gap-3">
                <Mail className="text-blue-500" size={20} />
                <p>support@loanhub.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-slate-800 rounded-xl p-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-blue-500" />
              <h3 className="text-2xl font-semibold text-white">
                Subscribe to Our Newsletter
              </h3>
            </div>

            <p className="text-gray-400 mt-2">
              Get updates on loan offers, financial tips, and interest rates.
            </p>
          </div>

          <div className="flex w-full lg:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full lg:w-80 px-4 py-3 rounded-l-lg bg-slate-700 border border-slate-600 text-white outline-none"
            />

            <button className="bg-blue-600 hover:bg-blue-700 px-6 rounded-r-lg flex items-center justify-center transition">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} LoanHub. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-blue-400 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-blue-400 transition">
              Terms & Conditions
            </a>

            <a href="#" className="hover:text-blue-400 transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;