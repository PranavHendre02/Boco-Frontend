import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import CaseStudyCard from './Components/CaseStudyCard';
import API from './api';
import Talktous from './Pages/Talktous';



const App = () => {
  const [casePageData, setCasePageData] = useState(null);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const res = await API.get('/case-study-page?populate=*');
        const pageData = res.data?.data;
        console.log("✅ Page Data:", pageData);
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
          <p className='text-3xl font-semibold text-light-gray mt-10 capitalize'>case studies</p>
          <h1 className='text-5xl font-bold text-purple mt-10'>{heading}</h1>
          <p className='text-2xl font-normal text-light-blue mt-10 mb-10'>{subheading}</p>
        </div>
      </div>


      <CaseStudyCard />


      <div className='flex items-center justify-center mt-[69px] mb-[69px]'>
        <div className='w-[1440px] h-[197px] flex items-center justify-center border-t border-b border-light-pink'>
          <h1 className='text-5xl font-bold text-purple'>
            {footerHeading}
          </h1>
        </div>
      </div>
    
      <Footer />
      <Talktous/>
    </div>
  );
};

export default App;
