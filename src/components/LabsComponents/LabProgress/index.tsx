import { Box } from "@mui/material";
import NextBtn from "components/Buttons/NextBtn";
import { useRouter } from "next/router";

const LabProgress = ({ id }) => {
  const router = useRouter();

  const navigateToWorkspace = () => {
    router.push(`/labs/workspace/${id}`);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#242640",
        borderRadius: 1,
        color: "white",
        padding: "2em",
      }}
    >
      <div style={{ display: "flex", gap: "1em" }}>
        <div>
          <h3>Progress</h3>
          <span>0 / 100</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <NextBtn
            text="Run laboratory"
            style={{ width: 180 }}
            onClick={navigateToWorkspace}
          />
        </div>
      </div>
    </Box>
  );
};

export default LabProgress;
