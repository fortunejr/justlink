import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router'

const leftContent = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Herosection = () => {
  const texts = [
    { text: "Fast Delivery", color: "text-yellow-500" },
    { text: "Pay on Delivery", color: "text-gray-900" },
  ];
  const [index, setIndex] = useState(0);

  // Switch text every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden mt-10 flex items-center"
      style={{
        backgroundColor: "rgb(21 128 61 / 0.1)",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="relative z-20 container mx-auto px-7 lg:px-10 py-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div
          className="p-5 lg:mx-20 text-center lg:text-center"
          variants={leftContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Animated headline */}
          <h1 className="text-3xl lg:text-5xl font-black text-green-700 tracking-normal pb-6">
            {/* Dedicated line for changing text */}
            <div className="h-[1.2em] mb-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={texts[index].text}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className={`${texts[index].color} block`}
                >
                  {texts[index].text}.
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Static text stays constant */}
            Connecting Manufacturers, Wholesalers, Suppliers, Retailers, and
            Consumers Seamlessly.
          </h1>
          <p className="text-black text-base lg:text-lg opacity-90">
            By leveraging technology, data intelligence, and strategic
            partnerships, we deliver fast, affordable, and reliable services
            that simplify trade, expand market access, and support economic
            competitiveness.
          </p>
          <Link to="/contact">
            <button className="mt-8 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
              Get started
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;
