import React, { useState } from "react";
import {
  ShieldCheck,
  Users,
  Award,
  TrendingUp,
  Target,
  Eye,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import ContactModal from "../modal/ContactModal";

const About = () => {
  const [openContact, setOpenContact] = useState(false);
  const navigate = useNavigate();
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      title: "Trusted & Secure",
      description:
        "We follow industry-standard security practices to keep your financial information safe.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-green-600" />,
      title: "Competitive Interest Rates",
      description:
        "Affordable loan solutions with flexible repayment options tailored to your needs.",
    },
    {
      icon: <Users className="w-10 h-10 text-purple-600" />,
      title: "Dedicated Support",
      description:
        "Our experienced financial advisors are here to assist you throughout your loan journey.",
    },
  ];

  const stats = [
    { number: "50K+", title: "Happy Customers" },
    { number: "₹500 Cr+", title: "Loans Disbursed" },
    { number: "15+", title: "Years of Experience" },
    { number: "98%", title: "Customer Satisfaction" },
  ];

  const team = [
    {
      name: "Rahul Sharma",
      role: "Chief Executive Officer",
    },
    {
      name: "Priya Patel",
      role: "Head of Finance",
    },
    {
      name: "Amit Verma",
      role: "Customer Success Manager",
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold">
            About LoanHub
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100">
            Helping individuals and businesses achieve their financial goals
            through fast, transparent, and affordable loan solutions.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900"
            alt="Finance Team"
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div>
          <span className="text-blue-600 font-semibold uppercase">
            Our Story
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Making Loans Simple, Fast & Transparent
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            Since our inception, LoanHub has been committed to simplifying the
            borrowing process. We provide personal, home, business, education,
            and vehicle loans with minimal documentation and quick approvals.
          </p>

          <p className="text-gray-600 mt-4 leading-8">
            Our technology-driven approach ensures a seamless experience while
            maintaining the highest standards of transparency and customer
            service.
          </p>

          <button
            onClick={() => setOpenContact(true)}
            className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2">
            Apply Now
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-blue-50 rounded-xl p-8">
            <Target className="text-blue-600 w-12 h-12" />

            <h3 className="text-3xl font-bold mt-5">
              Our Mission
            </h3>

            <p className="text-gray-600 mt-4 leading-7">
              To empower individuals and businesses with accessible financial
              solutions through innovative technology, transparent processes,
              and excellent customer service.
            </p>
          </div>

          <div className="bg-indigo-50 rounded-xl p-8">
            <Eye className="text-indigo-600 w-12 h-12" />

            <h3 className="text-3xl font-bold mt-5">
              Our Vision
            </h3>

            <p className="text-gray-600 mt-4 leading-7">
              To become the most trusted digital lending platform by delivering
              secure, affordable, and customer-centric financial services.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center">
          Why Choose LoanHub?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition"
            >
              {item.icon}

              <h3 className="text-2xl font-semibold mt-5">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* Statistics */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">

          {stats.map((item, index) => (
            <div key={index}>
              <h2 className="text-5xl font-bold">
                {item.number}
              </h2>

              <p className="mt-3 text-blue-100">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center">
          Meet Our Leadership
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={`https://ui-avatars.com/api/?name=${member.name}&background=2563eb&color=fff&size=300`}
                alt={member.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold">
                  {member.name}
                </h3>

                <p className="text-blue-600 mt-2">
                  {member.role}
                </p>
              </div>
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">

          <Award className="mx-auto w-14 h-14 mb-5" />

          <h2 className="text-4xl font-bold">
            Ready to Achieve Your Financial Goals?
          </h2>

          <p className="mt-5 text-lg text-blue-100">
            Apply online today and receive quick approval with transparent
            terms and competitive interest rates.
          </p>

          <button
          onClick={()=>setOpenContact(true)}
          className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2 mx-auto">
            Apply for a Loan
            <ArrowRight size={20} />
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

export default About;