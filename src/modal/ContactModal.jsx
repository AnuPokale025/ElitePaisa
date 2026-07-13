import React, { useState } from "react";
import {
  X,
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
} from "lucide-react";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    loanType: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Your message has been sent successfully!");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      loanType: "",
      message: "",
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

     <div className="w-full max-w-xl bg-white rounded-xl shadow-2xl overflow-hidden">

        {/* Header */}
       <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-4 flex justify-between items-center">

          <div>
            <h2 className="text-3xl">
              Contact Us
            </h2>

            <p className="text-blue-100 mt-1">
              We'd love to hear from you.
            </p>
          </div>

          <button
            onClick={onClose}
            className="hover:bg-white/20 rounded-full p-2 transition"
          >
            <X size={24} />
          </button>

        </div>

        {/* Body */}
       <form onSubmit={handleSubmit} className="p-6">

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <div className="flex items-center border rounded-lg px-3">

                <User className="text-gray-400" size={18} />

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="abc xyz"
                 className="w-full px-3 py-2 outline-none"
                  required
                />

              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email Address
              </label>

              <div className="flex items-center border rounded-lg px-3">

                <Mail className="text-gray-400" size={18} />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="abc@gmail.com"
                  className="w-full px-3 py-2 outline-none"
                  required
                />

              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Phone Number
              </label>

              <div className="flex items-center border rounded-lg px-3">

                <Phone className="text-gray-400" size={18} />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="9876543210"
                 className="w-full px-3 py-2 outline-none"
                  required
                />

              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Loan Inquiry
              </label>

              <select
                name="loanType"
                value={formData.loanType}
                onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 outline-none"
                required
              >
                <option value="">Select Loan Type</option>
                <option>Personal Loan</option>
                <option>Home Loan</option>
                <option>Business Loan</option>
                <option>Vehicle Loan</option>
                <option>Education Loan</option>
                
              </select>
            </div>

          </div>

          <div className="mt-6">

            <label className="block mb-2 font-medium">
              Message
            </label>

            <div className="flex border rounded-lg px-3">

              <MessageSquare
                className="text-gray-400 mt-4"
                size={18}
              />

              <textarea
                rows="3"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full px-3 py-2 outline-none resize-none"
                required
              />

            </div>

          </div>

          {/* Footer */}
        <div className="mt-5 flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 border rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <Send size={18} />
              Send Message
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default ContactModal;