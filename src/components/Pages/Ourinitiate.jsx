import React from "react";
import { useNavigate } from "react-router-dom";
import educationImg from "../../assets/images/education.jpg";
import foodImg from "../../assets/images/Food.jpg";
import healthcareImg from "../../assets/images/banner7.jpg";
import womenImg from "../../assets/images/page.png";

const initiatives = [
  {
    title: "Education",
    description:
      "Providing free education and scholarships for underprivileged children.",
    image: educationImg,
    route: "/education",
  },
  {
    title: "Food & Nutrition",
    description: "Distributing meals and groceries to the homeless and poor.",
    image: foodImg,
    route: "/food&nutrition",
  },
  {
    title: "Healthcare",
    description: "Free medical camps and hospital assistance for the needy.",
    image: healthcareImg,
    route: "/healthcare",
  },
  {
    title: "Women Empowerment",
    description:
      "Skill development programs to empower women for self-sufficiency.",
    image: womenImg,
    route: "/womenempowerment",
  },
];

export default function Ourinitiate() {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-red-700 mb-12">
          हमारी पहल
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {initiatives.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.route)}
              className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
