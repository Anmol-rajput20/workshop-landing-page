import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      setSuccess("Registration submitted successfully!");
      setLoading(false);

      setFormData({
        name: "",
        email: "",
        phone: "",
      });
    }, 1500);
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">
       <div className="absolute top-0 left-0 w-80 h-80 bg-orange-300 rounded-full blur-3xl opacity-30"></div>
       <div className="absolute top-20 right-0 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-30"></div>
       <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-green-400 rounded-full blur-3xl opacity-30"></div>
      <div className="relative z-10 max-w-2xl mx-auto">

        <div className="text-center mb-12">
          <span className="px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm font-medium">
            📝 Registration
          </span>

          <h2 className="text-4xl text-orange-500 font-bold mt-4">
            Enroll Today
          </h2>

          <p className="text-gray-600 mt-4">
            Reserve your child's seat in the AI & Robotics Summer Workshop.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-lg p-8 space-y-6"
        >
          <div>
            <label className="block mb-2 font-medium">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="Enter your name"
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="Enter your email"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="Enter phone number"
            />

            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold transition"
          >
            {loading ? "Submitting..." : "Enroll Now 🚀"}
          </button>

          {success && (
            <p className="text-center text-green-600 font-medium">
              {success}
            </p>
          )}
        </form>

      </div>
    </section>
  );
}