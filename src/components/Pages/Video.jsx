import React from "react";

const Video = () => {
  const videos = [
    "https://drive.google.com/file/d/1lUDvcRvQ3HmjhQN-FmNzFSI4QVEEJgvc/preview",
    "https://drive.google.com/file/d/18eXmuqh8ie9q81MNM7pDMpFUd1Oc4xsS/preview",
    "https://drive.google.com/file/d/1laiAJz3an1ddWmsKReCYHVy4FTiQraUq/preview",
    "https://drive.google.com/file/d/18htxJUl8i3VsEkGb0xAw0Z1kxvJMm2mv/preview",
  ];

  return (
    <div className="text-center p-4 ">
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4   gap-12 p-4 max-w-6xl">
        {videos.map((video, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden   shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <iframe
              className="w-full h-100"
              src={video}
              title={`Video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
