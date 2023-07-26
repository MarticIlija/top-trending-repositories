import { Items } from "../../../api";

export interface RepositoriesProps {
  repositories?: Items[];
  addStarredHandler: (id: Items) => void;
  removeStarredHandler: (id: Items) => void;
}
