import React from 'react';

const Newpage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-xl px-4">
        <h1 className="text-3xl font-semibold text-black mb-4">Welcome!</h1>
        <p className="text-gray-600 mb-8">
          We would love to connect with you to know more about your brand and your goals. <br /><br />
          Kindly fill the form below for us to get some insights on your requirements and plan a meeting accordingly.
        </p>

        <button className="px-8 py-3 bg-emerald-600 text-white rounded hover:bg-white hover:text-emerald-600 border border-emerald-600 transition uppercase font-medium">
          Start
        </button>
      </div>
    </div>
  );
};

export default Newpage;
