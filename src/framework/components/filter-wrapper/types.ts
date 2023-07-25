import { ReactNode } from "react";

export interface FilterWrapperProps {
  title?: string;
  className?: string;
  isFilterOpen?: boolean;
  onClick?: () => void;
  children?: ReactNode | ReactNode[];
}
