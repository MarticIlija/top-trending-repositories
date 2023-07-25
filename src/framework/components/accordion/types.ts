import { HTMLProps, ReactNode } from "react";

export interface AccordionProps extends HTMLProps<HTMLDivElement> {
  getToggleState?: ((args: boolean) => void) | undefined;
  title: string;
  disableInitAnimation?: boolean;
  as?: "div" | "li";
  asTitle?: "h1" | "h2" | "h3" | "h4" | "h5" | "span";
  /**
   * _onToggle props is used only by accordionGroup component.
   */
  _onToggle?: (() => void) | undefined;
  onUpdate?: ((a?: boolean) => void) | undefined;
  open?: boolean;
  _open?: boolean;
  children: ReactNode;
  isFirst?: boolean;
  isLast?: boolean;
  withoutBorder?: boolean;
  crossIcon?: boolean;
  scrollIntoViewOnOpen?: boolean;
}
