import React from 'react'
import { Link } from 'react-router-dom'
import about from '../assets/about.jpg'

const About_section = () => {
  return (
   <section className="py-16 px-6 md:px-20 bg-white" id="about">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    {/* IMAGE */}
    <div data-aos="fade-right">
      <img
        src={about}
        alt="About USIS"
        className="w-full shadow-md"

        style={
            {borderTopRightRadius: '200px', borderTopLeftRadius: '200px'}
        }
      />
    </div>

    {/* TEXT CONTENT */}
    <div data-aos="fade-left">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
        About Unique Steps International School
      </h2>
      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
       Unique Steps International School is a co-educational institution committed to raising godly, confident, and intellectually sound learners.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed py-3">
   At the foundation level, we adopt the Montessori method for our Nursery and Primary schools, offering a hands-on, child-centered approach that nurtures curiosity, creativity, and independence.
      </p>
       <p className="text-gray-700 text-lg leading-relaxed">
        Our Secondary School is built on a strong framework of qualitative education, character development, and academic excellence. With modern facilities and a conducive learning environment, we are dedicated to helping students thrive intellectually, socially, and spiritually. At USIS, every child is known, valued, and empowered to succeed.
      </p>

      <Link
        to="/contact"
        className="inline-block mt-8 bg-[#00843D] text-white font-medium px-6 py-3 rounded hover:bg-[#005c2d] transition"
      >
        Get in Touch
      </Link>
    </div>
  </div>
</section>
  )
}

export default About_section
