import { FC } from "react";

import RenderIf from "components/RenderIf";
import StepDescription from "./StepDescription";
import StepsButtons from "./StepsButtons";

import { Challenges } from "interfaces/LabApiResponse.interface";

import useLabSteps from "hooks/useLabSteps";

interface props {
  docs: Challenges;
}

const CustomStepper: FC<props> = ({ docs }) => {
  const { intro, steps, finish, prevStep, nextStep, step, markdown } =
    useLabSteps({ docs });

  return (
    <RenderIf isTrue={docs !== null}>
      <RenderIf isTrue={step === 0}>
        <StepDescription title={intro?.title} markdown={markdown} />
      </RenderIf>
      <RenderIf isTrue={step > 0 && step < steps?.length + 1}>
        <StepDescription title={steps[step - 1]?.title} markdown={markdown} />
      </RenderIf>
      <RenderIf isTrue={step === steps?.length + 1}>
        <StepDescription title={finish?.title} markdown={markdown} />
      </RenderIf>
      <StepsButtons nextStep={nextStep} prevStep={prevStep} step={step} />
    </RenderIf>
  );
};

export default CustomStepper;
