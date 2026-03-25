import { useState, useEffect } from "react";
import { TbHeartDollar } from "react-icons/tb";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaBaby } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import front from "../assets/front.png";
import needy1 from "../assets/needy1.jpg";
import needy2 from "../assets/needy2.jpg";
import { Link } from "react-router-dom";

// F63049,D02752,8A244B,111F35  color palette

function Mainheader() {
    const [index, setIndex] = useState(0);
    const { t } = useTranslation();

    const images = [front, needy1, needy2];

    const content = [
        {
            heading: "Building opportunities",
            button: "Donate"
        },
        {
            heading: "Empowering communities to thrive",
            button: "Volunteer"
        },
        {
            heading: "Opening doors to education and growth",
            button: "Support Us"
        }
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 15000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <div className="w-full py-72 h-96 overflow-hidden relative mt-28">
                {images.map((img, i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-0 w-full h-full"
                        animate={{ opacity: i === index ? 1 : 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        style={{ zIndex: i === index ? 1 : 0 }}
                    >
                        <img
                            src={img}
                            alt={`Slide ${i + 1}`}
                            className="w-full h-full object-cover object-center"
                        />
                    </motion.div>
                ))}

                <div className="absolute inset-0 bg-linear-to-r from-[#111F35] via-[#111F35]/70 to-transparent z-10" />

                {/* text on the left */}
                <div className="absolute inset-0 flex flex-col justify-center items-start text-left pl-16 p-6 z-20 w-2/3 bg-linear-to-r from-[#111F35]/95 via-[#8A244B]/80 to-transparent">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 1 }}
                            className="sm:max-w-3xl lg:max-w-4xl"
                        >
                            <motion.h1
                                className="text-white text-sm md:text-2xl font-bold uppercase tracking-wide"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                {t(content[index].heading)}
                            </motion.h1>

                        </motion.div>
                    </AnimatePresence>
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >

                        <Link
                            to="/donate"
                            className="group outline p-2 rounded-md outline-[#D02752] text-center min-h-[150px] max-w-[500px] w-full mx-auto flex flex-col justify-center hover:bg-linear-to-r from-[#F63049] to-[#D02752]"
                        >
                            <TbHeartDollar className="text-2xl text-[#D02752] mx-auto group-hover:text-white" />
                            <h1 className="text-lg">MAKE AN IMPACT</h1>
                            <h1 className="text-[10px] text-[#D02752] group-hover:text-white">DONATE NOW</h1>
                        </Link>

                        <Link
                            to="/volunteer"
                            className="group outline p-2 rounded-md outline-[#D02752] text-center min-h-[150px] max-w-[500px] w-full mx-auto flex flex-col justify-center hover:bg-linear-to-r from-[#F63049] to-[#D02752]"
                        >
                            <BiSolidDonateHeart className="text-2xl text-[#D02752] mx-auto group-hover:text-white" />
                            <h1 className="text-lg">BECOME A VOLUNTEER</h1>
                            <h1 className="text-[10px] text-[#D02752] group-hover:text-white">APPLY TODAY</h1>
                        </Link>

                        <Link
                            to="/sponsor"
                            className="group outline p-2 rounded-md outline-[#D02752] text-center min-h-[150px] max-w-[500px] w-full mx-auto flex flex-col justify-center hover:bg-linear-to-r from-[#F63049] to-[#D02752]"
                        >
                            <FaBaby className="text-2xl text-[#D02752] mx-auto group-hover:text-white" />
                            <h1 className="text-lg">SPONSOR A CHILD</h1>
                            <h1 className="text-[10px] text-[#D02752] group-hover:text-white">DONATE NOW</h1>
                        </Link>

                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#111F35] to-transparent z-20" />
            </div>
        </>
    );
}

export default Mainheader;
