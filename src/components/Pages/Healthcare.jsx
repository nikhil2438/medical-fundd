import React, { useState } from "react";
import banner from "../../assets/images/Medical1.png";
import image1 from "../../assets/images/Medical2.png";
import image2 from "../../assets/images/Medical3.png";
import image3 from "../../assets/images/medical4.jpg";
import image4 from "../../assets/images/health5.jpg";
import DonationForm from "../DonationForm/DonationForm";

const Healthcare = () => {
  const [showDonationForm, setShowDonationForm] = useState(false);

  const handleDonateClick = () => {
    setShowDonationForm(true);
    setTimeout(() => {
      document
        .getElementById("donation-form")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <img
          src={banner}
          alt="Healthcare Banner"
          className="w-full h-[500px] object-cover rounded-lg shadow-md"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Be the Lifeline Someone Needs 🏥❤️
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl">
            Help us bring healthcare to every doorstep. Your support fuels free
            checkups, essential medicines, mobile clinics, and more.
          </p>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-20">

        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src={image1}
            alt="Medical Aid"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="text-base leading-relaxed text-gray-700 md:w-1/2">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Right to Healthcare</h2>
            <p>
              We believe access to healthcare is a fundamental human right. We
              organize free health camps, provide essential medicines, and work
              with hospitals and doctors to serve underprivileged communities.
            </p>
          </div>
        </div>

        
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="text-base leading-relaxed text-gray-700 md:w-1/2">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Mobile Health Support</h2>
            <p>
              Our medical teams and volunteers bring mobile clinics to remote
              and underserved areas, delivering checkups, treatment, and
              preventive care directly where it's needed most.
            </p>
          </div>
          <img
            src={image2}
            alt="Mobile Clinics"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
        </div>

        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src={image3}
            alt="Mental Health"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="text-base leading-relaxed text-gray-700 md:w-1/2">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Mental Wellness Matters</h2>
            <p>
              We conduct counseling sessions and mental health workshops for
              students, elders, and communities — fostering emotional strength
              alongside physical wellness.
            </p>
          </div>
        </div>

        
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="text-base leading-relaxed text-gray-700 md:w-1/2">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Every Life Deserves Care</h2>
            <p>
              Your donation sponsors critical treatments, educates about health,
              and ensures that no one is left alone in their fight for survival
              and well-being.
            </p>
          </div>
          <img
            src={image4}
            alt="Helping Patients"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
        </div>
      </div>

    
      {!showDonationForm && (
        <div className="text-center py-12 bg-orange-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Every contribution goes directly toward improving lives.
          </p>
          <button
            onClick={handleDonateClick}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition duration-300"
          >
            Donate Now
          </button>
        </div>
      )}

      
      {showDonationForm && (
        <div
          id="donation-form"
          className="bg-orange-500 px-4 sm:px-10 md:px-14 py-12 flex justify-center"
        >
          <div className="w-full max-w-sm sm:max-w-md">
            <DonationForm categoryFromPage="Healthcare" />
          </div>
        </div>
      )}
    </>
  );
};

export default Healthcare;
