import React from 'react'

const Wrapper = () => {
  return (
  <section className="py-16 px-6 md:px-20 bg-white">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
      Life at Complete Scholar International School
    </h2>
    <p className="text-gray-600 max-w-xl mx-auto">
      Beyond academics, we focus on holistic development — intellectual, spiritual, and social.
    </p>
  </div>

  <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
    {[
      { title: "University Life", desc: "Dynamic academic environment", icon: "🎓" },
      { title: "Graduation", desc: "Celebrating achievement", icon: "📜" },
      { title: "Athletics", desc: "Engaging sports & fitness", icon: "🏅" },
      { title: "Social", desc: "Friendship & fun events", icon: "🤝" },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-[#f9f9f9] hover:bg-[#f0f0f0] transition rounded-lg p-6 text-center shadow-sm"
      >
        <div className="text-4xl mb-4">{item.icon}</div>
        <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
        <p className="text-gray-600 text-sm">{item.desc}</p>
      </div>
    ))}
  </div>
</section>

  )
}

export default Wrapper
