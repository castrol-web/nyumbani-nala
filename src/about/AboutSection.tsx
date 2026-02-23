import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import mission from "../assets/mission.png";
import vision from "../assets/vision.jpg";
import values from "../assets/values.jpg";

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16 py-12 gap-12">
      {/* Left - Images */}
      <div className="relative w-full lg:w-1/2">
        <motion.img
          src={mission}
          alt="nyumbani nala mission"
          className="rounded-2xl w-full shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.img
          src={vision}
          alt="nyumbani nala vision"
          className="relative -top-20 lg:left-30 left-25 w-1/2 rounded-xl shadow-lg border-4 border-[#F63049]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        />
      </div>

      {/* Right - Text */}
      <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
        <div className="mx-auto mb-2 w-1/2 bg-linear-to-r from-[#F63049] via-[#D02752] to-[#8A244B] text-white py-4 rounded-lg flex justify-center items-center">
          <hr className="w-1/6 border-t-2 border-white mr-4"></hr>
          <span className="text-xl font-bold">WHAT WE DO</span>
          <hr className="w-1/6 border-t-2 border-white ml-4"></hr>
        </div>


        <p className="text-sm leading-relaxed" data-aos="fade-up">
          {t(
            "At Nyumbani Nala, we believe that every child in Moshi deserves the chance to grow, learn, and thrive.Our mission is to ensure that children in vulnerable situations have their basic needs met, can attend school consistently, and receive the support they need to develop their full potential.Through close collaboration with local partners and the community, we work to create safe, nurturing environments where education becomes a pathway to opportunity and long-term well-being. Step by step, we are building brighter futures—one child at a time."
          )}
        </p>

        {/* Features List */}
        <ul className="space-y-2 mt-6">
          {[
            "Donate",
            "Volunteer",
            "Foster Community",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2" data-aos="fade-right" data-aos-delay={index * 100}>
              <FaCheckCircle className="text-[#E43636]" /> {t(item)}
            </li>
          ))}
        </ul>

        {/* Call to Action */}
        <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
          <Link to="/about" className="btn bg-linear-to-r from-[#F63049] to-[#D02752] text-white px-6">
            {t("About Us")}
          </Link>
          <div className="flex items-center gap-2">
            <img
              src={values}
              alt={t("Founder")}
              className="w-10 h-10 rounded-full border"
            />
            <div className="text-sm text-left">
              <p className="font-semibold">Marisa</p>
              <p className="text-xs text-gray-500">{t("Founder & CEO")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
