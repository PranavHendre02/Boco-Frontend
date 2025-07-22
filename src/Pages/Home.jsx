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

     </div>
  )
}

export default Home