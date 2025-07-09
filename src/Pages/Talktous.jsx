import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { MdArrowOutward } from "react-icons/md";
import API from '../api';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Talktous = () => {
    const [formData, setFormData] = useState({
        brandname: '',
        yourname: '',
        websiteurl: '',
        emailaddress: '',
        Phonenumber: '',
        Monthlystores: '',
        conversion: '',
        issue: [],
        overview: '',
        today: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            issue: checked
                ? [...prev.issue, value]
                : prev.issue.filter(item => item !== value)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post('/form-submissions', { data: formData });
            alert(' Form submitted successfully!');
            setFormData({
                brandname: '',
                yourname: '',
                websiteurl: '',
                emailaddress: '',
                Phonenumber: '',
                Monthlystores: '',
                conversion: '',
                issue: [],
                overview: '',
                today: ''
            });
        } catch (error) {
            console.error(' Submission failed:', error);
            alert('Submission failed. Check console.');
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center">
                <div className="w-[1440px] px-4">
                    <Helmet>
                        <title>Talk To Us</title>
                    </Helmet>

                    {/* Heading */}
                    <div className="text-center mt-[120px]">
                        <h1 className="text-5xl font-medium text-[#060237] font-sans">Got a Project? Let's Talk!</h1>
                        <p className="text-3xl font-light text-[#140152] mt-10 mb-32">
                            Simply complete the form below and we'll get in touch!<br />
                            Alternatively you can send us an email to hello@boco.agency
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6 mb-16 font-['Plus Jakarta Sans'] text-xl font-normal text-black">
                            {/* Text Fields */}
                            {[
                                { label: '1. Brand Name', name: 'brandname', type: 'text' },
                                { label: '2. Your Name', name: 'yourname', type: 'text' },
                                { label: '3. Website URL', name: 'websiteurl', type: 'text' },
                                { label: '4. Email Address', name: 'emailaddress', type: 'email' },
                                { label: '5. Phone Number', name: 'Phonenumber', type: 'number' }
                            ].map((field) => (
                                <div key={field.name}>
                                    <label className="block mb-4 ">{field.label}*</label>
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        required
                                        className="w-[1040px] h-[48px] rounded-[32px] px-6 border border-gray-500 text-[#000] outline-none mb-10"
                                    />
                                </div>
                            ))}

                            {/* Radio Group for Monthly Store Sessions */}
                            <div>
                                <label className="block mb-4">6. What are your Monthly Store Sessions?*</label>
                                <div className="grid grid-cols-2 gap-x-10 gap-y-4 pl-2">
                                    {[
                                        'Less than 10k',
                                        'Between 10k to 50k',
                                        'Between 50k to 100k',
                                        'More than 100k+'
                                    ].map((option, index) => (
                                        <label key={index} htmlFor={`monthly-${index}`} className="flex items-center">
                                            <input
                                                type="radio"
                                                id={`monthly-${index}`}
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

                            {/* Conversion Rate */}
                            <div>
                                <label className="block mb-6 mt-14">7. What is your current Conversion Rate?</label>
                                <input
                                    type="text"
                                    name="conversion"
                                    value={formData.conversion}
                                    onChange={handleChange}
                                    className="w-[1040px] h-[48px] rounded-[32px] px-6 border border-gray-300 text-[#000] outline-none"
                                />
                            </div>

                            {/* Checkboxes for Issues */}
                            <div>
                                <label className="block mb-6 mt-14  text-xl font-normal font-jakarta">
                                    8. What issues are you facing currently with your Shopify Store?*<br />
                                    <span className="text-sm font-normal">(Select all that apply)</span>
                                </label>

                                <div className="grid grid-cols-2 gap-x-10 gap-y-4 pl-2">
                                    {[
                                        'Website Design & Development',
                                        'High Converting Landing Pages',
                                        'Technical Maintenance & Support',
                                        'Conversion Rate Optimization'
                                    ].map((option, index) => (
                                        <label key={index} htmlFor={`issue-${index}`} className="flex items-center  text-xl font-normal font-jakarta">
                                            <input
                                                type="checkbox"
                                                id={`issue-${index}`}
                                                name="issue"
                                                value={option}
                                                checked={formData.issue.includes(option)}
                                                onChange={(e) => {
                                                    const selectedOptions = formData.issue.includes(option)
                                                        ? formData.issue.filter((item) => item !== option)
                                                        : [...formData.issue, option];
                                                    setFormData({ ...formData, issue: selectedOptions });
                                                }}
                                                className="w-[20px] h-[20px] mr-3 accent-purple-700"
                                            />
                                            {option}
                                        </label>
                                    ))}
                                </div>
                            </div>


                            {/* Overview */}
                            <div>
                                <label className="block mb-6 mt-14">9. Overview*</label>
                                <textarea
                                    name="overview"
                                    value={formData.overview}
                                    onChange={handleChange}
                                    required
                                    className="w-[1040px] h-[120px] rounded-[32px] px-6 py-4 border border-gray-300 text-[#000] outline-none"
                                ></textarea>
                            </div>

                            {/* How did you find us? */}
                            <div>
                                <label className="block mb-6 mt-14">10. How did you find us today?</label>
                                <input
                                    type="text"
                                    name="today"
                                    value={formData.today}
                                    onChange={handleChange}
                                    className="w-[1040px] h-[48px] rounded-[32px] px-6 border border-gray-300 text-[#000] outline-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className='flex justify-center '>
                                <button
                                    type="submit"
                                    className="flex items-center justify-center w-44 h-16 bg-purple text-white text-[1rem] font-medium rounded-[8rem] mt-16 mb-32"
                                >
                                    <p className="flex items-center justify-center ml-4">Submit</p>
                                    <div className="p-3 bg-white text-black rounded-[25px] ml-12 text-[1.3rem]">
                                        <MdArrowOutward />
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <div className='flex items-center justify-center mt-[69px] mb-[69px]'>
                <div className='w-[1440px] h-[197px] flex items-center justify-center border-t border-b border-light-pink'>
                    <h1 className='text-5xl font-bold text-purple'>
                        Faster Websites. Higher conversion. More revenue.
                    </h1>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Talktous;
