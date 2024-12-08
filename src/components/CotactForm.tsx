import React from 'react';

const ContactForm = () => {
  return (
    <div className="relative w-full bg-white">
      {/* Get In Touch Section */}
      <section className="absolute  top-[416px]">
        {/* Background */}
        <div className="w-full h-[1144px] bg-white"></div>

        {/* Title */}
        <h2 className="absolute left-1/2 transform -translate-x-1/2 top-[514px] text-3xl md:text-4xl font-semibold text-black text-center">
          Get In Touch With Us
        </h2>

        {/* Description */}
        <p className="absolute left-1/2 transform -translate-x-1/2 top-[575px] w-[90%] md:w-[644px] text-center text-gray-600 text-sm md:text-base">
          For More Information About Our Product & Services. Please Feel Free
          To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
          Not Hesitate!
        </p>

        {/* Form & Contact Info Container */}
        <div className="flex flex-col lg:flex-row gap-10 justify-center mt-16 lg:mt-[120px]">
          {/* Contact Info */}
          <div className="bg-white w-[393px] h-auto p-6 shadow-md rounded-md">
            <h3 className="text-xl font-medium mb-4">Address</h3>
            <p className="text-sm text-gray-600">
              236 5th SE Avenue, New York NY10000, United States
            </p>

            <h3 className="text-xl font-medium mt-6">Phone</h3>
            <p className="text-sm text-gray-600">
              Mobile: +(84) 546-6789 <br />
              Hotline: +(84) 456-6789
            </p>

            <h3 className="text-xl font-medium mt-6">Working Time</h3>
            <p className="text-sm text-gray-600">
              Monday-Friday: 9:00 - 22:00 <br />
              Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>

          {/* Contact Form */}
          <form className="bg-white w-[635px] h-auto p-6 shadow-md rounded-md">
            {/* Name Field */}
            <label className="block text-sm font-medium text-black mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Abc"
              className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
            />

            {/* Email Field */}
            <label className="block text-sm font-medium text-black mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Abc@def.com"
              className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
            />

            {/* Subject Field */}
            <label className="block text-sm font-medium text-black mb-2">
              Subject
            </label>
            <input
              type="text"
              placeholder="This is an optional"
              className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
            />

            {/* Message Field */}
            <label className="block text-sm font-medium text-black mb-2">
              Message
            </label>
            <textarea
              placeholder="Hi! I’d like to ask about"
              className="w-full border border-gray-300 rounded-md p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-black"
              rows={4}
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="block w-[237px] mx-auto py-2 border border-black rounded-md text-center text-sm font-medium text-black hover:bg-gray-100 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
