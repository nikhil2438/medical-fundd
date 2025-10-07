import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-12">
      <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden max-w-6xl mx-auto">
        <div className="relative z-10 p-8 sm:p-12 text-center">
         
          {/* Vision Section */}
          <div className="text-left sm:text-center mb-12">
            <h3 className="text-3xl font-bold text-orange-600 mb-4">Our Vision</h3>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
              At <span className="font-semibold">Shri Dev Kiran Global Foundation</span>, our vision is to create a world
              where quality healthcare is accessible, affordable, and equitable for all, regardless of social or economic
              status. We aspire to become a catalyst for positive change in the healthcare sector by bridging gaps,
              empowering communities, and ensuring that no life is compromised due to lack of medical care.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700 mt-4">
              We envision building a sustainable healthcare ecosystem that not only treats illness but also promotes
              prevention, wellness, and holistic living. By integrating modern medical practices with community-driven
              initiatives, we aim to address the root causes of health challenges while fostering awareness and self-care.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700 mt-4">
              Our goal is to reach the last mile of society, where healthcare services are scarce or unaffordable, and
              to create a support system for vulnerable groups such as women, children, and the elderly. Through
              partnerships, innovation, and compassion, we aspire to strengthen public health infrastructure and make
              healthcare a shared responsibility of society.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700 mt-4 italic text-orange-700">
              Ultimately, our vision is to see a future where every individual lives with dignity, health, and hope—a
              future where Shri Dev Kiran Global Foundation stands as a beacon of care, trust, and transformation in
              healthcare.
            </p>
          </div>

          {/* Mission Section */}
          <div className="text-left sm:text-center mb-12">
            <h3 className="text-3xl font-bold text-orange-600 mb-4">Our Mission</h3>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
              At Shri Dev Kiran Global Foundation, our mission is to transform healthcare access and awareness for every
              section of society, with a special focus on underprivileged and marginalized communities. We believe that
              good health is not a privilege, but a basic human right that every individual deserves.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700 mt-4">
              We are committed to providing quality medical services, preventive healthcare, and awareness programs that
              empower people to take charge of their well-being. By organizing health camps, screenings, maternal and
              child health initiatives, and wellness drives, we aim to reduce the burden of preventable diseases and
              ensure early diagnosis and timely care.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700 mt-4">
              Beyond treatment, we strive to educate communities about nutrition, hygiene, lifestyle choices, and women’s
              health, creating a foundation for long-term wellness. Our dedicated team of doctors, healthcare
              professionals, and volunteers works with compassion and integrity to reach those who need us the most.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700 mt-4 italic text-orange-700">
              Through innovation, collaboration, and empathy, we are building a healthcare ecosystem where no one is left
              behind. Our mission is not just to heal illnesses, but to restore hope, dignity, and quality of life—paving
              the way for a healthier and brighter future for all.
            </p>
          </div>

          {/* Read More Button */}
          <div className="mt-6">
            <Link
              to="/about"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300"
            >
              Read More About Us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
