import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import API from "../api";

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
        const res = await API.get("/navbars?populate=*");
        const firstItem = res.data?.data?.[0];
        if (!firstItem) {
          console.error("No navbar data found.");
          return;
        }

        setNavbarData({
          brand: firstItem.NavbarBrandname,
        });
      } catch (err) {
        console.error("Error fetching navbar:", err);
      }
    };

    fetchNavbar();
  }, []);

  if (!navbarData) {
    return <div className="text-center mt-6">.</div>;
  }

  return (
    <div className="w-full h-[116px] font-sans relative z-50">
      <div className="flex items-center justify-between mt-6 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="text-purple text-[2rem] sm:text-[2.5rem] font-bold lowercase">
          <h1>{navbarData.brand}</h1>
        </div>

        <div className="hidden lg:flex justify-center">
          <div className="h-[55px] w-[45vw] border-2 rounded-[3rem] flex items-center justify-between px-4 lg:px-6 text-sm md:text-base font-medium text-purple border-light-purple">
            <Link
              to="/Shopify-Store-Build"
              className="px-3 py-2 rounded-full hover:bg-light-purple transition duration-300"
            >
              Shopify Store Build
            </Link>
            <Link
              to="/Landing-Page-Design"
              className="px-3 py-2 rounded-full hover:bg-light-purple transition duration-300"
            >
              Landing Page Design
            </Link>
            <Link
              to="/Case-Studies"
              className="px-3 py-2 rounded-full hover:bg-light-purple transition duration-300"
            >
              Case Studies
            </Link>
          </div>
        </div>

        <button
          onClick={() => navigate("/Newpage")}
          className="hidden lg:flex items-center justify-center w-[10vw] min-w-[130px] h-14 bg-purple text-white text-[0.8rem] lg:text-[0.85rem] font-medium rounded-[8rem]"
        >
          <p className="ml-4">Talk To Us</p>
          <div className="p-3 bg-white text-black rounded-[25px] ml-4 text-[1.3rem]">
            <MdArrowOutward />
          </div>
        </button>

        <button onClick={toggleMenu} className="text-3xl lg:hidden">
          <GiHamburgerMenu />
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center p-4 gap-4 z-50">
          <Link
            to="/Shopify-Store-Build"
            className="w-full text-center py-2 rounded-full hover:bg-purple hover:text-white transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Shopify Store Build
          </Link>
          <Link
            to="/Landing-Page-Design"
            className="w-full text-center py-2 rounded-full hover:bg-purple hover:text-white transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Landing Page Design
          </Link>
          <Link
            to="/Case-Studies"
            className="w-full text-center py-2 rounded-full hover:bg-purple hover:text-white transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Case Studies
          </Link>
          <button
            onClick={() => {
              navigate("/Newpage");
              setIsOpen(false);
            }}
            className="flex items-center justify-center mt-2"
          >
            <div className="p-3 bg-purple text-white rounded-[25px] text-[1.3rem]">
              <MdArrowOutward />
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
