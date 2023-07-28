import { Items } from "../../../api";
import { LanguageFilterEnum } from "../../../common/enums/LanguageFilter";

const getFilterLanguages = (items: Items[]) => {
  const languageSet: Set<string> = new Set();
  items?.map((item) => {
    if (item?.language) {
      languageSet.add(item?.language);
    } else languageSet.add(LanguageFilterEnum.OTHER);
  });
  return Array.from(languageSet).sort();
};

const getRepositoriesByLanguage = (
  languages: string[],
  repositories: Items[]
) => {
  const filteredRepositories = languages
    .map((language) => {
      if (language !== LanguageFilterEnum.OTHER) {
        return repositories?.filter(
          (repository) => repository?.language === language
        );
      } else {
        return repositories?.filter((repository) => !repository?.language);
      }
    })
    .flat();
  filteredRepositories.sort((a, b) => b.stargazers_count - a.stargazers_count);
  return filteredRepositories;
};

export const getTopRatedRepositoriesActions = () => {
  return {
    getFilterLanguages,
    getRepositoriesByLanguage,
  };
};
