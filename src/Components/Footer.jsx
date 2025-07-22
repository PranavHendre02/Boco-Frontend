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
    <div className='w-full px-4 md:px-8 lg:px-32'>
      <div className='flex flex-col md:flex-row items-start justify-between gap-8 w-full'>

        <div className="w-full md:w-1/2 text-left">
          <h1 className='text-purple text-2xl md:text-4xl font-bold lowercase'>
            {footerData.heading}
          </h1>
          <p className='text-sm md:text-lg font-[500] text-light-gray leading-relaxed mt-3'>
            {footerData.subText1}
          </p>

          <div className="flex gap-4 mt-6 text-xl md:text-2xl text-purple">
            <i className="ri-instagram-line"></i>
            <i className="ri-linkedin-box-fill"></i>
          </div>
        </div>

        <div className="w-full md:w-fit text-left md:text-right">
          <p className='font-bold text-lg md:text-xl mb-3 text-black'>Products</p>
          {footerData.subText2.map((item, idx) => (
            <p key={idx} className='text-light-gray font-[500] text-sm md:text-lg mb-1'>
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-10 mb-12">
        <hr className="border-t border-dotted border-light-pink w-full my-4" />
        <p className='text-xs md:text-sm font-light text-[#5C5470] text-center  md:ml-32'>
          © Copyright, BOCO 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
