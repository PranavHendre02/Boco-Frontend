
import React, { useEffect, useState } from 'react';
import API from '../api'; 

const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const res = await API.get('/footers?populate=*');
        const footer = res.data?.data?.[0];

        if (!footer) {
          console.warn('No footer data found');
          return;
        }

        const heading = footer.footerHeading;
        const subText1 = footer.FootersubText1?.[0]?.children?.[0]?.text || "";
        const subText2 = footer.FootersubText2?.map(item =>
          item?.children?.[0]?.text?.trim()
        ).filter(Boolean);

        setFooterData({ heading, subText1, subText2 });
      } catch (error) {
        console.error('Error fetching footer:', error);
      }
    };

    fetchFooter();
  }, []);

  if (!footerData) return null;

  return (
    <div className='w-full'>
      <div className='flex items-start justify-between w-full px-32 gap-8'>
       
        <div  className="w-[50%]" >  
          <h1 className='text-purple text-[2.5rem] font-bold lowercase'>
            {footerData.heading}
          </h1>
          <p className='text-[20px] font-[500] text-light-gray leading-relaxed mt-3'>
            {footerData.subText1}
          </p>

          <div className="flex gap-4 mt-6 text-[22px] text-purple">
            <i className="ri-instagram-line"></i>
            <i className="ri-linkedin-box-fill"></i>
          </div>
        </div>

        <div  className="w-fit text-right">
          <p className='font-bold text-[22px] mb-3 text-black'>Products</p>
          {footerData.subText2.map((item, idx) => (
            <p key={idx} className='text-light-gray font-[500] text-[20px] mb-1'>
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-10 mb-12">
        <hr className="border-t border-dotted border-light-pink w-[1280px] mx-auto my-4" />
        <p className='text-[18px] font-light text-[#5C5470] ml-32'>
          © Copyright, BOCO 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
