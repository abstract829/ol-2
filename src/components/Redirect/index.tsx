import { FC, useEffect } from "react";
import { useRouter } from "next/router";

import Loader from "components/Loader";

interface props {
  to: string;
}

const Redirect: FC<props> = ({ to }) => {
  const router = useRouter();

  useEffect(() => {
    router.push(to);
  }, [to, router]);

  return <Loader />;
};

export default Redirect;
