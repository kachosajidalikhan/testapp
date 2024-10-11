import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 }) // Trigger when 20% of the element is in view

  return (
    <div className="w-full bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div
          className="relative overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('bannerimg.jpg')" }}
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>

          {/* Content */}
          <div ref={ref} className="relative z-10 px-8 py-16 text-center text-white">
            {/* Animated Heading */}
            <motion.h2
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Ready to Get Started?
            </motion.h2>

            {/* Animated Paragraph */}
            <motion.p
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              Join Venulink today and connect with bands or venues to create
              unforgettable live music experiences.
            </motion.p>

            {/* Animated Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                Sign Up as a Band
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                Sign Up as a Venue
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
