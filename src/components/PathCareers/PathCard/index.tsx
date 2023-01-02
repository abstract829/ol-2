import { FC, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { LabsData } from "interfaces/LabsApiResponse.interface";

import PathCardCategories from "./PathCardCategories";
import PathCardTitle from "./PathCardTitle";
import PathCardActions from "./PathCardActions";
import ShareModal from "components/ShareModal";

const PathCard = ({ path }) => {
  const [open, setOpen] = useState(false);
  const [share, setShare] = useState(false);
  const handleShareClose = () => {
    setShare(false);
  };
  const handleShareOpen = () => {
    setShare(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Card
        sx={{
          width: 350,
          height: 300,
          "&:hover": { scale: "101%" },
          backgroundColor: "#07021E",
          color: "white",
        }}
      >
        <CardMedia
          component="img"
          height="100"
          image="https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt="Path image"
        />

        <CardContent style={{ padding: "1em 1em 0em 1em" }}>
          <PathCardTitle
            title={
              path?.title?.length > 25
                ? `${path.title.slice(0, 25)}...`
                : path.title
            }
            icon={path?.icon}
          />
          <PathCardCategories tags={path?.tags} />

          <Typography variant="body2">
            {path?.description?.length > 80
              ? path.description.slice(0, 80) + "..."
              : path.description}
          </Typography>
        </CardContent>

        <PathCardActions
          handleOpen={handleOpen}
          handleShareOpen={handleShareOpen}
          id={path?._id}
        />
        <ShareModal handleClose={handleShareClose} open={share} />
      </Card>
    </>
  );
};
export default PathCard;
