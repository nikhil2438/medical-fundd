import React, { useEffect, useState } from "react";
import educationImage from "../../assets/images/education.jpg";
import Medical3 from "../../assets/images/Medical3.png";
import FoodImage from "../../assets/images/Food.jpg";
import { Link } from "react-router-dom";

const fundraisers = [
  {
    id: 1,
    title: "Help a Child Get Education",
    image: educationImage,
    raised: 4500,
    goal: 10000,
    path: "/education",
  },
  {
    id: 2,
    title: "Health",
    image:  Medical3,
    raised: 7500,
    goal: 15000,
    path: "/healthcare",
  },
  {
    id: 3,
    title: "Food for the Homeless",
    image: FoodImage,
    raised: 5000,
    goal: 12000,
    path: "/food&nutrition",
  },
];

const FundraiserCard = ({ fundraiser }) => {
  const [progress, setProgress] = useState(0);

  const percentage = Math.min(
    100,
    Math.round((fundraiser.raised / fundraiser.goal) * 100)
  );


  const getProgressColor = (percent) => {
    if (percent >= 75) return "bg-green-500";
    if (percent >= 50) return "bg-red-400";
    return "bg-red-500";
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(percentage);
    }, 100);
    return () => clearTimeout(timeout);
  }, [percentage]);

  return (
    <Link to={fundraiser.path} className="block">
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
        <img
          src={fundraiser.image}
          alt={fundraiser.title}
          className="w-full h-56 sm:h-48 object-cover rounded-md transform transition-transform duration-300 hover:scale-105"
        />
        <h3 className="text-lg font-semibold mt-4">{fundraiser.title}</h3>

      
        <div className="relative w-full bg-gray-200 h-4 rounded-full mt-3 overflow-hidden">
          <div
            className={`h-4 rounded-full transition-all duration-1000 ease-out ${getProgressColor(
              percentage
            )}`}
            style={{
              width: `${progress}%`,
              backgroundImage:
                "linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)",
              backgroundSize: "20px 20px",
              animation: "moveStripes 1s linear infinite",
            }}
          >
            <span className="text-white text-xs font-semibold absolute inset-0 flex items-center justify-center">
              {percentage}%
            </span>
          </div>
        </div>

        <p className="text-sm mt-2">
          Raised: <span className="font-bold">${fundraiser.raised}</span> / ${fundraiser.goal}
        </p>

        <Link to="/donationForm">
          <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition">
            Donate Now
          </button>
        </Link>
      </div>
    </Link>
  );
};

const FeaturedFundraisers = () => {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-8">
          Featured Fundraisers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fundraisers.map((fundraiser) => (
            <FundraiserCard key={fundraiser.id} fundraiser={fundraiser} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFundraisers;
