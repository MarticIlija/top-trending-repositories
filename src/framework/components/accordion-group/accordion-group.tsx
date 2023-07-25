import {
  useState,
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
} from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { AccordionGroupProps } from "./types";

export const AccordionGroup = ({
  className,
  children,
  ...props
}: AccordionGroupProps) => {
  const initIndex = Children.toArray(children)
    .map((child) => (child as ReactElement).props.open)
    .indexOf(true);

  const lastIndex = Children.toArray(children).length - 1;

  const [index, setIndex] = useState(initIndex);
  const toggleAccordion = (i: number) => () =>
    i === index ? setIndex(() => -1) : setIndex(() => i);

  return (
    <ul className={clsx("flex flex-col", className)} {...props}>
      {Children.map(children, (child, i) => {
        return (
          isValidElement(child) &&
          cloneElement(child, {
            ...child.props,
            as: motion.li,
            _onToggle: toggleAccordion(i),
            _open: index === i,
            isFirst: i === 0,
            isLast: i === lastIndex,
          })
        );
      })}
    </ul>
  );
};
