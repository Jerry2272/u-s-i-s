import React from 'react';
import img1 from '../assets/nursery.jpg';
import img2 from '../assets/primary.jpg';
import img3 from '../assets/secondary.jpg';

const AcademicLevels = () => {
  const levels = [
    {
      title: 'Nursery School',
      description: 'Hands-on learning using the Montessori method to build strong foundational and social skills.',
      img: img1
    },
    {
      title: 'Primary School',
      description: 'A nurturing environment focused on academics, confidence, and Christian character development.',
      img: img2
    },
    {
      title: 'Secondary School',
      description: 'High academic standards, leadership training, and critical thinking for future excellence.',
      img: img3
    },
  ];

  return (
    <section className="relative bg-[#f7f7f7] py-20 px-6 md:px-20" id="academic-levels">
      {/* Header */}
      <div className="text-center mb-14 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
          Explore Our Academic Stages
        </h2>
        <p className="text-gray-600 text-lg">
          From nursery to secondary, we deliver a wholesome and purpose-driven learning journey tailored for every stage of child development.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {levels.map((level, i) => (
          <div
            key={i}
            className="rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <img
              src={level.img}
              alt={level.title}
              className="w-full h-[200px] object-cover"
              style={{ borderTopRightRadius: '200px', borderTopLeftRadius: '200px' }}
            />
            <div className="p-6">
              <div className="flex justify-center mb-4">{level.icon}</div>
              <h3 className="text-xl font-semibold text-center text-[#1A1A1A] mb-2">
                {level.title}
              </h3>
              <p className="text-gray-600 text-center text-base">{level.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#f7f7f7"
            d="M0,64L60,69.3C120,75,240,85,360,106.7C480,128,600,160,720,154.7C840,149,960,107,1080,85.3C1200,64,1320,64,1380,64L1440,64V320H0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default AcademicLevels;
