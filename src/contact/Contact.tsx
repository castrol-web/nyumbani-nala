import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const url = import.meta.env.VITE_SERVER_URL;
import Header from "../components/Header";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [formData, setForm] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[a-zA-Z\s'-]{2,50}$/; // allows letters, spaces, hyphens, apostrophes 
  const phoneRegex = /^\+?\d{7,15}$/; // allows optional +, 7-15 digits


  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.subject) {
      toast.error("Please fill in all fields");
      return;
    }
    if (!nameRegex.test(formData.name)) {
      toast.error("Please enter a valid name (2-50 characters, letters, spaces, hyphens, apostrophes)");
      return;
    }
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (formData.message.length < 10) {
      toast.error("Message should be at least 10 characters long");
      return;
    }
    if(!phoneRegex.test(formData.message) && formData.message.match(/\d/)) {
      toast.error("If you include a phone number in your message, please ensure it's valid (7-15 digits, optional +)");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${url}/api/user/contact`, formData);
      if (response.status === 201) {
        toast.success("Thank you for reaching out! Your message has been sent successfully.");
        setForm({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error: any) {
      const msg = error?.response?.data?.message;
      if (error.response?.status === 400 && msg) {
        toast.error(msg);
      } else if (error.response?.status === 404 && msg) {
        toast.error(msg);
      } else if (error.response?.status === 500) {
        toast.error("An unexpected error occurred. Please try again later.");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
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
            <h2 className="text-4xl font-bold text-gray-200 mb-6">
              THEY NEED YOUR   HELP
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              We'd love to hear from you. Whether it's a question, feedback,
              or a suggestion you reaching out means a lot.
            </p>
          </div>

          {/* Right Side Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-8 rounded-2xl bg-[#111F35] shadow-xl outline-1 outline-gray-300/40 mt-3 text-gray-50"
          >
            <div>
              <label className="block text-sm font-medium text-gray-200">Enter your name </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full text-slate-50 bg-[#111F35] border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200">Enter your email </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full text-slate-50 bg-[#111F35] border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200">subject </label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                type="text"
                required
                className="w-full text-slate-50 bg-[#111F35] border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded p-2"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200">Message </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Your Message"
                required
                className="textarea textarea-bordered w-full text-slate-50 bg-[#111F35] border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded p-2"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn bg-red-500 hover:bg-red-600 text-white px-6 w-fit flex items-center"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <FaPaperPlane className="mr-2" />
              )}
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
      {/* Contact Info Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto mb-2 w-1/2 text-white py-4 rounded-lg flex justify-center items-center">
            <hr className="w-1/6 border-t-2 border-white mr-4"></hr>
            <span className="text-xl font-bold">CONTACT US</span>
            <hr className="w-1/6 border-t-2 border-white ml-4"></hr>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-linear-to-r from-[#111F35] via-[#8A244B] to-[#111F35] p-6 rounded-lg shadow-xl hover:shadow-2xl outline-1 outline-gray-300"
            >
              <FaPhoneAlt size={30} className="text-[#F63049] mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <p className="text-slate-300">+34616454974</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-linear-to-r from-[#111F35] via-[#8A244B] to-[#111F35] p-6 rounded-lg shadow-xl hover:shadow-2xl outline-1 outline-gray-300"
            >
              <FaEnvelope size={30} className="text-[#F63049] mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <p className="text-slate-300">asociacion.nala.ong@gmail.com</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-linear-to-r from-[#111F35] via-[#8A244B] to-[#111F35] p-6 rounded-lg shadow-xl hover:shadow-2xl outline-1 outline-gray-300"
            >
              <FaMapMarkerAlt
                size={30}
                className="text-[#F63049] mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-[#111F35]">Address</h3>
              <p className="text-slate-300">123 Example St, City, Country</p>
            </motion.div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  )
}

export default Contact