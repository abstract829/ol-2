import { Typography } from "@mui/material";

const LabModalDescription = ({ description }) => (
  <>
    <Typography variant="h5" style={{ color: "white", marginBottom: "0.5em" }}>
      Lab description
    </Typography>
    <Typography variant="body2" style={{ color: "white" }}>
      {description}
    </Typography>
  </>
);

export default LabModalDescription;
