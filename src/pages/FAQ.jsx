import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import ContactModal from "../modal/ContactModal";

const faqData = [
  {
    question: "How do I apply for a loan?",
    answer:
      "Click on the Apply Now button, complete the online application form, upload the required documents, and submit your application.",
  },
  {
    question: "What documents are required for a loan?",
    answer:
      "Generally, you need identity proof, address proof, PAN card, Aadhaar card, income proof, and recent bank statements.",
  },
  {
    question: "How long does loan approval take?",
    answer:
      "Most loan applications are approved within 24 hours after successful document verification.",
  },
  {
    question: "Can I prepay my loan?",
    answer:
      "Yes. You can prepay your loan before the tenure ends. Prepayment charges may apply depending on your loan agreement.",
  },
  {
    question: "How is EMI calculated?",
    answer:
      "EMI depends on the loan amount, interest rate, and loan tenure. Use our EMI Calculator to estimate your monthly payment.",
  },
  {
    question: "What is the minimum CIBIL score required?",
    answer:
      "A CIBIL score of 700 or above generally improves your chances of loan approval.",
  },
  {
    question: "Do you provide business loans?",
    answer:
      "Yes. We provide Personal, Home, Business, Education, Gold, and Vehicle Loans.",
  },
  {
    question: "Can I track my loan application?",
    answer:
      "Yes. After submitting your application, you can log in to your account and check the application status.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);
  const [search, setSearch] = useState("");
  const [openContact, setOpenContact] = useState(false);
  const navigate = useNavigate();

  const filteredFAQ = faqData.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">

          <HelpCircle className="w-16 h-16 mx-auto mb-5" />

          <h1 className="text-5xl font-bold">
            Frequently Asked Questions
          </h1>

          <p className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto">
            Find answers to common questions about our loans,
            application process, EMI calculation, repayments, and more.
          </p>

        </div>
      </section>

      {/* Search */}
      <section className="max-w-4xl mx-auto px-6 -mt-8">
        <div className="bg-white shadow-xl rounded-xl p-4 flex items-center gap-3">

          <Search className="text-gray-400" />

          <input
            type="text"
            placeholder="Search your question..."
            className="w-full outline-none text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        {filteredFAQ.length === 0 && (
          <div className="text-center text-gray-500">
            No matching questions found.
          </div>
        )}

        <div className="space-y-5">

          {filteredFAQ.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >

              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <span className="text-lg font-semibold">
                  {item.question}
                </span>

                {active === index ? (
                  <ChevronUp className="text-blue-600" />
                ) : (
                  <ChevronDown className="text-blue-600" />
                )}

              </button>

              {active === index && (
                <div className="px-6 pb-6 text-gray-600 leading-7">
                  {item.answer}
                </div>
              )}

            </div>

          ))}

        </div>

      </section>

      {/* Help Cards */}
      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Still Need Help?
          </h2>

          <p className="text-center text-gray-500 mt-4">
            Our support team is always ready to assist you.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-gray-50 rounded-xl p-8 text-center shadow">

              <Phone className="w-10 h-10 mx-auto text-blue-600" />

              <h3 className="text-xl font-semibold mt-4">
                Call Us
              </h3>

              <p className="text-gray-500 mt-2">
                +91 98765 43210
              </p>

            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center shadow">

              <Mail className="w-10 h-10 mx-auto text-blue-600" />

              <h3 className="text-xl font-semibold mt-4">
                Email Support
              </h3>

              <p className="text-gray-500 mt-2">
                support@loanhub.com
              </p>

            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center shadow">

              <MessageCircle className="w-10 h-10 mx-auto text-blue-600" />

              <h3 className="text-xl font-semibold mt-4">
                Live Chat
              </h3>

              <p className="text-gray-500 mt-2">
                Available 24×7
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">

        <div className="max-w-5xl mx-auto px-6 py-20 text-center">

          <h2 className="text-4xl font-bold">
            Ready to Apply for a Loan?
          </h2>

          <p className="mt-5 text-blue-100 text-lg">
            Get quick approval, competitive interest rates, and
            a hassle-free application process.
          </p>

          <button
            onClick={()=> setOpenContact(true) }
            className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
            Apply Now
          </button>

        </div>

      </section>

      <ContactModal
      isOpen={openContact}
      onClose={()=>setOpenContact(false)}

      />




    </div>
  );
};

export default FAQ;