import React from "react";
import {
  GraduationCap,
  IndianRupee,
  CheckCircle,
  FileText,
  Globe,
  Clock,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const highlights = [
  {
    icon: <IndianRupee className="w-10 h-10 text-blue-600" />,
    title: "Loan up to ₹1.5 Crore",
    desc: "Finance higher education in India and abroad.",
  },
  {
    icon: <Clock className="w-10 h-10 text-blue-600" />,
    title: "Quick Approval",
    desc: "Fast processing with minimal paperwork.",
  },
  {
    icon: <BadgeCheck className="w-10 h-10 text-blue-600" />,
    title: "Affordable Interest",
    desc: "Low interest rates with flexible repayment options.",
  },
];

const benefits = [
  "100% Tuition Fee Coverage",
  "Living & Hostel Expenses",
  "Books & Laptop Expenses",
  "Travel Expenses for Overseas Study",
  "Flexible Repayment up to 15 Years",
  "Moratorium During Course Period",
];

const eligibility = [
  "Indian Citizen",
  "Admission to a recognized institution",
  "Age between 18-35 years",
  "Co-applicant (Parent/Guardian)",
  "Good Academic Record",
];

const documents = [
  "Aadhaar Card",
  "PAN Card",
  "Admission Letter",
  "Academic Mark Sheets",
  "Passport (For Overseas Studies)",
  "Income Proof of Co-applicant",
];

const destinations = [
  "India",
  "USA",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
];

const faqs = [
  {
    question: "What expenses are covered?",
    answer:
      "Tuition fees, hostel fees, books, laptops, travel expenses, and other education-related costs.",
  },
  {
    question: "Can I apply for overseas education?",
    answer:
      "Yes. We provide education loans for universities in India and abroad.",
  },
  {
    question: "When does repayment begin?",
    answer:
      "Repayment usually starts after the course completion plus the applicable moratorium period.",
  },
];

const EducationLoan = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <p className="uppercase tracking-widest text-blue-200">
              Learn • Grow • Achieve
            </p>

            <h1 className="text-5xl font-bold mt-4">
              Education Loan
            </h1>

            <p className="mt-6 text-lg text-blue-100">
              Achieve your academic dreams with affordable education loans
              for studies in India and abroad.
            </p>

            <button className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100">
              Apply Now
            </button>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900"
              alt="Education Loan"
              className="rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center">
          Why Choose Our Education Loan?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition"
            >
              <div className="flex justify-center">{item.icon}</div>

              <h3 className="text-2xl font-semibold mt-5">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-500">
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
            Loan Benefits
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
          <h2 className="text-3xl font-bold mb-6">
            Eligibility
          </h2>

          <ul className="space-y-4">
            {eligibility.map((item, index) => (
              <li key={index} className="flex gap-3">
                <CheckCircle className="text-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">
            Documents Required
          </h2>

          <ul className="space-y-4">
            {documents.map((item, index) => (
              <li key={index} className="flex gap-3">
                <FileText className="text-blue-600" />
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
            Application Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-14">

            {[
              "Apply Online",
              "Upload Documents",
              "Verification",
              "Loan Sanction",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow p-8 text-center"
              >
                <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto font-bold text-xl">
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

      {/* Study Destinations */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center">
          Popular Study Destinations
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">

          {destinations.map((country, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition"
            >
              <Globe className="w-10 h-10 text-blue-600 mx-auto" />

              <h3 className="mt-4 font-bold text-xl">
                {country}
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

          <GraduationCap className="w-14 h-14 mx-auto mb-6" />

          <h2 className="text-4xl font-bold">
            Invest in Your Future
          </h2>

          <p className="mt-5 text-blue-100">
            Start your education journey today with flexible education loans.
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

export default EducationLoan;