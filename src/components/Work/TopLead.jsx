
import React, { useState } from "react";
import charity1 from "../../assets/images/charity1.jpg";
import charity2 from "../../assets/images/charity2.jpg";
import charity3 from "../../assets/images/charity3.jpg";
import charity4 from "../../assets/images/charity4.jpg";
import charity5 from "../../assets/images/charity5.jpg";
import charity6 from "../../assets/images/charity6.jpg";
import { FaHandsHelping, FaBookReader, FaClinicMedical } from "react-icons/fa";

const impactStats = [
  {
    icon: <FaHandsHelping className="text-4xl text-red-600 mb-4" />,
    title: "5000+ जरूरतमंदों को भोजन",
    description: "गरीब और भूखे लोगों को मुफ्त भोजन मुहैया कराया गया।",
  },
  {
    icon: <FaBookReader className="text-4xl text-red-600 mb-4" />,
    title: "1200+ बच्चों की शिक्षा",
    description: "स्कूल फीस, किताबें और स्टेशनरी का प्रबंध किया गया।",
  },
  {
    icon: <FaClinicMedical className="text-4xl text-red-600 mb-4" />,
    title: "50+ स्वास्थ्य शिविर",
    description: "गाँवों और कस्बों में मुफ्त जांच और दवाइयों का वितरण।",
  },
];

const galleryImages = [
  { src: charity1, alt: "Gallery Image 1" },
  { src: charity2, alt: "Gallery Image 2" },
  { src: charity3, alt: "Gallery Image 3" },
  { src: charity4, alt: "Gallery Image 4" },
  { src: charity5, alt: "Gallery Image 5" },
  { src: charity6, alt: "Gallery Image 6" },
];

const AboutTrust = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleSwipe = (e) => {
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - e.target.dataset.startX;
    if (deltaX > 50) prevImage();
    if (deltaX < -50) nextImage();
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    e.target.dataset.startX = touch.clientX;
  };

  return (
    <section className="bg-white text-gray-800">
    
      <div className="py-16 bg-gradient-to-b from-white to-red-50 text-center">
        <h2 className="text-4xl font-bold text-red-700 mb-6">हमारा प्रभाव</h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
          माँ सिद्धेश्वरी चैरिटेबल ट्रस्ट आपके सहयोग से समाज में बदलाव ला रहा है।
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {impactStats.map((item, index) => (
  <div
    key={index}
    className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
  >
    {item.icon}
    <h3 className="text-xl font-semibold text-red-700 mb-2">{item.title}</h3>
    <p className="text-gray-600">{item.description}</p>
  </div>
))}
            
          
        </div>
      </div>

      
      <div className="py-16 bg-red-50 text-center px-4">
        <h2 className="text-4xl font-bold text-red-700 mb-6">हमारी दृष्टि और मिशन</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-4">
          <p>
            <strong>हमारी दृष्टि:</strong> एक ऐसे समाज का निर्माण करना जहाँ हर व्यक्ति को भोजन, शिक्षा और स्वास्थ्य की मूलभूत सुविधाएँ सुलभ हों।
          </p>
          <p>
            <strong>हमारा मिशन:</strong> जरूरतमंदों की सहायता करना, बच्चों को शिक्षा प्रदान करना, स्वास्थ्य सेवाओं का विस्तार करना।
          </p>
        </div>
      </div>

      
      <div className="py-16 bg-white text-center px-4">
        <h2 className="text-4xl font-bold text-red-700 mb-10">हमारी झलकियाँ</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg group cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-2 text-sm text-gray-600">{image.caption}</div>
            </div>
          ))}
        </div>
      </div>

    
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleSwipe}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold z-10"
              onClick={closeModal}
            >
              &times;
            </button>

            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-4xl px-2 z-10"
            >
              ❮
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-4xl px-2 z-10"
            >
              ❯
            </button>

            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
            {galleryImages[currentIndex].caption && (
              <p className="text-white text-center mt-4">{galleryImages[currentIndex].caption}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutTrust;
