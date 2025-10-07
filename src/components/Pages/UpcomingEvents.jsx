import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://charity-backend-uj5e.onrender.com/api/events"
        );
        const allEvents = response.data;

        const sorted = allEvents.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );

        setEvents(sorted);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  if (!events || events.length === 0) return null;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-8">
      {events.map((event, index) => (
        <motion.div
          key={event._id || index}
          className="bg-white rounded-2xl shadow-md p-6 md:p-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src={event.image}
                alt={event.title}
                className="rounded-xl w-full shadow-lg object-cover max-h-80"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                {event.title}
              </h2>
              <p className="text-lg text-gray-800 font-medium mb-2">
                {new Date(event.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {event.description}
              </p>
              <p className="mt-2 text-gray-600 italic">
                Location: {event.location}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default UpcomingEvents;
