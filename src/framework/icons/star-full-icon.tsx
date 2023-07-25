import { IconProps } from "./types";
import { FC } from "react";

export const StarFullIcon: FC<IconProps> = ({
  iconSize = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 36 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.0711 1.3295C17.4059 0.490018 18.5941 0.490018 18.9289 1.3295L22.9152 11.3267C23.058 11.6849 23.3941 11.929 23.7789 11.9542L34.5186 12.6561C35.4204 12.715 35.7876 13.8452 35.0927 14.4229L26.8166 21.3035C26.5201 21.55 26.3918 21.945 26.4867 22.3188L29.1379 32.7498C29.3606 33.6257 28.3992 34.3241 27.635 33.8417L18.5338 28.0969C18.2077 27.8911 17.7923 27.8911 17.4662 28.0969L8.36502 33.8417C7.60077 34.3241 6.63944 33.6257 6.86207 32.7498L9.51326 22.3188C9.60825 21.945 9.47989 21.55 9.18337 21.3035L0.90732 14.4229C0.212362 13.8452 0.57956 12.715 1.4814 12.6561L12.2211 11.9542C12.6059 11.929 12.942 11.6849 13.0848 11.3267L17.0711 1.3295Z"
        fill="url(#paint0_linear_11065_35254)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_11065_35254"
          x1="38"
          y1="19"
          x2="-2"
          y2="19"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8CE3A" />
          <stop offset="1" stopColor="#FFA217" />
        </linearGradient>
      </defs>
    </svg>
  );
};
