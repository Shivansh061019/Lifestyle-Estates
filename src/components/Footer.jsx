import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Office: Pune, Maharashtra</p>
            <p className="mb-2">India</p>
            <p className="mb-2">+91-XXXX-XXXXXX</p>
            <p>info@lifestyleestates.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><NavLink to="/about" className="hover:text-gray-300">About Us</NavLink></li>
              <li><NavLink to="/properties" className="hover:text-gray-300">Featured Properties</NavLink></li>
              <li><NavLink to="/neighborhoods" className="hover:text-gray-300">Neighborhoods</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-gray-300">Contact Us</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/lifestyleestatespune/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.instagram.com/lifestyle.estates.pune/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.youtube.com/@LifestyleEstates" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>© 2024 Lifestyle Estates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
