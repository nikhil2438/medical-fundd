import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const Vision = () => {
  const objectives = [
    {
      title: 'भारतीय संस्कृति और ज्ञान प्रणाली को आगे बढ़ाना:',
      detail:
        'स्कूलों, कॉलेजों, पाटशालाओं, अनुसंधान केंद्रों, गुरुकुल शिक्षा प्रणाली और अन्य शैक्षणिक संस्थाओं की स्थापना और समर्थन करना।',
    },
    {
      title: 'धार्मिक आयोजन और संस्कारों का आयोजन:',
      detail:
        'सभी धर्मों की पूजा, होम, धार्मिक संस्कारों, समारोहों और त्योहारों का आयोजन करना।',
    },
    {
      title: 'विवाह और वैदिक संस्कार:',
      detail: 'विवाह सहित सभी अनुष्ठान और समारोह वैदिक परंपराओं के अनुसार करना।',
    },
    {
      title: 'आध्यात्मिक ज्ञान का प्रसार:',
      detail:
        'स्वामी और ब्रह्मचारियों (जो आध्यात्मिक ज्ञान का अनुसरण करते हैं) को वेदों और अन्य प्राचीन भारतीय ज्ञान को फैलाने में सक्षम बनाना।',
    },
    {
      title: 'युवाओं में कला, संस्कृति और योग के प्रति प्रेम:',
      detail:
        'भारतीय विरासत और ज्ञान प्रणाली के प्रति युवाओं में प्रेम और प्रशंसा पैदा करना।',
    },
    {
      title: 'मंदिर और गौशाला की स्थापना:',
      detail: 'मंदिर और गौशाला की स्थापना करना।',
    },
    {
      title: 'शिक्षा और भोजन की उपलब्धता:',
      detail:
        'हम भारत के उन लाखों बच्चों को भोजन प्रदान करना चाहते हैं जिनके पास साधनों की कमी है, लेकिन जो सीखने और हासिल करने के लिए उत्साहित हैं।',
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-orange-600 mb-12"
        >
          हमारे मंदिर ट्रस्ट की प्रतिबद्धताएँ और उद्देश्य
        </motion.h1>

        <motion.div
          className="bg-white p-8 rounded-3xl shadow-2xl mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
        >
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">
            ट्रस्टी के रूप में हमारा दृष्टिकोण:
          </h2>
          <ul className="list-disc pl-6 space-y-4 text-gray-800 text-lg leading-relaxed">
            <li>हमारे मंदिर की विरासत को संरक्षित करना और इसके मूल्यों को बढ़ावा देना, जो एकता, करुणा और आध्यात्मिक विकास पर आधारित हैं।</li>
            <li>पारदर्शिता, जवाबदेही और जिम्मेदार स्टूडशिप के प्रति हमारी गहरी प्रतिबद्धता यह सुनिश्चित करती है कि हर योगदान सीधे हमारे मंदिर की समृद्धि और दीर्घायु को समर्थन प्रदान करता है।</li>
            <li>हम अपने समर्पित समुदाय के सहयोग से मंदिर की परंपराओं को बनाए रखने, पवित्र स्थानों को संरक्षित करने और हमारे लोगों के जीवन को समृद्ध करने के लिए आउटरीच का विस्तार करते हैं, जो मंदिर के अंदर आध्यात्मिक पोषण और एकांत की खोज में रहते हैं।</li>
            <li>इस महान जिम्मेदारी को हमें सौंपने के लिए हम आभारी हैं, क्योंकि हम अपने मंदिर के भविष्य को सशक्त बनाने के लिए मिलकर काम कर रहे हैं।</li>
          </ul>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {objectives.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-orange-400"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={index + 1}
            >
              <h3 className="text-xl font-semibold text-orange-700 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
