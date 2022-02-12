import type { LinkProps } from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Common = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonVariant =
  | "outline"
  | "ghost"
  | "solid-blue"
  | "solid-red"
  | "solid-zinc"
  | "solid-white"
  | "solid-black";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & Common;

type AnchorType = LinkProps & Common;

export type { AnchorType, ButtonType, ButtonVariant };
