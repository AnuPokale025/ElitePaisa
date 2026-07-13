import React from "react";
import {
  Wallet,
  CheckCircle,
  FileText,
  Users,
  Clock,
  BadgeCheck,
  ArrowRight,
  IndianRupee,
} from "lucide-react";

const features = [
  {
    icon: <IndianRupee className="w-10 h-10 text-blue-600" />,
    title: "Loan up to ₹50 Lakhs",
    desc: "Get instant personal loans with competitive interest rates.",
  },
  {
    icon: <Clock className="w-10 h-10 text-blue-600" />,
    title: "24 Hour Approval",
    desc: "Quick verification and instant approval process.",
  },
  {
    icon: <BadgeCheck className="w-10 h-10 text-blue-600" />,
    title: "Low Interest Rates",
    desc: "Affordable EMIs with flexible repayment options.",
  },
];

const eligibility = [
  "Age between 21 and 60 years",
  "Indian Citizen",
  "Minimum monthly income ₹20,000",
  "Salaried or Self-employed",
  "Good Credit Score (650+)",
];

const documents = [
  "Aadhaar Card",
  "PAN Card",
  "Passport Size Photograph",
  "Salary Slips (Last 3 Months)",
  "Bank Statement (Last 6 Months)",
  "Address Proof",
];

const faqs = [
  {
    q: "How much personal loan can I get?",
    a: "You can get a personal loan up to ₹50 Lakhs depending on your eligibility.",
  },
  {
    q: "How long does approval take?",
    a: "Most applications are approved within 24 hours after verification.",
  },
  {
    q: "Can I prepay the loan?",
    a: "Yes, prepayment options are available according to the loan policy.",
  },
];

const PersonalLoan = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-5xl font-bold">
              Personal Loan
            </h1>

            <p className="mt-6 text-lg text-blue-100">
              Fulfill your dreams with quick and hassle-free personal loans.
              Enjoy low interest rates, minimal documentation, and instant approval.
            </p>

            <button className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100">
              Apply Now
            </button>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900"
              alt="Personal Loan"
              className="rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center">
          Why Choose Our Personal Loan?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition"
            >
              <div className="flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mt-5">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-4">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* Eligibility & Documents */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-gray-50 rounded-xl p-8 shadow">

            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Users className="text-blue-600" />
              Eligibility
            </h2>

            <ul className="mt-6 space-y-4">
              {eligibility.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  {item}
                </li>
              ))}
            </ul>

          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow">

            <h2 className="text-3xl font-bold flex items-center gap-3">
              <FileText className="text-blue-600" />
              Documents Required
            </h2>

            <ul className="mt-6 space-y-4">
              {documents.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  {item}
                </li>
              ))}
            </ul>

          </div>

        </div>

      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center">
          Apply in 3 Easy Steps
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {[
            "Fill Online Application",
            "Upload Documents",
            "Get Loan Approved",
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-8 text-center"
            >

              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto text-xl font-bold">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold mt-5">
                {step}
              </h3>

            </div>
          ))}

        </div>

      </section>

      {/* FAQ */}
      <section className="bg-white py-20">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-6">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold">
                  {faq.q}
                </h3>

                <p className="mt-3 text-gray-600">
                  {faq.a}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">

        <div className="max-w-5xl mx-auto px-6 py-20 text-center">

          <Wallet className="w-14 h-14 mx-auto mb-6" />

          <h2 className="text-4xl font-bold">
            Need a Personal Loan Today?
          </h2>

          <p className="mt-5 text-blue-100 text-lg">
            Apply online in just a few minutes and receive approval within 24 hours.
          </p>

          <button className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 mx-auto hover:bg-gray-100">
            Apply Now
            <ArrowRight size={20} />
          </button>

        </div>

      </section>

    </div>
  );
};

export default PersonalLoan;