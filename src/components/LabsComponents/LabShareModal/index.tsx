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

import { LabsData } from "interfaces/LabsApiResponse.interface";
import {
  BsGithub,
  BsLinkedin,
  BsReddit,
  BsTelegram,
  BsTwitter,
} from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BiPaperclip } from "react-icons/bi";
import DefaultButton from "components/Buttons/DefaultButton";

import { Box } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";

interface props {
  lab: LabsData;
  handleClose: () => void;
  open: boolean;
}

const LabShareModal: FC<props> = ({ lab, handleClose, open }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText("https://www.onlylabs.io/examplelab?1345");
    toast("Copied to clipboard!", { type: "success" });
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      maxWidth="lg"
    >
      <DialogContent
        style={{ backgroundColor: "#2F314F", width: 400, padding: "1em 2em" }}
      >
        <Typography
          variant="h5"
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Share via
          <AiOutlineClose
            style={{ cursor: "pointer", fontSize: 16 }}
            onClick={handleClose}
          />
        </Typography>
        <div style={{ display: "flex", gap: "2.5em", marginTop: "1.5em" }}>
          <BsTwitter
            style={{ color: "white", fontSize: 25, cursor: "pointer" }}
          />
          <BsGithub
            style={{ color: "white", fontSize: 25, cursor: "pointer" }}
          />
          <BsLinkedin
            style={{ color: "white", fontSize: 25, cursor: "pointer" }}
          />
          <FaDiscord
            style={{ color: "white", fontSize: 25, cursor: "pointer" }}
          />
          <BsReddit
            style={{ color: "white", fontSize: 25, cursor: "pointer" }}
          />
          <BsTelegram
            style={{ color: "white", fontSize: 25, cursor: "pointer" }}
          />
        </div>
        <Typography
          variant="body2"
          style={{ color: "white", marginTop: "2em" }}
        >
          Or copy link
        </Typography>
        <Box
          sx={{
            border: "1px solid rgba(255,255,255,0.5)",
            borderRadius: "0.5em",
            backgroundColor: "#2F314F",
            display: "flex",
            alignItems: "center",
            gap: "0.5em",
            marginTop: "1em",
            padding: "0.5em",
          }}
        >
          <BiPaperclip
            style={{ color: "white", cursor: "pointer", fontSize: 20 }}
            onClick={handleCopyToClipboard}
          />
          <input
            className="no-outline"
            style={{
              padding: "0.5em",
              color: "white",
              backgroundColor: "#2F314F",
              border: 0,
              width: 230,
            }}
            type="text"
            readOnly
            value="https://www.onlylabs.io/examplelab?1345"
          />
          <DefaultButton
            style={{ backgroundColor: "#F6104E" }}
            onClick={handleCopyToClipboard}
          >
            Copy
          </DefaultButton>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LabShareModal;
