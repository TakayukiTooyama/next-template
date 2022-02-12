import type { NextPage } from "next";
import { Layout } from "src/layout";

import { RecursiveList } from "@/components/List";

const Setting: NextPage = () => {
  return (
    <Layout left="close" center="マイページ">
      <RecursiveList
        list={[
          {
            title: "設定",
            items: [{ label: "テーマ", href: "/setting/theme" }],
          },
          {
            title: "サポート",
            items: [
              { label: "利用規約", href: "/setting/terms" },
              { label: "プライバシーポリシー", href: "/setting/privacy" },
              { label: "お問い合わせ", href: "" },
            ],
          },
        ]}
      />
    </Layout>
  );
};

export default Setting;
