import { Card, CardContent } from "@mui/material";
import DefaultButton from "components/Buttons/DefaultButton";
import { useRouter } from "next/router";

const UpgradeYourPlan = () => {
  const router = useRouter();
  return (
    <Card
      sx={{
        width: 340,
        height: 480,
        backgroundColor: "#242640",
        color: "white",
        padding: "45px 25px",
      }}
    >
      <CardContent sx={{ width: "100%" }}>
        <h3 style={{ fontSize: "2.5em" }}>Upgrade to acces more labs</h3>

        <p>
          With your current plan you can access limited free shared
          laboratories.
        </p>

        <p>Upgrade your plan to access more labs and better features.</p>

        <DefaultButton
          style={{ width: "100%", backgroundColor: "#F6104E" }}
          onClick={() => router.push("/plans")}
        >
          See plans and prices
        </DefaultButton>
      </CardContent>
    </Card>
  );
};

export default UpgradeYourPlan;
