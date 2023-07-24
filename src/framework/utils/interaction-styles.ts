import clsx from "clsx";

export const base = clsx(
  "cursor-pointer",
  // Colors
  "text-blue",
  // Box
  "box-border relative inline-flex justify-center items-center",
  // Transition
  "duration-100",
  // Hover state
  "hover:text-darkblue",
  // Disabled
  "disabled:pointer-events-none disabled:text-text-disabled",
  // Focus ring
  "after:focus-ring after:transition-opacity after:opacity-0 focus-visible:after:opacity-100"
);

export const flat = clsx(
  "transition-colors bg-transparent",
  // Active state
  "active:text-blue"
);

export const elevated = clsx(
  // Elevation
  "transition-interaction elevation-up-2 bg-surface-1",
  // Active state
  "active:elevation-blue-down active:bg-blue active:text-white",
  // Hover state
  "hover:elevation-up-1"
);

export const outlined = clsx(
  "transition-colors ring-1 ring-blue bg-transparent",
  // Active state
  "active:bg-blue active:text-white active:ring-blue",
  // Hover state
  "hover:ring-darkblue",
  // Disabled
  "disabled:border-outline disabled:ring-outline bg-transparent"
);

export const cardBase = "flex flex-row rounded-lg bg-surface--1 h-fit p-4";

export const cardElevated = "elevation-up-3 hover:elevation-up-2";

export const cardOutlined = "border border-outline";
