import { Button } from "@mui/material";
import { FC } from "react";
import { ReactNode } from "react-markdown/lib/ast-to-react";

interface props {
  children?: ReactNode[] | ReactNode;
  style?: {};
  [x: string]: any;
}

const DefaultButton: FC<props> = ({ children, style, ...rest }) => {
  return (
    <Button
      style={{
        background: "black",
        color: "white",
        textTransform: "none",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default DefaultButton;
