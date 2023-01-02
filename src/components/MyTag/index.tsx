import { Box } from "@mui/material";
import { ReactNode } from "react";

interface props {
  sx?: {};
  children: ReactNode[] | ReactNode;
  [x: string]: any;
}

const MyTag = ({ sx, children, ...rest }: props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#1C192E",
        padding: "0.5em",
        fontSize: 12,
        color: "white",
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default MyTag;
