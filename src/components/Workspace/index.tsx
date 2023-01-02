import { Box, CircularProgress } from "@mui/material";
import CheckBtn from "components/Buttons/CheckBtn";

import { LabsData } from "interfaces/LabsApiResponse.interface";
import { useState } from "react";
import WorkspaceDrawer from "./WorkspaceDrawer";
import WorkspaceDrawerHeader from "./WorkspaceDrawerHeader";
import CustomStepper from "components/Workspace/Steps";
import { Workspace } from "interfaces/WorkspaceDataApiResponse.interface";
import dynamic from "next/dynamic";
interface props {
  lab?: LabsData;
  hasWorkspace?: boolean;
  isInstalling?: boolean;
  workspace?: Workspace;
  toggleFullscreen?: boolean;
  handleFullScreen?: () => void;
}

const NoSSRVNC = dynamic(() => import("./LabVNC"), {
  ssr: false,
});

const WorkspaceContent = ({
  lab,
  hasWorkspace,
  workspace,
  isInstalling,
  toggleFullscreen,
  handleFullScreen,
}: props) => {
  const [toggleDrawer, setToggleDrawer] = useState(true);
  const handleDrawer = () => {
    setToggleDrawer(!toggleDrawer);
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "#07021E" }}>
      <WorkspaceDrawer
        toggleDrawer={toggleDrawer}
        handleDrawer={handleDrawer}
        toggleFullscreen={toggleFullscreen}
      >
        <section style={{ padding: "3em 2em" }}>
          <WorkspaceDrawerHeader
            lab={lab}
            handleDrawer={handleDrawer}
            handleFullScreen={handleFullScreen}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "1em",
            }}
          >
            <CheckBtn />
          </div>
          <CustomStepper docs={lab?.docs} />
        </section>
      </WorkspaceDrawer>

      <main
        style={{
          backgroundColor: "#1C192E",
          width: "100%",
          minHeight: "calc(100vh - 120px)",
          padding: "3em 3em 0em 3em",
        }}
      >
        {isInstalling && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CircularProgress />
            <h4 style={{ color: "white" }}>
              Lab is being installed, please wait...
            </h4>
          </div>
        )}

        {hasWorkspace && !isInstalling && (
          <>
            <section style={{ marginTop: "1em" }}>
              <NoSSRVNC
                workspace={workspace}
                isDrawerOpen={toggleDrawer}
                toggleFullscreen={toggleFullscreen}
              />
            </section>
          </>
        )}
      </main>
    </Box>
  );
};

export default WorkspaceContent;
