import {
  createElement,
  ForwardedRef,
  forwardRef,
  HTMLProps,
  ReactHTML,
} from "react";
import clsx from "clsx";

export interface CardProps<TElement extends "div">
  extends HTMLProps<ReactHTML[TElement]> {
  bgColor?: string;
  boRadius?: string;
  boxShadow?: string;
}

export const Card = forwardRef(
  <TElement extends "div">(
    {
      children,
      bgColor = "#EFF2F5",
      boRadius,
      boxShadow = "box-shadow: 4px 4px 14px 0px #9C9CAB8C; box-shadow: -6px -6px 10px 0px #FFFFFF",
      className,
      disabled = false,
      ...props
    }: CardProps<TElement>,
    ref: ForwardedRef<ReactHTML[TElement]>
  ) => {
    return createElement(
      "div",
      {
        ...props,
        ref,
        style: {
          backgroundColor: bgColor && `${bgColor}`,
          borderRadius: boRadius && `${boRadius}`,
          boxShadow: boxShadow && `${boxShadow}`,
          ...props.style,
        },
        className: clsx(
          "flex flex-row rounded-lg bg-surface--1 h-fit p-4 elevation-up-3 hover:elevation-up-2",
          className
        ),
      },
      <>{children}</>
    );
  }
);
