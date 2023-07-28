import { Items } from "../../../api";

export interface RepositoriesProps {
  repositories?: Items[];
  errorMessage?: string;
  addStarredHandler: (id: Items) => void;
  removeStarredHandler: (id: Items) => void;
}
