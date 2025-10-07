import React from "react";

const Volunteer = () => {
  return (
    <section className="py-12 bg-gray-100">
  <div className="max-w-6xl mx-auto px-6 text-center">
    

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <div className="bg-white border-l-4 border-red-500 p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-left">
        <h3 className="text-xl  text-red-700 mb-2"> Vision & Mission</h3>
        <p className="text-orange-600  mb-2">"Empowering Communities, Enriching Lives"</p>
        <p className="text-gray-800 text-base">
          We serve with <span className="underline text-orange-500">compassion</span>, <span className="underline text-orange-500">dignity</span>, and <span className="underline text-orange-500">respect</span> by promoting <span className="underline text-orange-500">education</span>, <span className="underline text-orange-500">healthcare</span>, and <span className="underline text-orange-500">spiritual growth</span>.
        </p>
      </div>

      
      <div className="bg-white border-l-4 border-red-500 p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-left">
        <h3 className="text-xl  text-red-700 mb-2"> Core Values</h3>
        <ul className="list-disc list-inside text-gray-800 text-base space-y-1">
          <li><span className=" text-orange-600">Compassion</span>: Kindness & empathy</li>
          <li><span className="text-orange-600">Integrity</span>: Transparency & trust</li>
          <li><span className=" text-orange-600">Inclusivity</span>: Diversity & equality</li>
          <li><span className=" text-orange-600">Excellence</span>: Innovation & quality</li>
          <li><span className=" text-orange-600">Spiritual Growth</span>: Mind, body, soul</li>
        </ul>
      </div>

    
      <div className="bg-white border-l-4 border-red-500 p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-left">
        <h3 className="text-xl  text-red-700 mb-2"> Key Objectives</h3>
        <ul className="list-disc list-inside text-gray-800 text-base space-y-1">
          <li><span className="underline text-orange-500">Education</span>: Learning & training</li>
          <li><span className="underline text-orange-500">Healthcare</span>: Medical & wellness</li>
          <li><span className="underline text-orange-500">Community</span>: Women & children upliftment</li>
          <li><span className="underline text-orange-500">Culture</span>: Siddheshwari Shaktipith heritage</li>
          <li><span className="underline text-orange-500">Disaster Relief</span>: Emergency support</li>
        </ul>
      </div>

      
      <div className="bg-white border-l-4 border-red-500 p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-left">
        <h3 className="text-xl  text-red-700 mb-2"> Our Goals</h3>
        <ul className="list-disc list-inside text-gray-800 text-base space-y-1">
          <li><span className="underline text-orange-500">Empower communities</span> with education & health</li>
          <li><span className="underline text-orange-500">Promote spirituality</span> through programs</li>
          <li><span className="underline text-orange-500">Foster inclusivity</span> through sustainable development</li>
          <li><span className="underline text-orange-500">Preserve culture</span> and sacred heritage</li>
        </ul>
      </div>
    </div>
  


        
        
        <div className="mt-12 bg-gradient-to-r from-red-500 to-orange-500 text-white p-8 rounded-lg shadow-lg">
          <h4 className="text-2xl font-bold">Partner with Us</h4>
          <p className="mt-2 text-lg">
            We welcome collaborations with NGOs and businesses to expand our
            impact.
          </p>
          <a
            href="/partner"
            className="inline-block mt-4 bg-white text-red-600 font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-200 transition"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
 
