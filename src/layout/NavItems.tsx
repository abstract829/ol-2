import { BiLogOut, BiUser } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { BsFlag, BsGrid } from "react-icons/bs";
import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import { useQueryWorkspace } from "hooks/workspaces";
import DefaultButton from "components/Buttons/DefaultButton";
import { Home } from "@mui/icons-material";

const items = [
  { name: "Home", icon: <Home style={{ fontSize: 18 }} />, href: "/" },
  { name: "View all labs", icon: <BsGrid />, href: "/labs" },
  {
    name: "Path career",
    icon: <BsFlag style={{ fontSize: 14 }} />,
    href: "/path-career",
  },
  {
    name: "Upgrade your features here",
    icon: <AiOutlineStar style={{ fontSize: 16 }} />,
    href: "/plans",
  },
  {
    name: "My account",
    icon: <BiUser style={{ fontSize: 16 }} />,
    href: "/my-account",
  },
];

const NavItems = () => {
  const { logout, getAccessTokenSilently } = useAuth0();
  const router = useRouter();
  const { data: workspace } = useQueryWorkspace(getAccessTokenSilently, false);
  const navigateToCurrentWorkspace = () => {
    router.push(`/labs/workspace/${workspace?.data?.lab_id}`);
  };
  return (
    <ul
      style={{
        display: "flex",
        gap: "2em",
        listStyleType: "none",
        alignItems: "center",
        fontSize: 14,
      }}
    >
      {workspace?.data && (
        <DefaultButton
          onClick={navigateToCurrentWorkspace}
          style={{
            backgroundColor: "#f6104e",
            borderRadius: "2em",
            padding: "0.3em 1em",
          }}
        >
          Current lab
        </DefaultButton>
      )}
      {items.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href}
            style={{
              color: "white",
              textDecoration: "none",
              borderBottom:
                router.pathname === item.href ? "2px solid #F6104E" : "none",
              display: "flex",
              alignItems: "center",
              gap: "0.5em",
            }}
          >
            {item.icon} {item.name}
          </Link>
        </li>
      ))}
      <li style={{ display: "flex", alignItems: "center" }}>
        <BiLogOut
          style={{ fontSize: 16, cursor: "pointer" }}
          onClick={() => logout()}
        />
      </li>
    </ul>
  );
};

export default NavItems;
