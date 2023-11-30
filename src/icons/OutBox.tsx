import React, { FC } from 'react';

interface OutBoxIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const OutBoxIcon: FC<OutBoxIconProps> = ({
  width = 20,
  height = 20,
  color = '#475467',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      {' '}
      <g>
        {' '}
        <path fill="none" d="M0 0h24v24H0z" />{' '}
        <path
          fill={color}
          d="M22 20.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16.007zM4.434 5L12 11.81 19.566 5H4.434zM0 15h8v2H0v-2zm0-5h5v2H0v-2z"
        />{' '}
      </g>{' '}
    </svg>
  );
};

export default OutBoxIcon;
