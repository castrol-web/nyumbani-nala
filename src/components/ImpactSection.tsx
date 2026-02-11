import { useNavigate } from "react-router-dom";
import { impacts } from "../../data/impacts.ts";
import { useState } from "react";

function ImpactSection() {
  const [amount, setAmount] = useState(25);
   const navigate = useNavigate();

  const impact = impacts.find(
    i => amount >= i.min && amount <= i.max
  );

  const navigateToDonate = () => {
    navigate("/donate", { state: { amount } });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-2 text-center" data-aos="fade-up">
        Your Donation, Their Future
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        See exactly what your money can do.<span className="font-semibold"> Adjust the slider</span> to choose your donation amount and discover the impact it creates.
      </p>

      {/* Slider */}
      <input
        type="range"
        min="1"
        max="100"
        value={amount}
        onChange={e => setAmount(Number(e.target.value))}
        className="w-full mb-4 border-none h-2rounded-lg cursor-pointer accent-blue-600"
      />

      <div className="text-2xl font-semibold mb-6">
        ${amount}
      </div>

      {/* Impact Card */}
      <div className="rounded-xl p-6 shadow-sm outline-1 outline-gray-300">
        {impact ? (
          <>
            <h3 className="text-xl font-bold mb-2">
              {impact.icon} {impact.title}
            </h3>
            <ul className="space-y-2 mb-4">
              {impact.benefits.map((b, i) => (
                <li key={i}>✔ {b}</li>
              ))}
            </ul>

            <button className="w-full btn btn-primary" onClick={navigateToDonate}>
              Donate ${amount}
            </button>
          </>
        ) : (
          <p className="text-gray-500">Select a donation amount</p>
        )}
      </div>
    </div>
  );
}

export default ImpactSection;
