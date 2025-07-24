import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import API from "../api";
import { MdArrowOutward } from "react-icons/md";
import Qna from "../Components/Qna";
import { useNavigate } from "react-router-dom";
import Imageslidertwo from "../Components/ImageSlidertwo";

const ShopifyStoreBuild = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(null);

    const NewPage = () => {
        navigate("/Newpage");
    };

    const NewCase = () => {
        navigate("/Shopify-Store-Build")
    }
    useEffect(() => {
        const fetchShopifyData = async () => {
            try {
                const res = await API.get("/store-page");
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

            <section className="w-full max-w-[1440px] mx-auto text-center px-6 py-0 flex flex-col items-center ">
                <h1 className="text-3xl md:text-5xl font-bold text-[#060237] mb-6">
                    {Section1Head}
                </h1>
                <p className="text-lg md:text-2xl font-normal text-[#060237] mb-10 max-w-3xl">
                    {Section1SubHead}
                </p>

                <div className="flex flex-col md:flex-row gap-4">
                    <button
                        onClick={NewPage}
                        className="md:w-44 md:h-14  border-2 border-purple text-purple md:text-lg font-medium rounded-full hover:bg-purple hover:text-white transition text-xs w-[50vw] h-[6vh]"
                    >
                        Audit My Website
                    </button>
                    <button onClick={() => NewPage()} className="flex items-center justify-center md:w-44 md:h-16 md:bg-purple md:text-white md:text-lg font-medium rounded-full">
                        <p className='hidden md:flex'>Talk To Us</p>
                        <span className="ml-4 p-3 md:bg-white md:text-black rounded-full text-xl bg-purple text-white">
                            <MdArrowOutward />
                        </span>
                    </button>
                </div>

                <img
                    src="https://res.cloudinary.com/drtosngvu/image/upload/v1752578689/sample21_f8ae069185.png"
                    alt="Hero"
                    className="w-full rounded-lg"
                />
            </section>

            <section className="w-full bg-[#F6F3FF] py-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                    {[1, 2, 3].map((_, index) => {
                        const features = [
                            {
                                img: "sample22_45b81d1e20.png",
                                title: "Built for High Conversion Rate",
                                desc: "Our Core Focus for building any website is to ensure it reaches and outperforms Conversion Rate benchmarks.",
                            },
                            {
                                img: "sample23_a23246c575.png",
                                title: "Lightning Fast & Visually Stable",
                                desc: "All our websites follow market-leading benchmarks for speed and stability, ensuring user engagement & enhanced conversions.",
                            },
                            {
                                img: "sample24_e3ee45a075.png",
                                title: "Timelines & Budgets On Track",
                                desc: "We have a well-structured process for Strategy, Design & Development, with phase-wise updates to ensure timely milestones.",
                            },
                        ];

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-md text-center"
                            >
                                <img
                                    src={`https://res.cloudinary.com/drtosngvu/image/upload/v1752578682/${features[index].img}`}
                                    alt={`Feature ${index + 1}`}
                                    className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] object-cover mb-6 mx-auto"
                                />
                                <h2 className="text-xl md:text-2xl font-semibold text-purple mb-4">
                                    {features[index].title}
                                </h2>
                                <p className="text-sm md:text-base text-gray-700">
                                    {features[index].desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="w-full py-10 px-4">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-10">
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://res.cloudinary.com/drtosngvu/image/upload/v1752578687/sample25_e3523a3b0b.png"
                            alt="Feature Image"
                            className="w-full rounded-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 font-[sans-serif]">
                        <h2 className="text-3xl md:text-6xl font-bold text-[#060237] pb-10 text-left">
                            {Section3Head}
                        </h2>
                        <p className="text-lg md:text-xl font-medium text-[#060237] pb-10">
                            {Section3SubHead}
                        </p>
                        <ul className="list-disc pl-5 text-base md:text-xl font-bold text-[#060237] space-y-3">

                            {Section3List.map((element, id) => (
                                <li key={id}>{element?.children[0]?.text}</li>
                            ))}

                        </ul>
                    </div>
                </div>
            </section>

            <section className="w-full py-28 px-4">
                <div className="flex justify-center flex-col items-center">

                    <Imageslidertwo />

                    <div className="max-w-[1200px] mx-auto flex items-center flex-col justify-center mt-20">
                        <button onClick={() => NewCase()} className="md:w-60 md:h-16 border-2 border-purple text-purple md:text-lg font-medium rounded-full hover:bg-purple hover:text-white transition text-xs w-[50vw] h-[8vh]">
                            Explore More Case Studies
                        </button>
                    </div>
                </div>
            </section>

            <section className="w-full py-20 px-4">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://res.cloudinary.com/drtosngvu/image/upload/v1752578694/sample29_ace0632c31.png"
                            alt="Feature Image"
                            className="rounded-lg w-full max-w-[478px] h-auto"
                        />
                    </div>
                    <div className="w-full md:w-1/2 font-[sans-serif] md:pl-16 mt-10 md:mt-0">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#060237] pb-8 text-center md:text-left">
                            {Section5Head}
                        </h2>
                        <p className="text-lg md:text-xl font-medium text-[#060237] pb-8">
                            {Section5SubHead[0]?.children[0]?.text || ""}
                        </p>
                        <ul className="list-disc pl-5 text-base md:text-xl font-bold text-[#060237] space-y-3 mb-6">

                            {Section5LIst.map((element, id) => (
                                <li key={id}>{element?.children[0]?.text}</li>
                            ))}

                        </ul>
                        <button onClick={() => NewPage()} className="flex items-center justify-center md:w-44 md:h-16 md:bg-purple md:text-white md:text-lg font-medium rounded-full">
                            <p className='hidden md:flex'>Audit My Website</p>
                            <span className="ml-4 p-3 md:bg-white md:text-black rounded-full text-xl bg-purple text-white">
                                <MdArrowOutward />
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            <section className="bg-[#F6F3FF] py-20 px-4">
                <div className="max-w-[1200px] mx-auto flex flex-col items-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#060237] text-center mb-12">
                        Let’s create something extraordinary together
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-12 w-full">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-[#060237]">90+</h2>
                            <p className="text-lg font-medium text-[#060237]">
                                Shopify & Shopify Plus Stores Created
                            </p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-[#060237]">150%</h2>
                            <p className="text-lg font-medium text-[#060237]">
                                Improvement in Conversion on average
                            </p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-[#060237]">100%</h2>
                            <p className="text-lg font-medium text-[#060237]">
                                Improvement in Load Speed
                            </p>
                        </div>
                    </div>
                    <button onClick={() => NewPage()} className="flex items-center justify-center md:w-44 md:h-16 md:bg-purple md:text-white md:text-lg font-medium rounded-full">
                        <p className='hidden md:flex'>Book Call</p>
                        <span className="ml-4 p-3 md:bg-white md:text-black rounded-full text-xl bg-purple text-white">
                            <MdArrowOutward />
                        </span>
                    </button>
                </div>
            </section>

            <Qna />
            <Footer />
        </>
    );
};

export default ShopifyStoreBuild;
