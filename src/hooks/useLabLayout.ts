import { useState } from "react";

const useLabLayout = () => {
  const [open, setOpen] = useState<boolean>(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return { open, handleDrawerClose, handleDrawerOpen };
};

export default useLabLayout;
