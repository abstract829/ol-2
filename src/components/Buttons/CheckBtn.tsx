import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import DefaultButton from "./DefaultButton";

interface props {
  style?: React.CSSProperties;
  [x: string]: any;
}

const CheckBtn = ({ style, ...rest }: props) => {
  return (
    <DefaultButton
      style={{
        backgroundColor: "#7506F7",
        display: "flex",
        alignItems: "center",
        gap: "0.5em",
        padding: "0.5em 1.5em",
        ...style,
      }}
      {...rest}
    >
      <AiOutlineCheck style={{ fontSize: 15 }} />
      Check
    </DefaultButton>
  );
};

export default CheckBtn;
