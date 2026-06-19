export default function LearningOutcomes() {
  const outcomes = [
    {
      emoji: "🤖",
      title: "AI Fundamentals",
      description:
        "Learn how Artificial Intelligence works and where it is used in daily life.",
      bg: "bg-orange-50",
    },
    {
      emoji: "⚙️",
      title: "Robotics Concepts",
      description:
        "Understand how robots move, sense their environment, and make decisions.",
      bg: "bg-green-50",
    },
    {
      emoji: "💻",
      title: "Coding Basics",
      description:
        "Build a strong foundation in programming through fun activities.",
      bg: "bg-pink-50",
    },
    {
      emoji: "🧠",
      title: "Problem Solving",
      description:
        "Develop logical thinking and creative problem-solving skills.",
      bg: "bg-orange-50",
    },
    {
      emoji: "🚀",
      title: "Hands-on Projects",
      description:
        "Create exciting mini projects that combine coding and robotics.",
      bg: "bg-green-50",
    },
    {
      emoji: "🏆",
      title: "Certificate of Completion",
      description:
        "Receive a certificate after successfully completing the workshop.",
      bg: "bg-pink-50",
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-20 right-20 w-36 h-36 bg-pink-400 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-10 left-1/4 w-32 h-32 bg-green-400 rounded-full blur-3xl opacity-50"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        <h2 className="text-4xl font-bold text-orange-500 text-center mb-4">
          What Your Child Will Learn
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
          A fun and engaging curriculum designed to introduce children to the
          exciting world of AI, Robotics, and Technology.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className="text-5xl mb-5">
                {item.emoji}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}