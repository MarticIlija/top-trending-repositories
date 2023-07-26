import { Items } from "../../api";
import { STARRED_REPOSITORIES_KEY } from "../../common/constants/starred-repositories-key";

export const getStarredRepositories = (): Items[] => {
  const starredRepositories = localStorage.getItem(
    STARRED_REPOSITORIES_KEY
  ) as string;
  return JSON.parse(starredRepositories);
};
