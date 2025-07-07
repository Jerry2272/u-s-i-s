import React from 'react';
import { FaBookReader, FaShieldAlt, FaUserFriends, FaChalkboard } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaBookReader size={28} />,
      title: 'Academic Excellence',
      text: 'We deliver a strong academic foundation across all levels with well-trained, passionate educators.',
    },
    {
      icon: <FaShieldAlt size={28} />,
      title: 'Safe & Secure Environment',
      text: 'We prioritize child safety and emotional well-being with a secure and loving atmosphere.',
    },
    {
      icon: <FaChalkboard size={28} />,
      title: 'Qualified Teachers',
      text: 'Our instructors are experienced, trained in modern methods, and committed to student growth.',
    },
    {
      icon: <FaUserFriends size={28} />,
      title: 'Moral & Spiritual Training',
      text: 'We nurture character and values rooted in biblical principles to develop godly future leaders.',
    },
  ];

  return (
    <section
      className="bg-gradient-to-br from-[#00843D] to-[#046A30] text-white py-20 px-6 md:px-20"
      id="why-choose-us"
    >
      {/* Header */}
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-white/90 text-lg">
          Discover what makes Unique Steps International School the ideal place for your child’s academic and personal growth.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {reasons.map((reason, i) => (
          <div
            key={i}
            className="bg-white text-[#1A1A1A] rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className="flex justify-center items-center w-12 h-12 mx-auto mb-4 bg-[#00843D] text-white rounded-full shadow-md">
              {reason.icon}
            </div>
            <h4 className="text-lg font-semibold text-center mb-2">{reason.title}</h4>
            <p className="text-gray-600 text-sm text-center">{reason.text}</p>
          </div>
        ))}
      </div>
        <svg
          className="relative block w-full h-[60px] bg-black"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,192L60,202.7C120,213,240,235,360,234.7C480,235,600,213,720,192C840,171,960,149,1080,154.7C1200,160,1320,192,1380,208L1440,224V0H0Z"
          ></path>
        </svg>
    </section>
  );
};

export default WhyChooseUs;
