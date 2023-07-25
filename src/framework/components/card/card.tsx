import { createElement, ForwardedRef, forwardRef, ReactElement } from "react";
import clsx from "clsx";
import { CardProps } from "./types";

export const Card = forwardRef(
  (
    {
      children,
      bgColor = "#EFF2F5",
      boRadius,
      boxShadow = "box-shadow: 4px 4px 14px 0px #9C9CAB8C; box-shadow: -6px -6px 10px 0px #FFFFFF",
      className,
    }: CardProps,
    ref: ForwardedRef<ReactElement>
  ) => {
    return createElement(
      "div",
      {
        ref,
        style: {
          backgroundColor: bgColor && `${bgColor}`,
          borderRadius: boRadius && `${boRadius}`,
          boxShadow: boxShadow && `${boxShadow}`,
        },
        className: clsx(
          "flex flex-row rounded-xl bg-surface--1 h-fit p-4 cursor-pointer",
          "shadow-[-6px_-6px_10px_rgba(255,255,255,1),4px_4px_14px_rgba(156,156,171,0.55)]",
          "hover:shadow-[-3px_-3px_7px_rgba(255,255,255,1),2px_2px_8px_rgba(156,156,171,0.55)]",
          className
        ),
      },
      <>{children}</>
    );
  }
);
