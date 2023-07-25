import clsx from "clsx";
import { FilterWrapperProps } from "./types";
import { Accordion } from "../accordion/accordion";
import { AccordionGroup } from "../accordion-group/accordion-group";

export const FilterWrapper = ({
  title,
  isFilterOpen,
  className,
  onClick,
  children,
  ...props
}: FilterWrapperProps) => {
  return (
    <div className={clsx("z-0 overflow-auto", className)} {...props}>
      {isFilterOpen && (
        <AccordionGroup>
          <Accordion
            title={title as string}
            onUpdate={onClick}
            crossIcon={false}
            className="md:p-2"
            open={true}
          >
            {children}
          </Accordion>
        </AccordionGroup>
      )}
    </div>
  );
};
