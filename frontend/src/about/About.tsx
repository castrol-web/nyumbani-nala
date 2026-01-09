import { FaHireAHelper, FaHandsHelping } from "react-icons/fa";
import Header from "../components/Header";
import mission from "../assets/mission.png";
import vision from "../assets/vision.jpg";
import values from "../assets/values.jpg";
import about1 from "../assets/about1.jpeg";
import community from "../assets/community.jpg";
import msamaria from "../assets/msamaria.jpg"
import TeamMembers from "../components/team/TeamMembers";

function About() {
  return (
    <div className="mx-auto">
      <Header pageName="About Us" />
      <div>
        <div className="mt-4">
          <div className="lg:flex sm:grid items-center text-center justify-between mx-10 gap-10">
            <div className="lg:w-2/3 items-center justify-center mx-auto mb-10">
              <p className="text-sm" data-aos="zoom-out">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum
                The Extremes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
                during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.
              </p>
            </div>
            <div className="avatar" data-aos="slide-right">
              <div className="mask mask-hexagon-2 w-80 h-80 mx-auto">
                <img src={msamaria} alt="about image" />
              </div>
            </div>
          </div>

          {/* div for some icons */}
          <div className="flex mx-auto gap-4 justify-center">
            <div className="w-70" data-aos="flip-up">
              <span className="uppercase text-xs font-bold">supporting the community from anywhere around the globe</span>
            </div>
            <div data-aos="fade-up">
              <FaHireAHelper size={30} className="text-blue-500 grayscale hover:grayscale-0 mx-auto" />
              <span className="text-xs">Extremes</span>
            </div>
            <div data-aos="fade-up">
              <FaHandsHelping size={30} className="text-blue-500 grayscale hover:grayscale-0 mx-auto" />
              <span className="text-xs">Charity</span>
            </div>

          </div>
          <div className="lg:flex sm:grid items-center text-center justify-between mx-10 gap-10 flex-row-reverse mt-10">
            <div className="lg:w-2/3 items-center justify-center mx-auto mb-10">
              <p className="text-sm" data-aos="zoom-out">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum
                The Extremes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
                during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.
              </p>
            </div>
            <div className="avatar" data-aos="slide-left">
              <div className="mask mask-hexagon-2 w-80 h-80 mx-auto">
                <img src={msamaria} alt="about image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SECTION */}
        <div className="space-y-12">

          {/* Card */}
          <div className="bg-linear-to-br from-[#0d1224] to-[#1b2644] p-8 rounded-3xl shadow-lg border border-white/10 transition hover:shadow-2xl hover:scale-[1.01] duration-300">
            <span className="text-xs uppercase tracking-widest text-blue-300" data-aos="zoom-in-out">Vision</span>
            <h2 className="text-3xl font-bold text-white mt-1">Our Vision</h2>
            <p className="text-base text-gray-300 mt-4 leading-relaxed" data-aos="fade-up">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident.
            </p>
          </div>

          {/* Card */}
          <div className="bg-linear-to-br from-[#0d1224] to-[#1c2a4a] p-8 rounded-3xl shadow-lg border border-white/10 transition hover:shadow-2xl hover:scale-[1.01] duration-300">
            <span className="text-xs uppercase tracking-widest text-blue-300" data-aos="zoom-in-out">Mission</span>
            <h2 className="text-3xl font-bold text-white mt-1" data-aos="fade-up">Our Mission</h2>
            <p className="text-base text-gray-300 mt-4 leading-relaxed" data-aos="fade-up">
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero
              tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
              minus id quod maxime.
            </p>
          </div>

          {/* Card */}
          <div className="bg-linear-to-br from-[#0d1224] to-[#19233d] p-8 rounded-3xl shadow-lg border border-white/10 transition hover:shadow-2xl hover:scale-[1.01] duration-300">
            <span className="text-xs uppercase tracking-widest text-blue-300">Values</span>
            <h2 className="text-3xl font-bold text-white mt-1">Our Values</h2>
            <ul className="mt-4 space-y-3 text-gray-300 text-base" data-aos="fade-up" data-aos-delay="100">
              <li>Integrity</li>
              <li>Innovation</li>
              <li>Community Focus</li>
              <li>Sustainability</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SECTION — CLEANER FLOATING IMAGE COMPOSITION */}
        <div className="relative flex justify-center mx-auto">

          {/* Main card */}
          <div className="w-80 h-[430px] rounded-3xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-md border border-white/20">
            <img src={vision} alt="vision" className="w-full h-full object-cover" data-aos="fade-in"/>
          </div>

          <img
            src={mission}
             data-aos="zoom-in-out"
            className="absolute -top-12 lg:-right-32  -right-8 w-32 h-32 rounded-2xl shadow-lg border border-white/20 object-cover"
            alt="mission"
          />

          <img
            src={values}
             data-aos="zoom-out"
            className="absolute -bottom-14 left-4 w-28 h-28 rounded-2xl shadow-lg border border-white/20 object-cover"
            alt="values"
          />

          <img
            src={about1}
             data-aos="zoom-in"
            className="absolute top-30 -left-14 w-14 h-14 rounded-full shadow-md border border-white/20 object-cover"
            alt="about"
          />

          <img
            src={community}
             data-aos="zoom-in"
            className="absolute top-70 -right-14 w-16 h-16 rounded-full shadow-md border border-white/20 object-cover"
            alt="community"
          />
        </div>
      </div>
      <TeamMembers />
    </div>
  );
}

export default About;
