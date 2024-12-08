import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[316px] ">
      {/* Background Blur */}
      <div
        className="absolute w-full h-[316px] top-[100px] bg-cover bg-center blur-[3px]"
        style={{ backgroundImage: "url('/Rectangle 1.png')" }}
      ></div>

      {/* Logo Group */}
      <div className="absolute left-1/2 top-[161px] transform -translate-x-1/2 flex flex-col items-center">
        {/* Logo */}
        <div
          className="w-[77px] h-[77px] bg-cover"
          style={{ backgroundImage: "url('/Meubel House_Logos-01.png')" }}
        ></div>

        {/* "Shop" Text */}
        <h1 className="font-poppins font-medium text-4xl leading-[72px] mt-2">
          My Account
        </h1>
      </div>

      
      <div className="absolute left-1/2 top-[295px] transform -translate-x-1/2 flex items-center space-x-3">
        {/* "Home" */}
        <span className="font-poppins font-medium text-base text-black">
          Home
        </span>
        {/* Arrow */}
        <div className="w-[20px] h-[20px] rotate-[-90deg]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-black"
          >
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.59 5.59L12 20l8-8-8-8z" />
          </svg>
        </div>
        {/* "Shop" */}
        <span className="font-poppins font-light text-base text-black">Shop</span>
      </div>
    </section>
  );
};

export default HeroSection;