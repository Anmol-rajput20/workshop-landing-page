export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden">
        {/* Decorative Shapes */}

        <div className="absolute top-20 left-10 w-24 h-24 bg-pink-400 rounded-full blur-2xl opacity-60"></div>
        <div className="absolute top-40 right-16 w-32 h-32 bg-orange-400 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-24 left-24 w-28 h-28 bg-green-400 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-32 right-20 w-20 h-20 bg-pink-400 rounded-full blur-2xl opacity-50"></div>


      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-medium mb-6">
          🚀 Summer 2026 Workshop
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-pink-700 leading-tight">
          AI & Robotics
          <span className="block mt-2 text-orange-500 mt-2">
            Summer Workshop
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Introduce your child to the exciting world of Artificial Intelligence
          and Robotics through hands-on projects, coding activities, and
          problem-solving challenges designed for young learners.
        </p>

        {/* CTA */}
        <button className="mt-8 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-semibold  shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          Enroll Now
        </button>

        {/* Stats
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-orange-50 rounded-2xl p-4">
            <p className="text-2xl font-bold text-orange-600">8–14</p>
            <p className="text-gray-500">Years</p>
          </div>

          <div className="bg-orange-50 rounded-2xl p-4">
            <p className="text-2xl font-bold text-orange-600">4</p>
            <p className="text-gray-500">Weeks</p>
          </div>

          <div className="bg-orange-50 rounded-2xl p-4">
            <p className="text-2xl font-bold text-orange-600">Online</p>
            <p className="text-gray-500">Mode</p>
          </div>

          <div className="bg-orange-50 rounded-2xl p-4">
            <p className="text-2xl font-bold text-orange-600">₹2,999</p>
            <p className="text-gray-500">Fee</p>
          </div>

          <div className="bg-orange-50 rounded-2xl p-4">
            <p className="text-2xl font-bold text-orange-600">15 Jul</p>
            <p className="text-gray-500">2026</p>
          </div>
        </div> */}

      </div>
    </section>
  );
}