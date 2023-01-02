import { useEffect, useState } from "react";

import { NextPageWithLayout } from "../_app";

import { dehydrate, QueryClient } from "@tanstack/react-query";

import { Clear, Search } from "@mui/icons-material";
import { Grid, InputAdornment, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";

import MainLayout from "layout/MainLayout";

import {
  key as labsKey,
  useQueryLabCategories,
  useQueryLabs,
} from "hooks/labs";
import useSearchLabs from "hooks/useSearchLabs";

import { fetchLabs } from "services/labs";

import AuthGuard from "components/AuthGuard";
import LabsList from "components/LabsComponents/LabsList";
import Loader from "components/Loader";
import MyTag from "components/MyTag";
import Redirect from "components/Redirect";
import useSearchPathCareers from "hooks/useSearchPathCareers";
import PathsList from "components/PathCareers/PathsList";
import UpgradeYourPlan from "components/UpgradeYourPlan";

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([labsKey], () => fetchLabs({ total: 3 }));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const PathCareerPage: NextPageWithLayout = () => {
  const {
    handleChange,
    handleRefetch,
    resetSearch,
    categories,
    paths,
    isSearching,
    currentSearchWord,
    showClearIcon,
    selectedCategory,
    setSelectedCategory,
    searchValue,
    loadMorePaths,
  } = useSearchPathCareers();

  // if (isLoading) {
  //   return <Loader />;
  // }
  // if (isError) {
  //   return <Redirect to="/404" />;
  // }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          sx={{ maxWidth: 400 }}
          type="text"
          size="small"
          variant="standard"
          placeholder="Search..."
          value={searchValue}
          onChange={handleChange}
          onKeyDown={handleRefetch}
          InputProps={{
            sx: {
              color: "white",
              borderBottom: "1px solid white",
              "&::after": { borderBottom: "0" },
            },
            startAdornment: (
              <InputAdornment position="start">
                <Search
                  style={{ color: "white", cursor: "pointer" }}
                  onClick={handleRefetch}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position="end"
                style={{ display: showClearIcon }}
                onClick={resetSearch}
              >
                <Clear style={{ cursor: "pointer", color: "white" }} />
              </InputAdornment>
            ),
          }}
        />

        <Box sx={{ display: "flex", gap: "1em", marginTop: "2em" }}>
          <MyTag
            sx={{
              backgroundColor: selectedCategory === "" ? "#7506F7" : "#07021E",
              cursor: "pointer",
              borderRadius: "0.5em",
              padding: "0.5em 1.5em",
            }}
            onClick={() => setSelectedCategory("")}
          >
            All
          </MyTag>
          {categories?.data?.map((category) => (
            <MyTag
              key={category}
              sx={{
                backgroundColor:
                  selectedCategory === category ? "#7506F7" : "#07021E",
                cursor: "pointer",
                borderRadius: "0.5em",
                padding: "0.5em 1.5em",
              }}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </MyTag>
          ))}
        </Box>

        {currentSearchWord && isSearching && (
          <h3>Search results for &quot;{currentSearchWord}&quot;</h3>
        )}

        {selectedCategory && (
          <h3>Career paths in &quot;{selectedCategory}&quot;</h3>
        )}
      </Grid>
      <Grid item xs={8}>
        <PathsList paths={paths?.data} loadMorePaths={loadMorePaths} />
      </Grid>
      <Grid item xs={4}>
        <UpgradeYourPlan />
      </Grid>
    </Grid>
  );
};
PathCareerPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default PathCareerPage;
