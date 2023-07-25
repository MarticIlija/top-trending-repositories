export interface FilterChipsProps {
  title: string;
  elements: string[];
  selectedElements: string[];
  clickHandler: (item: string) => void;
}
