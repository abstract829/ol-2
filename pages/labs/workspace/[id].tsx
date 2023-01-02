import { NextPage } from "next";
import { useRouter } from "next/router";
import WorkspaceContent from "components/Workspace";

import { key as labsKey, useQueryLab } from "hooks/labs";

import { dehydrate, QueryClient, useQueryClient } from "@tanstack/react-query";
import { fetchLab } from "services/labs";
import Loader from "components/Loader";
import Redirect from "components/Redirect";
import { useQueryWorkspace, useInstallLabInWorkspace } from "hooks/workspaces";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import MainLayout from "layout/MainLayout";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([labsKey], () => fetchLab({ id }));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const LabPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { getAccessTokenSilently } = useAuth0();
  const { data, isLoading, isError } = useQueryLab({ id });
  const [hasWorkspace, setHasWorkspace] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);
  const [toggleFullscreen, setToggleFullscreen] = useState(false);

  const { data: workspace } = useQueryWorkspace(
    getAccessTokenSilently,
    hasWorkspace
  );
  const { mutate: installLabInWorkspace } = useInstallLabInWorkspace();

  const handleFullScreen = () => {
    setToggleFullscreen(!toggleFullscreen);
  };

  useEffect(() => {
    if (
      !hasWorkspace &&
      !isInstalling &&
      workspace &&
      (!workspace?.data || workspace?.data?.lab_id !== id)
    ) {
      setHasWorkspace(false);
      installLabInWorkspace({ id: id as string, getAccessTokenSilently });
      setIsInstalling(true);
    }
  }, [
    id,
    installLabInWorkspace,
    getAccessTokenSilently,
    hasWorkspace,
    isInstalling,
    workspace,
  ]);

  useEffect(() => {
    if (workspace?.data?.lab_id === id) {
      setHasWorkspace(true);
      setIsInstalling(false);
    }
  }, [workspace, id]);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Redirect to="/404" />;
  }
  const lab = data?.data;
  return (
    <>
      {lab && (
        <>
          {toggleFullscreen ? (
            <div style={{ backgroundColor: "#1c192e", height: "100vh" }}>
              <WorkspaceContent
                lab={lab}
                workspace={workspace?.data}
                hasWorkspace={hasWorkspace}
                isInstalling={isInstalling}
                toggleFullscreen={toggleFullscreen}
                handleFullScreen={handleFullScreen}
              />
            </div>
          ) : (
            <MainLayout custom>
              <WorkspaceContent
                lab={lab}
                workspace={workspace?.data}
                hasWorkspace={hasWorkspace}
                isInstalling={isInstalling}
                toggleFullscreen={toggleFullscreen}
                handleFullScreen={handleFullScreen}
              />
            </MainLayout>
          )}
        </>
      )}
    </>
  );
  // return <>{typeof window !== "undefined" && <LabPageLayoutWithNoSSR />}</>;
};

export default LabPage;
