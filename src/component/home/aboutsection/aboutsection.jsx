import React from 'react';
import { motion } from 'framer-motion';
import { User, Search, Send, UserPlus, FileEdit, Star } from "lucide-react";
import { useInView } from 'react-intersection-observer';
import './aboutsection.css';

const IconWrapper = ({ children }) => (
    <motion.div
      className="w-12 h-12 rounded-full bg-[#0A2463] text-white flex items-center justify-center"
      whileHover={{ backgroundColor: '#FF6B6B', scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
);

function Step({ icon, title, description }) {
  return (
    <div className="flex items-center mb-6 text-center">
      <div className="bg-[#0A2463] text-white p-3 rounded-full mr-4 hover:bg-white hover:text-[#0A2463] transition duration-300">
        {icon}
      </div>
      <div>
        <p className="text-[#949494]"> <span className="text-lg font-semibold text-[#0A2463]" >{title}</span>
        {description}</p>
      </div>
    </div>
  );
}

export default () => {
  const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [textRef, textInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [bandsRef, bandsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [venuesRef, venuesInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4 text-center"
        ref={headingRef}
        initial={{ opacity: 0, y: -20 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Why Venulink?
      </motion.h1>
      
      <motion.p 
        className="text-gray-600 text-center mb-12 max-w-3xl mx-auto"
        ref={textRef}
        initial={{ opacity: 0, y: -20 }}
        animate={textInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Venulink simplifies the process for bands to find and apply for gigs and for venues to book the best talent.
        Our platform bridges the gap, creating seamless connections and unforgettable live music experiences.
      </motion.p>
      
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
        <motion.div 
          className="relative w-full md:w-1/2 mb-8 md:mb-0"
          ref={bandsRef}
          initial={{ opacity: 0, x: -20 }}
          animate={bandsInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.img
            src="/whyimg1.PNG"
            alt="Live music performance"
            className="rounded-lg shadow-lg max-w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="/whyimg2.PNG"
            alt="Another live music performance"
            className="rounded-lg shadow-lg max-w-full h-auto absolute top-1/4 left-1/4 z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
        
        <div className="w-full md:w-1/2 md:pl-8">
          <motion.div
            ref={venuesRef}
            initial={{ opacity: 0, y: 20 }}
            animate={venuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-[#0A2463] mb-4">Bands</h2>
            <ul className="list-disc list-inside text-gray-600 mb-8">
              <li>Easily find and apply for gigs</li>
              <li>Track your applications</li>
              <li>Build your profile and reputation</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={venuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h2 className="text-2xl font-bold text-[#0A2463] mb-4">Venues</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Effortlessly create and manage gigs</li>
              <li>Review applicants with linked social media</li>
              <li>Streamline your booking process</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>

    <div className="px-4 py-16  relative">
    <div>
    <img
          src="/workbg.png"
          alt="Background shape"
          className="work_bg"
        />
      <h1 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4 animate-fade-in">
        How It Works
      </h1>
      <p className="text-gray-600 mb-12 max-w-3xl animate-fade-in">
        How it Works: Bands explore and apply for gigs, while venues create and
        manage them, reviewing applicants through social media. Venulink
        streamlines the process for a seamless experience.
      </p>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-[#0A2463] mb-6">Bands</h2>
          <Step
            icon={<User size={44} />}
            title="Sign Up:"
            description="Create your profile"
          />
          <Step
            icon={<Search size={44} />}
            title="Explore:"
            description="Find gigs that match your style."
          />
          <Step
            icon={<Send size={44} />}
            title="Apply:"
            description="Send applications directly through the platform."
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-[#0A2463] mb-6">Venues</h2>
          <Step
            icon={<UserPlus size={44} />}
            title="Sign Up:"
            description="Set up your venue profile."
          />
          <Step
            icon={<FileEdit size={44} />}
            title="Create:"
            description="Post your gig details."
          />
          <Step
            icon={<Star size={44} />}
            title="Review:"
            description="Evaluate and select the best applicants."
          />
        </div>
      </div>
    </div>
  </div>
</>
  );
}
