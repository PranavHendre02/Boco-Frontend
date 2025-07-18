import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CaseStudyCard from '../Components/CaseStudyCard'
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "../api";

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
        // let res = await API.get('https://boco-backend-q5zy.onrender.com/api/main-page')
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

      <div className='flex items-center justify-center mt-[69px] mb-[69px]'>
        <div className='w-[1440px] h-[197px] flex items-center justify-center '>
          <h1 className='text-5xl font-bold text-purple'>
            Read our recent Case Studies
          </h1>
        </div>
      </div>

      <CaseStudyCard />

      <div className="max-w-[1200px] mx-auto flex items-center flex-col justify-center mt-20 mb-20">
        <button onClick={() => Newcase()} className="w-60 h-16 border-2 border-purple text-purple text-lg font-medium rounded-full hover:bg-purple hover:text-white transition">
          Explore More Case Studies
        </button>
      </div>

      <section className=" bg-[#F6F3FF] ">
        <div className="max-w-[1200px] mx-auto flex items-center flex-col justify-center">
          <div>
            <h1 className="text-5xl font-bold text-[#060237] pt-28 font-[sans-serif] mb-20">
              Let’s create something extraordinary together
            </h1>
          </div>
          <div className="flex gap-4 mb-20">
            <button onClick={() => NewPage()} className="w-44 h-16 border-2 border-purple text-purple text-lg font-medium rounded-full hover:bg-purple hover:text-white transition">
              Audit My Website
            </button>
            <button onClick={() => NewPage()} className="flex items-center justify-center w-44 h-16 bg-purple text-white text-lg font-medium rounded-full">
              Book Call
              <span className="ml-4 p-3 bg-white text-black rounded-full text-xl">
                <MdArrowOutward />
              </span>
            </button>
          </div>
        </div>
      </section>

      <div className='flex items-center justify-center mt-[69px] mb-[69px]'>
        <div className='w-[1440px] h-[197px] flex items-center justify-center border-t border-b border-light-pink'>
          <h1 className='text-5xl font-bold text-purple'>
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