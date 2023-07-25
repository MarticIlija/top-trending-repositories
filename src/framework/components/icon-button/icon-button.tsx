import clsx from "clsx";
import { createElement, ForwardedRef, forwardRef, ReactElement } from "react";
import { IconButtonProps } from "./types";

export const IconButton = forwardRef(
  (
    { icon, className, active, onClick }: IconButtonProps,
    ref: ForwardedRef<ReactElement>
  ) => {
    return createElement(
      "button",
      {
        ref,
        onClick,
        className: clsx(
          "flex cursor-pointer rounded-full p-3 relative items-center justify-center bg-[#eff2f5] text-[#3a85f8]",
          "shadow-[-3px_-3px_7px_rgba(255,255,255,1),2px_2px_8px_rgba(156,156,171,0.55)]",
          "hover:shadow-[-3px_-3px_4px_rgba(255,255,255,1),1px_1px_5px_rgba(156,156,171,0.4)] hover:text-[#2e6bc8]",
          active &&
            "!shadow-[inset_-3px_-3px_5px_rgba(255,255,255,1),inset_2px_2px_7px_rgba(156,156,171,0.55)]",
          "w-[40px] h-[40px]",
          className
        ),
      },
      icon
    );
  }
);
