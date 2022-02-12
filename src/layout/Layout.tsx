import type { ReactNode, VFC } from "react";

import type { HeaderProps } from "./Header";
import { Header } from "./Header";

type Props = HeaderProps & { children: ReactNode; isHeaderNarrow?: boolean };

export const Layout: VFC<Props> = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { children, ...rest } = props;

  return (
    <div className="space-y-8 pt-4 pb-20 sm:space-y-14">
      <Header {...rest} />
      <main className="mx-auto w-full max-w-screen-sm px-4">{children}</main>
    </div>
  );
};
