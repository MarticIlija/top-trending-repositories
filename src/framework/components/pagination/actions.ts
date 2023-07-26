import { RESULTS_PER_PAGE } from "../../../common/constants/results-per-page";

const getNumberOfPages = (numberOfResults: number) => {
  if (!numberOfResults) return null;
  else return Math.ceil(numberOfResults / RESULTS_PER_PAGE).toString();
};

export const getPaginationActions = () => {
  return { getNumberOfPages };
};
