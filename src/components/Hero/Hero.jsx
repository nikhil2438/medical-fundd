import React from "react";
import heroImage from "../../assets/images/hero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative bg-gray-900 text-white h-[450px] flex items-center justify-center text-center px-4 sm:px-6 md:px-12 lg:px-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative max-w-4xl mx-auto z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Empower Lives, Spread Hope
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300">
          Ma Sidhashweri Charity and Trust is dedicated to helping those in need
          through crowdfunding and community support. Your small contribution
          can bring a big change.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/donationForm"
            className="bg-red-500 hover:bg-red-700 text-white-900 font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 text-sm sm:text-base"
          >
            Donate Now
          </Link>
          <Link
            to="/fundraiser"
            className="bg-red-500 border border-red-500 text-white-900 hover:bg-red-700 hover:text-white-700 font-semibold px-6 py-3 rounded-lg transition duration-300 text-sm sm:text-base"
          >
            Start a Fundraiser
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;


