export interface PaginationProps {
  totalCount: number;
  page: number;
  setPage: (page: number) => void;
}
