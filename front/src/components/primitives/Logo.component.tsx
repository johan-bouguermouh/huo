//SVG logo with fille variable on component
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

export interface LogoProps {
  path?: string;
  fill?: string;
  className?: ClassValue[] | string | string[];
}

export default function Logo({ path, className, fill = "#0F172A" }: LogoProps) {
  return (
    <Link
      href={path ?? "/"}
      className={cn(
        "flex items-center display-block w-[100px] h-[50px]",
        className
      )}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 106 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_12_94)">
          <path
            d="M8.75844 13.2145V0.952726C8.75844 0.469065 8.36626 0.0768814 7.8826 0.0768814C3.52868 0.0768814 0 3.60653 0 7.95948V14.0904V21.973V34.2348C0 34.7185 0.392184 35.1106 0.875844 35.1106C5.22976 35.1106 8.75844 31.582 8.75844 27.2281V21.973H19.2686V29.2824C19.2686 36.4916 12.5888 42.3364 4.35003 42.3364H0.875844C0.392184 42.3364 0 42.7285 0 43.2122V49.1242C0 49.6078 0.392184 50 0.875844 50H6.23212C18.2691 50 28.027 41.4615 28.027 30.929V14.9662C28.027 14.4826 27.6348 14.0904 27.1512 14.0904H9.63429C9.15063 14.0904 8.75844 13.6982 8.75844 13.2145Z"
            fill={fill}
          />
          <path
            d="M27.1512 0.0768814C22.7973 0.0768814 19.2686 3.60556 19.2686 7.95948V8.83532C19.2686 9.31898 19.6608 9.71117 20.1444 9.71117H27.1512C27.6348 9.71117 28.027 9.31898 28.027 8.83532V0.952726C28.027 0.469065 27.6348 0.0768814 27.1512 0.0768814Z"
            fill={fill}
          />
          <path
            d="M33.6558 19.5936V2.67424C33.6558 1.5697 34.5511 0.673424 35.6566 0.673424H41.0907C42.1952 0.673424 43.0915 1.56873 43.0915 2.67424V19.4009C43.0915 24.2628 45.4981 26.5741 49.3022 26.5741C53.1063 26.5741 55.5606 24.4078 55.5606 19.6413V2.67424C55.5606 1.5697 56.4559 0.673424 57.5614 0.673424H62.9956C64.1001 0.673424 64.9964 1.56873 64.9964 2.67424V19.3523C64.9964 30.1835 58.7857 34.9978 49.2059 34.9978C39.6261 34.9978 33.6567 30.1835 33.6567 19.5926L33.6558 19.5936Z"
            fill={fill}
          />
          <path
            d="M69.4243 17.62V17.5237C69.4243 7.84659 77.2232 0 87.6214 0C98.0196 0 105.722 7.79891 105.722 17.4274V17.5237C105.722 27.1998 97.9233 35.0474 87.525 35.0474C77.1268 35.0474 69.4243 27.2485 69.4243 17.62ZM96.1424 17.62V17.5237C96.1424 12.6131 92.676 8.42465 87.525 8.42465C82.3741 8.42465 78.9554 12.5645 78.9554 17.4274V17.5237C78.9554 22.3379 82.4695 26.6227 87.6204 26.6227C92.7713 26.6227 96.1414 22.4829 96.1414 17.62H96.1424Z"
            fill={fill}
          />
        </g>
        {/* <defs>
        <clipPath id="clip0_12_94">
          <rect width="105.723" height="50" fill="white" />
        </clipPath>
      </defs> */}
      </svg>
    </Link>
  );
}
