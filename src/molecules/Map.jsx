import React from 'react';

const MapSection = () => {
  return (
    <section className="py-10 px-6 md:px-20 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6 text-center">
        Visit Our School
      </h2>
      <div className="w-full h-[300px] overflow-hidden rounded-lg shadow-md">
        <iframe
          title="USIS Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126838.42551138735!2d7.001962800000001!3d4.8674034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd49e3e14b4f%3A0x6ae1e1c7f8e6dc59!2sPort%20Harcourt%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1720000000000!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
