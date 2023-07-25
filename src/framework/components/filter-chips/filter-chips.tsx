import { Chip } from "../chip/chip";
import { FilterChipsProps } from "./types";
import clsx from "clsx";

export const FilterChips = ({
  title,
  elements,
  selectedElements,
  clickHandler,
}: FilterChipsProps) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="prose font-medium">{title}</p>
      <div className="flex flex-row gap-4 flex-wrap">
        {elements?.map((element, index) => {
          const isSelected = selectedElements.includes(element);
          return (
            <Chip
              key={index}
              selected={isSelected}
              className={clsx(
                "pointer-events-auto min-w-[84px] rounded-[100px]",
                isSelected && "bg-[rgba(58, 133, 248, 1)]"
              )}
              onClick={() => {
                clickHandler(element);
              }}
            >
              {element}
            </Chip>
          );
        })}
      </div>
    </div>
  );
};
