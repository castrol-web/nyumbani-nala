import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import needy from "../assets/needy.jpg";
import needy1 from "../assets/needy1.jpg";
import needy2 from "../assets/needy2.jpg";

function Mainheader() {
    const [index, setIndex] = useState(0);
    const { t } = useTranslation();

    const images = [needy, needy1, needy2];

    const content = [
        {
            heading: "Welcome to Nyumbani Nala ",
            text: [
                "A Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.",
            ],
        },
        {
            heading: "Donate to Support a child's Education",
            text: ["the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful."],
        },
        {
            heading: "Nyumbani Nala Initiatives",
            text: ["provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam"]
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

                <div className="absolute inset-0 flex bg-black/50 flex-col justify-center items-center text-center p-6 z-20">
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
                                className="text-white text-4xl md:text-6xl font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                {t(content[index].heading)}
                            </motion.h1>

                            {/* Paragraphs */}
                            {content[index].text.map((line, i) => (
                                <motion.p
                                    key={`text-${i}`}
                                    className="text-white text-md mt-4"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                                >
                                    {t(line)}
                                </motion.p>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] z-0"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#F7C873] to-[#EA7300] opacity-15 sm:left-[calc(50%+36rem)] sm:w-288.75 header-custom-shadow"
                />
            </div>
        </>
    );
}

export default Mainheader;
