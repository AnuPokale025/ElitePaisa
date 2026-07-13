import React, { useState, useMemo } from "react";
import { Calculator, IndianRupee, Percent, Calendar } from "lucide-react";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(5);

  const { emi, totalPayment, totalInterest } = useMemo(() => {
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;

    const emi =
      (loanAmount *
        monthlyRate *
        Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayment = emi * months;
    const totalInterest = totalPayment - loanAmount;

    return {
      emi: emi.toFixed(0),
      totalPayment: totalPayment.toFixed(0),
      totalInterest: totalInterest.toFixed(0),
    };
  }, [loanAmount, interestRate, tenure]);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <Calculator className="mx-auto w-16 h-16 mb-6" />

          <h1 className="text-5xl font-bold">
            EMI Calculator
          </h1>

          <p className="mt-5 text-lg text-blue-100 max-w-2xl mx-auto">
            Calculate your monthly EMI instantly and plan your finances
            before applying for a loan.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-8">
              Loan Details
            </h2>

            {/* Loan Amount */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <label className="font-semibold flex items-center gap-2">
                  <IndianRupee size={18} />
                  Loan Amount
                </label>

                <span className="font-bold text-blue-600">
                  ₹{loanAmount.toLocaleString()}
                </span>
              </div>

              <input
                type="range"
                min="50000"
                max="5000000"
                step="10000"
                value={loanAmount}
                onChange={(e) =>
                  setLoanAmount(Number(e.target.value))
                }
                className="w-full"
              />
            </div>

            {/* Interest */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <label className="font-semibold flex gap-2 items-center">
                  <Percent size={18} />
                  Interest Rate
                </label>

                <span className="font-bold text-blue-600">
                  {interestRate}%
                </span>
              </div>

              <input
                type="range"
                min="5"
                max="20"
                step="0.1"
                value={interestRate}
                onChange={(e) =>
                  setInterestRate(Number(e.target.value))
                }
                className="w-full"
              />
            </div>

            {/* Tenure */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="font-semibold flex gap-2 items-center">
                  <Calendar size={18} />
                  Loan Tenure
                </label>

                <span className="font-bold text-blue-600">
                  {tenure} Years
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="30"
                value={tenure}
                onChange={(e) =>
                  setTenure(Number(e.target.value))
                }
                className="w-full"
              />
            </div>
          </div>

          {/* Right */}
          <div className="bg-blue-700 rounded-2xl text-white shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-10">
              EMI Summary
            </h2>

            <div className="space-y-6">

              <div className="bg-white/10 rounded-xl p-6">
                <p className="text-blue-100">
                  Monthly EMI
                </p>

                <h2 className="text-4xl font-bold mt-2">
                  ₹{Number(emi).toLocaleString()}
                </h2>
              </div>

              <div className="bg-white/10 rounded-xl p-6">
                <p>Total Interest</p>

                <h2 className="text-3xl font-semibold mt-2">
                  ₹{Number(totalInterest).toLocaleString()}
                </h2>
              </div>

              <div className="bg-white/10 rounded-xl p-6">
                <p>Total Payment</p>

                <h2 className="text-3xl font-semibold mt-2">
                  ₹{Number(totalPayment).toLocaleString()}
                </h2>
              </div>

              <button className="w-full mt-6 bg-white text-blue-700 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
                Apply for Loan
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Why Use Our EMI Calculator?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div className="bg-gray-50 p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold">
                Instant Results
              </h3>

              <p className="text-gray-500 mt-4">
                Calculate your EMI in real time while adjusting loan
                values.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold">
                Financial Planning
              </h3>

              <p className="text-gray-500 mt-4">
                Know your monthly payments before applying.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold">
                Easy Comparison
              </h3>

              <p className="text-gray-500 mt-4">
                Compare different loan amounts, tenures, and interest
                rates effortlessly.
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default EMICalculator;