import { useRouter } from "next/router";
import Image from "next/image";

import MainLayout from "layout/MainLayout";

import { dehydrate, QueryClient } from "@tanstack/react-query";

import { CardMedia, Grid, Typography } from "@mui/material";

import AuthGuard from "components/AuthGuard";
import Loader from "components/Loader";
import MyTag from "components/MyTag";
import { NextPageWithLayout } from "../../_app";
import LabCard from "components/LabsComponents/LabCard";

const PathCareerInfoPage: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <Grid container spacing={2}>
      <CardMedia
        component="img"
        height="250"
        image="https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        alt="Path image"
      />
      <Grid item xs={12}>
        <div style={{ display: "flex", gap: "2em", marginBottom: "3em" }}>
          <div
            style={{ width: 90, height: 90, backgroundColor: "#cccc" }}
          ></div>
          {/* <Image
            src=""
            width={80}
            height={80}
            alt="path-icon"
            style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
          /> */}
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
              Path career title
            </h2>

            <div style={{ display: "flex", gap: "0.5em", color: "white" }}>
              <MyTag sx={{ backgroundColor: "#07021E" }}>Category</MyTag>
              <MyTag sx={{ backgroundColor: "#07021E" }}>Difficulty</MyTag>
              <MyTag sx={{ backgroundColor: "#07021E" }}>Level</MyTag>
            </div>
          </div>
        </div>
        <Typography
          variant="h5"
          style={{ color: "white", marginBottom: "0.5em" }}
        >
          Description
        </Typography>
        <Typography variant="body2" style={{ color: "white" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur
          in nibh ut luctus. Fusce hendrerit nisl id odio aliquet consectetur.
          Vestibulum eu velit ex. Morbi velit nibh, tincidunt sit amet orci
          vitae, placerat vestibulum dui. Integer vel bibendum urna.
          Pellentesque quis porttitor mi. Quisque non magna non lacus molestie
          dapibus nec at dui. Aenean condimentum magna et purus mollis mattis.
          Fusce dictum rutrum nunc.
        </Typography>
        <Typography variant="h5" style={{ color: "white", margin: "1em 0" }}>
          Labs
        </Typography>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1em",
            justifyContent: "start",
          }}
        >
          <LabCard
            lab={{
              _id: "1",
              title: "Name of laboratory",
              description:
                "Laboratory description. Aliquam a ex sed turpis tincidunt gravida.",
              tags: ["Lab category", "Infraestructure", "Difficulty"],
            }}
            withLock
            locked={false}
          />
          <LabCard
            lab={{
              _id: "1",
              title: "Name of laboratory",
              description:
                "Laboratory description. Aliquam a ex sed turpis tincidunt gravida.",
              tags: ["Lab category", "Infraestructure", "Difficulty"],
            }}
            withLock
            locked={true}
          />
          <LabCard
            lab={{
              _id: "1",
              title: "Name of laboratory",
              description:
                "Laboratory description. Aliquam a ex sed turpis tincidunt gravida.",
              tags: ["Lab category", "Infraestructure", "Difficulty"],
            }}
            withLock
            locked={true}
          />
          <LabCard
            lab={{
              _id: "1",
              title: "Name of laboratory",
              description:
                "Laboratory description. Aliquam a ex sed turpis tincidunt gravida.",
              tags: ["Lab category", "Infraestructure", "Difficulty"],
            }}
            withLock
            locked={true}
          />
          <LabCard
            lab={{
              _id: "1",
              title: "Name of laboratory",
              description:
                "Laboratory description. Aliquam a ex sed turpis tincidunt gravida.",
              tags: ["Lab category", "Infraestructure", "Difficulty"],
            }}
            withLock
            locked={true}
          />
        </div>
      </Grid>
    </Grid>
  );
};

PathCareerInfoPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default PathCareerInfoPage;
