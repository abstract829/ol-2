import { FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { useTheme } from "@mui/material/styles";
import {
  CardMedia,
  Dialog,
  DialogContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";

import SaveForLatter from "components/Buttons/SaveForLatter";

import LabModalInfoItem from "./LabModalInfoItem";
import LabModalFooterButtons from "./LabModalFooterButtons";
import LabModalHeader from "./LabModalHeader";
import LabModalDescription from "./LabModalDescription";

import { LabsData } from "interfaces/LabsApiResponse.interface";

interface props {
  lab: LabsData;
  handleClose: () => void;
  open: boolean;
  handleShareOpen: () => void;
}

const LabModal: FC<props> = ({ lab, handleClose, open, handleShareOpen }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      maxWidth="lg"
    >
      <CardMedia
        component="img"
        height="250"
        image="https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        alt="Lab image"
      />
      <DialogContent
        className="custom-scrollbar"
        style={{ backgroundColor: "#242640", width: 900, padding: "3em 2em" }}
      >
        <div style={{ display: "flex", gap: "2em", marginBottom: "3em" }}>
          <Image
            src={lab?.icon}
            width={75}
            height={75}
            alt="lab-icon"
            style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
          />
          <LabModalHeader
            title={lab?.title}
            tags={lab?.tags}
            handleShareOpen={handleShareOpen}
          />
        </div>
        <LabModalDescription description={lab?.description} />
        <Grid container spacing={2} sx={{ marginTop: "2em" }}>
          <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
            <LabModalInfoItem
              text="Infraestructure:"
              desc={lab?.infrastructure}
            />
            <LabModalInfoItem text="Access:" desc={lab?.access} />
            <LabModalInfoItem
              text="Difficulty:"
              desc={`${lab?.difficulty} of 5`}
            />
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
            <LabModalInfoItem
              text="Skills required:"
              desc={lab?.skills_required?.join(", ")}
            />
            <LabModalInfoItem
              text="Skills to learn:"
              desc={lab?.skills_learn?.join(", ")}
            />
            <LabModalInfoItem text="Time:" desc={`${lab?.time} hour`} />
          </Grid>
          <Grid item xs={6} sx={{ marginTop: "2em" }}>
            <SaveForLatter />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              marginTop: "2em",
              display: "flex",
              justifyContent: "flex-end",
              gap: "2em",
            }}
          >
            <LabModalFooterButtons lab={lab} />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default LabModal;
