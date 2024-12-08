import React from "react";

const FilterBar = () => {
  return (
    <div className="relative w-full bg-[#FAF4F4] h-[100px]">
      {/* Container */}
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-10 h-full">
        {/* Filter Section */}
        <div className="flex items-center space-x-2">
          <div className="w-[25px] h-[25px] bg-black"></div>
          <span className="font-poppins text-[20px] text-black">Filter</span>
        </div>

        {/* View Options */}
        <div className="flex items-center space-x-4">
          <div className="w-[28px] h-[28px] bg-black"></div>
          <div className="w-[24px] h-[24px] bg-black"></div>
        </div>

        {/* Showing Results */}
        <div className="hidden md:flex items-center space-x-3">
          <div className="w-[2px] h-[37px] bg-[#9F9F9F]"></div>
          <span className="font-poppins text-[16px] text-black">
            Showing 1–16 of 32 results
          </span>
        </div>

        {/* Show Items Section */}
        <div className="flex items-center space-x-2">
          <span className="font-poppins text-[20px] text-black">Show</span>
          <div className="w-[55px] h-[55px] flex items-center justify-center bg-white border">
            <span className="font-poppins text-[20px] text-[#9F9F9F]">16</span>
          </div>
        </div>

        {/* Short By Section */}
        <div className="flex items-center space-x-3">
          <span className="font-poppins text-[20px] text-black">Short by</span>
          <div className="w-[188px] h-[55px] flex items-center justify-center bg-white border">
            <span className="font-poppins text-[20px] text-[#9F9F9F]">Default</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
