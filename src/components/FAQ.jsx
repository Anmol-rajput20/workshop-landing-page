import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "Who can join this workshop?",
      answer:
        "The workshop is designed for children aged 8–14 years who are curious about AI and Robotics.",
    },
    {
      question: "Do I need prior coding experience?",
      answer:
        "No. The workshop starts from the basics and is beginner-friendly.",
    },
    {
      question: "Will participants receive a certificate?",
      answer:
        "Yes. Every participant will receive a certificate upon successful completion of the workshop.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-10 left-0 w-72 h-72 bg-orange-300 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-32 right-0 w-80 h-80 bg-pink-300 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-green-300 rounded-full blur-3xl opacity-40"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium">
            ❓ FAQ
          </span>

          <h2 className="text-4xl text-orange-500 font-bold mt-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-4">
            Find answers to the most common questions about the workshop.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-gradient-to-r from-orange-50 via-white to-pink-50 border border-orange-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left font-semibold"
              >
                {faq.question}

                <span className="text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}