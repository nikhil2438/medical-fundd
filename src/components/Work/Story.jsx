import React, { useState, useEffect, useRef } from "react";
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
import charity7 from "../../assets/images/charity7.jpg";
import pop7 from "../../assets/images/pop7.jpg";
import pop8 from "../../assets/images/pop8.jpg";
const images = [
  { src: abc, title: "सत्य प्रकाश सिंह ने मुलाकात की, परम पूज्य स्वामी चिदानन्द सरस्वती जी।" },
  { src: abc1, title: "सत्य प्रकाश सिंह ने मुलाकात की, स्वामी रामदेव बाबा" },
  { src: abc2, title: "सत्य प्रकाश सिंह ने मुलाकात की, पद्मविभूषण स्वामी रामभद्राचार्य जी महाराज" },
  { src: pop1, title: "सत्य प्रकाश सिंह ने मुलाकात की, श्रीमती द्रौपदी मुर्मू, भारत के माननीय राष्ट्रपति" },
  { src: pop2, title: "सत्य प्रकाश सिंह ने मुलाकात की, श्री रामनाथ कोविंद, भारत के पूर्व राष्ट्रपति" },
  { src: pop3, title: "सत्य प्रकाश सिंह ने मुलाकात की, श्री राजनाथ सिंह, माननीय रक्षा मंत्री, भारत सरकार" },
  { src: pop4, title: "सत्य प्रकाश सिंह ने मुलाकात की, श्री रघुवर दास, ओडिशा के माननीय गवर्नर" },
  { src: pop5, title: "सत्य प्रकाश सिंह ने मुलाकात की, श्री हेमन्त सोरेन, झारखंड के माननीय मुख्यमंत्री" },
  { src: pop6, title: "सत्य प्रकाश सिंह ने मुलाकात की, श्री योगी आदित्यनाथ, उत्तर प्रदेश के माननीय मुख्यमंत्री" },
  {src:charity7, title: "सत्य प्रकाश सिंह ने मुलाकात की" },
  {src:pop7, titlle:"सत्य प्रकाश सिंह ने मुलाकात की"},
  {src:pop8, title: "सत्य प्रकाश सिंह ने मुलाकात की"},
];

const GROUP_SIZE = 4;

const Gallery = () => {
  const [groupIndex, setGroupIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(null);
  const intervalRef = useRef(null);

  const totalGroups = Math.ceil(images.length / GROUP_SIZE);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setGroupIndex((prev) => (prev + 1) % totalGroups);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [totalGroups]);

  const visibleImages = images.slice(
    groupIndex * GROUP_SIZE,
    groupIndex * GROUP_SIZE + GROUP_SIZE
  );

  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <h1 className="text-center text-5xl md:text-6xl font-black text-orange-900 mb-4">
        वकालत और शासन
      </h1>
      <h2 className="text-center text-2xl md:text-3xl font-medium text-orange-800 mb-8">
        प्रमुख भारतीय हस्तियों के साथ सहयोगात्मक वार्ता
      </h2>

      
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        key={groupIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {visibleImages.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentImage(image)}
            className="cursor-pointer"
          >
            <div className="shadow-lg rounded-xl overflow-hidden bg-white">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-56 object-contain"
              />
              <div className="text-center bg-orange-200 p-3">
                <p className="font-semibold text-orange-800 text-sm md:text-base">
                  {image.title}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      
      <Dialog.Root open={!!currentImage} onOpenChange={() => setCurrentImage(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <Dialog.Content className="bg-white p-4 rounded-lg shadow-xl max-w-3xl w-full relative">
              <Dialog.Title className="text-lg font-bold text-center text-orange-700">
                {currentImage?.title}
              </Dialog.Title>
              <Dialog.Description className="text-gray-600 text-center mb-4 text-sm md:text-base">
                Click outside or press Esc to close
              </Dialog.Description>

              <motion.img
                key={currentImage?.src}
                src={currentImage?.src}
                alt="Full View"
                className="max-w-full max-h-[80vh] rounded-lg mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
              />

              <div className="flex justify-center mt-4">
                <button
                  className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-md"
                  onClick={() => setCurrentImage(null)}
                >
                  Close
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
 
