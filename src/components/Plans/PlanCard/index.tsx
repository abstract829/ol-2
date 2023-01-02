import DefaultButton from "components/Buttons/DefaultButton";
import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { AiOutlineArrowRight, AiOutlineRight } from "react-icons/ai";

interface props {
  title: string;
  description: string;
  price: string;
  isFree?: boolean;
  color: string;
}

const PlanCard = ({ title, description, price, isFree, color }: props) => {
  const isBreaking = useMediaQuery("(max-width: 1170px)");
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "2em",
        maxWidth: 375,
        height: "100%",
        borderRadius: 1,
      }}
    >
      <h3
        style={{
          color: color,
          fontSize: isBreaking ? 26 : 36,
          lineHeight: 1,
          marginBottom: 0,
        }}
      >
        {title}
      </h3>

      <p>{description}</p>
      <hr style={{ margin: "1em 0" }} />
      <span
        style={{
          display: "block",
          fontSize: 42,
          fontWeight: 800,
          marginBottom: 20,
        }}
      >
        ${price}/mo
      </span>
      {isFree ? (
        <DefaultButton
          style={{
            width: "100%",
            padding: "0.8em",
            fontSize: isBreaking ? 12 : 16,
          }}
          disabled
        >
          This is your current plan
        </DefaultButton>
      ) : (
        <DefaultButton
          style={{
            width: "100%",
            backgroundColor: color,
            padding: "0.8em",
            fontSize: isBreaking ? 12 : 16,
          }}
        >
          Subscribe to this plan
          <AiOutlineRight style={{ marginLeft: 5, fontSize: 15 }} />
        </DefaultButton>
      )}

      <hr style={{ margin: "2em 0 1em 0 " }} />
    </Box>
  );
};

export default PlanCard;
