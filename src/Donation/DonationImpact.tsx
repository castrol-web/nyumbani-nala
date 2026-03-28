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
      info: "Includes materials and uniforms. Annual cost for a public school",
    },
    {
      amount: 380,
      icon: <FaBook />,
      title: "Secondary Education for 1 child",
      info: "Annual cost for a public school",
    },
    {
      amount: 700,
      icon: <FaBook />,
      title: "Primary Education for 1 child",
      info: "Annual cost for a private school",
    },
    {
      amount: 850,
      icon: <FaBook />,
      title: "Secondary Education for 1 child",
      info: "Annual cost for a private school",
    },
    {
      amount: 1000,
      icon: <FaGraduationCap />,
      title: "University Education for 1 child",
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
    <div className="max-w-[900px] mx-auto p-6 rounded-xl shadow-lg">

      <h2 className="text-2xl font-bold mb-4 text-center">
        Make an Impact ❤️
      </h2>

      <div className="text-center text-3xl font-semibold mb-4 text-slate-50">
        €{amount}
      </div>

      <input
        type="range"
        min="10"
        max="1000"
        value={amount}
        className="w-full"
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <div className="flex justify-between text-sm mt-2 text-slate-50">
        <span>€10</span>
        <span>€1000</span>
      </div>

      <div className="mt-6 p-4 bg-slate-800 rounded-lg">

        <div className="flex items-center gap-3 text-lg font-semibold text-white">
          <span className="text-green-400 text-xl">{impact.icon}</span>
          {impact.title}
        </div>

        <div className="flex items-center gap-2 text-slate-300 mt-2">
          <FaInfoCircle />
          <span>{impact.info}</span>
        </div>

      </div>

      <div className="text-center mt-6">
        <button
          onClick={gotoDonate}
          className="btn bg-[#F63049]/50 hover:bg-[#F63049] outline-1 outline-[#F63049] text-white px-6"
        >
          Donate €{amount} now
        </button>
      </div>

    </div>
  );
}

export default DonationImpact;