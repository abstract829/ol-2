import { FC } from "react";

import { Button } from "@mui/material";
import PrevBtn from "components/Buttons/PrevBtn";
import NextBtn from "components/Buttons/NextBtn";

interface props {
  nextStep: () => void;
  prevStep: () => void;
  step: number;
}

const StepsButtons: FC<props> = ({ nextStep, prevStep, step }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: step > 0 ? "space-between" : "flex-end",
        marginTop: "2em",
      }}
    >
      {step > 0 && <PrevBtn onClick={prevStep} />}
      <NextBtn onClick={nextStep} />
    </div>
  );
};

export default StepsButtons;
