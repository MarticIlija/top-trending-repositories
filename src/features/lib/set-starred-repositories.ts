import { Items } from "../../api";
import { STARRED_REPOSITORIES_KEY } from "../../common/constants/starred-repositories-key";
import { getStarredRepositories } from "./get-starred-repositories";

export const setStarredRepositories = (object: Items) => {
  const starredRepositories = getStarredRepositories();
  starredRepositories.push(object);
  localStorage.setItem(
    STARRED_REPOSITORIES_KEY,
    JSON.stringify(starredRepositories)
  );
};
