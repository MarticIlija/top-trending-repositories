import { Items } from "../../api";
import { STARRED_REPOSITORIES_KEY } from "../../common/constants/starred-repositories-key";
import { getStarredRepositories } from "./get-starred-repositories";

export const deleteStarredRepositories = (object: Items) => {
  const starredRepositories = getStarredRepositories();
  const indexToDelete = starredRepositories?.findIndex(
    (starredRepository) => starredRepository.id === object.id
  );
  starredRepositories.splice(indexToDelete, 1);
  localStorage.setItem(
    STARRED_REPOSITORIES_KEY,
    JSON.stringify(starredRepositories)
  );
};
