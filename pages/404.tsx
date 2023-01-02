import MainLayout from "layout/MainLayout";

import AuthGuard from "components/AuthGuard";

import { NextPageWithLayout } from "./_app";
import ResultScreen from "components/ResultScreen";

const ErrorPage: NextPageWithLayout = () => {
  return (
    <ResultScreen
      variant="error"
      title="404"
      subtitle="Page not found"
      text="The page you are looking for doesn't exist or an other error occurred."
      buttonText="Go to home"
      buttonHref="/"
    />
  );
};

ErrorPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default ErrorPage;
