import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";
import API from '../api';
import { useNavigate } from "react-router-dom";




const Navbar = () => {
  const navigate = useNavigate()
  const [data, setData] = useState(null);
  const NewPage = () => {
    navigate("/Newpage");
  }
  const [navbarData, setNavbarData] = useState(null);

  useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const res = await API.get('/navbars?populate=*');
        //   console.log("API Response:", res.data);

        const firstItem = res.data?.data?.[0];
        if (!firstItem) {
          console.error("No navbar data found.");
          return;
        }

        const navbar = firstItem;



        setNavbarData({
          brand: navbar.NavbarBrandname,

        });

      } catch (err) {
        console.error('Error fetching navbar:', err);
      }
    };

    fetchNavbar();
  }, []);


  if (!navbarData) {
    return <div className="text-center mt-6">.</div>;
  }



  return (
    <div className="w-full h-[116px] font-sans mb-5">
      <div className='flex items-center justify-between mt-6'>
        <div className='text-purple text-[2.5rem] font-bold ml-24 lowercase'>
          <h1>{navbarData.brand}</h1>
        </div>
        <div className="w-full flex justify-center">
          <div className="h-[55px] w-[595px] border-2 rounded-[3rem] flex items-center justify-between px-6 text-[18px] font-medium text-purple border-light-purple">
            {/* {navbarData.pages.map((page, idx) => (
              <Link key={idx} to={`/${page.replace(/\s+/g, '-')}`} className="px-4 py-2 rounded-full hover:bg-light-purple transition duration-300" >{page}</Link>
            ))} */}
            <Link to="/Shopify-Store-Build" className="px-4 py-2 rounded-full hover:bg-light-purple transition duration-300">Shopify Store Build</Link>
            <Link to="/Landing-Page-Design " className="px-4 py-2 rounded-full hover:bg-light-purple transition duration-300">Landing Page Design </Link>
            <Link to="/Case-Studies" className="px-4 py-2 rounded-full hover:bg-light-purple transition duration-300">Case Studies</Link>
          </div>
        </div>

        <button
          onClick={() => NewPage()}
          className='flex items-center justify-center w-60 h-14 bg-purple text-white text-[1rem] font-medium rounded-[8rem] mr-32'
        >
          <p className='flex items-center justify-center ml-4'>Talk To Us</p>
          <div className='p-3 bg-white text-black rounded-[25px] ml-6 text-[1.3rem]'>
            <MdArrowOutward />
          </div>
        </button>

      </div>
    </div>
  );
};

export default Navbar;
