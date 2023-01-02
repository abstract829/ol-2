import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";

import { AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import TextAction from "components/TextAction";

const LabCardActions = ({ handleOpen, handleShareOpen }) => {
  return (
    <CardActions
      disableSpacing
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton> */}
      <IconButton aria-label="view-more" onClick={handleOpen}>
        <TextAction>View lab</TextAction>
      </IconButton>
      <IconButton aria-label="share" onClick={handleShareOpen}>
        <ShareIcon style={{ color: "white" }} />
      </IconButton>
    </CardActions>
  );
};

export default LabCardActions;
