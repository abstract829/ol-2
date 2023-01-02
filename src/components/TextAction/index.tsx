import { AiOutlineRight } from "react-icons/ai";
import { Box } from "@mui/material";
import { ReactNode } from "react";

interface props {
  sx?: {};
  children: ReactNode[] | ReactNode;
  [x: string]: any;
}

const TextAction = ({ children, sx, ...rest }: props) => {
  return (
    <Box
      sx={{
        color: "white",
        fontSize: 14,
        textDecoration: "underline",
        display: "flex",
        alignItems: "center",
        gap: "0.5em",
        cursor: "pointer",
        ...sx,
      }}
      {...rest}
    >
      {children}
      <AiOutlineRight style={{ color: "white", fontSize: 14 }} />
    </Box>
  );
};

export default TextAction;
