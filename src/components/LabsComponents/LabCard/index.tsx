import { FC, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { LabsData } from "interfaces/LabsApiResponse.interface";

import LabModal from "../LabModal";

import LabCardCategories from "./LabCardCategories";
import LabCardTitle from "./LabCardTitle";
import LabCardActions from "./LabCardActions";
import LabShareModal from "../LabShareModal";
import { Box } from "@mui/material";
import DefaultButton from "components/Buttons/DefaultButton";
import { BsFlag } from "react-icons/bs";
import LabCardLockBox from "./LabCardLockBox";

interface props {
  lab?: LabsData;
  locked?: boolean;
  withLock?: boolean;
}

const LabCard: FC<props> = ({ lab, locked, withLock }) => {
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
          minHeight: 300,
          "&:hover": { scale: "101%" },
          backgroundColor: "#07021E",
          color: "white",
        }}
      >
        <CardMedia
          component="img"
          height="100"
          image="https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt="Lab image"
        />

        <CardContent style={{ padding: "1em 1em 0em 1em" }}>
          {withLock && <LabCardLockBox locked={locked} />}
          <LabCardTitle
            title={
              lab?.title?.length > 25
                ? `${lab.title.slice(0, 25)}...`
                : lab.title
            }
            icon={lab?.icon}
          />
          <LabCardCategories tags={lab?.tags} />

          <Typography variant="body2">
            {lab?.description?.length > 80
              ? lab.description.slice(0, 80) + "..."
              : lab.description}
          </Typography>
        </CardContent>

        <LabCardActions
          handleOpen={handleOpen}
          handleShareOpen={handleShareOpen}
        />
      </Card>
      <LabModal
        lab={lab}
        handleClose={handleClose}
        open={open}
        handleShareOpen={handleShareOpen}
      />
      <LabShareModal lab={lab} handleClose={handleShareClose} open={share} />
    </>
  );
};
export default LabCard;
