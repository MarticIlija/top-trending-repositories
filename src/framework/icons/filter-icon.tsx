import { IconProps } from "./types";

export const FilterIcon = ({ iconSize = 24, ...props }: IconProps) => {
  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox={"0 0 24 24"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.0929 2.57912C1.25675 2.22596 1.61069 2 2.00001 2H22C22.3893 2 22.7433 2.22596 22.9071 2.57912C23.071 2.93229 23.015 3.34845 22.7636 3.64573L15 12.8261V21C15 21.5523 14.5523 22 14 22H10C9.44773 22 9.00001 21.5523 9.00001 21V12.8261L1.23644 3.64573C0.985046 3.34845 0.929037 2.93229 1.0929 2.57912ZM4.15532 4L10.7636 11.8143C10.9162 11.9948 11 12.2236 11 12.46V20H13V12.46C13 12.2236 13.0838 11.9948 13.2364 11.8143L19.8447 4H4.15532Z"
        fill="currentColor"
      />
    </svg>
  );
};
