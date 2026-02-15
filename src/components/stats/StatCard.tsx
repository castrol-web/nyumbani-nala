import { useRef } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";

type statType = {
    icon: any;
    end: number;
    title: string;
    description: string;
    color?: string;
};

function StatCard({ icon: Icon, end, title, description, color = "text-[#F63049]" }: statType) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.6 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition border-2 border-[#D02752] bg-[#111F35]"
        >
            {/* Icon */}
            <div className={`mb-4 text-5xl ${color} flex justify-center`}>
                <Icon />
            </div>

            {/* Number */}
            <h3 className="text-3xl font-bold text-white mb-2">
                {isInView && <CountUp end={end} duration={2} />}+
            </h3>

            {/* Title */}
            <h4 className="text-xl font-semibold text-[#F63049]">{title}</h4>

            {/* Description */}
            <p className="text-[#D02752] text-sm mt-2">{description}</p>
        </motion.div>
    );
}

export default StatCard;
