// 
import React, { useState } from "react";
import banner7 from "../../assets/images/banner7.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import Healthcare3 from "../../assets/images/Healthcare3.jpg";
import Healthcare4 from "../../assets/images/Healthcare4.jpg";
import Healthcare5 from "../../assets/images/Healthcare5.jpg";
import DonationForm from "../DonationForm/DonationForm";

const FoodAndNutrition = () => {
  const [showDonationForm, setShowDonationForm] = useState(false);

  const handleDonateClick = () => {
    setShowDonationForm(true);
    setTimeout(() => {
      document.getElementById("donation-form")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
        <img
          src={banner7}
          alt="Food Distribution"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-white text-2xl sm:text-4xl font-bold mb-2">
              Nourish a Life with a Generous Heart 🍲❤️
            </h1>
            <p className="text-white text-base sm:text-lg">
              Help us fight hunger. Be the reason someone smiles today.
            </p>
          </div>
        </div>
      </div>

      
      <div className="text-center mt-6 px-4">
        <p className="text-gray-600 text-sm sm:text-base italic">
          "If you can’t feed a hundred people, then feed just one." – Mother Teresa
        </p>
      </div>

      
      <section className="mt-10 max-w-6xl mx-auto space-y-12 px-4">
        {[
          {
            img: banner3,
            text: "Every day, our volunteers prepare and distribute wholesome meals to those who need them most. From the streets to shelter homes, your kindness travels far."
          },
          {
            img: Healthcare3,
            text: "We believe that nutritious food is a basic human right. With your support, we ensure balanced meals for children, women, and elderly across the city."
          },
          {
            img: Healthcare4,
            text: "From dry ration kits to fresh cooked meals, we extend our helping hand through various channels of nourishment."
          },
          {
            img: Healthcare5,
            text: "Be part of a movement that feeds the soul and stomach. Let’s make this world a little warmer, one plate at a time."
          },
        ].map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} gap-6 items-center`}
          >
            <img
              src={section.img}
              alt="Food Section"
              className="w-full md:w-1/2 rounded-lg shadow-md"
            />
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed md:w-1/2">
              {section.text}
            </p>
          </div>
        ))}
      </section>

    
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
          className="mt-20 px-4 sm:px-8 py-10 bg-orange-100 rounded-t-3xl shadow-inner"
        >
          <h2 className="text-center text-2xl sm:text-3xl font-semibold text-orange-700 mb-6">
            You're just one step away from making a difference 🙌
          </h2>
          <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg">
            <DonationForm categoryFromPage="FoodandNutritious" />
          </div>
        </div>
      )}
    </>
  );
};

export default FoodAndNutrition;
