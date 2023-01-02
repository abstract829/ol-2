import { Box } from "@mui/material";
import DefaultButton from "components/Buttons/DefaultButton";
import { BsFlag } from "react-icons/bs";

interface props {
  locked?: boolean;
}

const LabCardLockBox = ({ locked }: props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#242640",
        padding: "0.2em 0.5em",
        borderRadius: 1,
        marginBottom: "1em",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
        <BsFlag />
        <span>Step of path career</span>
      </div>

      <DefaultButton
        style={{
          margin: 5,
          backgroundColor: locked ? "#1C192E" : "#F6104E",
        }}
      >
        {locked ? "Locked" : "Available"}
      </DefaultButton>
    </Box>
  );
};

export default LabCardLockBox;
