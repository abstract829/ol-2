import { FC, ReactNode } from "react";

import { useAuth0 } from "@auth0/auth0-react";

import SidebarLayout from "layout/MainLayout";

import Loader from "components/Loader";
import Redirect from "components/Redirect";

interface props {
  children: ReactNode[] | ReactNode;
}

const AuthGuard: FC<props> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <SidebarLayout>
        <Loader />
      </SidebarLayout>
    );
  }
  if (isAuthenticated) {
    return <>{children}</>;
  }
  return <Redirect to="/auth/login" />;
};

export default AuthGuard;
