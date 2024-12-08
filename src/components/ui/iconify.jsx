import { Icon } from "@iconify/react";
import React from "react";

const Iconify = ({ iconName }) => {
  return (
    <div>
      <Icon icon={iconName} className="  size-7 " />
    </div>
  );
};

export default Iconify;