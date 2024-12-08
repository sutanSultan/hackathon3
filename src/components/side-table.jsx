import React from "react";
import SideTableCard from "./ui/side-table-card";

const SideTable = () => {
  return (
    <div className=" px-20 bg-[#FAF4F4] py-10 flex  justify-between">
      <SideTableCard
        img={"/side-table01.png"}
        title={"Side table"}
        btnName={"View More"}
      />
      <SideTableCard
        img={"/side-table02.png"}
        title={"Side table"}
        btnName={"View More"}
      />
    </div>
  );
};

export default SideTable;

