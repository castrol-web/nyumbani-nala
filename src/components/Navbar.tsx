import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useTranslation } from "react-i18next";
import nyumbanilogo from "../assets/nyumbanilogo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const { t, i18n } = useTranslation();

  // Language switch handler
  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  const navLinks = [
    { name: t("HOME"), to: "/" },
    { name: t("ABOUT"), to: "/about" },
    { name: t("CONTACT US"), to: "/contact" },
    { name: t("OUR PROJECTS"), to: "/our-projects" },
  ];

  return (
    <div className="w-full shadow-sm z-50 fixed mb-10 top-0">
      {/* Top Info Bar */}
      <div className="bg-linear-to-r from-[#111F35] via-[#8A244B] to-[#111F35] text-white text-sm py-2 px-4 flex justify-between items-center lg:px-28">
        <p>
          {t("Contact us")}:{" "}
          <span className="font-medium pl-1">+34 616 454 974</span>
        </p>
        <select
          title="select language"
          className="select w-20 select-sm bg-amber-100 border-0 text-black focus:outline-none"
          onChange={handleLangChange}
          value={i18n.language}
        >
          <option value="en">ENG</option>
          <option value="de">KISW</option>
          <option value="nl">SPAN</option>
        </select>
      </div>

      <hr className="border-base-300" />

      {/* Navbar Main */}
      <div className="navbar bg-linear-to-r from-[#111F35] to-[#1a2742] flex justify-between items-center backdrop-blur-md bg-opacity-90">
        <div className="text-2xl font-bold text-primary flex items-center gap-2 ml-4">
          <NavLink to="/">
            <img
              alt="nyumbani nala logo"
              src={nyumbanilogo}
              className="rounded-full h-12 w-12 border-2 border-[#F63049] shadow-md shadow-[#F63049]/40"
            />
          </NavLink>
          <div>
            <p className="text-slate-50 lg:text-2xl text-sm">Nyumbani Nala Association</p>
          </div>
        </div>

        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
          <ul className="menu menu-horizontal px-1 gap-4 font-medium">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#F63049] font-semibold relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-linear-to-r after:from-[#F63049] after:to-[#D02752]"
                      : "text-white hover:text-[#F63049] transition duration-300"

                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2 text-slate-50">
          {/* Hamburger Menu */}
          <button
            type="button"
            className="btn btn-ghost lg:hidden "
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <IoMdClose className="text-2xl" />
            ) : (
              <IoMdMenu className="text-2xl" />
            )}
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 
bg-linear-to-r from-[#F63049] via-[#D02752] to-[#8A244B]" />

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="w-full px-4 py-4 shadow-md flex flex-col gap-2 lg:hidden bg-linear-to-b from-[#111F35] to-[#8A244B] text-white">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-[#F63049] font-semibold"
                  : "hover:text-[#F63049] transition"
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
