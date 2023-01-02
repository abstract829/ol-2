import Box from "@mui/material/Box";
import MyTag from "components/MyTag";

const PathCardCategories = ({ tags }) => {
  return (
    <Box sx={{ display: "flex", gap: "0.5em", margin: "1em 0" }}>
      {tags.slice(0, 3).map((tag) => (
        <MyTag key={tag}>{tag}</MyTag>
      ))}
    </Box>
  );
};

export default PathCardCategories;
