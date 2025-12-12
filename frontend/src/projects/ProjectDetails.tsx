import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

interface modalProps {
    isOpen: boolean;
    onClose: () => void;
    project: any;
}


function ProjectDetails({ isOpen, onClose, project }: modalProps) {
    if (!isOpen || !project) return null;


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
                        className="bg-white w-full max-w-4xl rounded-2xl shadow-xl overflow-hidden"
                    >
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
                                <p className="text-sm opacity-80">Empowering communities since {project.year}</p>
                            </div>
                        </div>

                        {/* BODY */}
                        <div className="p-6 space-y-8 max-h-[70vh] overflow-y-auto">

                            {/* TEAM MEMBERS */}
                            <div>
                                <h3 className="text-lg font-semibold mb-3">Team Members</h3>
                                <div className="flex gap-6">
                                    {project.teamMembers &&
                                        project.teamMembers?.map((member: { name: string, role: string }, idx: number) => (
                                            <div key={idx} className="text-center flex flex-col items-center">
                                                <div className="avatar mb-2">
                                                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                        <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                                    </div>
                                                </div>
                                                <p className="text-sm font-medium">{member.name}</p>
                                                <p className="text-xs opacity-60">{member.role}</p>
                                            </div>
                                        )

                                        )
                                    }
                                </div>
                            </div>

                            {/* REQUIREMENTS CARD */}
                            <div className="card shadow-md outline-1 outline-gray-200">
                                <div className="card-body p-4">
                                    <h3 className="text-lg font-semibold mb-3">Project Requirements</h3>
                                    <ul className="space-y-3">
                                        {project.requirements.map((item:string, i:number) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <span className="text-sm opacity-40 font-mono">{`0${i + 1}`}</span>
                                                <p className="uppercase text-xs tracking-wider opacity-70 font-semibold">{item}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* SPONSORS */}
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Sponsors / Donors</h3>
                                <div className="avatar-group -space-x-4">
                                    {project.sponsors&& project.sponsors.map((i:number) => (
                                        <div key={i} className="avatar">
                                            <div className="w-8">
                                                <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                                            </div>
                                        </div>
                                    ))}
                                    <div className="avatar placeholder">
                                        <div className="bg-neutral text-white w-8">
                                            <span>+5</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* GOALS */}
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Project Goals</h3>
                                <ul className="list-none list-inside text-sm opacity-80 leading-relaxed space-y-1">
                                    {project.goals&& project.goals.map((goal:string, idx:number) => (
                                        <li key={idx} className="before:content-['•'] before:text-primary before:mr-2">
                                            {goal}

                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* IMPACT */}
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Project Impact</h3>
                                <ul className="list-decimal list-inside text-sm opacity-80 leading-relaxed space-y-1">
                                    <li>1,000+ individuals supported with essential resources.</li>
                                    <li>200 individuals completed skill development programs.</li>
                                    <li>Support networks created in 5 different communities.</li>
                                </ul>
                            </div>

                            {/* DESCRIPTION */}
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Project Description</h3>
                                <p className="text-sm leading-relaxed opacity-80">
                                    {project.summary}
                                </p>
                            </div>

                            {/* DONATE BUTTON */}
                            <button className="btn btn-primary w-full btn-lg rounded-xl shadow-md">
                                Donate
                            </button>

                            {/* CONTACT */}
                            <div className="pt-4 border-t">
                                <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                                {project.contact && project.contact.map((contact: { email: string, phone: string }, idx: number) => (
                                    <div key={idx} className="mb-2">
                                        <p className="text-sm opacity-80">Email: {contact.email}</p>
                                        <p className="text-sm opacity-80">Phone: {contact.phone}</p>
                                    </div>
                                ))}

                                <h3 className="text-lg font-semibold mt-3 mb-2">Location</h3>
                                <p className="text-sm opacity-80">{project.address}</p>

                                <h3 className="text-lg font-semibold mt-3 mb-3">Social Media</h3>
                                <div className="flex gap-4 text-2xl">
                                    <FaFacebook className="text-blue-700 hover:text-blue-500 cursor-pointer" />
                                    <FaWhatsapp className="text-green-600 hover:text-green-500 cursor-pointer" />
                                    <FaInstagram className="text-pink-500 hover:text-pink-300 cursor-pointer" />
                                    <FaTiktok className="text-black hover:opacity-50 cursor-pointer" />
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default ProjectDetails;
