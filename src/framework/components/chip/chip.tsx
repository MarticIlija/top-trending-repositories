import { createElement, ForwardedRef, forwardRef, ReactElement } from "react";
import clsx from "clsx";
import { ChipProps } from "./types";

export const Chip = forwardRef(
  (
    { selected, className, children, onClick }: ChipProps,
    ref: ForwardedRef<ReactElement>
  ) => {
    return createElement(
      "button",
      {
        onClick,
        ref,
        className: clsx(
          "inline-flex justify-center items-center h-[32px] gap-2.5 pb-0.5 cursor-pointer box-border bg-transparent text-[#3a85f8] px-6 border border-solid border-[#3a85f8]",
          "hover:text-[#2e6bc8] hover:border-[#2e6bc8]",
          selected && "!bg-[#3a85f8] !text-[#fff]",
          className
        ),
      },
      <span>{children}</span>
    );
  }
);
