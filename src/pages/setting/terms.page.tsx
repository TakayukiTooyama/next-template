import type { NextPage } from "next";

import { Layout } from "@/layout";

const SettingTerms: NextPage = () => {
  return (
    <Layout left="back" center="利用規約">
      <div className="dark:prose-light prose prose-blue mx-auto">
        <h3>この文章は仮です</h3>
        <p>
          この規約は、サービス名（以下「弊サービス」とします）のご利用にあたって、利用規約（以下「本規約」といいます）を定めたものです。サービス名
          の利用にあたっては、本規約に必ずご同意ください。ユーザーが、サービス名
          に登録又は利用した場合は、本規約の全ての記載内容について同意したものとみなされます。
        </p>
        <h4>第１条 規約</h4>
        <ol>
          <li></li>
        </ol>

        <time>2020 年 xx 月 xx 日 改定</time>
      </div>
    </Layout>
  );
};

export default SettingTerms;
