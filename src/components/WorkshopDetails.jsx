export default function WorkshopDetails() {
  const details = [
    {
      emoji: "🧒",
      title: "Age Group",
      value: "8–14 Years",
      bg: "bg-orange-50",
    },
    {
      emoji: "⏳",
      title: "Duration",
      value: "4 Weeks",
      bg: "bg-green-50",
    },
    {
      emoji: "💻",
      title: "Mode",
      value: "Online",
      bg: "bg-pink-50",
    },
    {
      emoji: "💰",
      title: "Fee",
      value: "₹2,999",
      bg: "bg-orange-50",
    },
    {
      emoji: "📅",
      title: "Start Date",
      value: "15 July 2026",
      bg: "bg-green-50",
    },
  ];

  return (
    <section className="pt-8 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-4xl text-orange-500 font-bold text-center mb-4">
          Workshop Details
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
          Everything you need to know about the AI & Robotics Summer Workshop.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {details.map((detail, index) => (
            <div
              key={index}
              className={`${detail.bg} rounded-3xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg`}
            >
              <div className="text-5xl mb-4">
                {detail.emoji}
              </div>

              <h3 className="font-semibold text-gray-800">
                {detail.title}
              </h3>

              <p className="mt-2 text-lg font-bold text-gray-900">
                {detail.value}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}