import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import mission from "../assets/mission.png";
import vision from "../assets/vision.jpg";

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
        <div className="mx-auto mb-2 w-1/2  text-white py-4 rounded-lg flex justify-center items-center">
          <hr className="w-1/6 border-t-2 border-white mr-4"></hr>
          <span className="text-xl font-bold">WHAT WE DO</span>
          <hr className="w-1/6 border-t-2 border-white ml-4"></hr>
        </div>


        <p className="text-lg leading-relaxed" data-aos="fade-up">
          {t(
            "At Nyumbani Nala, we believe that every child in Moshi deserves the chance to grow, learn, and thrive.Our mission is to ensure that children in vulnerable situations have their basic needs met, can attend school consistently, and receive the support they need to develop their full potential.Through close collaboration with local partners and the community, we work to create safe, nurturing environments where education becomes a pathway to opportunity and long-term well-being. Step by step, we are building brighter futures—one child at a time."
          )}
        </p>

       

        {/* Call to Action */}
        <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
          <Link to="/about" className="btn bg-[#F63049]/50 hover:bg-[#F63049] outline-1 outline-[#F63049] text-white px-6">
            {t("About Us")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
