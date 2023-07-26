import { IconProps } from "./types";

export const ChevronDownIcon = ({ iconSize = 24, ...props }: IconProps) => {
  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.52922 8.43742C5.91975 8.0469 6.55291 8.0469 6.94343 8.43742L12.2363 13.7303L17.5292 8.43742C17.9197 8.0469 18.5529 8.0469 18.9434 8.43742C19.334 8.82795 19.334 9.46111 18.9434 9.85164L12.9434 15.8516C12.5529 16.2422 11.9197 16.2422 11.5292 15.8516L5.52922 9.85164C5.1387 9.46111 5.1387 8.82795 5.52922 8.43742Z"
        fill="currentColor"
      />
    </svg>
  );
};
