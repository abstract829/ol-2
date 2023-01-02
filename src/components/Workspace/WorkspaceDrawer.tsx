import { Box } from "@mui/material";
import { ReactNode } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { BsQuestionCircle } from "react-icons/bs";

interface props {
  toggleDrawer: boolean;
  children: ReactNode | ReactNode[];
  handleDrawer: () => void;
  toggleFullscreen: boolean;
}

const WorkspaceDrawer = ({
  toggleDrawer,
  children,
  handleDrawer,
  toggleFullscreen,
}: props) => {
  return (
    <Box
      className="custom-scrollbar"
      sx={{
        // visibility: toggleDrawer ? "visible" : "hidden",
        width: toggleDrawer ? 700 : 100,
        backgroundColor: "#07021E",
        height: `calc(100vh - ${toggleFullscreen ? "0px" : "120px"})`,
        transition: "all 0.2s ease-in-out",
      }}
    >
      {toggleDrawer ? (
        children
      ) : (
        <div style={{ padding: "3.45em 1em 0 1em" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1em",
            }}
          >
            <BsQuestionCircle
              style={{ color: "white", fontSize: 30, cursor: "pointer" }}
            />
            <AiOutlineRight
              style={{ color: "white", fontSize: 30, cursor: "pointer" }}
              onClick={handleDrawer}
            />
          </Box>
        </div>
      )}
    </Box>
  );
};

export default WorkspaceDrawer;
