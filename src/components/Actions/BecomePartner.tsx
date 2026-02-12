import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const url = import.meta.env.VITE_SERVER_URL || "http://localhost:8050";

const BecomePartner = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    organizationName: "",
    email: "",
    phone: "",
    country: "",
    website: "",
    partnershipType: "",
    proposal: "",
  });

  const [document, setDocument] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    if (document) data.append("document", document);

    try {
      await axios.post(`${url}/api/user/partners/apply`, data);
      toast.success("Application submitted successfully 🎉");
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4 mt-20">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Become a Partner</h1>
          <p className="text-base-content/70 mt-3">
            Join us in creating meaningful impact through collaboration.
          </p>
        </div>

        {/* Form Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Contact Info Grid */}
              <div className="grid md:grid-cols-2 gap-6">

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name *</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    onChange={handleChange}
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Organization Name</span>
                  </label>
                  <input
                    type="text"
                    name="organizationName"
                    onChange={handleChange}
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    onChange={handleChange}
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone *</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    required
                    onChange={handleChange}
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Country *</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    required
                    onChange={handleChange}
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Website</span>
                  </label>
                  <input
                    type="text"
                    name="website"
                    onChange={handleChange}
                    className="input input-bordered"
                  />
                </div>

              </div>

              {/* Partnership Type */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Partnership Type *</span>
                </label>
                <select
                  name="partnershipType"
                  required
                  onChange={handleChange}
                  className="select select-bordered"
                >
                  <option value="">Select Type</option>
                  <option value="sponsor">Financial Sponsor</option>
                  <option value="ngo">NGO Partner</option>
                  <option value="corporate">Corporate Partner</option>
                  <option value="media">Media Partner</option>
                </select>
              </div>

              {/* Proposal */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Partnership Proposal *</span>
                </label>
                <textarea
                  name="proposal"
                  required
                  rows={5}
                  onChange={handleChange}
                  className="textarea textarea-bordered"
                  placeholder="Tell us why you want to partner with us..."
                />
              </div>

              {/* File Upload */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Upload Supporting Documents (Optional)
                  </span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered"
                  onChange={(e) => setDocument(e.target.files?.[0] || null)}
                />
              </div>

              {/* Confirmation Checkbox */}
              <div className="form-control">
                <label className="cursor-pointer label justify-start gap-3">
                  <input type="checkbox" required className="checkbox checkbox-primary" />
                  <span className="label-text">
                    I confirm the information provided is accurate.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomePartner;
