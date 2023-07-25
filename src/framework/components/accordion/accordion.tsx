import {
  createElement,
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
  KeyboardEvent,
  useId,
} from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { AccordionProps } from "./types";
import { ChevronDownIcon, CrossIcon } from "../../icons";

export const Accordion = ({
  title,
  className,
  _onToggle,
  onUpdate,
  open,
  _open,
  children,
  isFirst,
  isLast,
  withoutBorder,
  crossIcon,
  scrollIntoViewOnOpen = false,
  getToggleState,
  ...props
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(open);
  const firstUpdate = useRef(true);
  const id = useId();
  const accordionButtonId = useMemo(() => `accordion-button-${id}`, [id]);
  const accordionRegionId = useMemo(() => `accordion-region-${id}`, [id]);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setIsOpen(Boolean(_open));
    getToggleState?.(Boolean(_open));
  }, [_open, getToggleState]);

  const handleKeyDown = (event: KeyboardEvent) =>
    event.key === "Enter" && toggleAccordion();

  const toggleAccordion = () => (_onToggle ? _onToggle() : setIsOpen(!isOpen));

  const arrow = {
    closed: { rotate: 0 },
    opened: { rotate: -180, transition: { duration: 0.2 } },
  };

  const AccordionIcon = () => {
    return crossIcon ? (
      <CrossIcon
        onClick={() => {
          onUpdate && onUpdate();
        }}
      />
    ) : (
      <AnimatePresence initial={false}>
        <motion.span animate={isOpen ? arrow.opened : arrow.closed}>
          <ChevronDownIcon />
        </motion.span>
      </AnimatePresence>
    );
  };

  const ref = useRef<HTMLDivElement>(null);
  const scrollIntoView = useCallback(() => {
    if (scrollIntoViewOnOpen && isOpen) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [isOpen, scrollIntoViewOnOpen]);

  return createElement(
    "div",
    {
      className: clsx(
        !withoutBorder && "border border-solid border-[#c1c4c7] rounded-lg",
        "flex flex-col relative",
        className
      ),
      onKeyDown: handleKeyDown,
      transition: { ease: "easeInOut", duration: 0.3 },
      ...props,
      ref,
    },

    <>
      <button
        data-cy="btn_toggle_accordion"
        className="flex py-4 px-4 tems-center justify-between cursor-pointer min-h-[56px] text-inherit"
        aria-controls={accordionRegionId}
        aria-expanded={isOpen ? "true" : "false"}
        id={accordionButtonId}
        onClick={toggleAccordion}
        tabIndex={0}
      >
        <p className="prose font-bold">{title}</p>
        <AccordionIcon />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            animate={isOpen ? { padding: "0px 0px 20px" } : { padding: 0 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            onAnimationComplete={scrollIntoView}
          >
            <motion.div
              role="region"
              aria-labelledby={accordionButtonId}
              style={{ transformOrigin: "top" }}
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ ease: "easeInOut", duration: 0 }}
              id={accordionRegionId}
              className={clsx(children && "overflow-hidden px-4")}
            >
              {isOpen && children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
