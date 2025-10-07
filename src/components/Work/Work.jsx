import React, { useState } from "react";
import FundraiserFormModal from "./FundraiserFormModal";
import Approvefund from "./Approvefund";
import ReleasedFundraisers from "./ReleasedFundraisers"; 
import { FaHandHoldingHeart, FaBullhorn, FaDonate } from "react-icons/fa";

const HowItWorks = () => {
  const [showForm, setShowForm] = useState(false);
  const [showCampaigns, setShowCampaigns] = useState(false);
  const [showReleasedFunds, setShowReleasedFunds] = useState(false);  

  const steps = [
    {
      title: "Start a Fundraiser",
      description: "Create a campaign for your cause in just a few minutes.",
      icon: <FaBullhorn size={40} className="text-red-500" />,
      action: () => setShowForm(true),
      buttonText: "Start Now",
    },
    {
      title: "Get Support",
      description: "Share your fundraiser and receive donations from supporters.",
      icon: <FaHandHoldingHeart size={40} className="text-orange-500" />,
      action: () => setShowCampaigns(true),
      buttonText: "See Campaigns",
    },
    {
      title: "Receive Funds",
      description: "Withdraw funds securely and use them for your cause.",
      icon: <FaDonate size={40} className="text-yellow-500" />,
      action: () => setShowReleasedFunds(true),  
      buttonText: "View Released Funds",         
    },
  ];

  return (
    <>
      <section className="py-16 bg-gray-100 text-center relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-red-600 mb-8">How It Works</h2>
          <p className="text-lg text-gray-600 mb-12">
            Start your journey in three simple steps and make a difference today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
              >
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                {step.action && (
                  <button
                    onClick={step.action}
                    className="mt-auto bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    {step.buttonText}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <FundraiserFormModal isOpen={showForm} onClose={() => setShowForm(false)} />
      </section>

      {showCampaigns && <Approvefund />}
      {showReleasedFunds && (
        <ReleasedFundraisers onClose={() => setShowReleasedFunds(false)} />
      )}
    </>
  );
};

export default HowItWorks;
 
