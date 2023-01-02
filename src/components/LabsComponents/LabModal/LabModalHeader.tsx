import { AiOutlineShareAlt } from "react-icons/ai";
import { Typography } from "@mui/material";
import MyTag from "components/MyTag";

const LabModalHeader = ({ title, tags, handleShareOpen }) => {
  return (
    <div style={{ width: "100%" }}>
      <Typography
        variant="h5"
        style={{
          marginBottom: "0.5em",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.5em",
          color: "white",
        }}
      >
        {title}
        <AiOutlineShareAlt
          style={{ cursor: "pointer" }}
          onClick={handleShareOpen}
        />
      </Typography>

      <div style={{ display: "flex", gap: "0.5em", color: "white" }}>
        {tags.map((tag) => (
          <MyTag key={tag}>{tag}</MyTag>
        ))}
      </div>
    </div>
  );
};

export default LabModalHeader;
