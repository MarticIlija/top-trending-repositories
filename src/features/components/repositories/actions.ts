const getLogoForLanguage = (language: string) => {
  if (language) {
    const noSpaceLanguage = language.replace(/\s+/g, "");
    const logoName = noSpaceLanguage.toLowerCase().replace("#", "_");
    return `src/assets/img/${logoName}.png`;
  } else return "src/assets/img/other.png";
};

export const getRepositoriesActions = () => {
  return { getLogoForLanguage };
};
