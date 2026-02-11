import { useMemo } from "react";
import { FaUser, FaEnvelope, FaPhone, FaHome } from "react-icons/fa";

function Step1({ data, setData, next, loading }: any) {
  const isValid = useMemo(() => {
    return data.name?.trim().length > 2 && data.email?.includes("@");
  }, [data]);

  return (
    <div className="max-w-md mx-auto p-6 bg-primary/10 shadow-lg rounded-xl animate-fadeIn">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary">
        Your Details
      </h2>

      {/* Name Input */}
      <div className="form-control mb-4 relative">
        <label className="input-group">
          <span className="bg-primary text-primary-content">
            <FaUser />
          </span>
          <input
            type="text"
            placeholder="Full Name"
            className="text-slate-300 input input-bordered w-full focus:border-primary focus:ring focus:ring-primary/30 transition-all"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </label>
      </div>

      {/* Email Input */}
      <div className="form-control mb-4 relative">
        <label className="input-group">
          <span className="bg-primary text-primary-content">
            <FaEnvelope />
          </span>
          <input
            type="email"
            placeholder="Email"
            className="text-slate-300 input input-bordered w-full focus:border-primary focus:ring focus:ring-primary/30 transition-all"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </label>
      </div>

      {/* Phone Input */}
      <div className="form-control mb-4 relative">
        <label className="input-group">
          <span className="bg-primary text-primary-content">
            <FaPhone />
          </span>
          <input
            type="tel"
            placeholder="Phone (optional)"
            className="text-slate-300 input input-bordered w-full focus:border-primary focus:ring focus:ring-primary/30 transition-all"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        </label>
      </div>

      {/* Address Input */}
      <div className="form-control mb-6 relative">
        <label className="input-group">
          <span className="bg-primary text-primary-content">
            <FaHome />
          </span>
          <input
            type="text"
            placeholder="Address (optional)"
            className="text-slate-300 input input-bordered w-full focus:border-primary focus:ring focus:ring-primary/30 transition-all"
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
        </label>
      </div>

      {/* Continue Button */}
      <button
        className={`btn btn-primary w-full text-white ${
          loading ? "loading" : "hover:scale-105 transition-transform"
        }`}
        disabled={!isValid || loading}
        onClick={next}
      >
        {loading ? "Validating..." : "Continue"}
      </button>
    </div>
  );
}

export default Step1;
