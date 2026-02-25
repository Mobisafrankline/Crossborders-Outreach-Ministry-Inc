import { Heart, CreditCard, DollarSign, Users, CheckCircle2, Calendar } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

export default function Donate() {
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];

  const donationImpacts = [
    { amount: "$25", impact: "Provides school supplies for 3 children" },
    { amount: "$50", impact: "Feeds a family of 4 for one week" },
    { amount: "$100", impact: "Covers medical treatment for 5 patients" },
    { amount: "$250", impact: "Funds vocational training for 2 people" },
    { amount: "$500", impact: "Provides a microloan for a small business" },
    { amount: "$1000", impact: "Supports a full scholarship for one year" }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1697665387559-253e7a645e96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb25hdGlvbiUyMGdpdmluZyUyMGNoYXJpdHklMjBoYW5kc3xlbnwxfHx8fDE3NzE5OTY4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Donation and giving"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Make a Donation</h1>
          <p className="text-xl md:text-2xl opacity-95">
            Your generosity transforms lives and creates lasting impact in communities
          </p>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Donation Type Toggle */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setDonationType("one-time")}
                className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all ${
                  donationType === "one-time"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                One-Time Donation
              </button>
              <button
                onClick={() => setDonationType("monthly")}
                className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all ${
                  donationType === "monthly"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Monthly Giving
                </div>
              </button>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Select Your Donation Amount</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                    }}
                    className={`py-4 px-6 rounded-lg font-semibold text-lg transition-all ${
                      selectedAmount === amount
                        ? "bg-orange-500 text-white shadow-lg scale-105"
                        : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment Information</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Name on Card"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Donate Button */}
            <button className="w-full py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
              <Heart className="w-6 h-6 fill-white" />
              Complete Donation
            </button>

            <p className="text-center text-gray-600 mt-4 text-sm">
              Your donation is tax-deductible. You'll receive a receipt via email.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how your donation directly supports our programs and changes lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donationImpacts.map((item, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-blue-600 mb-3">{item.amount}</div>
                <p className="text-gray-700">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Other Ways to Give</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Stock Donations</h3>
              <p className="text-gray-600 mb-4">
                Donate appreciated stocks and receive tax benefits
              </p>
              <a href="/contact" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Matching</h3>
              <p className="text-gray-600 mb-4">
                Double your impact through employer matching gifts
              </p>
              <a href="/partner" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Legacy Giving</h3>
              <p className="text-gray-600 mb-4">
                Create a lasting impact through planned giving
              </p>
              <a href="/contact" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Why Donate to Crossborders?</h2>
          <div className="space-y-4">
            {[
              "100% of your donation goes directly to programs",
              "Tax-deductible contributions (501(c)(3) certified)",
              "Transparent financial reporting and accountability",
              "Regular updates on your donation's impact",
              "Direct community partnerships ensuring effectiveness"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white rounded-lg p-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
