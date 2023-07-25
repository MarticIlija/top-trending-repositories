import { HTMLProps, ReactNode } from "react";

export interface AccordionGroupProps extends HTMLProps<HTMLUListElement> {
  children: ReactNode;
}
