import { Items } from "../../../api";

export interface RepositoryStarProps {
  repository: Items;
  isStarred: boolean;
  addStarredHandler: (id: Items) => void;
  removeStarredHandler: (id: Items) => void;
  className?: string;
  id?: string;
}
