import React from 'react';
import './herosection.css';
import { motion } from "framer-motion"

export default () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        <motion.div 
          className="lg:w-1/2 lg:pr-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4">
            Connecting Bands &<br />
            Venues <span className="text-[#FF6B6B]">Seamlessly</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Connecting Bands and Venues Seamlessly: Venulink is your platform for
            discovering, applying, and managing gigs effortlessly. We create
            unforgettable live music experiences. Sign up for <span className="font-bold">FREE</span>
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <motion.button 
              className="bg-[#0A2463] text-white px-6 py-3 rounded-full font-semibold w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Create account as a venue
            </motion.button>
            <motion.button 
              className="bg-[#0A2463] text-white px-6 py-3 rounded-full font-semibold w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Create account as a band
            </motion.button>
          </div>
        </motion.div>
        <motion.div 
          className="lg:w-1/2 mt-8 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <img
              src="/hero_img.PNG"
              alt="Drum set"
              className="rounded-full object-cover w-full h-full"
            />
            <div className="absolute inset-0 rounded-full border-8 border-transparent bg-gradient-to-br from-[#4ECDC4] via-[#FF6B6B] to-yellow-300 -z-10 animate-spin-slow"></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
