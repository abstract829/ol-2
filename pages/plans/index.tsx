import { NextPageWithLayout } from "../_app";

import MainLayout from "layout/MainLayout";

import AuthGuard from "components/AuthGuard";
import { Box, Grid } from "@mui/material";
import PlanCard from "components/Plans/PlanCard";
import { BiShieldAlt2 } from "react-icons/bi";

const PlansPage: NextPageWithLayout = () => {
  return (
    <>
      <h1>Upgrade your plan to access more and better features</h1>
      <p style={{ color: "white", marginBottom: "2em" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima dicta
        inventore ullam quod ipsam aliquam architecto voluptas nam illo autem,
        consequatur officia ratione dolorem. Similique, sint veniam. Commodi,
        rerum! Eius?
      </p>
      <Grid container spacing={9}>
        <Grid item xs={4} lg={4}>
          <PlanCard
            title="Free plan"
            color="#10BFE8"
            description="You can use the platform with limited free shared labs."
            price="0"
            isFree
          />
        </Grid>
        <Grid item xs={4} lg={4}>
          <PlanCard
            title="Basic plan"
            color="#7506F7"
            description="You can use the platform with limited free shared labs."
            price="8"
          />
        </Grid>
        <Grid item xs={4} lg={4}>
          <PlanCard
            title="Premium plan"
            color="#F6104E"
            description="You can use the platform with limited free shared labs."
            price="15"
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          backgroundColor: "#FEC402",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5em",
          marginTop: "2em",
          borderRadius: 1,
        }}
      >
        <BiShieldAlt2 style={{ fontSize: 20 }} />
        <p style={{ fontSize: 14 }}>
          The subscription is charged to a credit card on a secure platform.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </Box>
    </>
  );
};
PlansPage.getLayout = function getLayout(page) {
  return (
    <AuthGuard>
      <MainLayout>{page}</MainLayout>
    </AuthGuard>
  );
};
export default PlansPage;
