import clsx from "clsx";
import { ForwardedRef, forwardRef, HTMLProps } from "react";

export type DividerProps = HTMLProps<HTMLHRElement>;

export const Divider = forwardRef(
  ({ className }: DividerProps, ref: ForwardedRef<HTMLHRElement>) => {
    return (
      <hr
        className={clsx(className, "my-[20px] border-t border-[#c1c4c7]")}
        ref={ref}
      />
    );
  }
);
