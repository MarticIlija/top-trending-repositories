import { isEmpty } from "lodash";
import { getStarredRepositories } from "../../lib/get-starred-repositories";
import { Items } from "../../../api";
import { LanguagesEnum } from "../../../common/enums/Languages";

const getLogoForLanguage = (language: string) => {
  const enumKey = language?.toUpperCase().replace(" ", "_");
  if (LanguagesEnum[enumKey as keyof typeof LanguagesEnum]) {
    const nameWithoutSpace = language.replace(/\s+/g, "");
    const logoName = nameWithoutSpace.toLowerCase().replace("#", "sharp");
    return `src/assets/img/${logoName}.png`;
  } else return "src/assets/img/other.png";
};

const checkIfRepositoryIsStarred = (repository: Items) => {
  const starredRepositories = getStarredRepositories();
  if (isEmpty(starredRepositories) || !Array.isArray(starredRepositories))
    return false;
  else {
    return Boolean(
      starredRepositories?.find(
        (starredRepository) => starredRepository.id === repository.id
      )
    );
  }
};

export const getRepositoriesActions = () => {
  return { getLogoForLanguage, checkIfRepositoryIsStarred };
};
