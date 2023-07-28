import { useState } from "react";
import { FilterIcon } from "../../icons";
import { FilterWrapper } from "../filter-wrapper/filter-wrapper";
import { IconButton } from "../icon-button/icon-button";
import { FilterProps } from "./types";

export const Filter = ({
  children,
  refreshList,
  fetchTrigger,
}: FilterProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-between items-center w-full">
        <IconButton
          onClick={() => {
            refreshList(!fetchTrigger);
          }}
          icon={<div className="font-semibold">Refresh List</div>}
          className="w-fit h-fit px-4"
        />
        <IconButton
          icon={
            <FilterIcon
              iconSize={20}
              className="text-inherit min-h-[20px] min-w-[20px]"
            />
          }
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          active={isFilterOpen}
        />
      </div>
      <FilterWrapper
        title="Repository filters"
        isFilterOpen={isFilterOpen}
        className="text-[#3a85f8]"
      >
        {children}
      </FilterWrapper>
    </>
  );
};
