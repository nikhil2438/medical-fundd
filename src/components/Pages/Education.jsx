
import React, { useState } from "react";
import Educations from "../../assets/images/Educations.jpg";
import Educations7 from "../../assets/images/Educations7.jpg";
import Educations3 from "../../assets/images/Educations3.jpg";
import Educations4 from "../../assets/images/Educations4.jpg";
import Educations8 from "../../assets/images/Educations8.jpg";
import DonationForm from "../DonationForm/DonationForm";

const Education = () => {
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
          src={Educations4}
          alt="Education for All"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-white text-2xl sm:text-4xl font-bold mb-2">
              Empower Through Education 🎓📚
            </h1>
            <p className="text-white text-base sm:text-lg">
              Every child deserves a chance to learn. Let's build a brighter future together.
            </p>
          </div>
        </div>
      </div>

  
      <div className="text-center mt-6 px-4">
        <p className="text-gray-600 text-sm sm:text-base italic">
          "Education is the most powerful weapon which you can use to change the world." – Nelson Mandela
        </p>
      </div>

    
      <section className="mt-10 max-w-6xl mx-auto space-y-12 px-4">
        {[
          {
            img: Educations,
            text: "We provide educational resources and support to underprivileged children, ensuring that no dream goes unrealized due to lack of access to quality learning."
          },
          {
            img: Educations3,
            text: "From school supplies to scholarships, your contribution helps us bridge the education gap in rural and urban communities alike."
          },
          {
            img: Educations7,
            text: "Our volunteers conduct interactive learning sessions, career guidance workshops, and mentorship programs for youth development."
          },
          {
            img: Educations8,
            text: "Be part of a change that lasts generations. Let’s uplift lives through the gift of knowledge."
          },
        ].map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} gap-6 items-center`}
          >
            <img
              src={section.img}
              alt="Education Section"
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
            You're just one step away from changing a child's future 🌟
          </h2>
          <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg">
            <DonationForm categoryFromPage="Education" />
          </div>
        </div>
      )}
    </>
  );
};

export default Education;
