import React from "react";
import SectionHeader from "./ui/sec-header";
import TopPicksCard from "./ui/top-picks-card";

const TopPicks = () => {
  return (
    <div className=" py-10  px-16">
      <div className=" flex justify-center   text-center">
        <SectionHeader
          title={"Top Picks For You"}
          description={
            "Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights."
          }
        />
      </div>

      <div className=" grid grid-cols-4 mt-5 gap-10 w-full">
        <TopPicksCard img="/img/pick01.png" />
        <TopPicksCard img="/img/pick02.png" />
        <TopPicksCard img="/img/pick01.png" />
        <TopPicksCard img="/img/pick02.png" />
      </div>
    </div>
  );
};

export default TopPicks;