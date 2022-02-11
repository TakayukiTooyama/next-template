import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { memo } from "react";

const App = (props: AppProps) => {
  return <props.Component {...props.pageProps} />;
};

export default memo(App);
