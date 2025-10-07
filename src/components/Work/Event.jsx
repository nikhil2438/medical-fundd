import festival1 from "../../assets/images/festival1.png";
import festival2 from "../../assets/images/festival2.png";
import Video from "../../components/Pages/Video";

const Events = () => {
  return (
    <>
      <div>
        <div className="min-h-screen flex flex-col items-center mt-20 justify-center bg-yellow-50 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row-reverse items-center mb-10 w-full max-w-4xl">
            <img
              src={festival1}
              alt="लभुआनी महोत्सव Logo"
              className=" w-full max-w-[800px] h-auto sm:w-[600px] sm:h-[500px] object-contain sm:ml-6"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mt-4">
                शोभायात्रा
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mt-2">
                "April 28 to May 3, 2025"
              </p>
              <p className="text-gray-700 mt-4 text-base sm:text-lg ">
                "Be a part of the grand Shobha Yatra and experience our culture
                and spirituality. This procession vividly showcases our glorious
                history, religious faith, and folk traditions. Magnificent
                tableaux, the melodious sound of traditional musical
                instruments, and the enthusiasm of devotees make it even more
                special. Come, join this divine event and immerse yourself in
                devotion, dedication, and celebration!"
              </p>
            </div>
          </div>

          {/* Shobha Yatra Section */}
          <div className="flex flex-col sm:flex-row items-center w-full max-w-4xl">
            <img
              src={festival2}
              alt="शोभायात्रा Logo"
              className=" w-full max-w-[700px] h-auto sm:w-[500px] sm:h-[500px] object-contain sm:ml-6"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mt-4">
                लभुआनी महोत्सव
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mt-2">
                "April 27, 2025"
              </p>

              <p className="text-gray-700 mt-4 text-base sm:text-lg ">
                "This festival is a confluence of tradition, art, and culture.
                Here, you will experience the uniqueness of traditional folk
                dance, music, drama, and handicrafts. This festival brings our
                rich heritage to life and provides a golden opportunity for the
                new generation to connect with its roots. Join us in this
                magnificent celebration and immerse yourself in the grandeur of
                folk culture!"
              </p>
            </div>
          </div>
          {<Video />}
        </div>
      </div>
    </>
  );
};

export default Events;
