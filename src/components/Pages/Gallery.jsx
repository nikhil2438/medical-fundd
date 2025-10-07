
import React, { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";

import abc from "../../assets/images/abc.jpg";
import abc1 from "../../assets/images/abc1.jpg";
import abc2 from "../../assets/images/abc2.jpg";
import pop1 from "../../assets/images/pop1.jpg";
import pop2 from "../../assets/images/pop2.jpg";
import pop3 from "../../assets/images/pop3.jpg";
import pop4 from "../../assets/images/pop4.jpg";
import pop5 from "../../assets/images/pop5.jpg";
import pop6 from "../../assets/images/pop6.jpg";
import power1 from "../../assets/images/power1.jpg";
import puja from "../../assets/images/puja.jpg";
import puja2 from "../../assets/images/puja2.jpg";
import puja3 from "../../assets/images/puja3.jpg";
import puja4 from "../../assets/images/puja4.jpg";
import puja5 from "../../assets/images/puja5.jpg";
import puja6 from "../../assets/images/puja6.jpg";
import puja7 from "../../assets/images/puja7.jpg";
import defg from "../../assets/images/defg.jpg";
import akashra from "../../assets/images/akashra.jpg";
import mediaGalleryImages from "../../data/mediaGalleryImages";

const categories = {
  "मीडिया गैलरी": mediaGalleryImages, 
  
  
  "मीडिया कवरेज": [
    { src: pop1, title: "भारत के राष्ट्रपति श्रीमती द्रौपदी मुर्मू" },
    { src: pop2, title: "पूर्व राष्ट्रपति श्री रामनाथ कोविंद" },
  ],
  "हस्तियाँ": [
    { src: pop3, title: "रक्षा मंत्री श्री राजनाथ सिंह" },
    { src: pop4, title: "ओडिशा के गवर्नर श्री रघुवर दास" },
    { src: pop5, title: "झारखंड के मुख्यमंत्री श्री हेमन्त सोरेन" },
  ],
  "आध्यात्मिक गुरु": [
    { src: pop6, title: "मुख्यमंत्री योगी आदित्यनाथ जी" },
  ],
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("मीडिया गैलरी");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = categories[selectedCategory];

  useEffect(() => {
    if (selectedImage) {
      const interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
        setSelectedImage(images[nextIndex]);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [selectedImage, currentIndex, images]);

  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-orange-700 mb-4">
        Temple Gallery
      </h1>

      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-md font-semibold text-sm md:text-base transition ${
              selectedCategory === cat
                ? "bg-orange-600 text-white"
                : "bg-orange-200 text-orange-800 hover:bg-orange-300"
            }`}
            onClick={() => {
              setSelectedCategory(cat);
              setSelectedImage(null);
              setCurrentIndex(0);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSelectedImage(image);
              setCurrentIndex(index);
            }}
            className="cursor-pointer"
          >
            <div className="shadow-lg rounded-xl overflow-hidden bg-white">
              <img src={image.src} alt={image.title} className="w-full h-56 object-contain" />
              <div className="text-center bg-orange-200 p-3">
                <p className="font-semibold text-orange-800 text-sm md:text-base">{image.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog.Root open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
            <Dialog.Content className="bg-white p-4 rounded-lg shadow-xl max-w-3xl w-full relative">
              <Dialog.Title className="text-lg font-bold text-center text-orange-700">
                {selectedImage?.title}
              </Dialog.Title>
              <Dialog.Description className="text-gray-600 text-center mb-4 text-sm md:text-base">
                Click outside or press Esc to close
              </Dialog.Description>

              {selectedImage?.src.includes("http") ? (
                <iframe
                  src={selectedImage?.src}
                  width="100%"
                  height="400"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={selectedImage?.title}
                ></iframe>
              ) : (

              <motion.img
                key={selectedImage?.src}
                src={selectedImage?.src}
                alt="Full View"
                className="max-w-full max-h-[80vh] rounded-lg mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
              />
              )}

              <div className="flex justify-between mt-4 space-x-2">
                <button
                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md flex-1"
                  onClick={() => {
                    const prevIndex = (currentIndex - 1 + images.length) % images.length;
                    setCurrentIndex(prevIndex);
                    setSelectedImage(images[prevIndex]);
                  }}
                >
                  Previous
                </button>

                <button
                  className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md flex-1"
                  onClick={() => setSelectedImage(null)}
                >
                  Close
                </button>

                <button
                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md flex-1"
                  onClick={() => {
                    const nextIndex = (currentIndex + 1) % images.length;
                    setCurrentIndex(nextIndex);
                    setSelectedImage(images[nextIndex]);
                  }}
                >
                  Next
                </button>
              </div>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default Gallery;
