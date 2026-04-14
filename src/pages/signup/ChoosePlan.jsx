import { CreditCard, ShieldCheck } from "lucide-react";
import React from "react";

export default function ChoosePlan({
  userType,
  selectedPlan,
  setSelectedPlan,
}) {
  const planData = {
    buyer: [
      {
        title: "Bronze",
        price: "1100",
        discount: "70% OFF",
        features: [
          "Unlock 4 contacts",
          "Valid for 90 days",
          "See all properties",
          "See premium filters",
        ],
      },
      {
        title: "Silver",
        price: "2000",
        discount: "70% OFF",
        popular: true,
        features: [
          "Unlock 10 contacts",
          "Valid for 90 days",
          "See all properties",
          "See premium filters",
        ],
      },
      {
        title: "Gold",
        price: "2500",
        discount: "80% OFF",
        features: [
          "Unlock 20 contacts",
          "Valid for 90 days",
          "See all properties",
          "See premium filters",
        ],
      },
    ],

    seller: [
      {
        title: "Bronze",
        price: "1100",
        discount: "70% OFF",
        features: [
          "List 4 properties",
          "Valid for 90 days",
          "Lead notifications",
          "Basic analytics",
        ],
      },
      {
        title: "Silver",
        price: "2000",
        discount: "70% OFF",
        popular: true,
        features: [
          "List 10 properties",
          "Valid for 90 days",
          "Priority leads",
          "Advanced analytics",
        ],
      },
      {
        title: "Gold",
        price: "2500",
        discount: "80% OFF",
        features: [
          "List 20 properties",
          "Valid for 90 days",
          "Premium leads",
          "Featured listings",
        ],
      },
    ],

    partner: [
      {
        title: "Partner Plan",
        price: "550",
        discount: "Special Price",
        popular: true,
        features: [
          "Access buyer leads",
          "Partner dashboard",
          "Lead notifications",
          "Valid for 90 days",
        ],
      },
    ],

    developer: [
      {
        title: "3 Months",
        price: "2500",
        discount: "Starter",
        features: [
          "Project listing",
          "Lead dashboard",
          "Basic promotion",
          "Valid for 3 months",
        ],
      },
      {
        title: "6 Months",
        price: "4000",
        discount: "Best Value",
        popular: true,
        features: [
          "Project listing",
          "Featured promotion",
          "Lead dashboard",
          "Valid for 6 months",
        ],
      },
      {
        title: "1 Year",
        price: "6000",
        discount: "Most Popular",
        features: [
          "Unlimited project visibility",
          "Premium promotion",
          "Lead management",
          "Valid for 12 months",
        ],
      },
    ],
  };

  const plans = planData[userType] || [];

  return (
    <div className="bg-white py-4 px-3 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 capitalize">
        {userType} Plans
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <PlanCard
            key={plan.title}
            title={plan.title}
            price={plan.price}
            discount={plan.discount}
            popular={plan.popular}
            selected={selectedPlan === plan.title}
            onClick={() => setSelectedPlan(plan.title)}
            features={plan.features}
          />
        ))}
      </div>

      <div className="mt-8 bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-dashed border-orange-200 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="text-green-500" size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            Secure Payment Powered by Razorpay
          </span>
        </div>
        <button className="w-full max-w-sm flex items-center justify-center gap-2 py-4 rounded-xl bg-dark-orange text-white text-xs font-black uppercase tracking-widest shadow-xl active:scale-95 transition-all">
          <CreditCard size={18} className="text-white" />
          Pay Now
        </button>
      </div>
    </div>
  );
}

function PlanCard({
  title,
  price,
  discount,
  features,
  selected,
  onClick,
  popular,
}) {
  return (
    <div
      onClick={onClick}
      className={`relative p-5 rounded-xl border cursor-pointer transition
      ${
        selected
          ? "border-dark-orange bg-orange-50"
          : "border-gray-200 bg-white"
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-dark-orange text-white text-[10px] px-2 py-1 rounded-full font-bold">
          Popular
        </span>
      )}

      <h3 className="text-lg font-bold text-center">{title}</h3>

      <p className="text-center text-2xl font-bold text-dark-orange mt-2">
        ₹{price}
      </p>

      {discount && (
        <p className="text-center text-xs text-green-600 font-semibold">
          {discount}
        </p>
      )}

      <ul className="mt-4 space-y-2 text-sm text-gray-600">
        {features.map((f, i) => (
          <li key={i}>• {f}</li>
        ))}
      </ul>

      <div
        className={`mt-4 py-2 rounded-lg text-center text-xs font-bold uppercase
        ${
          selected ? "bg-dark-orange text-white" : "bg-gray-100 text-gray-500"
        }`}
      >
        {selected ? "Selected" : "Select"}
      </div>
    </div>
  );
}
