import { motion, AnimatePresence } from "framer-motion";
import {FaTimes, FaHome, FaUserTie, FaFileAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {
    Settings,
    HelpCircle,
    Heart,
    ChevronLeft,
    ChevronRight,
    LogOut,
} from "lucide-react";

interface SidebarProps {
    collapsed: boolean;
    setCollapsed: (value: boolean) => void;
    mobileOpen: boolean;
    setMobileOpen: (value: boolean) => void;
}


const navItems = [
    { label: "Dashboard", icon: <FaHome />, href: "/admin", end: true },
    { label: "Projects", icon: <FaUserTie />, href: "/admin/projects" },
    { label: "ChangeMaker", icon: <FaFileAlt />, href: "/admin/changemakers" },
    { label: "Donations", icon: <FaFileAlt />, href: "/admin/donations" },
    { label: "Contact", icon: <FaFileAlt />, href: "/admin/contacts" },
];

const bottomItems = [
    { href: "/settings", label: "Settings", icon: Settings },
    { href: "/help", label: "Help", icon: HelpCircle },
];

const Sidebar = ({ collapsed, setCollapsed, mobileOpen, setMobileOpen }: SidebarProps) => {

    return (
        <>
            {/* Desktop Sidebar */}
            <aside
                className={`z-50 hidden md:flex relative flex-col h-screen border-r transition-all duration-300 ${collapsed ? "w-16" : "w-64"
                    }`}
            >
                {/* Header */}
                <div className="flex items-center gap-3 p-4 border-b">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                        <Heart className="w-5 h-5 text-white" />
                    </div>

                    {!collapsed && (
                        <div>
                            <h1 className="text-lg font-bold">Nyumbani Nala</h1>
                            <p className="text-xs text-gray-500">Admin Dashboard</p>
                        </div>
                    )}
                </div>

                {/* Navigation */}
                <div className="flex-1 p-3 space-y-2">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.label}
                            to={item.href}
                            end={item.end}
                            className={({ isActive }) =>
                                `flex items-center gap-3 p-2 rounded transition ${isActive
                                    ? "bg-primary text-white"
                                    : "hover:bg-gray-100 text-gray-700"
                                } ${collapsed ? "justify-center" : ""}`
                            }
                        >
                            {item.icon}
                            {!collapsed && item.label}
                        </NavLink>
                    ))}
                </div>

                {/* Bottom */}
                <div className="p-3 border-t space-y-2">
                    {bottomItems.map((item) => (
                        <NavLink
                            key={item.href}
                            to={item.href}
                            className={`flex items-center gap-3 p-2 rounded hover:bg-gray-100 ${collapsed ? "justify-center" : ""
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                            {!collapsed && item.label}
                        </NavLink>
                    ))}

                    <button
                        className={`flex items-center gap-3 p-2 rounded hover:bg-red-50 text-red-500 ${collapsed ? "justify-center w-full" : "w-full"
                            }`}
                    >
                        <LogOut className="w-5 h-5" />
                        {!collapsed && "Log Out"}
                    </button>
                </div>

                {/* Collapse Toggle */}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="absolute top-20 -right-3 w-5 h-5 rounded-full border shadow outline-1 outline-gray-500 bg-[#111F35] flex items-center justify-center"
                >
                    {collapsed ? (
                        <ChevronRight className="w-5 h-5 text-gray-500" />
                    ) : (
                        <ChevronLeft className="w-5 h-5 text-gray-500" />
                    )}
                </button>
            </aside>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black z-40 md:hidden"
                            onClick={() => setMobileOpen(false)}
                        />

                        {/* Sidebar Panel */}
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.25 }}
                            className="fixed top-0 left-0 w-72 h-screen bg-[#111F35] shadow-xl z-50 md:hidden flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-5 border-b">
                                <div>
                                    <h2 className="text-lg font-bold">Nyumbani Nala</h2>
                                    <p className="text-xs text-gray-500">Admin Dashboard</p>
                                </div>

                                <button
                                    onClick={() => setMobileOpen(false)}
                                    className="p-2 rounded-lg bg-gray-800 text-white hover:text-red-500 transition"
                                >
                                    <FaTimes size={18} />
                                </button>
                            </div>

                            {/* Navigation */}
                            <div className="flex-1 p-4 space-y-2">
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.label}
                                        to={item.href}
                                        end={item.end}
                                        onClick={() => setMobileOpen(false)}
                                        className={({ isActive }) =>
                                            `flex items-center gap-4 p-3 rounded-lg transition text-sm font-medium ${isActive
                                                ? "bg-primary text-white"
                                                : "text-gray-700 hover:bg-gray-100"
                                            }`
                                        }
                                    >
                                        <span className="text-lg">{item.icon}</span>
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>

                            {/* Bottom Section */}
                            <div className="border-t p-4 space-y-2">
                                {bottomItems.map((item) => (
                                    <NavLink
                                        key={item.href}
                                        to={item.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center gap-4 p-3 rounded-lg text-gray-700 hover:bg-gray-100"
                                    >
                                        <item.icon className="w-5 h-5" />
                                        {item.label}
                                    </NavLink>
                                ))}

                                <button className="flex items-center gap-4 p-3 rounded-lg text-red-500 hover:bg-red-50 w-full">
                                    <LogOut className="w-5 h-5" />
                                    Log Out
                                </button>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Sidebar;