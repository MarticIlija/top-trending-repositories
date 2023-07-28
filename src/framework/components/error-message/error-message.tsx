import clsx from "clsx";
import { ErrorMessageProps } from "./types";

export const ErrorMessage = ({
  errorMessage,
  className,
}: ErrorMessageProps) => {
  return (
    <>
      {errorMessage && (
        <div
          className={clsx(
            "flex w-full prose text-xl font-bold justify-center text-red-500",
            className
          )}
        >
          {errorMessage}
        </div>
      )}
    </>
  );
};
