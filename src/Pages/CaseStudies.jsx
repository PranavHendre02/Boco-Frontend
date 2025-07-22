import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CaseStudyCard from '../Components/CaseStudyCard';
import API from '../api';



const CaseStudies = () => {
  const [casePageData, setCasePageData] = useState(null);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const res = await API.get('/case-study-page?populate=*');
        const pageData = res.data?.data;
        console.log("Page Data:", pageData);
        setCasePageData(pageData);
      } catch (error) {
        console.error(' Error fetching case study page:', error);
      }
    };

    fetchCaseStudies();
  }, []);

  if (!casePageData) {
    return <p className="text-center mt-10 text-gray-500"></p>;
  }

  const heading = casePageData.CaseStudyPageHead;
  const subheading = casePageData.CaseStudyPageSub?.[0]?.children?.[0]?.text;
  const footerHeading = casePageData.CaseStudyPageFooterHead?.[0]?.children?.[0]?.text;

  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center font-[sans-serif]'>
        <div className='w-[1248px] text-center'>
          <p className='md:text-3xl font-semibold text-light-gray md:mt-10 capitalize text-2xl'>case studies</p>
          <h1 className='md:text-5xl font-bold text-purple mt-10 text-2xl'>{heading}</h1>
          <p className='md:text-2xl font-normal text-light-blue mt-10 mb-10 text-xl'>{subheading}</p>
        </div>
      </div>


    <CaseStudyCard/>


      <div className='flex items-center justify-center mt-[69px] mb-[69px]'>
        <div className='w-[1440px] h-[197px] flex items-center justify-center border-t border-b border-light-pink'>
          <h1 className='md:text-5xl font-bold text-purple text-xl text-center'>
            {footerHeading}
          </h1>
        </div>
      </div>
    
      <Footer />
    </div>
  );
};

export default CaseStudies;
