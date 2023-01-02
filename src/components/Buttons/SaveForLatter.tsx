import React from "react";
import { BsBookmark } from "react-icons/bs";
import DefaultButton from "./DefaultButton";

interface props {
  sx?: any;
  [x: string]: any;
}

const SaveForLatter = ({ sx, ...rest }: props) => {
  return (
    <DefaultButton
      sx={{
        backgroundColor: "#07021E",
        color: "white",
        fontSize: 14,
        padding: "0.5em 1em",
        display: "flex",
        alignItems: "center",
        gap: "0.5em",
        maxWidth: 140,
        cursor: "pointer",
        ...sx,
      }}
      {...rest}
    >
      <BsBookmark />
      Save for later
    </DefaultButton>
  );
};

export default SaveForLatter;
