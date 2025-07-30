import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Imageslider from "../Components/Imageslider";
import Qna from "../Components/Qna";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import MarqueeSlider from "../Components/MarqueeSlider";
import { useState, useEffect } from "react";
import API from "../api";

const LandingPage = () => {
  const [data, setdata] = useState();
  useEffect(() => {
    const fetchLandingpage = async () => {
      try {
        let res = await API.get("/landing-page");
        console.log(res.data);
        setdata(res.data.data);
      } catch (error) {
        console.log("there is an error" + error);
      }
    };

    fetchLandingpage();
  }, []);

  const navigate = useNavigate();
  const NewPage = () => {
    navigate("/Newpage");
  };

  const Newcase = () => {
    navigate("/Case-Studies");
  };
  const NewTalk = () => {
    navigate("/Talktous");
  };

  if (!data) {
    return (
      <h1 className="text-xl text-gray-600 text-center mt-20">Loading....</h1>
    );
  }

  const {
    landingHeroHead,
    LandingHeroSubhead,
    LandSubText,
    ImageSliderHead,
    ImageSkiderSubHead,
    LandPageCardHead,
  } = data;

  return (
    <div>
      <Navbar />
      <section className="w-full max-w-[1440px] mx-auto text-center px-6 py-0 flex flex-col items-center ">
        <h1 className="text-3xl md:text-5xl font-bold text-[#060237] mb-6">
          {landingHeroHead}
        </h1>
        <p className="text-lg md:text-2xl font-normal text-[#060237] mb-10 max-w-3xl">
          {LandingHeroSubhead[0]?.children[0]?.text}
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={() => NewPage()}
            className="flex items-center justify-center md:w-44 md:h-16 md:bg-purple md:text-white md:text-lg font-medium rounded-full"
          >
            <p className="hidden md:flex">Book A Call</p>
            <span className="ml-4 p-3 md:bg-white md:text-black rounded-full text-xl bg-purple text-white">
              <MdArrowOutward />
            </span>
          </button>
          <button
            onClick={NewTalk}
            className="md:w-44 md:h-14  border-2 border-purple text-purple md:text-lg font-medium rounded-full hover:bg-purple hover:text-white transition text-xs w-[50vw] h-[6vh]"
          >
            Talk To Us
          </button>
        </div>

        <img
          src="https://res.cloudinary.com/drtosngvu/image/upload/v1752578652/sample16_59e452dfde.png"
          alt="Hero"
          className="w-full rounded-lg"
        />
      </section>
      <MarqueeSlider />

      <section className="w-full py-20 md:px-16 px-5">
        <div className="max-w-full mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 font-[sans-serif] md:pl-28 mt-10 md:mt-0 md:pr-24 ">
            <h2 className="text-3xl md:text-5xl font-bold text-[#060237] pb-8 text-center md:text-left">
              Done for you end-to-end
            </h2>
            <p className="text-lg md:text-2xl font-medium text-[#060237] pb-8">
              Conversion-optimized landing pages that turn clicks into customers
              We do the heavy lifting
            </p>
            <p className="text-lg md:text-2xl font-medium text-[#060237] pb-8">
              We do the heavy lifting
            </p>
            <ul className="list-disc pl-5 text-base md:text-3xl font-thin text-[#060237] space-y-12 mb-6">
              {LandSubText.map((element, id) => (
                <li key={id}>{element?.children[0]?.text}</li>
              ))}
            </ul>
            <div className="flex flex-row gap-4 mt-8 justify-between">
              <button
                onClick={() => NewPage()}
                className="flex items-center justify-center md:w-[20vw] md:h-16 md:bg-purple md:text-white md:text-lg font-medium rounded-full"
              >
                <p className="hidden md:flex">Order My Landing Page</p>
                <span className="ml-4 p-3 md:bg-white md:text-black rounded-full text-xl bg-purple text-white text-left">
                  <MdArrowOutward />
                </span>
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://res.cloudinary.com/drtosngvu/image/upload/v1752578650/sample17_1eaa508b8b.png"
              alt="Feature Image"
              className="rounded-lg w-full md:max-w-[708px] h-auto "
            />
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center border-t border-dotted border-light-pink mt-10">
        <div className="md:text-center text-left pl-6 mt-24">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#060237] mb-6">
            {ImageSliderHead}
          </h1>
          <p className="text-lg md:text-[1.1rem] font-normal text-[#060237] mb-10 max-w-3xl">
            {ImageSkiderSubHead[0]?.children[0]?.text}
          </p>
        </div>
      </section>
      <Imageslider />
      <div className="max-w-[1200px] mx-auto flex items-center flex-col justify-center mt-20">
        <button
          onClick={() => Newcase()}
          className="md:w-60 md:h-16 border-2 border-purple text-purple md:text-lg font-medium rounded-full hover:bg-purple hover:text-white transition text-xs w-[50vw] h-[8vh]"
        >
          Explore More Case Studies
        </button>
      </div>
      <section className="flex items-center justify-center mt-24">
        <div className="flex items-center justify-center font-[sans-serif]">
          <div className="w-ful text-center p-5">
            <p className="md:text-2xl font-semibold text-light-gray md:mt-10 text-xl uppercase">
              why us
            </p>
            <h1 className="md:text-5xl font-bold text-purple mt-6 text-2xl mb-12 font-sans">
              What We’re
              <span className=" bg-yellow-200"> Especially Good At</span>
            </h1>
          </div>
        </div>
      </section>
      <section className="w-full py-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="bg-[#F6F3FF] rounded-xl p-6 shadow-md">
            <img
              src="https://res.cloudinary.com/drtosngvu/image/upload/v1752578646/sample18_e0dc2555a2.png"
              alt="Feature 1"
              className="w-[70px] h-[70px] object-cover mb-6 mt-10"
            />
            <h2 className="text-2xl font-semibold text-purple mb-4">
              Establishing the Ideal Page Flow
            </h2>
            <p className="text-gray-700">
              Strategically Designed Journeys to Maximize User Engagement
            </p>
          </div>

          <div className="bg-[#F6F3FF] rounded-xl p-6 shadow-md">
            <img
              src="https://res.cloudinary.com/drtosngvu/image/upload/v1752578645/sample19_b3cb107790.png"
              alt="Feature 2"
              className="w-[70px] h-[70px] object-cover mb-6 mt-10"
            />
            <h2 className="text-2xl font-semibold text-purple mb-4">
              Concept, Design & Development
            </h2>
            <p className="text-gray-700">
              From Creative Vision to Stunning Reality: Crafting Your Perfect
              Page{" "}
            </p>
          </div>

          <div className="bg-[#F6F3FF] rounded-xl p-6 shadow-md">
            <img
              src="https://res.cloudinary.com/drtosngvu/image/upload/v1752578645/sample20_b0b700c51f.png"
              alt="Feature 3"
              className="w-[70px] h-[70px] object-cover mb-6 mt-10"
            />
            <h2 className="text-2xl font-semibold text-purple mb-4">
              Testing & Launch
            </h2>
            <p className="text-gray-700">
              Ensuring Peak Performance with Rigorous Testing and Seamless
              Optimization
            </p>
          </div>
        </div>
      </section>
      <Qna />
      <div className="flex items-center justify-center mt-[69px] mb-[69px] ">
        <div className="w-full h-[197px] flex items-center justify-center border-t border-b border-light-pink flex-col">
          <h1 className="md:text-5xl font-bold text-purple text-xl text-center">
            Have questions about your landing page needs?
          </h1>
          <button
            onClick={() => NewPage()}
            className="flex items-center justify-center md:w-44 md:h-16 md:bg-purple md:text-white md:text-lg font-medium rounded-full mt-6"
          >
            <p className="hidden md:flex">Talk To Us</p>
            <span className="ml-4 p-3 md:bg-white md:text-black rounded-full text-xl bg-purple text-white">
              <MdArrowOutward />
            </span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
