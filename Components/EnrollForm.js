import { useRouter } from "next/router";
import { useState } from "react";

const EnrollForm = () => {
  const router = useRouter();
  const { course } = router.query;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      course,
    };

    console.log("Enroll Form Data:", payload);

    // TODO: API integration
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8">
        
        <h2 className="text-2xl font-semibold text-center text-gray-900">
          Course Registration
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Fill out the form below to enroll in one of our training courses
        </p>

        {course && (
          <div className="mt-4 text-center text-sm text-orange-600 font-medium">
            Selected Course: {course}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              onChange={handleChange}
              className="input-field"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
            className="input-field"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="input-field"
          />

          <textarea
            name="message"
            placeholder="Any questions or special requirements?"
            rows="4"
            onChange={handleChange}
            className="input-field resize-none"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Proceed to Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollForm;
