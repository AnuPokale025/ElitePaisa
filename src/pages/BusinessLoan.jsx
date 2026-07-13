import React from "react";
import {
  Briefcase,
  IndianRupee,
  CheckCircle,
  FileText,
  Clock,
  BadgeCheck,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: <IndianRupee className="w-10 h-10 text-blue-600" />,
    title: "Loan up to ₹2 Crore",
    desc: "Flexible funding for startups, SMEs, and growing businesses.",
  },
  {
    icon: <Clock className="w-10 h-10 text-blue-600" />,
    title: "Fast Approval",
    desc: "Get approval within 24 hours with minimal paperwork.",
  },
  {
    icon: <BadgeCheck className="w-10 h-10 text-blue-600" />,
    title: "Competitive Interest",
    desc: "Business-friendly interest rates with flexible repayment.",
  },
];

const benefits = [
  "No collateral for eligible applicants",
  "Flexible repayment up to 10 years",
  "Quick online application",
  "Minimal documentation",
  "Working capital support",
  "Business expansion financing",
];

const eligibility = [
  "Indian Citizen",
  "Business operating for at least 2 years",
  "Annual turnover as per lender requirements",
  "Age between 21 and 65 years",
  "Good credit history",
];

const documents = [
  "Aadhaar Card",
  "PAN Card",
  "Business Registration Certificate",
  "GST Registration",
  "Bank Statements (Last 6 Months)",
  "IT Returns",
];

const plans = [
  {
    title: "Startup Loan",
    amount: "Up to ₹25 Lakhs",
  },
  {
    title: "SME Loan",
    amount: "Up to ₹75 Lakhs",
  },
  {
    title: "Corporate Loan",
    amount: "Up to ₹2 Crore",
  },
];

const faqs = [
  {
    question: "Who can apply for a Business Loan?",
    answer:
      "Self-employed professionals, MSMEs, startups, and registered businesses can apply.",
  },
  {
    question: "Is collateral required?",
    answer:
      "Many business loans are available without collateral based on eligibility.",
  },
  {
    question: "How quickly is the loan approved?",
    answer:
      "Most eligible applications receive approval within 24 hours.",
  },
];

const BusinessLoan = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <p className="uppercase tracking-widest text-blue-200">
              Grow • Expand • Succeed
            </p>

            <h1 className="text-5xl font-bold mt-4">
              Business Loan
            </h1>

            <p className="mt-6 text-lg text-blue-100">
              Fuel your business growth with quick approvals,
              low interest rates, and flexible repayment options.
            </p>

            <button className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100">
              Apply Now
            </button>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=900"
              alt="Business Loan"
              className="rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center">
          Why Choose Our Business Loan?
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

      {/* Benefits */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Business Loan Benefits
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 items-center bg-gray-50 rounded-xl shadow p-5"
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
            <TrendingUp className="text-blue-600" />
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
            Required Documents
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

      {/* Process */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Loan Application Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-14">

            {[
              "Apply Online",
              "Submit Documents",
              "Business Verification",
              "Loan Disbursement",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow p-8 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto font-bold text-xl">
                  {index + 1}
                </div>

                <h3 className="mt-5 font-semibold">
                  {step}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Loan Plans */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center">
          Loan Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition"
            >
              <Briefcase className="w-12 h-12 text-blue-600 mx-auto" />

              <h3 className="text-2xl font-bold mt-5">
                {plan.title}
              </h3>

              <p className="text-3xl font-bold text-blue-600 mt-4">
                {plan.amount}
              </p>

              <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Apply
              </button>
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

          <div className="space-y-6 mt-12">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow p-6"
              >
                <h3 className="font-bold text-lg">
                  {faq.question}
                </h3>

                <p className="mt-3 text-gray-600">
                  {faq.answer}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">

        <div className="max-w-5xl mx-auto px-6 py-20 text-center">

          <Briefcase className="w-14 h-14 mx-auto mb-6" />

          <h2 className="text-4xl font-bold">
            Ready to Grow Your Business?
          </h2>

          <p className="mt-5 text-blue-100">
            Apply today and get the financial support your business needs.
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

export default BusinessLoan;