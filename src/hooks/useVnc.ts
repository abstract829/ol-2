import React, { useEffect, useState } from "react";
import useWindowDimensions from "./useWindowDimensions";

const useVnc = ({
  isDrawerOpen,
  toggleFullscreen,
}: {
  isDrawerOpen: boolean;
  toggleFullscreen: boolean;
}) => {
  const { width } = useWindowDimensions();
  const [vncWidth, setVncWidth] = useState<number>(800);

  useEffect(() => {
    setVncScreenWidth();
  }, [width, isDrawerOpen, toggleFullscreen]);

  const setVncScreenWidth = () => {
    if (toggleFullscreen) {
      setVncWidth(width - 50);
      return;
    }
    if (isDrawerOpen) {
      let w = width - 500;
      setVncWidth(w);
    } else {
      let w = width - 200;
      setVncWidth(w);
    }
  };

  return { vncWidth };
};

export default useVnc;
