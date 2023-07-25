import { Items } from "../../../api";
import { LanguagesEnum } from "../../../common/enums/Languages";

const getFilterLanguages = (items: Items[]) => {
  const languageSet: Set<string> = new Set();
  items?.map((item) => {
    if (item?.language) {
      languageSet.add(item?.language);
    } else languageSet.add("Other");
  });
  return Array.from(languageSet).sort();
};

const getLogoForLanguage = (language: string) => {
  const enumKey = language?.toUpperCase().replace(" ", "_");
  if (LanguagesEnum[enumKey as keyof typeof LanguagesEnum]) {
    const noSpaceLanguage = language.replace(/\s+/g, "");
    const logoName = noSpaceLanguage.toLowerCase().replace("#", "_");
    return `src/assets/img/${logoName}.png`;
  } else return "src/assets/img/no_logo.png";
};

export const getRepositoriesActions = () => {
  return { getFilterLanguages, getLogoForLanguage };
};
