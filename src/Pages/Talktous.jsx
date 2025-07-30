import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { MdArrowOutward } from "react-icons/md";
import API from "../api";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Talktous = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    brandname: "",
    yourname: "",
    websiteurl: "",
    emailaddress: "",
    Phonenumber: "",
    Monthlystores: "",
    conversion: "",
    issue: [],
    overview: "",
    today: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/form-submissions", { data: formData });
      alert("Form submitted successfully!");
      setFormData({
        brandname: "",
        yourname: "",
        websiteurl: "",
        emailaddress: "",
        Phonenumber: "",
        Monthlystores: "",
        conversion: "",
        issue: [],
        overview: "",
        today: "",
      });
      navigate("/Newpage");
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Submission failed. Check console.");
    }
  };

  const optionsMonthly = [
    "Less than 10k",
    "Between 10k to 50k",
    "Between 50k to 100k",
    "More than 100k+",
  ];

  const issuesList = [
    "Website Design & Development",
    "High Converting Landing Pages",
    "Technical Maintenance & Support",
    "Conversion Rate Optimization",
  ];

  return (
    <>
      <Helmet>
        <title>Talk To Us</title>
      </Helmet>

      <Navbar />

      <div className="flex justify-center px-4">
        <div className="w-full max-w-screen-lg">
          <div className="text-center mt-20">
            <h1 className="text-3xl md:text-5xl font-medium text-[#060237] font-sans">
              Got a Project? Let's Talk!
            </h1>
            <p className="text-xl md:text-3xl font-light text-[#140152] mt-6 mb-20">
              Simply complete the form below and we'll get in touch!
              <br />
              Or send us an email to hello@boco.agency
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-10 text-base md:text-xl font-['Plus Jakarta Sans'] text-black"
          >
            {/* Text Inputs */}
            {[
              { label: "1. Brand Name", name: "brandname" },
              { label: "2. Your Name", name: "yourname" },
              { label: "3. Website URL", name: "websiteurl" },
              {
                label: "4. Email Address",
                name: "emailaddress",
                type: "email",
              },
              { label: "5. Phone Number", name: "Phonenumber", type: "number" },
            ].map(({ label, name, type = "text" }) => (
              <div key={name}>
                <label className="block mb-2">{label}*</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  className="w-full h-12 rounded-full px-6 border border-gray-400 outline-none"
                />
              </div>
            ))}

            {/* Monthly Store Sessions */}
            <div>
              <label className="block mb-3">
                6. What are your Monthly Store Sessions?*
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {optionsMonthly.map((option, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="radio"
                      name="Monthlystores"
                      value={option}
                      checked={formData.Monthlystores === option}
                      onChange={handleChange}
                      required
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Conversion */}
            <div>
              <label className="block mb-3">
                7. What is your current Conversion Rate?
              </label>
              <input
                type="text"
                name="conversion"
                value={formData.conversion}
                onChange={handleChange}
                className="w-full h-12 rounded-full px-6 border border-gray-300 outline-none"
              />
            </div>

            {/* Issues */}
            <div>
              <label className="block mb-4">
                8. What issues are you facing currently with your Shopify
                Store?*
                <br />
                <span className="text-sm">(Select all that apply)</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {issuesList.map((issue, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      name="issue"
                      value={issue}
                      checked={formData.issue.includes(issue)}
                      onChange={(e) => {
                        const value = e.target.value;
                        const newIssues = e.target.checked
                          ? [...formData.issue, value]
                          : formData.issue.filter((i) => i !== value);
                        setFormData({ ...formData, issue: newIssues });
                      }}
                      className="w-[20px] h-[20px] mr-3 accent-purple-700"
                    />
                    {issue}
                  </label>
                ))}
              </div>
            </div>

            {/* Overview */}
            <div>
              <label className="block mb-3">9. Overview*</label>
              <textarea
                name="overview"
                value={formData.overview}
                onChange={handleChange}
                required
                className="w-full h-28 rounded-3xl px-6 py-4 border border-gray-300 outline-none"
              ></textarea>
            </div>

            {/* How did you find us? */}
            <div>
              <label className="block mb-3">
                10. How did you find us today?
              </label>
              <input
                type="text"
                name="today"
                value={formData.today}
                onChange={handleChange}
                className="w-full h-12 rounded-full px-6 border border-gray-300 outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-12">
              <button
                type="submit"
                className="flex items-center justify-center w-44 h-16 bg-purple text-white font-medium rounded-full"
              >
                <span className="ml-4">Submit</span>
                <div className="p-3 bg-white text-black rounded-full ml-4 text-xl">
                  <MdArrowOutward />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Call-to-Action */}
      <div className="flex justify-center mt-24 mb-24">
        <div className="w-full max-w-screen-lg px-4 py-10 text-center border-t border-b border-purple-200">
          <h2 className="text-3xl md:text-5xl font-bold text-purple">
            Faster Websites. Higher conversion. More revenue.
          </h2>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Talktous;
