import React from 'react';
import { FaBullseye, FaEye } from 'react-icons/fa';

const MissionVision = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#00843D] to-[#046A30] py-20 px-6 md:px-20 text-white" id="mission-vision">
      {/* Background curve */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,192L60,202.7C120,213,240,235,360,234.7C480,235,600,213,720,192C840,171,960,149,1080,154.7C1200,160,1320,192,1380,208L1440,224V0H0Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
        {/* Mission */}
        <div data-aos="fade-right" className=" bg-opacity-10 backdrop-blur-sm p-8 rounded-xl shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <FaBullseye className="text-white text-2xl" />
            <h3 className="text-sm uppercase font-semibold tracking-wide">Our Mission</h3>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
            Educating the Mind, Nurturing the Spirit
          </h2>
          <p className="text-white/90 text-lg leading-relaxed">
            Our mission is to offer a balanced educational experience that integrates strong academics with spiritual depth. We are committed to developing students who excel in their studies while being deeply rooted in biblical values such as integrity, respect, diligence, and love.
          </p>
        </div>

        {/* Vision */}
        <div data-aos="fade-left" className="bg-opacity-10 backdrop-blur-sm p-8 rounded-xl shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <FaEye className="text-white text-2xl" />
            <h3 className="text-sm uppercase font-semibold tracking-wide">Our Vision</h3>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
            Raising Future Leaders of Godly Character
          </h2>
          <p className="text-white/90 text-lg leading-relaxed">
            We envision a generation of confident, Christ-centered young people who are equipped to lead and influence society positively. Through a safe and supportive environment, we empower every child to discover their potential and grow in character, intellect, and purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
