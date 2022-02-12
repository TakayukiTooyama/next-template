import { Layout } from "src/layout";

const Custom404 = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center gap-6">
        <div className="mt-10 text-7xl font-bold sm:mt-40 sm:text-9xl">404</div>
        <div className="text-2xl font-bold sm:text-3xl">お探しのページが見つかりませんでした</div>
      </div>
    </Layout>
  );
};

export default Custom404;
