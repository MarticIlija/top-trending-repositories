import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { PaginationProps } from "./types";
import { MAX_NUMBER_OF_PAGES } from "./constants";

export const PaginationControlled = ({ page, setPage }: PaginationProps) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination
        count={MAX_NUMBER_OF_PAGES}
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
};
