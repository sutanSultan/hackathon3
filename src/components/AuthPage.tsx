import React from 'react';

export default function AuthPage() {
  return (
    <div className="relative bg-white">
      {/* Group 118 */}
      <div className="absolute w-full h-[760px] top-[416px] bg-white">
        {/* Left Section - Login */}
        <div className="absolute left-[100px] top-[479px] w-[608px] h-[630px] bg-white">
          {/* Login Heading */}
          <h2 className="absolute text-black font-semibold text-[36px] leading-[54px] left-[174px] top-[514px]">
            Log In
          </h2>

          {/* Username Input */}
          <div className="absolute w-[424px] h-[121px] left-[175px] top-[604px]">
            <label className="block text-black font-medium text-[16px] leading-[24px] mb-2">
              Username or email address
            </label>
            <input
              type="text"
              className="w-full h-[75px] bg-white border border-[#9F9F9F] rounded-[10px] px-4 text-[16px]"
            />
          </div>

          {/* Password Input */}
          <div className="absolute w-[424px] h-[121px] left-[175px] top-[761px]">
            <label className="block text-black font-medium text-[16px] leading-[24px] mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full h-[75px] bg-white border border-[#9F9F9F] rounded-[10px] px-4 text-[16px]"
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="absolute flex items-center left-[176px] top-[924px]">
            <input
              type="checkbox"
              className="w-[30px] h-[27px] bg-white border border-[#9F9F9F] rounded-[5px]"
            />
            <label className="ml-2 text-black font-normal text-[16px] leading-[24px]">
              Remember me
            </label>
          </div>

          {/* Login Button */}
          <button className="absolute w-[215px] h-[64px] bg-transparent border border-black rounded-[15px] left-[172px] top-[987px] text-black font-normal text-[20px]">
            Log In
          </button>

          {/* Lost Your Password */}
          <a
            href="#"
            className="absolute left-[418px] top-[1010px] text-black font-light text-[16px] leading-[24px]"
          >
            Lost Your Password?
          </a>
        </div>

        {/* Right Section - Register */}
        <div className="absolute left-[734px] top-[479px] w-[608px] h-[630px] bg-white">
          {/* Register Heading */}
          <h2 className="absolute text-black font-semibold text-[36px] leading-[54px] left-[809px] top-[514px]">
            Register
          </h2>

          {/* Email Address Input */}
          <div className="absolute w-[424px] h-[121px] left-[810px] top-[604px]">
            <label className="block text-black font-medium text-[16px] leading-[24px] mb-2">
              Email address
            </label>
            <input
              type="email"
              className="w-full h-[75px] bg-white border border-[#9F9F9F] rounded-[10px] px-4 text-[16px]"
            />
          </div>

          {/* Instruction Text */}
          <p className="absolute w-[453px] text-justify text-black font-light text-[16px] leading-[24px] left-[811px] top-[761px]">
            A link to set a new password will be sent to your email address.
          </p>

          {/* Privacy Policy */}
          <p className="absolute w-[453px] text-justify text-black font-light text-[16px] leading-[24px] left-[811px] top-[827px]">
            Your personal data will be used to support your experience throughout
            this website, to manage access to your account, and for other purposes
            described in our privacy policy.
          </p>

          {/* Register Button */}
          <button className="absolute w-[215px] h-[64px] bg-transparent border border-black rounded-[15px] left-[811px] top-[987px] text-black font-normal text-[20px]">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
