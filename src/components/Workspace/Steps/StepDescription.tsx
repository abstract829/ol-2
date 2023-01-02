import { Box, Typography } from "@mui/material";
import { FC } from "react";

import ReactMarkdown from "react-markdown";

interface props {
  markdown: string;
  title: string;
}

const StepDescription: FC<props> = ({ markdown, title }) => {
  return (
    <Box sx={{ color: "white", marginTop: "2em" }}>
      <Typography variant="h6" sx={{ marginBottom: "1em" }}>
        {title}
      </Typography>

      <ReactMarkdown>{markdown}</ReactMarkdown>
    </Box>
  );
};

export default StepDescription;
