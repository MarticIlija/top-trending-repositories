import { DescriptionItemProps } from "./types";
import clsx from "clsx";

export const DescriptionItem = ({
  title,
  content,
  orientation = "row",
  className,
}: DescriptionItemProps) => {
  const direction = "flex-" + orientation;
  return (
    <div className={clsx(`flex`, direction, className)}>
      <p className="prose font-bold">{title}</p>
      <p className="prose font-medium ml-2">{content}</p>
    </div>
  );
};
