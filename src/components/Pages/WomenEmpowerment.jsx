import React, { useState } from "react";
import banner7 from "../../assets/images/banner7.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import Healthcare3 from "../../assets/images/Healthcare3.jpg";
import Healthcare4 from "../../assets/images/Healthcare4.jpg";
import Healthcare5 from "../../assets/images/Healthcare5.jpg";
import DonationForm from "../DonationForm/DonationForm";

const WomenEmpowerment = () => {
  const [showDonationForm, setShowDonationForm] = useState(false);

  const handleDonateClick = () => {
    setShowDonationForm(true);
    setTimeout(() => {
      document.getElementById("donation-form")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div>
      <img
        src={banner3}
        alt="Women Empowerment Banner"
        className="mx-auto w-full h-[500px] object-cover rounded-lg shadow-md"
      />

      <div className="mt-6 text-center px-6 sm:px-8">
        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
          Empower Her. Empower Humanity. 💪🌸
        </h2>
        <p className="mt-4 text-gray-600 text-lg sm:text-xl">
          Support women in unlocking their full potential through skill
          development, education, and self-reliance programs. Your contribution
          helps build a future rooted in equality and opportunity.
        </p>
        <p className="mt-2 text-gray-500 text-sm sm:text-base">
          “There is no limit to what we, as women, can accomplish.” – Michelle Obama
        </p>
      </div>

    
      <div className="mt-16 flex flex-col md:flex-row items-center px-4 sm:px-10">
        <div className="md:w-1/2">
          <img src={banner7} alt="Women Training" className="rounded-lg shadow-md w-full" />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10">
          <h1 className="text-lg leading-relaxed md:text-xl text-gray-800">
            We organize skill development programs that train women in tailoring,
            digital literacy, handicrafts, and entrepreneurship to help them
            become financially independent.
          </h1>
        </div>
      </div>

      
      <div className="mt-16 flex flex-col md:flex-row-reverse items-center px-4 sm:px-10">
        <div className="md:w-1/2">
          <img src={Healthcare3} alt="Workshops" className="rounded-lg shadow-md w-full" />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:pr-10">
          <h1 className="text-lg leading-relaxed md:text-xl text-gray-800">
            Awareness campaigns and workshops on rights, healthcare, and financial
            literacy empower women to take control of their lives and decisions.
          </h1>
        </div>
      </div>

      
      <div className="mt-16 flex flex-col md:flex-row items-center px-4 sm:px-10">
        <div className="md:w-1/2">
          <img src={Healthcare4} alt="Support Circle" className="rounded-lg shadow-md w-full" />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10">
          <h1 className="text-lg leading-relaxed md:text-xl text-gray-800">
            Our community groups provide a safe space for women to support each
            other, share experiences, and inspire change at the grassroots level.
          </h1>
        </div>
      </div>

    
      <div className="mt-16 flex flex-col md:flex-row-reverse items-center px-4 sm:px-10">
        <div className="md:w-1/2">
          <img src={Healthcare5} alt="Success Stories" className="rounded-lg shadow-md w-full" />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:pr-10">
          <h1 className="text-lg leading-relaxed md:text-xl text-gray-800">
            Behind every empowered woman is a community that believed in her
            strength. Help us build that community by funding education,
            self-employment tools, and wellness programs.
          </h1>
        </div>
      </div>

      
      {!showDonationForm && (
        <div className="text-center py-12 bg-orange-100 mt-20">
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
          className="bg-orange-500 px-4 sm:px-10 md:px-14 mt-20 mb-2 flex justify-center"
        >
          <div className="w-full max-w-sm sm:max-w-md">
            <DonationForm categoryFromPage="womenempowerment" />
          </div>
        </div>
      )}
    </div>
  );
};

export default WomenEmpowerment;
