import { AppBar, Toolbar, useMediaQuery } from "@mui/material";
import { Workspace } from "interfaces/WorkspaceDataApiResponse.interface";
import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";

interface props {
  fixed?: boolean;
}
const MyAppBar = ({ fixed }: props) => {
  const isDesktop = useMediaQuery("(min-width:830px)");

  return (
    <AppBar
      position={fixed ? "fixed" : "static"}
      style={{ backgroundColor: "#07021E" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {isDesktop && (
          <Link href="/">
            <Image
              width={120}
              height={50}
              style={{ objectFit: "contain" }}
              src="/assets/logo-light.png"
              alt="logo"
            />
          </Link>
        )}

        <NavItems />
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
