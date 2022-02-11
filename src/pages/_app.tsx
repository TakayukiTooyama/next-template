import "@/styles/globals.css";

import type { AppProps } from "next/app";

export const App = (props: AppProps) => {
  return <props.Component {...props.pageProps} />;
};
