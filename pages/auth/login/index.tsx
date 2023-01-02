import { useEffect } from "react";
import { NextPage } from "next";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "components/Loader";

const LoginPage: NextPage = () => {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect({});
  }, [loginWithRedirect]);

  return <Loader />;
};

export default LoginPage;
