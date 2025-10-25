import React, { useState, useRef } from "react";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import bg from "./assets/bg.jpg";

const App = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [galleryImages, setGalleryImages] = useState([bg, bg, bg, bg]);
  const galleryRef = useRef(null);
  const fileInputRef = useRef(null);

  const tabs = [
    { id: "about", label: "About Me" },
    { id: "exp", label: "Experiences" },
    { id: "rec", label: "Recommended" },
  ];

  const tabContent = {
    about: [
      "Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.",
      "I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters — Emma and Ella.",
      "Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.",
      "I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters — Emma and Ella.",
    ],
    exp: [
      "I’ve had the chance to work with 300+ clients and lead sales campaigns across multiple regions. My focus is on providing tailored solutions to drive customer success.",
      "I’ve had the chance to work with 300+ clients and lead sales campaigns across multiple regions. My focus is on providing tailored solutions to drive customer success.",
    ],
    rec: Array(9).fill(
      "“Dave is an outstanding communicator who always puts the client first.” – John Smith, Regional Manager"
    ),
  };

  const scrollGallery = (direction) => {
    if (!galleryRef.current) return;
    const scrollAmount = 220; 
    galleryRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

const handleAddImage = (e) => {
  const files = Array.from(e.target.files);
  const newImages = files.map((file) => URL.createObjectURL(file));
  // Prepend new images so they appear first
  setGalleryImages((prev) => [...newImages, ...prev]);
};

  return (
    <div className="w-full flex items-center justify-center bg-[#282d32] text-gray-200 p-6 overflow-hidden min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="hidden md:block w-1/2"
      ></motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="w-full md:w-1/2 flex flex-col items-center justify-center gap-2 text-gray-200 p-6"
      >
        <motion.div
          transition={{ type: "spring", stiffness: 300 }}
          className="w-full bg-[#363c43] rounded-2xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.6)]"
        >
          <div className="relative flex space-x-2 m-4 neotabHead p-1 rounded-3xl">
            <motion.div
              layoutId="activeTabSlider"
              className="absolute top-2 bottom-1 ml-4 neoBtn h-[45px] rounded-xl shadow-inner"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                width: "30%",
                left:
                  activeTab === "about"
                    ? "0%"
                    : activeTab === "exp"
                    ? "33%"
                    : "65.3%",
              }}
            />

            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative flex-1 m-1 rounded-xl font-medium transition-all duration-300 overflow-hidden z-10 group rounded-lg border border-transparent px-5 py-2.5 text-base font-medium font-sans cursor-pointer transition-colors duration-200"
              >
                <span className="w-[97%] absolute inset-0 bg-[#999] translate-x-[-120%] group-hover:translate-x-[1%] opacity-20 transition-all duration-700 ease-in-out rounded-xl"></span>
                <span
                  className={`relative z-10 ${
                    activeTab === tab.id ? "text-white" : "text-gray-400"
                  } transition-colors duration-300`}
                >
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          <div className="rounded-2xl p-4 h-40 overflow-y-auto text-sm leading-relaxed text-gray-300 scrollbar-thin scrollbar-gallery">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                {tabContent[activeTab].map((text, i) => (
                  <p key={i} className="mb-2">
                    {text}
                  </p>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <span className="w-[70%] h-[5px] bg-gradient-to-r from-[#282d32] via-[#999] to-[#111] rounded-[15px]"></span>

        <motion.div
          transition={{ type: "spring", stiffness: 300 }}
          className="w-full bg-[#363c43] rounded-2xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.6)]"
        >
          <div className="flex items-center justify-between mb-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#111] text-white px-4 py-2 rounded-xl font-medium shadow-inner"
            >
              Gallery
            </motion.button>

            <div className="flex items-center space-x-3">
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 neogallery px-4 py-2 rounded-[30px] hover:bg-[#333] transition-all"
                onClick={() => fileInputRef.current.click()}
              >
                <Plus size={16} /> ADD IMAGE
              </motion.button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleAddImage}
              />

              <motion.button
                whileHover={{ rotate: -15, scale: 1.1 }}
                className="neo p-2 rounded-full hover:bg-[#333]"
                onClick={() => scrollGallery("left")}
              >
                <ArrowLeft size={18} />
              </motion.button>

              <motion.button
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="neo p-2 rounded-full hover:bg-[#333]"
                onClick={() => scrollGallery("right")}
              >
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>

          <motion.div
            ref={galleryRef}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex items-center justify-start space-x-3 overflow-x-auto scrollbar-gallery h-[35vh]"
          >
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.056,
                  rotate: -1.2,
                  boxShadow: "0 0 10px rgba(0,0,0,0.6)",
                }}
                transition={{ type: "spring", stiffness: 250 }}
                className="w-[200px] h-[200px] m-2 bg-gray-500 rounded-[50px] overflow-hidden flex-shrink-0"
              >
                <img
                  src={img}
                  alt="gallery"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition duration-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <span className="w-[70%] h-[5px] bg-gradient-to-r from-[#282d32] via-[#999] to-[#111] rounded-[15px]"></span>
      </motion.div>
    </div>
  );
};

export default App;
