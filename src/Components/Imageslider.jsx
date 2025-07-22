// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// import "swiper/css";
// import "swiper/css/navigation";

// const Images = [
//     {
//         url: 'https://res.cloudinary.com/drtosngvu/image/upload/v1752578537/sample1_ee776cb6fa.png'
//     },
//     {
//         url: 'https://res.cloudinary.com/drtosngvu/image/upload/v1752578542/sample2_383a886e56.png'
//     },
//     {
//         url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578539/sample3_07e3cde9bd.png"
//     },
//     {
//         url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578605/sample4_add9a5a0ff.png"
//     },
//     {
//         url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578600/sample5_21c25e1525.png"
//     },
//     {
//         url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578613/sample6_41e7fef700.png"
//     },
//     {
//         url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578611/sample7_cd83469045.png"
//     },
//     {
//         url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578604/sample8_eb71d3ce0c.png"
//     },
// ];

// const Imageslider = () => {
//     return (
//         <div className="relative w-[95vw] ">
//             <Swiper
//                 modules={[Navigation]}
//                 navigation={{
//                     nextEl: ".swiper-button-next-custom",
//                     prevEl: ".swiper-button-prev-custom",
//                 }}
//                 spaceBetween={0}
//                 slidesPerView={6}

//                 breakpoints={{
//                     320: { slidesPerView: 6 },
//                     640: { slidesPerView: 5 },
//                     1024: { slidesPerView: 4 },
//                 }}
//             >
//                 {Images.map((img, i) => (
//                     <SwiperSlide key={i}>
//                         <img
//                             src={img.url}
//                             alt={`Slide ${i}`}
//                             className="w-[250px] h-[500px]  object-contain "
//                         />
//                     </SwiperSlide>
//                 ))}
//             </Swiper>

//             {/* Custom Arrows */}
//             <button className='swiper-button-prev-custom absolute bottom-[-30px] left-12  p-3 rounded-full z-10 bg-light-pink transition '>
//                 <FaArrowLeft />
//             </button>
//             <button className='swiper-button-next-custom absolute bottom-[-30px] right-12  p-3 rounded-full z-10 bg-light-pink transition'>
//                 <FaArrowRight />
//             </button>
//         </div>
//     );
// };

// export default Imageslider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

const Images = [
  {
    url: 'https://res.cloudinary.com/drtosngvu/image/upload/v1752578537/sample1_ee776cb6fa.png'
  },
  {
    url: 'https://res.cloudinary.com/drtosngvu/image/upload/v1752578542/sample2_383a886e56.png'
  },
  {
    url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578539/sample3_07e3cde9bd.png"
  },
  {
    url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578605/sample4_add9a5a0ff.png"
  },
  {
    url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578600/sample5_21c25e1525.png"
  },
  {
    url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578613/sample6_41e7fef700.png"
  },
  {
    url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578611/sample7_cd83469045.png"
  },
  {
    url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578604/sample8_eb71d3ce0c.png"
  },
];

const Imageslider = () => {
  return (
    <div className="relative w-[95vw] mx-auto">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        spaceBetween={0}
        slidesPerView={6}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
      >
        {Images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img.url}
              alt={`Slide ${i}`}
              className="w-[250px] h-[300px] object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows */}
      <button className="swiper-button-prev-custom absolute bottom-[-30px] left-6 p-3 rounded-full z-10 bg-light-pink">
        <FaArrowLeft />
      </button>
      <button className="swiper-button-next-custom absolute bottom-[-30px] right-6 p-3 rounded-full z-10 bg-light-pink">
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Imageslider;
