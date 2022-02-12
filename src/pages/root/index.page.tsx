import type { NextPage } from "next";
import { Layout } from "src/layout";

const Root: NextPage = () => {
  return (
    <Layout left="memo" center="タイトル" right={["profile"]}>
      contents
    </Layout>
  );
};

export default Root;
