import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface modalProps {
    isOpen: boolean;
    onClose: () => void;
    project: any;
}


function ProjectDetails({ isOpen, onClose, project }: modalProps) {
    if (!isOpen || !project) return null;

const navigate = useNavigate();

const handleDonateClick = () => {
    navigate("/donate");
};
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4"
                >
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 40, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="bg-[#111F35] w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-[#8A244B]/40 text-white">
                        {/* HEADER IMAGE */}
                        <div className="relative h-52">
                            <img
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-white text-3xl hover:text-red-400"
                            >
                                &times;
                            </button>

                            <div className="absolute bottom-4 left-6 text-white">
                                <h2 className="text-3xl font-bold tracking-tight">{project.title}</h2>
                            </div>
                        </div>

                        {/* BODY */}
                        <div className="p-6 space-y-8 max-h-[70vh] overflow-y-auto">
                            {/* DESCRIPTION */}
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Project Description</h3>
                                <p className="text-sm leading-relaxed opacity-80">
                                    {project.summary}
                                </p>
                            </div>

                            {/* DONATE BUTTON */}
                            <button className="btn btn-primary w-full btn-lg rounded-xl shadow-md" onClick={handleDonateClick}>
                                Donate
                            </button>

                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default ProjectDetails;
