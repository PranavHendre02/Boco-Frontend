import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

const Images = [
  {
    url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578689/sample26_7db93ff7f1.png",
  },
  {
    url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578687/sample27_7c916b30d2.png",
  },
  {
    url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578689/sample28_956613db54.png",
  },
];

const Imageslidertwo = () => {
  return (
    <div className="relative w-[95vw] ">
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

export default Imageslidertwo;
