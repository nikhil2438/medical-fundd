import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";

const ContactAndPartner = () => {
  return (
    <div className="bg-orange-50">

      
      <section className="min-h-screen flex items-center justify-center px-6 py-16">
        <motion.div
          className="max-w-4xl w-full bg-white rounded-3xl shadow-xl p-10 md:p-14 text-center space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl font-extrabold text-orange-600 drop-shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Become a Partner in Kindness & Change
          </motion.h1>

          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-orange-700">Maa Sidhashweri Charity & Trust</span>,
            we believe that compassion knows no boundaries. Together with your partnership — be it time,
            talent, or treasure — we can light up lives and rewrite stories of hope for the underprivileged.
            Let’s walk this path of purpose and progress, hand in hand.
          </p>

          <motion.div
            className="bg-orange-200 border-l-4 border-orange-500 p-6 rounded-xl text-left shadow-inner"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-orange-700 mb-2">
              🤝 Ways You Can Make a Difference
            </h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2 text-md">
              <li>Host or support local charity drives and awareness events</li>
              <li>Contribute essentials like food, books, or clothing</li>
              <li>Volunteer in our education, health, or community upliftment programs</li>
              <li>Adopt or sponsor a child’s education and well-being</li>
              <li>Use your voice and platform to advocate for our mission</li>
            </ul>
          </motion.div>

          <div className="mt-6">
            <p className="text-gray-600 italic">
              Every effort, big or small, counts. Your involvement could change someone’s world.
            </p>
            <motion.a
              href="mailto:contact@sidhashweritrust.org"
              className="inline-block mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ✉️ Reach Out to Us
            </motion.a>
          </div>
        </motion.div>
      </section>

    
      <section className="min-h-screen flex items-center justify-center px-6 py-16 bg-orange-100">
        <motion.div
          className="max-w-3xl w-full bg-white rounded-3xl shadow-xl p-10 md:p-14 space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-orange-700 text-center drop-shadow-sm">
            संपर्क करें | Contact Us
          </h1>

          <div className="space-y-4 text-gray-800 text-md md:text-lg leading-relaxed">
            <p>
              <strong>माँ सिद्धेश्वरी चैरिटेबल ट्रस्ट</strong><br />
              (भारतीय ट्रस्ट अधिनियम, 1882 द्वारा दिल्ली सरकार के तहत पंजीकृत)
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div>
                <p><strong>Reg. No:</strong> 1592</p>
                <p><strong>PAN:</strong> AAITM5890N</p>
                <p><strong>TAN:</strong> DELM47247E</p>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="mt-1 text-orange-600" />
                <p>
                  बादली शहर, आस्था अस्पताल के पास,<br />
                  दिल्ली, भारत - 110042
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 mt-6">
              <Mail className="text-orange-600" />
              <a
                href="mailto:contact@sidhashweritrust.org"
                className="text-orange-700 font-medium hover:underline"
              >
                contact@sidhashweritrust.org
              </a>
            </div>
          </div>

          <div className="text-center mt-6">
            <a
              href="mailto:contact@sidhashweritrust.org"
              className="inline-block bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-orange-700 transition-all"
            >
              ✉️ Send Us an Email
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactAndPartner;
