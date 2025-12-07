import Header from "../components/Header";
import mission from "../assets/mission.png";
import vision from "../assets/vision.jpg";
import values from "../assets/values.jpg";
import about1 from "../assets/about1.jpeg";
import community from "../assets/community.jpg";

function About() {
  return (
    <div className="mx-auto">
      <Header pageName="About Us" />

      <div className="max-w-7xl mx-auto mt-20 px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SECTION */}
        <div className="space-y-12">

          {/* Card */}
          <div className="bg-linear-to-br from-[#0d1224] to-[#1b2644] p-8 rounded-3xl shadow-lg border border-white/10 transition hover:shadow-2xl hover:scale-[1.01] duration-300">
            <span className="text-xs uppercase tracking-widest text-blue-300">Vision</span>
            <h2 className="text-3xl font-bold text-white mt-1">Our Vision</h2>
            <p className="text-base text-gray-300 mt-4 leading-relaxed">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident.
            </p>
          </div>

          {/* Card */}
          <div className="bg-linear-to-br from-[#0d1224] to-[#1c2a4a] p-8 rounded-3xl shadow-lg border border-white/10 transition hover:shadow-2xl hover:scale-[1.01] duration-300">
            <span className="text-xs uppercase tracking-widest text-blue-300">Mission</span>
            <h2 className="text-3xl font-bold text-white mt-1">Our Mission</h2>
            <p className="text-base text-gray-300 mt-4 leading-relaxed">
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero
              tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
              minus id quod maxime.
            </p>
          </div>

          {/* Card */}
          <div className="bg-linear-to-br from-[#0d1224] to-[#19233d] p-8 rounded-3xl shadow-lg border border-white/10 transition hover:shadow-2xl hover:scale-[1.01] duration-300">
            <span className="text-xs uppercase tracking-widest text-blue-300">Values</span>
            <h2 className="text-3xl font-bold text-white mt-1">Our Values</h2>
            <ul className="mt-4 space-y-3 text-gray-300 text-base">
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
            <img src={vision} alt="vision" className="w-full h-full object-cover" />
          </div>

          <img
            src={mission}
            className="absolute -top-12 lg:-right-32  -right-8 w-32 h-32 rounded-2xl shadow-lg border border-white/20 object-cover"
            alt="mission"
          />

          <img
            src={values}
            className="absolute -bottom-14 left-4 w-28 h-28 rounded-2xl shadow-lg border border-white/20 object-cover"
            alt="values"
          />

          <img
            src={about1}
            className="absolute top-30 -left-14 w-14 h-14 rounded-full shadow-md border border-white/20 object-cover"
            alt="about"
          />

          <img
            src={community}
            className="absolute top-70 -right-14 w-16 h-16 rounded-full shadow-md border border-white/20 object-cover"
            alt="community"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
