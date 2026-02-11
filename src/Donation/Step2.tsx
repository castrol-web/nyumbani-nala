import { useMemo } from "react";
import { FaCoins, FaCalendarAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Step2({ data, setData, next, back, loading }: any) {
  const isValid = useMemo(() => {
    return data.name.trim().length > 2 && data.email.includes("@") && data.amount >= 1;
  }, [data]);

  const presetAmounts = [5, 10, 25, 50];

  return (
    <div className="max-w-md mx-auto p-6 bg-primary/10 shadow-lg rounded-xl animate-fadeIn">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary">Donation</h2>

      {/* Preset Amount Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-4">
        {presetAmounts.map((v) => (
          <button
            key={v}
            className={`btn gap-2 ${data.amount === v ? "btn-primary" : "btn-outline border-slate-400 text-slate-300"} transition-transform hover:scale-105`}
            onClick={() => setData({ ...data, amount: v })}
          >
            <FaCoins /> €{v}
          </button>
        ))}
      </div>

      {/* Custom Amount Input */}
      <div className="form-control mb-4 relative">
        <label className="input-group">
          <span className="bg-primary p-1 text-primary-content">€</span>
          <input
            type="number"
            min={1}
            placeholder="Custom amount"
            className="text-slate-300 input input-bordered w-full focus:border-primary focus:ring focus:ring-primary/30 transition-all"
            value={data.amount}
            onChange={(e) => setData({ ...data, amount: +e.target.value })}
          />
        </label>
      </div>

      {/* Frequency Select */}
      <div className="form-control mb-6">
        <label className="label flex items-center gap-2">
          <FaCalendarAlt className="text-primary" />
          <span className="font-semibold">Frequency</span>
        </label>
        <select
          className="text-slate-300 select select-bordered w-full focus:ring focus:ring-primary/30 transition-all"
          name="frequency"
          value={data.frequency}
          onChange={(e) => setData({ ...data, frequency: e.target.value })}
        >
          <option value="once">One-time</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-3">
        <button
          className="btn btn-outline w-1/2 flex items-center justify-center gap-2 transition-transform hover:scale-105"
          onClick={back}
        >
          <FaArrowLeft /> Back
        </button>
        <button
          className={`btn btn-primary w-1/2 flex items-center justify-center gap-2 ${
            loading ? "loading" : "hover:scale-105"
          }`}
          disabled={!isValid || loading}
          onClick={next}
        >
          {loading ? "Preparing..." : <>
            Continue <FaArrowRight />
          </>}
        </button>
      </div>
    </div>
  );
}

export default Step2;
