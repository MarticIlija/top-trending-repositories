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
      <p className="typo-medium-300">{title}</p>&nbsp;
      <p className="typo-regular-300">{content}</p>
    </div>
  );
};
