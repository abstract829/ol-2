import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import DefaultButton from "./DefaultButton";

interface props {
  style?: React.CSSProperties;
  [x: string]: any;
  text?: string;
}

const NextBtn = ({ style, text, ...rest }: props) => {
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
      {text ? text : "Next"}
      <AiOutlineRight style={{ fontSize: 15 }} />
    </DefaultButton>
  );
};

export default NextBtn;
