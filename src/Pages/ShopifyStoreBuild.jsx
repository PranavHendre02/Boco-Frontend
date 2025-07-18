import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import API from "../api";
import { MdArrowOutward } from "react-icons/md";
import Qna from "../Components/Qna";
import { useNavigate } from "react-router-dom";

const ShopifyStoreBuild = () => {
    const navigate = useNavigate()
    const [data, setData] = useState(null);
    const NewPage = () => {
        navigate("/Newpage");
    }
    useEffect(() => {
        const fetchShopifyData = async () => {
            try {
                const res = await API.get("/store-page");
                console.log(res.data);
                setData(res.data);
            } catch (error) {
                console.log("There is an error: " + error);
            }
        };

        fetchShopifyData();
    }, []);

    if (!data) {
        return (
            <h1 className="text-xl text-gray-600 text-center mt-20">Loading....</h1>
        );
    }

    const {
        Section1Head,
        Section1SubHead,
        Section3Head,
        Section3SubHead,
        Section3List,
        Section5Head,
        Section5SubHead,
        Section5LIst,
    } = data.data;

    return (
        <>
            <Navbar />


            <section className="w-full max-w-[1440px] mx-auto text-center px-6 py-20 flex flex-col items-center">
                <h1 className="text-5xl font-bold text-[#060237] mb-6">
                    {Section1Head}
                </h1>
                <p className="text-2xl font-normal text-[#060237] mb-10 max-w-3xl">
                    {Section1SubHead}
                </p>

                <div className="flex gap-4 mb-10">
                    <button onClick={() => NewPage()} className="w-44 h-16 border-2 border-purple text-purple text-lg font-medium rounded-full hover:bg-purple hover:text-white transition">
                        Audit My Website
                    </button>
                    <button onClick={() => NewPage()} className="flex items-center justify-center w-44 h-16 bg-purple text-white text-lg font-medium rounded-full">
                        Talk To Us
                        <span className="ml-4 p-3 bg-white text-black rounded-full text-xl">
                            <MdArrowOutward />
                        </span>
                    </button>
                </div>

                <img
                    src="https://res.cloudinary.com/drtosngvu/image/upload/v1752578689/sample21_f8ae069185.png"
                    alt="Hero"
                    className="w-full  rounded-lg"
                />
            </section>

            <section className="w-full bg-[#F6F3FF] py-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <img
                            src="https://res.cloudinary.com/drtosngvu/image/upload/v1752578682/sample22_45b81d1e20.png"
                            alt="Feature 1"
                            className="w-[120px] h-[120px] object-cover mb-6"
                        />
                        <h2 className="text-2xl font-semibold text-purple mb-4">
                            Built for High Conversion Rate
                        </h2>
                        <p className="text-gray-700">
                            Our Core Focus for building any website is to ensure it reaches
                            and outperforms Conversion Rate benchmarks.
                        </p>
                    </div>


                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <img
                            src="https://res.cloudinary.com/drtosngvu/image/upload/v1752578686/sample23_a23246c575.png"
                            alt="Feature 2"
                            className="w-[120px] h-[120px] object-cover mb-6"
                        />
                        <h2 className="text-2xl font-semibold text-purple mb-4">
                            Lightning Fast & Visually Stable
                        </h2>
                        <p className="text-gray-700">
                            All our websites follow market-leading benchmarks for speed and
                            stability, ensuring user engagement & enhanced conversions.
                        </p>
                    </div>


                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <img
                            src="https://res.cloudinary.com/drtosngvu/image/upload/v1752578685/sample24_e3ee45a075.png"
                            alt="Feature 3"
                            className="w-[120px] h-[120px] object-cover mb-6"
                        />
                        <h2 className="text-2xl font-semibold text-purple mb-4">
                            Timelines & Budgets On Track
                        </h2>
                        <p className="text-gray-700">
                            We have a well-structured process for Strategy, Design &
                            Development, with phase-wise updates to ensure timely milestones.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full py-20 px-2">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-10">
                    <div className="w-40% md:w-1/2">
                        <img
                            src="https://res.cloudinary.com/drtosngvu/image/upload/v1752578687/sample25_e3523a3b0b.png"
                            alt="Feature Image"
                            className="w-full rounded-lg"
                        />
                    </div>
                    <div className="w-60% md:w-1/2 font-[sans-serif]">
                        <h2 className="text-6xl font-bold text-[#060237] pb-14 text-left">
                            {Section3Head}
                        </h2>
                        <p className="text-xl font-medium text-[#060237] pb-14 font-[sans-serif]">
                            {Section3SubHead}
                        </p>
                        <ul className="list-disc pl-5 text-xl font-bold text-[#060237] space-y-3">
                            <li>Unmatched Speed & Stability</li>
                            <li>Build for Conversions</li>
                            <li>Reduced App Stack & Developer Dependencies</li>
                            <li>Fully Integrated with your tools</li>
                            <li>Highly Scalable</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="w-full py-28 p-8">
                <div className="flex justify-center flex-col items-center">
                    <div className="flex items-center justify-center gap-4 flex-row ">
                        <img src="https://res.cloudinary.com/drtosngvu/image/upload/v1752578689/sample26_7db93ff7f1.png" alt="image1" className="w-[358px] h-[416px]" />
                        <img src="https://res.cloudinary.com/drtosngvu/image/upload/v1752578687/sample27_7c916b30d2.png" alt="image2" className="w-[358px] h-[416px]" />
                        <img src="https://res.cloudinary.com/drtosngvu/image/upload/v1752578689/sample28_956613db54.png" alt="image3" className="w-[358px] h-[416px]" />
                    </div>
                    <button className="w-48 h-16 border-2 border-purple text-purple text-lg font-medium rounded-full hover:bg-purple hover:text-white transition mt-24">
                        Explore Case Studies
                    </button>
                </div>
            </section>
            <section className="w-full py-20 px-2">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center">
                    <div className="w-1/3 ">
                        <img
                            src="https://res.cloudinary.com/drtosngvu/image/upload/v1752578694/sample29_ace0632c31.png"
                            alt="Feature Image"
                            className=" rounded-lg w-[478px] h-[466px]"
                        />
                    </div>
                    <div className=" w-8/12  font-[sans-serif] pl-24">
                        <div className="w-full">
                            <h2 className=" text-5xl font-bold text-[#060237] pb-8 text-center">
                                {Section5Head}
                            </h2>
                            <p className="text-xl font-medium text-[#060237] pb-8 font-[sans-serif]">
                                {Section5SubHead[0]?.children[0]?.text || ""}
                            </p>
                            <ul className="list-disc pl-5 text-xl font-bold text-[#060237] space-y-3 mb-6">
                                <li>Sign up for a FREE Audit</li>
                                <li>Share the required brand details</li>
                                <li>Sit back and wait for your audit report</li>
                            </ul>
                            <button onClick={() => NewPage()} className="flex items-center justify-center w-52 h-14 bg-purple text-white text-lg font-medium rounded-full text-center pl-2">
                                Audit My Website
                                <span className="ml-4 p-3 bg-white text-black rounded-full text-xl">
                                    <MdArrowOutward />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" bg-[#F6F3FF] py-2 px-8">
                <div className="max-w-[1200px] mx-auto flex items-center flex-col justify-center">
                    <div>
                        <h1 className="text-5xl font-bold text-[#060237] pt-28 font-[sans-serif]">
                            Let’s create something extraordinary together
                        </h1>
                    </div>
                    <div className="flex items-center gap-8 pt-20 pb-20">
                        <div>
                            <h2 className="text-center text-5xl font-bold text-[#060237] font-[sans-serif]">
                                90+
                            </h2>
                            <p className="text-xl font-medium text-[#060237] font-[sans-serif] text-center">
                                Shopify & Shopify Plus Stores Created
                            </p>
                        </div>
                        <div>
                            <h2 className="text-center text-5xl font-bold text-[#060237] font-[sans-serif]" >
                                150%

                            </h2>
                            <p className="text-xl font-medium text-[#060237] font-[sans-serif] text-center">
                                Improvement in Conversion on average
                            </p>
                        </div>
                        <div>
                            <h2 className="text-center text-5xl font-bold text-[#060237] font-[sans-serif]">
                                100%

                            </h2>
                            <p className="text-xl font-medium text-[#060237] font-[sans-serif] text-center">
                                Improvement in Load Speed
                            </p>
                        </div>
                    </div>
                    <div className="pb-20">
                        <button onClick={() => NewPage()} className="flex items-center justify-center w-44 h-14 bg-purple text-white text-lg font-medium rounded-full text-center pl-2 ">
                            Talk To Us
                            <span className="ml-4 p-3 bg-white text-black rounded-full text-xl">
                                <MdArrowOutward />
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            <Qna />

            <Footer />
        </>
    );
};

export default ShopifyStoreBuild;
