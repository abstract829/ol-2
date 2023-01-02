import { useEffect, useState } from "react";

const useLabSteps = ({ docs }) => {
  const [step, setStep] = useState<number>(0);
  const intro = docs?.details?.intro;
  const steps = docs?.details?.steps;
  const finish = docs?.details?.finish;
  const [markdown, setMarkdown] = useState<string>("");

  const nextStep = () => {
    if (step > steps?.length) return;
    setStep(step + 1);
  };

  const prevStep = () => {
    if (step - 1 < 0) return;
    setStep(step - 1);
  };

  useEffect(() => {
    if (docs) {
      fetch(docs.details.intro.text)
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    }
  }, [docs]);

  useEffect(() => {
    let mdToFetch: string = "";

    if (step === 0) {
      mdToFetch = intro?.text;
    } else if (step > steps?.length) {
      mdToFetch = finish?.text;
    } else {
      mdToFetch = steps[step - 1]?.text;
    }

    fetch(mdToFetch)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, [step, finish?.text, intro?.text, steps]);

  return { intro, steps, finish, docs, prevStep, nextStep, step, markdown };
};

export default useLabSteps;
