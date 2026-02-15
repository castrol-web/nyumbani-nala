import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
   FaTiktok 
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="relative bg-[#111F35] text-white pt-16 pb-6 overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute inset-0 -z-10 
        bg-[radial-gradient(circle_at_bottom_left,#8A244B_0%,#111F35_60%)] opacity-40" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Navigation */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-[#F63049]">
            {t("Navigation")}
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" className="hover:text-[#F63049] transition">
                {t("Home")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-[#F63049] transition">
                {t("About")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-[#F63049] transition">
                {t("Contact")}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-[#F63049]">
            Nyumbani Nala
          </h2>
          <p className="text-sm opacity-90">
            {t("Location")}: Moshi, Tanzania
          </p>
          <p className="text-sm opacity-90 mt-1">
            {t("Phone")}: +34 616 454 974
          </p>
          <p className="text-sm mt-1">
            {t("Email")}:{" "}
            <a
              href="mailto:nyumbaninala@gmail.com"
              className="text-[#D02752] hover:underline"
            >
              nyumbaninala@gmail.com
            </a>
          </p>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-[#F63049]">
            {t("Follow Us")}
          </h2>

          <div className="flex justify-center md:justify-start gap-5 text-2xl">
            {[FaFacebook, FaWhatsapp, FaInstagram, FaTiktok].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-white hover:text-[#F63049] 
                transition duration-300 
                hover:scale-110 
                hover:shadow-lg hover:shadow-[#F63049]/40 rounded-full"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 pt-4 border-t border-[#8A244B]/40 text-center text-sm opacity-70">
        <p>
          {t("Privacy Policy")} •{" "}
          <NavLink to="/" className="hover:text-[#F63049] transition">
            {t("Richkid Solutions")}
          </NavLink>{" "}
          © {year} • {t("All Rights Reserved")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
