import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { PaginationProps } from "./types";

export const PaginationControlled = ({
  totalCount,
  page,
  setPage,
}: PaginationProps) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={totalCount} page={page} onChange={handleChange} />
    </Stack>
  );
};
