import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HeroSlide } from '../components/util';
import { Link } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import About_section from '../molecules/About_section';
import MissionVision from '../molecules/Mission';
import AcademicLevels from '../molecules/Academic_level';
import WhyChooseUs from '../molecules/Why_us';

function Home() {
  const heroSettings = {
    infinite: true,
    speed: 4000,
    fade: true,
    autoplay: true,
    arrows: false,
  };

  return (
    <>
      {/* Hero Section */}
      <Slider {...heroSettings}>
        {HeroSlide.map((slide, i) => (
          <div key={i}>
            <section
              id="home"
              className="h-[90vh] md:h-[100vh] flex items-center text-left px-5 md:px-[100px]"
              style={{
                backgroundImage: `linear-gradient(
                  270.47deg,
                  rgba(0, 0, 0, 0.6) 20.32%,
                  rgba(0, 0, 0, 0.85) 50.96%,
                  #000 122.45%
                ), url(${slide.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="flex md:pt-[4em] flex-col w-full max-w-[700px] text-center md:text-left">
                <h1
                  className="text-white font-spaceGrotesk font-bold text-[36px] md:text-[60px] leading-[45px] md:leading-[75px] mb-4"
                  data-aos="fade-up"
                >
                  {slide.title}
                </h1>
                <p
                  className="text-white font-manRope text-[16px] md:text-[22px] font-medium mb-8"
                  data-aos="fade-up"
                >
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href="#service"
                    className="bg-white text-[#1A1A1A] text-[16px] font-medium px-6 py-3 rounded hover:opacity-90 transition font-manRope"
                  >
                    Our Services
                  </a>
                  <Link
                    to="/contact"
                    className="bg-[#00843D] text-white text-[16px] font-medium px-6 py-3 rounded hover:bg-[#333] transition font-manRope"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </section>
          </div>
        ))}
      </Slider>
      <Wrapper />
      <About_section />
      <MissionVision />
      <AcademicLevels />
      <WhyChooseUs />
    </>
  );
}

export default Home;
