import { Box } from "@mui/material";
import { LabsData } from "interfaces/LabsApiResponse.interface";
import React from "react";
import LabCard from "../LabCard";
import ViewMoreLabs from "./ViewMoreLabs";

interface props {
  labs?: LabsData[];
}

const AvailableLabs = ({ labs }: props) => {
  return (
    <Box
      sx={{
        display: "grid",
        gap: "1em",
        gridTemplateColumns: "1fr 1fr",
        maxWidth: 720,
      }}
    >
      {labs.map((lab) => (
        <LabCard lab={lab} key={lab._id} />
      ))}

      <ViewMoreLabs />
    </Box>
  );
};

export default AvailableLabs;
