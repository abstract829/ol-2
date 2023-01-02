import { FC, useRef } from "react";

import { VncScreen } from "react-vnc";

import useVnc from "hooks/useVnc";
import { Workspace } from "interfaces/WorkspaceDataApiResponse.interface";

interface props {
  isDrawerOpen: boolean;
  workspace: Workspace;
  toggleFullscreen: boolean;
}

const LabVNC: FC<props> = ({ isDrawerOpen, workspace, toggleFullscreen }) => {
  const { vncWidth } = useVnc({ isDrawerOpen, toggleFullscreen });
  const ref = useRef();
  return (
    <>
      {workspace && (
        <VncScreen
          resizeSession
          scaleViewport
          rfbOptions={{ credentials: { password: workspace?.vdi_password } }}
          url={workspace?.wss_vdi_uri}
          background="#000000"
          style={{
            width: vncWidth,
            height: `calc(100vh - ${toggleFullscreen ? "100px" : "280px"})`,
            margin: "0 auto",
          }}
          ref={ref}
        />
      )}
    </>
  );
};

export default LabVNC;
