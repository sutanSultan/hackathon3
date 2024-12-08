import React from "react";

const SectionHeader = ({ description, title }) => {
  return (
    <div>
      <h1 className=" text-4xl font-semibold">{title}</h1>
      <p className=" text-lg  mt-5 text-[#9F9F9F]">{description}</p>
    </div>
  );
};

export default SectionHeader;