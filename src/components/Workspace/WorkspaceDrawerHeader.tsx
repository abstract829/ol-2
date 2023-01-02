import { Box, Typography } from "@mui/material";
import DefaultButton from "components/Buttons/DefaultButton";
import MyTag from "components/MyTag";
import { LabsData } from "interfaces/LabsApiResponse.interface";
import Image from "next/image";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { BsQuestionCircle } from "react-icons/bs";

interface props {
  lab: LabsData;
  handleDrawer: () => void;
  handleFullScreen: () => void;
}
const WorkspaceDrawerHeader = ({
  lab,
  handleDrawer,
  handleFullScreen,
}: props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1em",
          marginBottom: "2em",
          alignItems: "center",
        }}
      >
        <DefaultButton
          style={{ backgroundColor: "#7506f7" }}
          onClick={handleFullScreen}
        >
          Fullscreen
        </DefaultButton>
        <div>
          <BsQuestionCircle
            style={{ color: "white", fontSize: 25, cursor: "pointer" }}
          />
          <AiOutlineLeft
            style={{ color: "white", fontSize: 25, cursor: "pointer" }}
            onClick={handleDrawer}
          />
        </div>
      </Box>
      <div style={{ display: "flex", gap: "1em" }}>
        <Image
          src={lab?.icon}
          width={60}
          height={60}
          alt="lab-category"
          style={{
            filter: "brightness(0) invert(1)",
            objectFit: "contain",
          }}
        />
        <div>
          <Typography
            variant="h5"
            style={{
              marginBottom: "0.5em",
              color: "white",
            }}
          >
            {lab?.title}
          </Typography>
          <Box sx={{ display: "flex", gap: "0.5em", margin: "1em 0" }}>
            {lab?.tags.slice(0, 3).map((tag) => (
              <MyTag key={tag}>{tag}</MyTag>
            ))}
          </Box>
        </div>
      </div>
    </>
  );
};

export default WorkspaceDrawerHeader;
