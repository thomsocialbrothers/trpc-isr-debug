import type { AppType } from "next/app";
import { trpc } from "../src/trpcUtil";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default trpc.withTRPC(MyApp);
