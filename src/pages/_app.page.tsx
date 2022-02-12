import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { memo } from "react";
import { Toaster } from "react-hot-toast";

import { useAddClassToBodyElem } from "./_app/useAddClassToBodyElem";
import { useSessionRouter } from "./_app/useSessionRouter";

const App = (props: AppProps) => {
  useSessionRouter(props.router.asPath);
  useAddClassToBodyElem("dark:bg-zinc-800 dark:text-white");

  return (
    <ThemeProvider attribute="class">
      <DefaultSeo
      // additionalLinkTags={[
      //   {
      //     rel: "icon",
      //     type: "image/png",
      //     sizes: "32x32",
      //     href: "/favicon-32x32.png",
      //   },
      //   {
      //     rel: "icon",
      //     type: "image/png",
      //     sizes: "16x16",
      //     href: "/favicon-16x16.png",
      //   },
      //   {
      //     rel: "apple-touch-icon",
      //     href: "/apple-touch-icon.png",
      //     sizes: "180x180",
      //   },
      //   { rel: "manifest", href: "/site.webmanifest" },
      // ]}
      // titleTemplate="%s - タイトル"
      // defaultTitle="タイトル"
      // description="サイトの説明"
      // canonical="サイトのURL"
      // openGraph={{
      //   type: "website",
      //   locale: props.router.locale,
      //   site_name: "サイトの名前",
      //   description: "サイトの説明",
      //   url: "サイトのURL",
      //   images: [
      //     {
      //       url: "https://www.~/logo/1200x630.png",
      //       width: 1200,
      //       height: 630,
      //       alt: "",
      //     },
      //   ],
      // }}
      />
      <props.Component {...props.pageProps} />
      <Toaster
        toastOptions={{
          className: "!rounded-full !py-1 !px-2.5 !text-sm font-bold",
        }}
      />
    </ThemeProvider>
  );
};

export default memo(App);
