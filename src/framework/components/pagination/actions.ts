import { RESULTS_PER_PAGE } from "../../../common/constants/results-per-page";

const getNumberOfPages = (numberOfResults: number) => {
  return Math.ceil(numberOfResults / RESULTS_PER_PAGE);
};

export const getPaginationActions = () => {
  return { getNumberOfPages };
};
