import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";

import TextAction from "components/TextAction";
import { useRouter } from "next/router";

const PathCardActions = ({ handleOpen, handleShareOpen, id }) => {
  const router = useRouter();
  const navigateToPath = () => {
    router.push(`/path-career/${id}`);
  };
  return (
    <CardActions
      disableSpacing
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <IconButton aria-label="view-more" onClick={handleOpen}>
        <TextAction onClick={navigateToPath}>View labs</TextAction>
      </IconButton>
      <IconButton aria-label="share" onClick={handleShareOpen}>
        <ShareIcon style={{ color: "white" }} />
      </IconButton>
    </CardActions>
  );
};

export default PathCardActions;
