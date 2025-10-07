import React from "react";
import Medical2 from "../../assets/images/Medical2.png";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* About Us Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center max-w-7xl mx-auto py-16 px-4 lg:px-8 gap-10">
        <div className="lg:w-1/2">
          <h2 className="text-5xl font-bold text-orange-600 mb-6">About Us</h2>
          <p className="text-xl leading-relaxed text-orange-500 mb-4">
            At <span className="font-semibold">Shri Dev Kiran Global Foundation</span>, we believe that 
            good health is the foundation of a better life. Our mission is to make quality healthcare 
            accessible, affordable, and inclusive for all—especially for underprivileged and underserved communities.
          </p>

          <p className="text-xl leading-relaxed text-orange-500 mb-4">
            Founded with a vision to bring positive change in society, our foundation works at the 
            intersection of healthcare, awareness, and social welfare. Through our initiatives, we focus on:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-orange-500 text-xl">
            <li>
              <span className="underline decoration-orange-400 font-semibold">Free Health Camps & Check-ups</span> – Preventive care, early diagnosis, and consultations.
            </li>
            <li>
              <span className="underline decoration-orange-400 font-semibold">Awareness Programs</span> – Hygiene, nutrition, women’s health, child care, and lifestyle diseases.
            </li>
            <li>
              <span className="underline decoration-orange-400 font-semibold">Support Services</span> – Medicines, diagnostics, and specialized treatment.
            </li>
            <li>
              <span className="underline decoration-orange-400 font-semibold">Maternal & Child Health</span> – Safe motherhood and healthy childhood programs.
            </li>
          </ul>

          <p className="text-xl leading-relaxed text-orange-500 mt-4">
            Our team of doctors, healthcare workers, volunteers, and partners are united by one goal: 
            to create a healthier tomorrow for every individual, regardless of their background.
          </p>

          <p className="italic text-orange-400 mt-4 text-xl">
            At Shri Dev Kiran Global Foundation, we don’t just provide healthcare—we nurture hope, dignity, and wellness.
          </p>
        </div>

        <div className="lg:w-1/2">
          <img
            src={Medical2}
            alt="Foundation Introduction"
            className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
