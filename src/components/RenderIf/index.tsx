import { FC, ReactNode } from "react";

interface props {
  isTrue: boolean;
  children: ReactNode[] | ReactNode;
}

const RenderIf: FC<props> = ({ isTrue, children }) => {
  return <>{isTrue ? children : null}</>;
};

export default RenderIf;
