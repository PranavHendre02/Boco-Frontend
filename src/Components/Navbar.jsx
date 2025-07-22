import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import API from '../api';

const Navbar = () => {
  const navigate = useNavigate();
  const [navbarData, setNavbarData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const res = await API.get('/navbars?populate=*');
        const firstItem = res.data?.data?.[0];
        if (!firstItem) {
          console.error("No navbar data found.");
          return;
        }

        setNavbarData({
          brand: firstItem.NavbarBrandname,
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
    <div className="w-full h-[116px] font-sans mb-5 relative z-50">
      <div className='flex items-center justify-between mt-6 px-6 md:px-24'>

        {/* Brand Name */}
        <div className='text-purple text-[2.5rem] font-bold lowercase '>
          <h1>{navbarData.brand}</h1>
        </div>

        {/* Main Nav Links (Desktop Only) */}
        <div className="hidden lg:flex justify-center">
          <div className="h-[55px] w-[45vw] border-2 rounded-[3rem] flex items-center justify-between px-6  lg:text-[17px] font-medium text-purple border-light-purple">
            <Link to="/Shopify-Store-Build" className="px-4 py-2 rounded-full hover:bg-light-purple transition duration-300">Shopify Store Build</Link>
            <Link to="/Landing-Page-Design" className="px-4 py-2 rounded-full hover:bg-light-purple transition duration-300">Landing Page Design</Link>
            <Link to="/Case-Studies" className="px-4 py-2 rounded-full hover:bg-light-purple transition duration-300">Case Studies</Link>
          </div>
        </div>

        {/* Talk to Us Button (Desktop Only) */}
        <button
          onClick={() => navigate("/Newpage")}
          className='hidden lg:flex items-center justify-center w-[11vw] h-14 bg-purple text-white  lg:text-[0.85rem] font-medium rounded-[8rem]'
        >
          <p className='flex items-center justify-center ml-4'>Talk To Us</p>
          <div className='p-3 bg-white text-black rounded-[25px] ml-6 text-[1.3rem]'>
            <MdArrowOutward />
          </div>
        </button>

        {/* Hamburger Menu (Mobile Only) */}
        <button onClick={toggleMenu} className='text-3xl lg:hidden'>
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='absolute top-[100%] left-0 w-full bg-white shadow-md flex flex-col items-center p-4 gap-4 z-50'>
          <Link to="/Shopify-Store-Build" className="px-4 py-2 rounded-full hover:bg-purple hover:text-white transition duration-300" onClick={() => setIsOpen(false)}>Shopify Store Build</Link>
          <Link to="/Landing-Page-Design" className="px-4 py-2 rounded-full hover:bg-purple hover:text-white transition duration-300" onClick={() => setIsOpen(false)}>Landing Page Design</Link>
          <Link to="/Case-Studies" className="px-4 py-2 rounded-full hover:bg-purple hover:text-white transition duration-300" onClick={() => setIsOpen(false)}>Case Studies</Link>
          <button
            onClick={() => {
              navigate("/Newpage");
              setIsOpen(false);
            }}
            className='flex items-center justify-center w-[20vw] h-14 bg-purple text-white text-[0.85rem] font-medium rounded-[8rem]'
          >
            <p className='flex items-center justify-center ml-4'>Talk To Us</p>
            <div className='p-3 bg-white text-black rounded-[25px] ml-6 text-[1.3rem]'>
              <MdArrowOutward />
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
