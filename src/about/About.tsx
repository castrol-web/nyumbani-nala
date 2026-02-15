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
              <div className="mx-auto mb-2 w-1/2 bg-linear-to-r from-[#F63049] via-[#D02752] to-[#8A244B] text-white py-4 rounded-lg flex justify-center items-center">
                <hr className="w-1/6 border-t-2 border-white mr-4"></hr>
                <span className="text-xl font-bold">WHERE IT BEGAN</span>
                <hr className="w-1/6 border-t-2 border-white ml-4"></hr>
              </div>
              <p className="text-sm" data-aos="zoom-out">
                The idea for Nyumbani Nala Association was born in 2018, during a trip to
                Moshi, Tanzania.
                Founder Marisa Díaz traveled with her two children, seeking both tourism and a
                chance to volunteer. During their stay, they spent a week visiting a local school
                and an orphanage, where they witnessed heartbreaking realities: children
                surviving on only one meal per day and with hard access to education.
                But the true spark came from meeting Margaret, a courageous woman who had
                adopted 17 street children as her own. Margaret was doing everything in her
                power—working three jobs, asking for donations—just to pay the bills and keep
                the children in school. That day, she shared a devastating truth: she had only
                one week to pay an entire year’s expenses, or all the children would end up
                back on the streets.
                This shocking story ignited a mission. From that moment, Nyumbani Nala was
                created—not only to help Margaret and her children but also to support other
                orphanages and projects, ensuring that no child faces such uncertainty again.

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
              <div className="mx-auto mb-2 w-1/2 bg-linear-to-r from-[#F63049] via-[#D02752] to-[#8A244B] text-white py-4 rounded-lg flex justify-center items-center">
                <hr className="w-1/6 border-t-2 border-white mr-4"></hr>
                <span className="text-xl font-bold">VOLUNTEER:</span>
                <hr className="w-1/6 border-t-2 border-white ml-4"></hr>
              </div>
              <p className="text-sm" data-aos="zoom-out">
                Volunteers are the heart of Nyumbani Nala, helping us create real change for children
                in Tanzania.
                Come alone, with a friend, or as a company—there's a place for you in our mission.
                Volunteering isn`t just about giving; it's about learning, growing, and transforming
                lives. Many volunteers say their lives changed completely.
                You can join any of our projects, no matter your skills—we'll find something you'll
                love! From computers, sports, food, education, and more, there's always a way to
                make an impact.
                Ready to make a difference?
                Fill out the form below, and we'll contact you for a quick call to match you with the
                best opportunity.
              </p>
            </div>
            <div className="avatar" data-aos="slide-left">
              <div className="mask mask-hexagon-2 w-80 h-80 mx-auto">
                <img src={msamaria} alt="about image" />
              </div>
            </div>
          </div>
          <div className="lg:flex sm:grid items-center text-center justify-between mx-10 gap-10  mt-10">
            <div className="lg:w-2/3 items-center justify-center mx-auto mb-10">
              <div className="mx-auto mb-2 w-1/2 bg-linear-to-r from-[#F63049] via-[#D02752] to-[#8A244B] text-white py-4 rounded-lg flex justify-center items-center">
                <hr className="w-1/6 border-t-2 border-white mr-4"></hr>
                <span className="text-xl font-bold">COLABORATE:</span>
                <hr className="w-1/6 border-t-2 border-white ml-4"></hr>
              </div>
              <p className="text-sm" data-aos="zoom-out">
                With just $50 per year, you can fully cover the public school fees for one child in
                Tanzania—providing access to education and a brighter future.
                For $100, you can sponsor a weekend bootcamp for 10 children, giving them a
                meaningful and educational weekend experience.
                For around $50, you can provide a month of nutritious meals for one
                child—ensuring they have the energy to learn, play, and grow
              </p>
            </div>
            <div className="avatar" data-aos="slide-right">
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
          <div className="bg-linear-to-br from-[#F63049] via-[#D02752] to-[#8A244B] p-8 rounded-3xl shadow-lg border border-[#f88b9a] transition hover:shadow-2xl hover:scale-[1.01] duration-300">
            <span className="text-xs uppercase tracking-widest text-blue-300" data-aos="zoom-in-out">Vision</span>
            <h2 className="text-3xl font-bold text-white mt-1">Our Vision</h2>
            <p className="text-base text-gray-300 mt-4 leading-relaxed" data-aos="fade-up">
              We aspire to create a Tanzania where all children have access to
              quality education and opportunities to grow in a safe and protected family
              environment.
            </p>
          </div>

          {/* Card */}
          <div className="bg-linear-to-br from-[#F63049] via-[#D02752] to-[#8A244B] p-8 rounded-3xl shadow-lg border border-[#f88b9a] transition hover:shadow-2xl hover:scale-[1.01] duration-300">
            <span className="text-xs uppercase tracking-widest text-blue-300" data-aos="zoom-in-out">Mission</span>
            <h2 className="text-3xl font-bold text-white mt-1" data-aos="fade-up">Our Mission</h2>
            <p className="text-base text-gray-300 mt-4 leading-relaxed" data-aos="fade-up">
              Nyumbani Nala's main mission is to ensure that street children in Moshi (Africa)
              have their basic needs met, can attend school, and develop their full potential.

            </p>
          </div>

          {/* Card */}
          <div className="bg-linear-to-br from-[#F63049] via-[#D02752] to-[#8A244B] p-8 rounded-3xl shadow-lg border border-[#f88b9a] transition hover:shadow-2xl hover:scale-[1.01] duration-300">
            <span className="text-xs uppercase tracking-widest text-blue-300">Values</span>
            <h2 className="text-3xl font-bold text-white mt-1">Our Values</h2>
            <ul className="mt-4 space-y-3 text-gray-300 text-base" data-aos="fade-up" data-aos-delay="100">
              <li>Humility: Humility is intrinsic to us, valuing everything we have, seeking
                ways to improve, and always thinking of others.</li>
              <li>Effort: Effort is part of our DNA; we believe that any goal can be
                achieved through hard work and perseverance.</li>
              <li>Sharing: We are driven by the constant pursuit of working together to
                create a real impact</li>
              <li> Hope: We are committed to inspiring confidence in a brighter future,
                believing that every child deserves the chance to dream and achieve a
                better life</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SECTION — CLEANER FLOATING IMAGE COMPOSITION */}
        <div className="relative flex justify-center mx-auto">

          {/* Main card */}
          <div className="w-80 h-[430px] rounded-3xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-md border border-white/20">
            <img src={vision} alt="vision" className="w-full h-full object-cover" data-aos="fade-in" />
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
