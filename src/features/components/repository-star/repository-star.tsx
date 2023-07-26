import { StarEmptyIcon, StarFullIcon } from "../../../framework/icons";
import { RepositoryStarProps } from "./types";
import clsx from "clsx";

export const RepositoryStar = ({
  repository,
  isStarred,
  addStarredHandler,
  removeStarredHandler,
  className,
  id,
}: RepositoryStarProps) => {
  return isStarred ? (
    <StarFullIcon
      iconSize={56}
      id={id}
      className={clsx("min-h-[56px] min-w-[56px]", className)}
      onClick={() => removeStarredHandler(repository)}
    />
  ) : (
    <StarEmptyIcon
      iconSize={56}
      id={id}
      className={clsx("min-h-[56px] min-w-[56px]", className)}
      onClick={() => addStarredHandler(repository)}
    />
  );
};
