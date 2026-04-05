import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const url = import.meta.env.VITE_SERVER_URL || "http://localhost:8050";
import values from "../../assets/values.jpg"
import { FaBook, FaHandsHelping, FaFutbol, FaLaptop, FaFemale, FaTools, FaPaintBrush } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";


export default function ChangeMaker() {
    const [openForm, setOpenForm] = useState(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{7,15}$/; // allows optional +, 7-15 digits
    const nameRegex = /^[a-zA-Z\s'-]{2,50}$/; // letters, spaces, hyphen/apostrophe
    const [searchParams] = useSearchParams();
    const [loading, setloading] = useState(false);

    useEffect(() => {
        const formParam = searchParams.get("form");
        if (formParam === "open") {
            setOpenForm(true);
        } else {
            setOpenForm(false);
        }
    }, [searchParams]);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        country: "",
        phone: "",
        gender: "",
        startDate: "",
        endDate: "",
        skills: "",
        message: "",
        interests: [] as string[]
    });

    const interestsList = [
        "Teaching & tutoring",
        "Childcare & daily support",
        "Sports / football",
        "Technology & digital skills",
        "Community / women empowerment",
        "Maintenance & repairs",
        "Creative skills",
        "I'm open to anything"
    ];

    const activities = [
        {
            icon: <FaBook size={28} className="mx-auto" />,
            title: "Teaching & Tutoring",
            text: "Help kids with English, reading, maths."
        },
        {
            icon: <FaHandsHelping size={28} className="mx-auto" />,
            title: "Childcare & Daily Support",
            text: "Play, meals, after school activities."
        },
        {
            icon: <FaFutbol size={28} className="mx-auto" />,
            title: "Sports & Football",
            text: "Assist training, wellness, teamwork activities."
        },
        {
            icon: <FaLaptop size={28} className="mx-auto" />,
            title: "Technology & Digital Skills",
            text: "Support computer classes and digital workshops."
        },
        {
            icon: <FaFemale size={28} className="mx-auto" />,
            title: "Women & Community Projects",
            text: "Help in Montessori school & support working mothers."
        },
        {
            icon: <FaTools size={28} className="mx-auto" />,
            title: "Maintenance & Practical Help",
            text: "Painting, repairs, improving spaces."
        },
        {
            icon: <FaPaintBrush size={28} className="mx-auto" />,
            title: "Creative Skills",
            text: "Art, music, photography, games."
        }
    ];

    const toggleInterest = (interest: string) => {
        setFormData((prev) => ({
            ...prev,
            interests: prev.interests.includes(interest)
                ? prev.interests.filter((i) => i !== interest)
                : [...prev.interests, interest]
        }));
    };

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    //prevent scrolling when form is open
    useEffect(() => {
        document.body.style.overflow = openForm ? "hidden" : "auto";
    }, [openForm]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.country || !formData.gender || !formData.startDate || !formData.endDate) {
            toast.error("Please fill in all required fields");
            return;
        }

        // Regex validation
        if (!nameRegex.test(formData.name)) {
            toast.error("Name must only contain letters, spaces, hyphens, or apostrophes");
            return;
        }

        if (!emailRegex.test(formData.email)) {
            toast.error("Invalid email format");
            return;
        }

        if (formData.phone && !phoneRegex.test(formData.phone)) {
            toast.error("Invalid phone number format (use digits, optional +)");
            return;
        }

        // Optional: check that startDate is before endDate
        if (new Date(formData.startDate) > new Date(formData.endDate)) {
            toast.error("Start date cannot be after end date");
            return;
        }

        //check if date is in the past  but you can choose to start today     
        if (new Date(formData.startDate) < new Date(new Date().setHours(0, 0, 0, 0))) {
            toast.error("Start date cannot be in the past");
            return;
        }

        // Check that at least one interest is selected
        if (formData.interests.length === 0) {
            toast.error("Please select at least one area of interest");
            return;
        }

        try {
            setloading(true);
            const res = await axios.post(`${url}/api/user/volunteers`, formData);

            if (res.status === 201) {
                toast.success("Application submitted successfully!");
                setFormData({
                    name: "",
                    email: "",
                    country: "",
                    phone: "",
                    gender: "",
                    startDate: "",
                    endDate: "",
                    skills: "",
                    message: "",
                    interests: []
                });
                setOpenForm(false);
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                toast.error(error.response.data.message || "Failed to submit application");
            } else {
                toast.error("Something went wrong");
            }
        } finally {
            setloading(false);
        }
    };

    return (
        <div>

            {/* HERO SECTION */}
            <div
                className="relative h-[60vh] flex items-center justify-center text-white text-center bg-cover bg-center mt-24"
                style={{ backgroundImage: `url(${values})` }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="relative z-10 w-full h-[60vh] p-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 pt-20">
                        MAKE AN IMPACT. LIVE AN ADVENTURE.
                    </h1>

                    <p className="text-xl mb-6">
                        Make a change in Tanzania with Nyumbani Nala
                    </p>

                    <button
                        onClick={() => setOpenForm(true)}
                        className="bg-[#F63049]/70 text-slate-100 px-8 py-3 rounded-full font-semibold hover:bg-[#F63049]"
                    >
                        BECOME A CHANGEMAKER
                    </button>
                </div>

                {/* Fade to next section */}
                <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-[#111F35] to-transparent"></div>

            </div>

            {/* INTRO */}
            <section className="py-20 px-6 text-center max-w-3xl mx-auto">

                <h2 className="text-3xl font-bold mb-6">
                    WHY BECOME A CHANGEMAKER WITH US?
                </h2>

                <p className="text-lg mb-6">
                    Becoming a ChangeMaker with Nyumbani Nala is a chance to join local
                    partners life changing community projects in Moshi, improving
                    children's lives and empowering women.
                </p>

                <div className="grid md:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
                    <p>✅ Make a real difference</p>
                    <p>✅ Meet inspiring local leaders</p>
                    <p>✅ Build unforgettable memories</p>
                    <p>✅ Grow personally while helping others</p>
                </div>

            </section>

            {/* WHAT YOU CAN DO */}
            <section className="py-20 px-6">

                <h2 className="text-3xl font-bold text-center mb-12">
                    WHAT YOU CAN DO
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {activities.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl shadow hover:shadow-lg transition outline-1 outline-gray-300/40"
                        >
                            <div className="mb-4 mx-auto text-center items-center justify-center">
                                <div className="mx-auto items-center text-center">
                                    {item.icon}
                                </div>
                                <div className="mx-auto items-center text-center">
                                    <h3 className="text-xl font-semibold mt-2">
                                        {item.title}
                                    </h3>
                                </div>
                                <div className="mt-2">
                                    <p className="text-gray-600">
                                        {item.text}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

            </section>

            {/* FORM */}
            {openForm && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">

                    <div className="bg-[#111F35] max-w-2xl w-full rounded-xl p-8 relative max-h-[90vh] overflow-y-auto">

                        {/* Close Button */}
                        <button
                            onClick={() => setOpenForm(false)}
                            className="absolute top-4 right-4 text-red-500 text-xl"
                        >
                            ✕
                        </button>

                        <h2 className="text-3xl font-bold text-center mb-8">
                            CHANGEMAKER APPLICATION FORM
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">

                            <input
                                name="name"
                                required
                                placeholder="Name"
                                className="w-full border p-3 rounded"
                                onChange={handleChange}
                            />

                            <input
                                name="email"
                                required
                                placeholder="Email"
                                className="w-full border p-3 rounded"
                                onChange={handleChange}
                            />

                            <input
                                name="country"
                                required
                                placeholder="Country"
                                className="w-full border p-3 rounded"
                                onChange={handleChange}
                            />

                            <input
                                name="phone"
                                placeholder="Phone (optional)"
                                className="w-full border p-3 rounded"
                                onChange={handleChange}
                            />
                            <select className="w-full border p-3 rounded" name="gender" required onChange={handleChange}>
                                <option className="text-gray-500 " value="">Select Gender</option>
                                <option className="text-gray-500" value="male">Male</option>
                                <option className="text-gray-500" value="female">Female</option>
                                <option className="text-gray-500" value="other">Other</option>
                            </select>

                            {/* Interests */}
                            <div>
                                <p className="font-semibold mb-3">Interests</p>

                                <div className="grid md:grid-cols-2 gap-2">

                                    {interestsList.map((interest) => (
                                        <label key={interest} className="flex items-center gap-2">

                                            <input
                                                type="checkbox"
                                                onChange={() => toggleInterest(interest)}
                                            />

                                            {interest}

                                        </label>
                                    ))}

                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="font-semibold">Availability</p>
                                <div className="grid lg:flex gap-3 mx-auto items-center justify-center">
                                    <div className="mx-auto mt-3">
                                        <label>
                                            when do you want to start?
                                            <input
                                                type="date"
                                                required
                                                name="startDate"
                                                placeholder="Start Date"
                                                className="w-full border p-3 rounded"
                                                onChange={handleChange}
                                            />
                                        </label>

                                    </div>
                                    <div className="mt-3 mx-auto">
                                        <label>
                                            when do you want to end?
                                            <input
                                                type="date"
                                                required
                                                name="endDate"
                                                placeholder="End Date"
                                                className="w-full border p-3 rounded"
                                                onChange={handleChange}
                                            />
                                        </label>
                                    </div>
                                </div>

                            </div>

                            <textarea
                                name="skills"
                                required
                                placeholder="Your skills / experience"
                                className="w-full border p-3 rounded"
                                onChange={handleChange}
                            />

                            <textarea
                                name="message"
                                placeholder="Message (optional)"
                                className="w-full border p-3 rounded"
                                onChange={handleChange}
                            />

                            <button className="w-full bg-[#F63049] py-3 rounded font-bold hover:bg-[#F63049]/80">
                                SUBMIT & START YOUR JOURNEY
                            </button>

                        </form>

                    </div>
                </div>
            )}

            {/* FINAL CTA */}
            <section className="relative bg-[#0f172a] text-white text-center py-24 px-6 overflow-hidden">

                {/* Animated gradient blobs */}
                <div className="absolute inset-0 overflow-hidden">

                    <div className="absolute w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite] top-10 left-10"></div>

                    <div className="absolute w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-[float_14s_ease-in-out_infinite] bottom-10 right-10"></div>

                    <div className="absolute w-64 h-64 bg-pink-400/20 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite] top-1/2 left-1/3"></div>

                </div>

                {/* Content */}
                <div className="relative z-10">

                    <h2 className="text-3xl font-bold mb-6">
                        READY TO MAKE A DIFFERENCE?
                    </h2>

                    <p className="mb-8 max-w-xl mx-auto text-gray-500">
                        Your time can change a child's life — and your own. Nyumbani Nala will
                        connect you with local NGOs that organize the activities.
                    </p>

                    <button
                        disabled={loading}
                        onClick={() => setOpenForm(true)}
                        className="bg-[#F63049]/70 text-slate-100 px-8 py-3 rounded-full font-semibold hover:bg-[#F63049] transition"
                    >
                        {loading ? "Submitting..." : "BECOME PART OF THE CHANGE"}
                    </button>

                </div>

            </section>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
        </div>
    );
}