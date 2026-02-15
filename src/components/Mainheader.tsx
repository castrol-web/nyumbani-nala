import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import needy from "../assets/needy.jpg";
import needy1 from "../assets/needy1.jpg";
import needy2 from "../assets/needy2.jpg";

// F63049,D02752,8A244B,111F35  color palette

function Mainheader() {
    const [index, setIndex] = useState(0);
    const { t } = useTranslation();

    const images = [needy, needy1, needy2];

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
                <div className="absolute inset-0 flex flex-col justify-center items-start text-left pl-16 p-6 z-20 w-1/3 bg-linear-to-r from-[#111F35]/95 via-[#8A244B]/80 to-transparent">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 1 }}
                            className="sm:max-w-3xl lg:max-w-4xl mt-50"
                        >
                            <motion.h1
                                className="text-white text-sm md:text-2xl font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                {t(content[index].heading)}
                            </motion.h1>
                            <motion.button className="mt-6 px-6 py-3 rounded-full bg-linear-to-r from-[#F63049] to-[#D02752] text-white font-semibold shadow-lg shadow-[#F63049]/40 hover:scale-105 transition">
                                {content[index].button}
                            </motion.button>
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#111F35] to-transparent z-20" />
            </div>
        </>
    );
}

export default Mainheader;
