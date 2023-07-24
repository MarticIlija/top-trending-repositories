import { DetailedHTMLProps, forwardRef, HTMLAttributes } from "react";
import classes from "./loader.module.scss";

export const Loader = forwardRef<
  HTMLDivElement,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>(({ ...props }, ref) => {
  return (
    <div
      aria-busy="true"
      aria-live="assertive"
      {...props}
      className={classes.loader}
      ref={ref}
    />
  );
});
