import React from 'react';
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-14 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10 mb-10">
        {/* School Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Unique Steps Int'l School</h3>
          <p className="text-sm text-white/80 mb-3">
            A co-educational school with a vision to raise godly, academically excellent young leaders.
          </p>
          <p className="text-sm text-white/70 flex items-center gap-2">
            <FaPhoneAlt /> +234 818 891 1553 
          </p>
          <p className="text-sm text-white/70 flex items-center gap-2 mt-1">
            <FaEnvelope /> uniquestepsintl@yahoo.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><a href="#academic-levels">Academics</a></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Academic Levels */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Academic Levels</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li>Nursery School</li>
            <li>Primary School</li>
            <li>Secondary School</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#00843D] p-2 rounded-full hover:bg-[#00843D] hover:text-white transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#00843D] p-2 rounded-full hover:bg-[#00843D] hover:text-white transition"
            >
              <FaInstagram size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-white/60 text-sm border-t border-white/10 pt-6">
        © {new Date().getFullYear()} Unique Steps Int'l School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
