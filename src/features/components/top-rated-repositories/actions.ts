import { Items } from "../../../api";

const getFilterLanguages = (items: Items[]) => {
  const languageSet: Set<string> = new Set();
  items?.map((item) => {
    if (item?.language) {
      languageSet.add(item?.language);
    } else languageSet.add("Other");
  });
  return Array.from(languageSet).sort();
};

const getRepositoriesByLanguage = (
  languages: string[],
  repositories: Items[]
) => {
  const filteredRepositories = languages.map((language) => {
    if (language !== "Other") {
      return repositories?.filter(
        (repository) => repository?.language === language
      );
    } else {
      return repositories?.filter((repository) => !repository?.language);
    }
  });
  return filteredRepositories.flat();
};

export const getTopRatedRepositoriesActions = () => {
  return { getFilterLanguages, getRepositoriesByLanguage };
};
