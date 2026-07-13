import React from "react";
import {
  Truck,
  Bike,
  Car,
  Tractor,
  BatteryCharging,
  IndianRupee,
  CheckCircle,
  FileText,
  Clock,
  ShieldCheck,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const vehicleTypes = [
  {
    icon: <Car className="w-10 h-10 text-blue-600" />,
    title: "Car Loan",
    desc: "Finance new and used cars with affordable EMIs.",
  },
  {
    icon: <Bike className="w-10 h-10 text-blue-600" />,
    title: "Bike Loan",
    desc: "Own your dream bike with quick approvals.",
  },
  {
    icon: <Truck className="w-10 h-10 text-blue-600" />,
    title: "Commercial Vehicle",
    desc: "Loans for trucks, buses and transport vehicles.",
  },
  {
    icon: <Tractor className="w-10 h-10 text-blue-600" />,
    title: "Tractor Loan",
    desc: "Flexible loans for farmers and agriculture needs.",
  },
  {
    icon: <BatteryCharging className="w-10 h-10 text-blue-600" />,
    title: "Electric Vehicle",
    desc: "Special financing for electric vehicles.",
  },
  {
    icon: <IndianRupee className="w-10 h-10 text-blue-600" />,
    title: "Up to 100% Finance",
    desc: "Finance almost the entire vehicle cost.",
  },
];

const benefits = [
  "Loan up to 100% vehicle value",
  "Interest rates starting from 8.5%",
  "Flexible repayment up to 7 years",
  "Fast online approval",
  "Minimal documentation",
  "No hidden charges",
];

const eligibility = [
  "Indian Citizen",
  "Age 21 to 65 Years",
  "Salaried or Self-employed",
  "Minimum monthly income ₹20,000",
  "Good credit score",
];

const documents = [
  "Aadhaar Card",
  "PAN Card",
  "Driving License",
  "Passport Size Photo",
  "Salary Slip / Income Proof",
  "Bank Statement",
];

const process = [
  "Apply Online",
  "Upload Documents",
  "Verification",
  "Loan Approval",
];

const faqs = [
  {
    q: "Can I finance a used vehicle?",
    a: "Yes. We provide loans for both new and used vehicles.",
  },
  {
    q: "How much loan can I get?",
    a: "Eligible customers can receive up to 100% of the vehicle value.",
  },
  {
    q: "How quickly is the loan approved?",
    a: "Most applications are approved within 24 hours.",
  },
];

const VehicleLoan = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <p className="uppercase tracking-widest text-blue-200">
              Fast • Secure • Affordable
            </p>

            <h1 className="text-5xl font-bold mt-4">
              Vehicle Loan
            </h1>

            <p className="mt-6 text-lg text-blue-100">
              Finance your dream vehicle with quick approval,
              attractive interest rates and flexible repayment.
            </p>

            <button className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100">
              Apply Now
            </button>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900"
              alt="Vehicle Loan"
              className="rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* Vehicle Types */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center">
          Vehicle Loans We Offer
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {vehicleTypes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition"
            >
              {item.icon}

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
            Loan Benefits
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-50 rounded-xl shadow p-5"
              >
                <CheckCircle className="text-green-500" />
                {item}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Eligibility & Documents */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10">

        <div className="bg-white rounded-xl shadow-lg p-8">

          <h2 className="text-3xl font-bold flex items-center gap-3">
            <ShieldCheck className="text-blue-600" />
            Eligibility
          </h2>

          <ul className="space-y-4 mt-8">
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

          <ul className="space-y-4 mt-8">
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
            Loan Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-14">

            {process.map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow p-8 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto text-xl font-bold">
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

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6 mt-12">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6"
            >
              <h3 className="font-bold text-lg">
                {faq.q}
              </h3>

              <p className="mt-3 text-gray-600">
                {faq.a}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">

        <div className="max-w-5xl mx-auto px-6 py-20 text-center">

          <Truck className="w-16 h-16 mx-auto mb-6" />

          <h2 className="text-4xl font-bold">
            Ready to Finance Your Vehicle?
          </h2>

          <p className="mt-5 text-blue-100">
            Apply today and get quick approval with flexible EMI options.
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

export default VehicleLoan;