import Typography from "@mui/material/Typography";
import Image from "next/image";

const PathCardTitle = ({ title, icon }) => {
  return (
    <Typography
      variant="h6"
      style={{
        marginBottom: "0.5em",
        display: "flex",
        alignItems: "center",
        gap: "0.5em",
      }}
    >
      <Image
        src={icon}
        width={20}
        height={20}
        alt="lab-category"
        style={{ filter: "brightness(0) invert(1)", objectFit: "contain" }}
      />
      {title}
    </Typography>
  );
};

export default PathCardTitle;
