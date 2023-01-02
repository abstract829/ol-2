import { NextPageWithLayout } from "../../_app";
import { useRouter } from "next/router";
import Image from "next/image";

import MainLayout from "layout/MainLayout";

import { key as labsKey, useQueryLab } from "hooks/labs";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { fetchLab } from "services/labs";

import { CardMedia, Grid } from "@mui/material";

import AuthGuard from "components/AuthGuard";
import Loader from "components/Loader";
import LabModalDescription from "components/LabsComponents/LabModal/LabModalDescription";
import LabModalInfoItem from "components/LabsComponents/LabModal/LabModalInfoItem";
import MyTag from "components/MyTag";
import MyAccordion from "components/Accordion";
import Redirect from "components/Redirect";
import LabProgress from "components/LabsComponents/LabProgress";
import SaveForLatter from "components/Buttons/SaveForLatter";

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

const LabInfoPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useQueryLab({ id });

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Redirect to="/404" />;
  }
  const lab = data?.data;

  const myAccordionData = [
    {
      title: "Diagrams",
      content: (
        <>
          {lab?.diagrams?.map((diagram, idx) => (
            <LabModalInfoItem key={idx} text="Name:" desc={diagram.name} />
          ))}
        </>
      ),
    },
    {
      title: "Steps to install",
    },
    {
      title: "Documentation",
    },
    {
      title: "Challenges",
    },
  ];

  return (
    <Grid container spacing={2} sx={{ padding: "1em 0" }}>
      <CardMedia
        component="img"
        height="250"
        image="https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        alt="Lab image"
        style={{ marginBottom: "2em" }}
      />
      <Grid item xs={7}>
        <div style={{ display: "flex", gap: "2em", marginBottom: "3em" }}>
          <Image
            src={lab?.icon}
            width={75}
            height={75}
            alt="lab-category"
            style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
          />
          <div style={{ width: "100%" }}>
            <h2
              style={{
                marginBottom: "0.5em",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0.5em",
                color: "white",
              }}
            >
              {lab?.title}
            </h2>

            <div style={{ display: "flex", gap: "0.5em", color: "white" }}>
              {lab?.tags.map((tag) => (
                <MyTag key={tag} sx={{ backgroundColor: "#07021E" }}>
                  {tag}
                </MyTag>
              ))}
            </div>
          </div>
        </div>
        <LabModalDescription description={lab?.description} />
        <Grid container spacing={2} sx={{ marginTop: "2em" }}>
          <Grid
            item
            xs={6}
            sx={{ display: "flex", flexDirection: "column", gap: "0.5em" }}
          >
            <LabModalInfoItem
              text="Infraestructure:"
              desc={lab?.infrastructure}
            />
            <LabModalInfoItem text="Access:" desc={lab?.access} />
            <LabModalInfoItem
              text="Difficulty:"
              desc={`${lab?.difficulty} of 5`}
            />
            <LabModalInfoItem
              text="Repository:"
              desc={
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  href={lab?.repository}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  {lab?.repository}
                </a>
              }
            />
            <LabModalInfoItem text="Repo lab path:" desc={lab?.repo_lab_path} />
            <LabModalInfoItem
              text="References:"
              desc={lab?.references?.map((ref, idx) => (
                <a
                  key={idx}
                  style={{ color: "white", textDecoration: "none" }}
                  href={ref.url}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  {lab.references.length > 1 &&
                  idx + 1 !== lab.references.length
                    ? `${ref.title}, `
                    : ref.title}
                </a>
              ))}
            />
            <LabModalInfoItem
              text="Software:"
              desc={lab?.software?.map((soft, idx) => (
                <a
                  key={idx}
                  style={{ color: "white", textDecoration: "none" }}
                  href={soft.url}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  {lab.software.length > 1 ? `${soft.name}, ` : soft.name}
                </a>
              ))}
            />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: "flex", flexDirection: "column", gap: "0.5em" }}
          >
            <LabModalInfoItem
              text="Skills required:"
              desc={lab?.skills_required?.join(", ")}
            />
            <LabModalInfoItem
              text="Skills to learn:"
              desc={lab?.skills_learn?.join(", ")}
            />
            <LabModalInfoItem text="Time:" desc={`${lab?.time} hour`} />
          </Grid>
        </Grid>

        <MyAccordion data={myAccordionData} style={{ marginTop: "3em" }} />
      </Grid>
      <Grid item xs={5}>
        <LabProgress id={id} />
        <SaveForLatter sx={{ marginTop: "2em" }} />
      </Grid>
    </Grid>
  );
};

LabInfoPage.getLayout = function getLayout(page) {
  return (
    <AuthGuard>
      <MainLayout>{page}</MainLayout>
    </AuthGuard>
  );
};
export default LabInfoPage;
