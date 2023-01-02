import { NextPageWithLayout } from "../_app";

import MainLayout from "layout/MainLayout";

import { Box, Grid } from "@mui/material";

import AuthGuard from "components/AuthGuard";
import UpgradeYourPlan from "components/UpgradeYourPlan";
import TextAction from "components/TextAction";
import ProfileItem from "components/ProfileItem";

import { useAuth0 } from "@auth0/auth0-react";
import { useQueryUser } from "hooks/users";

import Loader from "components/Loader";
import Redirect from "components/Redirect";
import ResetPasswordModal from "components/ResetPasswordModal";

const MyAccountPage: NextPageWithLayout = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const { data, isLoading, isError } = useQueryUser(getAccessTokenSilently);
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Redirect to="/404" />;
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h1>My account</h1>
          <Box
            sx={{
              backgroundColor: "#07021E",
              padding: "2em",
              height: 280,
              width: 550,
            }}
          >
            <h2>Profile</h2>

            <ProfileItem tag="Name" text={user?.given_name} />
            <ProfileItem tag="Email" text={user?.email} />

            {data && <ResetPasswordModal user={data} />}
          </Box>
          <Box
            sx={{
              backgroundColor: "#07021E",
              padding: "2em",
              height: 280,
              width: 550,
              marginTop: "3em",
            }}
          >
            <h2>Active plan</h2>

            <ProfileItem tag="Suscribed plan" text={"none"} />
            <ProfileItem tag="Active since" text={"none"} />

            <TextAction>Change plan</TextAction>
          </Box>
        </Grid>

        <Grid item xs={4} sx={{ marginTop: "2em" }}>
          <UpgradeYourPlan />
        </Grid>
      </Grid>
    </div>
  );
};
MyAccountPage.getLayout = function getLayout(page) {
  return (
    <AuthGuard>
      <MainLayout>{page}</MainLayout>
    </AuthGuard>
  );
};
export default MyAccountPage;
