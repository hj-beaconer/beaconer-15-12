import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/router";
import { useState } from "react";
import PAYMENT_CONFIG from "../hooks/paymentConfig";
import PaymentPopup from "../Components/PaymentPopup";


export default function Register() {
  const router = useRouter();
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [paymentData, setPaymentData] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    timeSlot: "",
    format: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // --------------------
  // Handle Input Change
  // --------------------
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };


  // --------------------
  // Validation
  // --------------------
  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits";
    }

    if (!formData.course) newErrors.course = "Please select a course";
    if (!formData.timeSlot) newErrors.timeSlot = "Please select a time slot";
    if (!formData.format) newErrors.format = "Please select class format";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --------------------
  // Submit
  // --------------------
 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/registrations`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            ...formData,
          },
        }),
      }
    );

    if (!res.ok) {
      const err = await res.json();
      console.error("Strapi error:", err);
      throw new Error("Failed to submit");
    }

    const result = await res.json();
    console.log("Saved to Strapi:", result);
console.log("Selected course:", formData.course);
console.log("Payment config:", PAYMENT_CONFIG[formData.course]);

    const selectedPayment = PAYMENT_CONFIG[formData.course];

if (!selectedPayment) {
  alert("Payment configuration not found for selected course");
  return;
}

setPaymentData(selectedPayment);
setShowPaymentPopup(true);

  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};



  // --------------------
  // UI
  // --------------------
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-16 px-4 relative py-20">

      {/* 🔙 Back Button - LEFT SIDE */}
      <div className="absolute left-6 top-24">
        <button
          onClick={() => router.push("/training")}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 transition pt-10 pl-8"
        >
          <ArrowLeft size={18} />
          <span className="font-medium">Back to Courses</span>
        </button>
      </div>
      <div className="max-w-3xl mx-auto pt-20">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-orange-500">
            Course Registration
          </h1>
          <p className="text-gray-500 mt-2 text-lg">
            Fill out the form below to enroll in one of our training courses
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Registration Form
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Complete your details and we'll get back to you within 24 hours
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* First + Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["firstName", "lastName"].map((field, i) => (
                <div key={field}>
                  <label className="text-sm font-semibold text-gray-600">
                    {i === 0 ? "First Name" : "Last Name"}
                  </label>
                  <input
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={i === 0 ? "John" : "Doe"}
                    className="w-full mt-1 px-3 py-2 border rounded-md
                               bg-white text-black placeholder-gray-400
                               focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  {errors[field] && (
                    <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "email", type: "email", label: "Email" },
                { name: "phone", type: "text", label: "Phone Number" },
              ].map(({ name, type, label }) => (
                <div key={name}>
                  <label className="text-sm font-semibold text-gray-600">{label}</label>
                  <input
                    name={name}
                    type={type}
                    value={formData[name]}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 border rounded-md
                               bg-white text-black placeholder-gray-400
                               focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  {errors[name] && (
                    <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Course */}
            <SelectField
              label="Select Course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              error={errors.course}
              options={[
                ["", "Choose a course"],
                ["Third-Party Risk Management (TPRM)", "Third-Party Risk Management (TPRM)"],
                ["SOC Analyst Training", "SOC Analyst Training"],
                ["Cloud Security", "Cloud Security"],
                ["GRC & Compliance", "GRC & Compliance"],
              ]}
            />

            {/* Time Slot + Format */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SelectField
                label="Preferred Time Slot"
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
                error={errors.timeSlot}
                options={[
                  ["", "Select time slot"],
                  ["Morning (9 AM - 12 PM)", "Morning (9 AM - 12 PM)"],
                  ["Afternoon (2 PM - 5 PM)", "Afternoon (2 PM - 5 PM)"],
                  ["Evening (6 PM - 9 PM)", "Evening (6 PM - 9 PM)"],
                ]}
              />

              <SelectField
                label="Class Format"
                name="format"
                value={formData.format}
                onChange={handleChange}
                error={errors.format}
                options={[
                  ["", "Select format"],
                  ["Weekday Classes (Mon-Fri)", "Weekday Classes (Mon-Fri)"],
                  ["Weekend Classes (Sat-Sun)", "Weekend Classes (Sat-Sun)"],
                  ["Flexible Schedule", "Flexible Schedule"],
                ]}
              />

            </div>

            {/* Company */}
            <InputField
              label="Company (Optional)"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />

            {/* Message */}
            <div>
              <label className="text-sm font-semibold text-gray-600">Message (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full mt-1 px-3 py-2 border rounded-md
                           bg-white text-black placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600
                         text-white font-semibold py-3 rounded-md transition"
            >
              Proceed to Payment
            </button>
          </form>
        </div>
      </div>
      {showPaymentPopup && paymentData && (
        <PaymentPopup
          data={paymentData}
          onClose={() => setShowPaymentPopup(false)}
        />
      )}

    </div>

  );
}

/* ------------------------
   Reusable Components
------------------------- */

const InputField = ({ label, ...props }) => (
  <div>
    <label className="text-sm font-semibold text-gray-600">{label}</label>
    <input
      {...props}
      className="w-full mt-1 px-3 py-2 border rounded-md
                 bg-white text-black placeholder-gray-400
                 focus:outline-none focus:ring-2 focus:ring-orange-400"
    />
  </div>
);

const SelectField = ({ label, name, value, onChange, options, error }) => (
  <div>
    <label className="text-sm font-semibold text-gray-600">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full mt-1 px-3 py-2 border rounded-md
                 bg-white text-black
                 focus:outline-none focus:ring-2 focus:ring-orange-400"
    >
      {options.map(([val, text]) => (
        <option key={val} value={val}>
          {text}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);
