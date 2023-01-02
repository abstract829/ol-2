import { NextPageWithLayout } from "./_app";

import { useAuth0 } from "@auth0/auth0-react";

import MainLayout from "layout/MainLayout";

import { Box } from "@mui/material";

import AuthGuard from "components/AuthGuard";
import AvailableLabs from "components/LabsComponents/AvailableLabs";
import UpgradeYourPlan from "components/UpgradeYourPlan";

import { key as labsKey, useQueryLabs } from "hooks/labs";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { fetchLabs } from "services/labs";
import Loader from "components/Loader";
import Redirect from "components/Redirect";

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([labsKey], () => fetchLabs({ total: 3 }));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const HomePage: NextPageWithLayout = () => {
  const { user } = useAuth0();
  const { data, isLoading, isError } = useQueryLabs({ total: 3 });
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Redirect to="/404" />;
  }
  return (
    <div>
      <h2>Hola {user?.given_name}!</h2>
      <h3>Labs available in your free plan</h3>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "2em 0.5em",
        }}
      >
        {data?.data.length > 0 && <AvailableLabs labs={data?.data} />}

        <UpgradeYourPlan />
      </Box>
    </div>
  );
};

HomePage.getLayout = function getLayout(page) {
  return (
    <AuthGuard>
      <MainLayout>{page}</MainLayout>
    </AuthGuard>
  );
};
export default HomePage;
