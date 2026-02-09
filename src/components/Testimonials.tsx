import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar, FaRegStar } from 'react-icons/fa';
import needy from "../assets/needy.jpg";
import msamaria from "../assets/msamaria.jpg";
import values from "../assets/values.jpg";
import { useTranslation } from 'react-i18next';

type Testimonial = {
  name: string;
  title: string;
  quote: string;
  image: string;
  rating: number;
};

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
const data: Testimonial[] = [
  {
    name: "Margaret Umburi",
    title: t("Founder, Nyumbani Nala"),
    quote: t(
      "Nyumbani Nala was created to give vulnerable children a safe home, education, and hope for a better future. Every contribution truly changes a life."
    ),
    image: msamaria,
    rating: 5,
  },
  {
    name: "Amina Yusuf",
    title: t("Former Beneficiary"),
    quote: t(
      "Because of Nyumbani Nala, I was able to go to school, receive care, and believe in myself again. This place gave me hope."
    ),
    image: needy,
    rating: 5,
  },
  {
    name: "John Mwita",
    title: t("Community Member"),
    quote: t(
      "Nyumbani Nala has transformed many children's lives in our community. We have seen real change through education, care, and support."
    ),
    image: values,
    rating: 5,
  },
];

    setTestimonials(data);
  }, [t]); // include `t` in the dependency array for live translation updates

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(next, 8000);
    return () => clearInterval(interval);
  }, [testimonials]);

  if (!testimonials.length) return <div className="text-center py-10">{t("Loading testimonials...")}</div>;

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 pt-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2" data-aos="fade-up">{t("Voices from the ground")}</h2>
        <p className="text-gray-500 max-w-xl mx-auto">{t("Real stories about lives you've changed")}</p>
      </div>

      <div className="relative lg:min-h-[350px] min-h-[600px]">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={current}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex justify-center"
          >
            <div className="card bg-gray-700 shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6 max-w-3xl w-full">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].title}
                className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover ring-2 ring-blue-500"
              />
              <div className="flex-1 text-center md:text-left">
                <FaQuoteLeft className="text-blue-400 text-2xl mb-2 mx-auto md:mx-0" />
                <p className="text-slate-50 italic mb-3">"{testimonials[current].quote}"</p>
                <div className="flex justify-center md:justify-start mb-1 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) =>
                    i < testimonials[current].rating ? (
                      <FaStar key={i} />
                    ) : (
                      <FaRegStar key={i} />
                    )
                  )}
                </div>
                <p className="text-sm text-slate-50">{testimonials[current].title}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2">
          <button
            type="button"
            title="Previous"
            onClick={prev}
            className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg"
          >
            <FaChevronLeft />
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2">
          <button
            type="button"
            title="Next"
            onClick={next}
            className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};
