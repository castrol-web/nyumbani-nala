import { useState } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import GoogleMapEmbeded from "../components/GoogleMapEmbeded";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Form submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <Header pageName="Contact Us" />
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side Text */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              They <span className="text-black">NEED</span> your{" "}
              <span className="text-red-500">HELP...</span>
            </h2>
            <p className="text-lg text-gray-600">
              We'd love to hear from you. Whether it's a question, feedback,
              or a suggestion—you reaching out means a lot.
            </p>
          </div>

          {/* Right Side Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-2xl shadow-xl outline-1 outline-gray-300 mt-3"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="input input-bordered w-full text-slate-50"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="input input-bordered w-full text-slate-50"
            />
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              rows={5}
              placeholder="Your Message"
              required
              className="textarea textarea-bordered w-full text-slate-50"
            ></textarea>
            <button
              type="submit"
              className="btn bg-red-500 hover:bg-red-600 text-white px-6 w-fit flex items-center"
            >
              <FaPaperPlane className="mr-2" /> Send Message
            </button>
          </form>
        </motion.div>
      </div>
      {/* Contact Info Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">
            Our Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gray-50 p-6 rounded-lg shadow-xl hover:shadow-2xl outline-1 outline-gray-300"
            >
              <FaPhoneAlt size={30} className="text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">+1 800-123-4567</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gray-50 p-6 rounded-lg shadow-xl hover:shadow-2xl outline-1 outline-gray-300"
            >
              <FaEnvelope size={30} className="text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">info@example.com</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-gray-50 p-6 rounded-lg shadow-xl hover:shadow-2xl outline-1 outline-gray-300"
            >
              <FaMapMarkerAlt
                size={30}
                className="text-blue-500 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800">Address</h3>
              <p className="text-gray-600">123 Example St, City, Country</p>
            </motion.div>
          </div>
        </div>
      </div>
      <GoogleMapEmbeded />
    </div>
  )
}

export default Contact