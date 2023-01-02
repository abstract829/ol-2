import { CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { useRouter } from "next/router";
import { AiOutlineArrowRight } from "react-icons/ai";

const ViewMoreLabs = () => {
  const router = useRouter();
  return (
    <>
      <Card
        sx={{
          width: 350,
          height: 300,
          "&:hover": { scale: "101%" },
          backgroundColor: "#07021E",
          color: "white",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => router.push("/labs")}
      >
        <CardContent
          style={{
            width: "100%",
          }}
        >
          <Typography
            variant="h6"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1em",
            }}
          >
            View more labs
            <AiOutlineArrowRight style={{ fontSize: 24 }} />
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
export default ViewMoreLabs;
