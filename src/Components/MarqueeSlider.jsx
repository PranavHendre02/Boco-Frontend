import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeSlider = () => {
  return (
    <div className="border-y-2 border-dotted border-gray-400 py-4">
      <Marquee speed={120} gradient={false}>
        <div className="flex items-center gap-20">
          <img
            src="https://res.cloudinary.com/drtosngvu/image/upload/v1753283832/sample30_d2a8f3c474.png"
            alt="mar1"
            className="w-[180px] h-[85px]"
          />
          <img
            src="https://res.cloudinary.com/drtosngvu/image/upload/v1753283832/sample31_1ceebcfa8b.png"
            alt="mar2"
            className="w-[180px] h-[85px]"
          />
          <img
            src="https://res.cloudinary.com/drtosngvu/image/upload/v1753283833/sample32_631110cb74.png"
            alt="mar3"
            className="w-[180px] h-[85px]"
          />
          <img
            src="https://res.cloudinary.com/drtosngvu/image/upload/v1753283833/sample33_5dc661b9d3.png"
            alt="mar4"
            className="w-[180px] h-[85px]"
          />
          <img
            src="https://res.cloudinary.com/drtosngvu/image/upload/v1753283833/sample34_c1fc409b40.png"
            alt="mar5"
            className="w-[180px] h-[85px]"
          />
          <img
            src="https://res.cloudinary.com/drtosngvu/image/upload/v1753283833/sample35_711a16bdaa.png"
            alt="mar6"
            className="w-[180px] h-[85px]"
          />
          <img
            src="https://res.cloudinary.com/drtosngvu/image/upload/v1753283856/sample36_c02c9912f5.png"
            alt="mar7"
            className="w-[180px] h-[85px]"
          />
          <img
            src="https://res.cloudinary.com/drtosngvu/image/upload/v1753283855/sample37_3788af0537.png"
            alt="mar8"
            className="w-[180px] h-[85px]"
          />
          <img
            src="https://res.cloudinary.com/drtosngvu/image/upload/v1753283856/sample38_009929cde3.png"
            alt="mar9"
            className="w-[180px] h-[85px]"
          />
          <img
            src="https://res.cloudinary.com/drtosngvu/image/upload/v1753283855/sample39_4223dff985.png"
            alt="mar10"
            className="w-[180px] h-[85px]"
          />
          <img
            src="https://res.cloudinary.com/drtosngvu/image/upload/v1753283856/sample40_6618d8baf9.png"
            alt="mar11"
            className="w-[180px] h-[85px]"
          />
          <img
            src="https://res.cloudinary.com/drtosngvu/image/upload/v1753283856/sample41_6273e983fa.png"
            alt="mar12"
            className="w-[180px] h-[85px]"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSlider;
