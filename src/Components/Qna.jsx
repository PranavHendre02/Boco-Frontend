import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Qna = () => {
  const qnaData = [
    {
      question: "What is the overall turnaround time for a Shopify project?",
      answer:
        "Our Shopify projects typically take between 45-90 days, depending on the complexity and scope of the work. We’ll provide a clear timeline based on your specific requirements.",
    },
    {
      question: "Why should I choose Shopify for my e-commerce store?",
      answer:
        "Shopify is a highly flexible and scalable platform that’s ideal for businesses of all sizes. It offers built-in security, extensive customization options, and powerful integrations to help drive sales and enhance customer experience.",
    },
    {
      question: "What does your free audit include?",
      answer:
        "Our free audit covers a detailed review of your store’s design, performance, user experience, and conversion potential. You’ll receive actionable insights to enhance key metrics and optimize your store for growth.",
    },
    {
      question: "Do you offer post-launch support and maintenance?",
      answer:
        "Yes, we provide 30 days of complimentary post-launch support to ensure your site is running smoothly and help you get comfortable with managing your store. We also have Tech Maintenance Packaged paid by the hour, where you can handover your entire tech maintenance and optimisation to us.",
    },
    {
      question: "Can you help with migrating my existing store to Shopify?",
      answer:
        "Absolutely! We specialize in seamless migrations from various platforms to Shopify, ensuring your data, products, and design elements are transitioned smoothly with minimal downtime.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center bg-white px-4 md:mb-48 mb-16">
      <div className="w-full max-w-[1200px]">
        <div className="text-center">
          <h1 className="md:text-6xl font-bold text-[#060237] pt-20 pb-20 font-[sans-serif] text-center text-2xl">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="flex flex-col items-center gap-6">
          {qnaData.map((item, index) => (
            <div key={index} className="w-full">
              <div
                className={`w-full min-h-[70px] px-8 py-4 bg-[#F6F3FF] flex items-center justify-between transition-all cursor-pointer
                                ${
                                  openIndex === index
                                    ? "rounded-t-[25px]"
                                    : "rounded-[25px]"
                                }`}
                onClick={() => toggleDropdown(index)}
              >
                <p className="md:text-[18px] text-purple font-[sans-serif] text-center ">
                  {item.question}
                </p>
                <button className="text-[18px] text-purple font-[sans-serif] m-2">
                  <FaChevronDown />
                </button>
              </div>

              {openIndex === index && (
                <div className="w-full px-8 py-4 bg-[#F6F3FF] border-t border-dotted rounded-b-[25px]">
                  <p className="text-[16px] text-[#666287] font-normal font-[sans-serif]">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Qna;
