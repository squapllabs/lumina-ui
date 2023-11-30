import React, { SVGProps } from 'react';

interface StoreOutIconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  height?: number | string;
  width?: number | string;
}

const StoreOutIcon: React.FC<StoreOutIconProps> = ({
  height = '30',
  width = '38',
}) => (
  <div title="Store">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 14 14"
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect width="6.5" height="6.5" x="5.5" y="3" rx="1" />
        <path d="M4 12h7.61a1 1 0 0 1 .7.29l1.19 1.21M.5.5h1a1 1 0 0 1 1 1V10M4 11.75A2.11 2.11 0 0 1 4 12a1.74 1.74 0 1 1 0-.25ZM8.5 7h1" />
      </g>
    </svg>
  </div>
);

export default StoreOutIcon;
