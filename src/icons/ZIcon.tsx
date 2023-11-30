import React, { FC } from 'react';

interface AbstractDataIconProps {
  width?: number;
  height?: number;
  color?: string;
  style?: React.CSSProperties;
}

const AbstractDataIcon: FC<AbstractDataIconProps> = ({
  width = 28,
  height = 28,
}) => {
  return (
    <div>
      <svg
        width={width} 
        height={height}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M36 38H60V42H36V38ZM36 46H60V50H36V46ZM36 54H52V58H36V54Z"
          fill="#475467"
        />
        <path
          d="M48.0007 8C46.2319 8.00526 44.5148 8.59715 43.1185 9.68293C41.7222 10.7687 40.7255 12.287 40.2847 14H24.0007V8H8.00066V24H24.0007V18H40.2847C40.4709 18.7159 40.7571 19.4019 41.1347 20.038L20.0387 41.134C18.8193 40.3993 17.4242 40.0075 16.0007 40C14.5031 39.9944 13.0341 40.4092 11.7607 41.1973C10.4873 41.9854 9.46066 43.1151 8.7976 44.4578C8.13455 45.8006 7.86169 47.3025 8.01008 48.7927C8.15847 50.2828 8.72214 51.7014 9.63697 52.8871C10.5518 54.0727 11.7811 54.9777 13.1849 55.4992C14.5887 56.0207 16.1107 56.1377 17.5777 55.8369C19.0447 55.5361 20.3978 54.8295 21.4831 53.7977C22.5684 52.7658 23.3423 51.45 23.7167 50H32.0007V46H23.7167C23.5304 45.2841 23.2442 44.5981 22.8667 43.962L43.9627 22.866C45.182 23.6007 46.5771 23.9925 48.0007 24C50.1224 24 52.1572 23.1571 53.6575 21.6569C55.1578 20.1566 56.0007 18.1217 56.0007 16C56.0007 13.8783 55.1578 11.8434 53.6575 10.3431C52.1572 8.84285 50.1224 8 48.0007 8ZM20.0007 20H12.0007V12H20.0007V20ZM16.0007 52C15.2095 52 14.4362 51.7654 13.7784 51.3259C13.1206 50.8864 12.6079 50.2616 12.3051 49.5307C12.0024 48.7998 11.9232 47.9956 12.0775 47.2196C12.2319 46.4437 12.6128 45.731 13.1722 45.1716C13.7316 44.6122 14.4444 44.2312 15.2203 44.0769C15.9962 43.9225 16.8005 44.0017 17.5314 44.3045C18.2623 44.6072 18.887 45.1199 19.3265 45.7777C19.7661 46.4355 20.0007 47.2089 20.0007 48C19.9996 49.0605 19.5778 50.0773 18.8279 50.8273C18.078 51.5772 17.0612 51.9989 16.0007 52ZM48.0007 20C47.2095 20 46.4362 19.7654 45.7784 19.3259C45.1206 18.8864 44.6079 18.2616 44.3051 17.5307C44.0024 16.7998 43.9232 15.9956 44.0775 15.2196C44.2319 14.4437 44.6128 13.731 45.1722 13.1716C45.7316 12.6122 46.4444 12.2312 47.2203 12.0769C47.9962 11.9225 48.8005 12.0017 49.5314 12.3045C50.2623 12.6072 50.887 13.1199 51.3265 13.7777C51.7661 14.4355 52.0007 15.2089 52.0007 16C51.9996 17.0605 51.5778 18.0773 50.8279 18.8273C50.078 19.5772 49.0612 19.9989 48.0007 20Z"
          fill="#475467"
        />
      </svg>
    </div>
  );
};

export default AbstractDataIcon;
