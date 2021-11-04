import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <image width='250' height='250' href='images/logo.png'/>
    </Svg>
  );
};

export default Icon;
