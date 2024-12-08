import Image from "next/image";
import React from "react";

const TopPicksCard = ({img}) => {
  return (
    <div>
      <Image
        src={img}
        alt="img"
        height={200}
        width={280}
        className=" "
      />
      <div className=" mt-5  space-y-3">
        <p className=" text-lg leading-none">Granite dining table with dining chair</p>
        <h4 className=" font-semibold text-2xl">Rs. 25,000.00</h4>
      </div>
    </div>
  );
};

export default TopPicksCard;