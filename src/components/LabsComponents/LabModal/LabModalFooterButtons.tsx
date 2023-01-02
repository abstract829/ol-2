import DefaultButton from "components/Buttons/DefaultButton";
import TextAction from "components/TextAction";
import { LabsData } from "interfaces/LabsApiResponse.interface";
import { useRouter } from "next/router";

interface props {
  lab: LabsData;
}

const LabModalFooterButtons = ({ lab }: props) => {
  const router = useRouter();
  const navigateToLab = () => {
    router.push(`/labs/${lab._id}`);
  };
  const navigateToWorkspace = () => {
    router.push(`/labs/workspace/${lab._id}`);
  };
  return (
    <>
      <TextAction sx={{ fontSize: 16 }} onClick={navigateToLab}>
        Open full info
      </TextAction>

      <DefaultButton
        style={{
          backgroundColor: "#F6104E",
          padding: "0.5em 2em",
        }}
        onClick={navigateToWorkspace}
      >
        <TextAction sx={{ textDecoration: "none" }}>Run laboratory</TextAction>
      </DefaultButton>
    </>
  );
};

export default LabModalFooterButtons;
