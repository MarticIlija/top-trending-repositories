/* eslint-disable @typescript-eslint/no-explicit-any */

export interface FilterChipsProps {
  title: string;
  elements: string[];
  selectedElements: string[];
  clickHandler: (item: any) => void;
}
