import { Items } from "../../../api";

export interface CardProps {
  element: Items;
  children?: JSX.Element | JSX.Element[];
  bgColor?: string;
  boRadius?: string;
  boxShadow?: string;
  className?: string;
}
