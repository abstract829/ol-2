import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import DefaultButton from "./DefaultButton";

interface props {
  style?: React.CSSProperties;
  [x: string]: any;
}

const PrevBtn = ({ style, ...rest }: props) => {
  return (
    <DefaultButton
      style={{
        backgroundColor: "#F6104E",
        display: "flex",
        alignItems: "center",
        gap: "0.5em",
        color: "white",
        padding: "0.5em 1.5em",
        width: 150,
        ...style,
      }}
      {...rest}
    >
      <AiOutlineLeft style={{ fontSize: 15 }} />
      Previous
    </DefaultButton>
  );
};

export default PrevBtn;
