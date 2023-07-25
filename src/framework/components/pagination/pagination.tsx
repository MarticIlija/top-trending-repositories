import { getPaginationActions } from "./actions";
import { PaginationProps } from "./types";

const { getNumberOfPages } = getPaginationActions();

export const Pagination = ({ numberOfResults }: PaginationProps) => {
  const numberOfPages = getNumberOfPages(numberOfResults);
  return <div className="prose font-medium">{numberOfPages}</div>;
};
