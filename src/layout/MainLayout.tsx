import Box from "@mui/material/Box";

import PlanAdvice from "components/PlanAdvice";
import { ReactNode } from "react";

import MyAppBar from "./MyAppBar";

interface props {
  children: ReactNode | ReactNode[];
  custom?: boolean;
}

export default function MainLayout({ children, custom }: props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MyAppBar />
      <PlanAdvice />
      {custom ? (
        children
      ) : (
        <main
          style={{
            backgroundColor: "#1C192E",
            minHeight: "100vh",
            padding: "1em 3em",
          }}
        >
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "1em 0 5em 0",
            }}
          >
            {children}
          </div>
        </main>
      )}
    </Box>
  );
}
