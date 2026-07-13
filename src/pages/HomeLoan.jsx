import React from "react";
import {
  Home,
  CheckCircle,
  FileText,
  BadgeCheck,
  Clock,
  IndianRupee,
  ArrowRight,
  Building2,
} from "lucide-react";

const features = [
  {
    icon: <IndianRupee className="w-10 h-10 text-blue-600" />,
    title: "Loan up to ₹5 Crore",
    desc: "Finance your dream home with attractive loan amounts.",
  },
  {
    icon: <Clock className="w-10 h-10 text-blue-600" />,
    title: "Fast Approval",
    desc: "Quick approval with minimal documentation.",
  },
  {
    icon: <BadgeCheck className="w-10 h-10 text-blue-600" />,
    title: "Low Interest Rate",
    desc: "Interest rates starting from 8.40% per annum.",
  },
];

const benefits = [
  "Up to 30 years repayment tenure",
  "Balance transfer facility",
  "Zero hidden charges",
  "Flexible EMI options",
  "Doorstep document collection",
  "Tax benefits under applicable laws",
];

const eligibility = [
  "Indian Citizen",
  "Age between 21-65 years",
  "Salaried or Self-employed",
  "Stable monthly income",
  "Good Credit Score (700+)",
];

const documents = [
  "Aadhaar Card",
  "PAN Card",
  "Passport Size Photo",
  "Income Proof",
  "Bank Statements",
  "Property Documents",
];

const faq = [
  {
    question: "How much home loan can I get?",
    answer:
      "You can get up to ₹5 Crore depending on your income, eligibility, and property value.",
  },
  {
    question: "What is the repayment tenure?",
    answer:
      "The repayment tenure can extend up to 30 years.",
  },
  {
    question: "Can I prepay my home loan?",
    answer:
      "Yes. You can prepay your loan as per the lender's policy.",
  },
];

const HomeLoan = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <p className="uppercase tracking-widest text-blue-200 font-semibold">
              Affordable • Secure • Trusted
            </p>

            <h1 className="text-5xl font-bold mt-4">
              Home Loan
            </h1>

            <p className="mt-6 text-lg text-blue-100">
              Buy your dream home with flexible repayment options,
              competitive interest rates, and instant approval.
            </p>

            <button className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100">
              Apply Now
            </button>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900"
              alt="Home Loan"
              className="rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center">
          Why Choose Our Home Loan?
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

              <p className="mt-3 text-gray-500">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* Benefits */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Home Loan Benefits
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-50 p-5 rounded-xl shadow"
              >
                <CheckCircle className="text-green-500" />

                <span>{item}</span>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Eligibility & Documents */}

      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10">

        <div className="bg-white rounded-xl shadow-lg p-8">

          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Building2 className="text-blue-600" />
            Eligibility
          </h2>

          <ul className="mt-8 space-y-4">

            {eligibility.map((item, index) => (
              <li key={index} className="flex gap-3">
                <CheckCircle className="text-green-500" />
                {item}
              </li>
            ))}

          </ul>

        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">

          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FileText className="text-blue-600" />
            Documents Required
          </h2>

          <ul className="mt-8 space-y-4">

            {documents.map((item, index) => (
              <li key={index} className="flex gap-3">
                <CheckCircle className="text-green-500" />
                {item}
              </li>
            ))}

          </ul>

        </div>

      </section>

      {/* Loan Process */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Simple Loan Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-14">

            {[
              "Apply Online",
              "Document Verification",
              "Property Evaluation",
              "Loan Disbursal",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow p-8 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto text-xl font-bold">
                  {index + 1}
                </div>

                <h3 className="mt-5 font-semibold text-lg">
                  {step}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Interest Rate */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center">
          Interest Rate
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-xl font-bold">
              Salaried
            </h3>

            <p className="text-4xl text-blue-600 font-bold mt-4">
              8.40%
            </p>

            <p className="mt-3 text-gray-500">
              Starting Interest Rate
            </p>
          </div>

          <div className="bg-blue-600 rounded-xl shadow-lg p-8 text-center text-white">
            <h3 className="text-xl font-bold">
              Self Employed
            </h3>

            <p className="text-4xl font-bold mt-4">
              8.65%
            </p>

            <p className="mt-3">
              Competitive Interest
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-xl font-bold">
              Processing Fee
            </h3>

            <p className="text-4xl text-blue-600 font-bold mt-4">
              0.5%
            </p>

            <p className="mt-3 text-gray-500">
              Maximum ₹10,000
            </p>
          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="bg-white py-20">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 mt-12">

            {faq.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow"
              >
                <h3 className="font-bold text-lg">
                  {item.question}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.answer}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">

        <div className="max-w-5xl mx-auto px-6 py-20 text-center">

          <Home className="w-14 h-14 mx-auto mb-6" />

          <h2 className="text-4xl font-bold">
            Ready to Own Your Dream Home?
          </h2>

          <p className="mt-5 text-blue-100">
            Apply online today and get instant approval with flexible EMI options.
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

export default HomeLoan;