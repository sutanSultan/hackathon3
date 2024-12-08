import React from "react";

const UnderlineButton = ({ className,children }) => {
  return (
    <div className=" border-b-2 pb-1  border-black w-fit">
      <button className={` text-[18px] ${className}`}>{children} </button>
    </div>
  );
};

export default UnderlineButton;