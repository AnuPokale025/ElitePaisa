import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Home,
  Briefcase,
  Car,
  GraduationCap,
  Wallet,
  Calculator,
  Clock3,
  BadgeCheck,
  ShieldCheck,
  Star,
} from "lucide-react";

import ContactModal from "../modal/ContactModal";
import { useNavigate } from "react-router-dom";

const loans = [
  {
    title: "Personal Loan",
    route: "/personal-loan",
    icon: <Wallet className="w-10 h-10 text-blue-600" />,
    desc: "Instant approval with minimal documentation.",
  },
  {
    title: "Home Loan",
    route: "/home-loan",
    icon: <Home className="w-10 h-10 text-blue-600" />,
    desc: "Affordable interest rates for your dream home.",
  },
  {
    title: "Business Loan",
    route: "/business-loan",
    icon: <Briefcase className="w-10 h-10 text-blue-600" />,
    desc: "Grow your business with flexible financing.",
  },
  {
    title: "Vehicle Loan",
    route: "/vehicle-loan",
    icon: <Car className="w-10 h-10 text-blue-600" />,
    desc: "Drive your dream car with easy EMIs.",
  },
  {
    title: "Education Loan",
    route: "/education-loan",
    icon: <GraduationCap className="w-10 h-10 text-blue-600" />,
    desc: "Support your education with flexible repayment.",
  },
  {
    title: "EMI Calculator",
    route: "/emi",
    icon: <Calculator className="w-10 h-10 text-blue-600" />,
    desc: "Estimate monthly installments instantly.",
  },
];

const features = [
  {
    icon: <Clock3 className="w-10 h-10 text-blue-600" />,
    title: "Quick Approval",
    desc: "Loan approval within 24 hours.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
    title: "Secure Process",
    desc: "100% encrypted and secure application.",
  },
  {
    icon: <BadgeCheck className="w-10 h-10 text-blue-600" />,
    title: "Lowest Interest",
    desc: "Competitive interest rates for every customer.",
  },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "The loan process was quick and hassle-free. Highly recommended!",
  },
  {
    name: "Priya Patel",
    text: "Excellent customer service and transparent pricing.",
  },
  {
    name: "Amit Verma",
    text: "Got my business loan approved in just one day.",
  },
];

const LoanLandingPage = () => {
  const [openContact, setOpenContact] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-widest text-blue-200 font-semibold">
              Fast • Secure • Trusted
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-4">
              Get Your Dream Loan
              <span className="block text-yellow-300">
                Approved in 24 Hours
              </span>
            </h1>

            <p className="mt-6 text-lg text-blue-100">
              Personal, Home, Business, Education and Vehicle loans with
              affordable interest rates and minimal documentation.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={() => setOpenContact(true)}
                className="bg-white text-blue-700 px-7 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Apply Now
              </button>

              <button className="border border-white px-7 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900"
              alt="Loan"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Loan Categories */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center">
          Our Loan Services
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Choose the loan that best suits your needs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {loans.map((loan, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-xl transition p-8"
            >
              {loan.icon}

              <h3 className="text-2xl font-semibold mt-5">
                {loan.title}
              </h3>

              <p className="text-gray-500 mt-3">
                {loan.desc}
              </p>

              <button
                onClick={() => navigate(loan.route)}
                className="mt-6 flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition"
              >
                Read More
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">
            Why Choose Us?
          </h2>

          <div className="grid lg:grid-cols-3 gap-10 mt-14">
            {features.map((item, i) => (
              <div
                key={i}
                className="text-center bg-gray-50 p-8 rounded-xl"
              >
                <div className="flex justify-center">{item.icon}</div>

                <h3 className="text-2xl font-semibold mt-5">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-4">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Process */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center">
          Apply in 3 Easy Steps
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {[
            "Fill Online Application",
            "Upload Documents",
            "Get Loan Approved",
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-8 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white mx-auto flex items-center justify-center text-xl font-bold">
                {i + 1}
              </div>

              <h3 className="text-xl font-semibold mt-6">{step}</h3>

              <CheckCircle className="mx-auto mt-4 text-green-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          {[
            ["50K+", "Happy Customers"],
            ["₹500Cr+", "Loans Approved"],
            ["24 Hours", "Fast Approval"],
            ["99%", "Customer Satisfaction"],
          ].map(([value, label]) => (
            <div key={label}>
              <h2 className="text-5xl font-bold">{value}</h2>
              <p className="mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center">
          What Our Customers Say
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 mt-14">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-8">
              <div className="flex gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={18} />
                ))}
              </div>

              <p className="mt-5 text-gray-600 italic">
                "{item.text}"
              </p>

              <h4 className="mt-6 font-bold">{item.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Apply for Your Loan?
          </h2>

          <p className="mt-4 text-blue-100">
            Get instant approval with low interest rates and easy repayment
            options.
          </p>

          <button
            onClick={() => setOpenContact(true)} className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100">
            Apply Now
          </button>
        </div>
      </section>
      <ContactModal
        isOpen={openContact}
        onClose={() => setOpenContact(false)}
      />
    </div>

  );

};

export default LoanLandingPage;