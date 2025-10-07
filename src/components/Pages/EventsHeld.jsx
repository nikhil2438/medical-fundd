import React from "react";
import festival2 from "../../assets/images/festival2.png";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};


const recentVideos = [
  "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmaasiddheshwaricharitabletrust%2Fvideos%2F1239567664169600%2F&show_text=false&width=560&t=0",
  "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmaasiddheshwaricharitabletrust%2Fvideos%2F1258954925859198%2F&show_text=false&width=560&t=0",
  "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmaasiddheshwaricharitabletrust%2Fvideos%2F1186072379966367%2F&show_text=false&width=560&t=0",
  "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmaasiddheshwaricharitabletrust%2Fvideos%2F537322859217952%2F&show_text=false&width=560&t=0",
  "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmaasiddheshwaricharitabletrust%2Fvideos%2F659837746967959%2F&show_text=false&width=560&t=0",
  "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmaasiddheshwaricharitabletrust%2Fvideos%2F4018629808411047%2F&show_text=false&width=560&t=0",
"https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmaasiddheshwaricharitabletrust%2Fvideos%2F4018629808411047%2F&show_text=false&width=560&t=0",

];


const pastVideos = [
  "https://drive.google.com/file/d/1lUDvcRvQ3HmjhQN-FmNzFSI4QVEEJgvc/preview",
  "https://drive.google.com/file/d/18eXmuqh8ie9q81MNM7pDMpFUd1Oc4xsS/preview",
  "https://drive.google.com/file/d/1laiAJz3an1ddWmsKReCYHVy4FTiQraUq/preview",
  "https://drive.google.com/file/d/18htxJUl8i3VsEkGb0xAw0Z1kxvJMm2mv/preview",
];

const EventsHeld = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-10"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      
      <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
        <div className="md:w-1/2">
          <img
            src={festival2}
            alt="Labhuani Mahotsav"
            className="rounded-xl w-full shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
            लभुआनी महोत्सव
          </h2>
          <p className="text-lg text-gray-800 font-medium mb-2">
            April 27, 2025
          </p>
          <p className="text-gray-700 leading-relaxed">
            यह महोत्सव परंपरा, कला और संस्कृति का संगम है।
          </p>
        </div>
      </div>

      
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Recent Event Videos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {recentVideos.map((url, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-md p-4">
              <iframe
                src={url}
                width="100%"
                height="314"
                allowFullScreen
                className="rounded-md w-full"
                title={`Recent Video ${index + 1}`}
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Past Event Videos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {pastVideos.map((url, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-md p-4">
              <iframe
                src={url}
                width="100%"
                height="240"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-md w-full"
                title={`Past Video ${index + 1}`}
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default EventsHeld;
 
