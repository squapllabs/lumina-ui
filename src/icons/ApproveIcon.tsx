import React, { FC } from 'react';

interface NewApproveIconProps {
  width?: number;
  height?: number;
  onClick: () => void;
  style?: React.CSSProperties;
}

const NewApproveIcon: FC<NewApproveIconProps> = ({
  width = 25,
  height = 25,
  onClick,
  style,
}) => {
  return (
    <div title="Approve" onClick={onClick} style={style} role="button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
         fill="#7F56D8"
          d="m17.275 18.125l-.425-.425q-.225-.225-.537-.225t-.538.225q-.225.225-.225.525t.225.525l.975.975q.225.225.525.225t.525-.225l2.425-2.375q.225-.225.225-.538t-.225-.537q-.225-.225-.538-.225t-.537.225l-1.875 1.85ZM7 9h10q.425 0 .713-.288T18 8q0-.425-.288-.713T17 7H7q-.425 0-.713.288T6 8q0 .425.288.713T7 9Zm11 14q-2.075 0-3.538-1.463T13 18q0-2.075 1.463-3.538T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23ZM3 21.875V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v6.675q-.475-.225-.975-.375T19 11.075V5H5v14.05h6.075q.125.775.388 1.475t.687 1.325q-.125.025-.263-.038t-.237-.162l-.8-.8q-.15-.15-.35-.15t-.35.15l-.8.8q-.15.15-.35.15t-.35-.15l-.8-.8q-.15-.15-.35-.15t-.35.15l-.8.8q-.15.15-.35.15t-.35-.15l-.8-.8q-.15-.15-.35-.15t-.35.15l-.8.8l-.35.225ZM7 17h4.075q.075-.525.225-1.025t.375-.975H7q-.425 0-.713.288T6 16q0 .425.288.713T7 17Zm0-4h6.1q.95-.925 2.213-1.463T18 11H7q-.425 0-.713.288T6 12q0 .425.288.713T7 13Zm-2 6.05V5v14.05Z"
        />
      </svg>
    </div>
  );
};

export default NewApproveIcon;
