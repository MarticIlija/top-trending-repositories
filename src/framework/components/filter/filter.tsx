import { useState } from "react";
import { FilterIcon } from "../../icons";
import { FilterWrapper } from "../filter-wrapper/filter-wrapper";
import { IconButton } from "../icon-button/icon-button";
import { FilterProps } from "./types";
import { FilterChips } from "../filter-chips/filter-chips";

export const Filter = ({
  elements,
  selectedElements,
  clickHandler,
}: FilterProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-end w-full">
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
        <FilterChips
          title="Languages:"
          elements={elements}
          selectedElements={selectedElements}
          clickHandler={clickHandler}
        />
      </FilterWrapper>
    </>
  );
};
