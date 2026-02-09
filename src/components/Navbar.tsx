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
      <div className="bg-[#E2DDB4] text-sm py-2 px-4 flex justify-between items-center lg:px-28 text-[#E43636]">
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
      <div className="navbar bg-[#131010] flex justify-between items-center">
        <div className="text-2xl font-bold text-primary flex items-center gap-2 ml-4">
          <NavLink to="/">
            <img
              alt="nyumbani nala logo"
              src={nyumbanilogo}
              className="rounded-full h-12 w-12"
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
                      ? "text-[#E43636] font-semibold"
                      : "hover:text-[#E43636] transition text-[#E2DDB4]"
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
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="w-full px-4 py-4 shadow-md flex flex-col gap-2 lg:hidden bg-[#131010] text-[#E2DDB4]">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-[#F2910A] font-semibold"
                  : "hover:text-[#F2910A] transition"
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
