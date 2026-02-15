import FAQ from './FAQ';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const FAQs = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      id: 1,
      question: "How can I get involved with Nyumbani Nala?",
      answer: "You can get involved through volunteering, donating, or participating in our community programs. Every contribution helps us make a meaningful impact on children's lives.",
    },
    {
      id: 2,
      question: "Can I sponsor a child at Nyumbani Nala?",
      answer: "Yes! Child sponsorship programs are available to help provide education, healthcare, and a supportive environment. Sponsorship makes a direct and lasting impact.",
    },
    {
      id: 3,
      question: "Does Nyumbani Nala accept donations?",
      answer: "Absolutely! Donations are crucial for sustaining our programs. You can contribute financially, or donate items like school supplies, clothes, and hygiene products.",
    },
    {
      id: 4,
      question: "How can I stay updated on Nyumbani Nala's activities?",
      answer: "Follow us on social media, subscribe to our newsletter, or check our website regularly for updates, events, and stories from the children we support.",
    }
  ];


  return (
    <section className="relative overflow-hidden by-20 px-4 md:px-12">
      {/* Animated Geometric Shapes */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-40 h-40 bg-linear-to-r from-[#F63049] via-[#D02752] to-[#8A244B] rounded-full opacity-10 blur-2xl"
      />
      <motion.div
        animate={{ x: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-32 h-32 bg-linear-to-r from-[#F63049] via-[#D02752] to-[#8A244B] rotate-45 opacity-10 blur-xl"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-linear-to-r from-[#F63049] via-[#D02752] to-[#8A244B] rounded-full opacity-10 blur-2xl"
      />

      {/* FAQ Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
        <div className="mx-auto mb-2 w-1/2 bg-linear-to-r from-[#F63049] via-[#D02752] to-[#8A244B] text-white py-4 rounded-lg flex justify-center items-center">
          <hr className="w-1/6 border-t-2 border-white mr-4"></hr>
          <span className="text-xl font-bold">{t("Frequently Asked Questions")}</span>
          <hr className="w-1/6 border-t-2 border-white ml-4"></hr>
        </div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          {t("Guest FAQs - Staying With Us Made Easy")}
        </p>
      </div>

      {/* FAQ Items */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {faqs.map(({ id, question, answer }) => (
          <FAQ key={id} question={question} answer={answer} />
        ))}
      </div>

      {/* Ask a Question CTA */}
      <div className='relative z-10 items-center justify-center mx-auto hidden gap-7 mt-4'>
        <span className='text-slate-50'>{t("still having another question?")}</span>
        {t("ask a question")}
      </div>
    </section>
  );
};

export default FAQs;
