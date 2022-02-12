import Link from "next/link";
import { memo } from "react";

export type Center = {
  center?: "account" | string | JSX.Element;
};

export const Center = memo<Center>((props) => {
  if (!props.center) {
    return null;
  }

  if (props.center === "account") {
    return (
      <Link href="/setting/qin">
        <a>Icon</a>
      </Link>
    );
  }

  if (typeof props.center === "string") {
    return <div className="text-xl font-bold">{props.center}</div>;
  }

  return props.center;
});

Center.displayName = "Center";
