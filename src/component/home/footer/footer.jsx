import React from 'react'
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import './footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0d1a2b] min-h-[40vh] text-white py-8 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between text-center items-center">
          <div className="footer-column fot_logo">
            <div className='footer-logo'>
            <img src="logonobackground-1@2x.png" alt="Icon" />
            </div>            
          </div>
          <nav className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
              {['Home', 'About us', 'Explore Gigs', 'Create Gigs', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="hover:text-blue-400 transition duration-300 ease-in-out"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition duration-300 ease-in-out">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-300 ease-in-out">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-300 ease-in-out">
              <FaFacebookF size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {currentYear} Venulink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}