import { Box } from "@mui/material";
import DefaultButton from "components/Buttons/DefaultButton";
import { BiLeftArrowAlt } from "react-icons/bi";

interface props {
  toggleDrawer: boolean;
  toggleFullscreen: boolean;
  handleFullScreen: () => void;
}

const WorkspaceContentHeader = ({
  toggleDrawer,
  toggleFullscreen,
  handleFullScreen,
}: props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: toggleFullscreen ? "1em 2em 0em 2em" : "0",
      }}
    >
      {(toggleDrawer || toggleFullscreen) && (
        <DefaultButton
          style={{ padding: "0.5em 2em", fontSize: 16 }}
          onClick={handleFullScreen}
        >
          {toggleFullscreen ? "Exit fullscreen" : "Fullscreen"}
        </DefaultButton>
      )}

      {!toggleDrawer && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1em",
            color: "white",
          }}
        >
          <BiLeftArrowAlt style={{ fontSize: 20 }} />
          <span>View your current lab information</span>
        </Box>
      )}

      {!toggleFullscreen && (
        <DefaultButton style={{ padding: "0.5em 2em", fontSize: 16 }}>
          Finish
        </DefaultButton>
      )}
    </div>
  );
};

export default WorkspaceContentHeader;
