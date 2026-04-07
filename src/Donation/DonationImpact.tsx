import { useState } from "react";
import { FaBook, FaUtensils, FaInfoCircle, FaGraduationCap } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function DonationImpact() {

  const [amount, setAmount] = useState(25);
  const navigate = useNavigate();

  const donationLevels = [
    {
      amount: 10,
      icon: <FaUtensils />,
      title: "Supports a child's food needs",
      info: "Helps provide daily meals",
    },
    {
      amount: 25,
      icon: <FaBook />,
      title: "Supports child's clothing needs",
      info: "Provides essential clothing items",
    },
    {
      amount: 50,
      icon: <FaBook />,
      title: "Primary Education (fees only)",
      info: "Public school",
    },
    {
      amount: 210,
      icon: <FaBook />,
      title: "Primary Education for 1 child",
      info: "Includes materials and uniforms",
    },
    {
      amount: 380,
      icon: <FaBook />,
      title: "Secondary Education for 1 child",
      info: "Public school",
    },
    {
      amount: 700,
      icon: <FaBook />,
      title: "Primary Education (Private)",
      info: "Annual private school cost",
    },
    {
      amount: 850,
      icon: <FaBook />,
      title: "Secondary Education (Private)",
      info: "Annual private school cost",
    },
    {
      amount: 1000,
      icon: <FaGraduationCap />,
      title: "University Education",
      info: "Approximate annual cost",
    }
  ];

  const getClosestLevel = (amount: number) => {
    return donationLevels.reduce((prev, curr) =>
      Math.abs(curr.amount - amount) < Math.abs(prev.amount - amount)
        ? curr
        : prev
    );
  };

  const impact = getClosestLevel(amount);

  const gotoDonate = () => {
    navigate(`/donate?amount=${amount}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-6">

      <div className="bg-slate-900 border border-slate-700 rounded-3xl p-10 shadow-xl">
        {/* Donation Amount */}
        <div className="text-center mb-6">

          <div className="text-5xl font-bold text-[#F63049] mb-2">
            €{amount}
          </div>

          <p className="text-slate-400">
            Adjust the slider to see what your donation can do
          </p>

        </div>

        {/* Slider */}
        <input
          type="range"
          min="10"
          max="1000"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full accent-[#F63049]"
        />

        <div className="flex justify-between text-sm text-slate-400 mt-2">
          <span>€10</span>
          <span>€1000</span>
        </div>

        {/* Impact Card */}
        <div className="mt-10 bg-slate-800 rounded-2xl p-6">

          <div className="flex items-center gap-4 text-xl font-semibold">

            <div className="text-[#F63049] text-2xl">
              {impact.icon}
            </div>

            {impact.title}

          </div>

          <div className="flex items-center gap-2 text-slate-300 mt-3">
            <FaInfoCircle />
            {impact.info}
          </div>

        </div>

        {/* Donate Button */}
        <div className="text-center mt-10">

          <button
            onClick={gotoDonate}
            className="bg-[#F63049] hover:bg-[#ff4d63] transition px-10 py-4 rounded-xl font-semibold text-lg shadow-lg"
          >
            Donate €{amount}
          </button>

        </div>

      </div>

    </div>
  );
}

export default DonationImpact;