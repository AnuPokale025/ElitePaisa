import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import ContactModal from "../modal/ContactModal";

const Contact = () => {

  const [openContact, setOpenContact] = useState(false);
  const navigate = useNavigate();
  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: "Call Us",
      value: "+91 98765 43210",
      description: "Available Monday to Saturday",
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: "Email Us",
      value: "eliteassociate.in",
      description: "Reply within 24 hours",
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Visit Office",
      value: "Nagpur, Maharashtra",
      description: "Corporate Head Office",
    },
  ];

  const faqs = [
    {
      question: "How long does loan approval take?",
      answer: "Most applications are approved within 24 hours after document verification.",
    },
    {
      question: "What documents are required?",
      answer: "Identity proof, address proof, income proof, and bank statements are generally required.",
    },
    {
      question: "Can I repay my loan early?",
      answer: "Yes, early repayment options are available depending on your loan agreement.",
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <MessageCircle className="mx-auto w-16 h-16 mb-6" />

          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto">
            Have questions about our loan services? Our experts are here to
            help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">

          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="text-blue-600 font-semibold mt-3">
                {item.value}
              </p>

              <p className="text-gray-500 mt-2">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Form + Office */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-8">
              Send Us a Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
              >
                <Send size={18} />
                Send Message
              </button>

            </form>

          </div>

          {/* Office Details */}
          <div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

              <h2 className="text-3xl font-bold mb-6">
                Business Hours
              </h2>

              <div className="space-y-4">

                <div className="flex gap-3">
                  <Clock className="text-blue-600" />
                  <p>Monday - Friday : 9:00 AM - 6:00 PM</p>
                </div>

                {/* <div className="flex gap-3">
                  <Clock className="text-blue-600" />
                  <p>Saturday : 10:00 AM - 4:00 PM</p>
                </div> */}

                <div className="flex gap-3">
                  <Clock className="text-blue-600" />
                  <p>Sunday : Closed</p>
                </div>

              </div>

              <div className="mt-8 p-5 rounded-lg bg-blue-50">
                <div className="flex gap-3">
                  <Headphones className="text-blue-600" />

                  <div>
                    <h4 className="font-semibold">
                      24/7 Customer Support
                    </h4>

                    <p className="text-gray-600 mt-2">
                      Emergency support available anytime.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-5 rounded-lg bg-green-50">
                <div className="flex gap-3">
                  <ShieldCheck className="text-green-600" />

                  <div>
                    <h4 className="font-semibold">
                      Secure Communication
                    </h4>

                    <p className="text-gray-600 mt-2">
                      Your personal information is encrypted and protected.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.581799648856!2d79.07522787431027!3d21.169034882947674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1dfdc6c9b43%3A0x54f93538e6888db3!2sElite%20Associate%20in%20Nagpur!5e0!3m2!1sen!2sin!4v1783933041018!5m2!1sen!2sin"
                className="w-full h-80 border-0"
                loading="lazy"
              ></iframe>
            </div>

          </div>

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
                className="border rounded-xl p-6 hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold">
                  {faq.question}
                </h3>

                <p className="text-gray-600 mt-3">
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

          <h2 className="text-4xl font-bold">
            Ready to Apply for Your Loan?
          </h2>

          <p className="mt-5 text-lg text-blue-100">
            Our loan experts are ready to guide you through every step of the application process.
          </p>

          <button
          onClick={()=>setOpenContact(true)}
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

export default Contact;