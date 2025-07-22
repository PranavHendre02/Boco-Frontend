import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CaseStudyCard from '../Components/CaseStudyCard'
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "../api";
import Imageslider from '../Components/Imageslider';


const Home = () => {
  // const navigateCase useNavigate();
  const navigate = useNavigate()
  const [data, setData] = useState(null);
  const NewPage = () => {
    navigate("/Newpage");
  }

  useEffect(() => {
    const loaddetails = async () => {
      try {
        let res = await API.get('https://boco-backend-q5zy.onrender.com/api/main-page')
        console.log(res.data);
      } catch (error) {
        console.log("this is the Error" + error);

      }
    }
    loaddetails();

  }, [])

  const Newcase = () => {
    navigate("/Case-Studies")
  }


  return (
    <div>
      <Navbar />

      <section className='flex items-center justify-center mt-0'>
        <Imageslider />
      </section>

      <section className='flex items-center justify-center'>
        <div className='px-4 mb-10 mt-24'>
          <div className='text-left md:text-center'>
            <h1 className='text-3xl font-bold text-purple font-sans md:text-4xl '>
              Enhance customer experience
              by focusing on the details that matters most
            </h1>
          </div>
        </div>
      </section>

      <section className="w-full py-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

          <div className="bg-[#F6F3FF] rounded-xl p-6 shadow-md">
            <img
              src="https://res.cloudinary.com/drtosngvu/image/upload/v1752578644/sample11_ec744124bb.png"
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


          <div className="bg-[#F6F3FF] rounded-xl p-6 shadow-md">
            <img
              src="https://res.cloudinary.com/drtosngvu/image/upload/v1752578644/sample12_e113451866.png"
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


          <div className="bg-[#F6F3FF] rounded-xl p-6 shadow-md">
            <img
              src="https://res.cloudinary.com/drtosngvu/image/upload/v1752578643/sample13_0dd6fe8ec7.png"
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

      <div className='flex items-center justify-center md:mt-[69px] md:mb-[69px]'>
        <div className='w-[1440px] h-[197px] flex items-center justify-center '>
          <h1 className='text-3xl font-bold text-purple md:text-4xl text-center'>
            Read our recent Case Studies
          </h1>
        </div>
      </div>

      <CaseStudyCard />

      <div className="max-w-[1200px] mx-auto flex items-center flex-col justify-center mt-20 mb-20">
        <button onClick={() => Newcase()} className="md:w-60 md:h-16 border-2 border-purple text-purple md:text-lg font-medium rounded-full hover:bg-purple hover:text-white transition text-xs w-[50vw] h-[8vh]">
          Explore More Case Studies
        </button>
      </div>

      <section className=" bg-[#F6F3FF] ">
        <div className="w-full mx-auto flex items-center flex-col justify-center">
          <div>
            <h1 className="text-2xl font-bold text-[#060237] pt-28 font-[sans-serif] mb-20 md:text-4xl text-center">
              Let’s create something extraordinary together
            </h1>
          </div>
          <div className="flex gap-4 mb-20">
            <button onClick={() => NewPage()} className="md:w-44 md:h-16 border-2 border-purple text-purple md:text-lg font-medium rounded-full hover:bg-purple hover:text-white transition text-xs w-[25vw]">
              Audit My Website
            </button>
            <button onClick={() => NewPage()} className="flex items-center justify-center md:w-44 md:h-16 md:bg-purple md:text-white md:text-lg font-medium rounded-full">
              <p className='hidden md:flex'>Book Call</p>
              <span className="ml-4 p-3 md:bg-white md:text-black rounded-full text-xl bg-purple text-white">
                <MdArrowOutward />
              </span>
            </button>
          </div>
        </div>
      </section>

      <div className='flex items-center justify-centermd: mt-[69px] md:mb-[69px]'>
        <div className='w-full h-[197px] flex items-center justify-center border-t border-b border-light-pink'>
          <h1 className='md:text-5xl font-bold text-purple text-xl text-center'>
            {/* {footerHeading} */}
            Faster Websites. Higher conversion. More revenue.
          </h1>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home