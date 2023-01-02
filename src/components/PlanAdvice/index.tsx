import Box from "@mui/material/Box";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
const PlanAdvice = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#10BFE8",
        padding: "1em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.1em",
      }}
    >
      <span style={{ marginRight: 10 }}>
        Upgrade your plan to access more labs and better features.
      </span>
      <Link href="/plans">See plans and prices</Link>
      <AiOutlineRight style={{ cursor: "pointer" }} />
    </Box>
  );
};

export default PlanAdvice;
