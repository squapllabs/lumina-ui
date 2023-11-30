import React, { SVGProps } from 'react';

interface StockIconProps extends SVGProps<SVGSVGElement> {
  height?: number | string;
  width?: number | string;
  onClick: () => void;
}

const StockIcon: React.FC<StockIconProps> = ({
  height = '48',
  width = '48',
  onClick,
}) => (
  <div title="Edit" onClick={onClick} role="button">
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.7067 0.293203C27.8941 0.480731 27.9995 0.735039 27.9995 1.0002C27.9995 1.26537 27.8941 1.51967 27.7067 1.7072L25.4137 4.0002L27.7067 6.2932C27.8888 6.48181 27.9896 6.73441 27.9873 6.9966C27.9851 7.2588 27.8799 7.50961 27.6945 7.69502C27.5091 7.88043 27.2583 7.9856 26.9961 7.98788C26.7339 7.99015 26.4813 7.88936 26.2927 7.7072L23.9997 5.4142L21.7067 7.7072C21.6138 7.80005 21.5035 7.87368 21.3821 7.9239C21.2607 7.97413 21.1307 7.99995 20.9993 7.99991C20.868 7.99986 20.7379 7.97394 20.6166 7.92363C20.4952 7.87333 20.385 7.79961 20.2922 7.7067C20.1993 7.61379 20.1257 7.5035 20.0755 7.38214C20.0252 7.26077 19.9994 7.1307 19.9995 6.99935C19.9995 6.868 20.0254 6.73795 20.0757 6.61661C20.126 6.49528 20.1998 6.38505 20.2927 6.2922L22.5857 4.0002L20.2927 1.7072C20.1998 1.61429 20.1262 1.50401 20.076 1.38264C20.0257 1.26127 19.9999 1.1312 20 0.999849C20 0.868501 20.0259 0.738447 20.0762 0.617115C20.1265 0.495783 20.2003 0.385547 20.2932 0.292703C20.3861 0.199858 20.4964 0.126223 20.6177 0.0760008C20.7391 0.0257788 20.8692 -4.63682e-05 21.0005 6.24965e-08C21.1319 4.64932e-05 21.2619 0.0259633 21.3833 0.0762711C21.5046 0.126579 21.6148 0.200293 21.7077 0.293203L23.9997 2.5862L26.2927 0.293203C26.4802 0.105732 26.7345 0.000416341 26.9997 0.000416341C27.2648 0.000416341 27.5191 0.105732 27.7067 0.293203ZM19.1977 26.7282C19.8672 26.9513 20.5886 26.9668 21.2671 26.7726C21.9456 26.5785 22.5495 26.1837 22.9997 25.6402V36.0232L10.9997 31.5002V23.9962L19.1977 26.7282Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M36.9997 31.5002L24.9997 36.0232V25.6402C25.4498 26.1837 26.0538 26.5785 26.7323 26.7726C27.4108 26.9668 28.1321 26.9513 28.8017 26.7282L36.9997 23.9962V31.5002ZM24.3267 9.0552C24.1148 8.9819 23.8845 8.9819 23.6727 9.0552L10.6747 13.5552L10.6517 13.5622C10.4768 13.627 10.3237 13.7396 10.2097 13.8872L6.21966 18.8752C6.11888 19.001 6.04999 19.1492 6.01885 19.3073C5.98771 19.4654 5.99524 19.6287 6.04081 19.7833C6.08638 19.9379 6.16863 20.0792 6.28056 20.1951C6.39249 20.3111 6.53078 20.3982 6.68366 20.4492L20.1837 24.9492C20.3881 25.0172 20.609 25.0173 20.8135 24.9495C21.0181 24.8818 21.1952 24.7498 21.3187 24.5732L23.9997 20.7432L26.6797 24.5732C26.8032 24.75 26.9805 24.8821 27.1852 24.9499C27.3899 25.0176 27.6111 25.0174 27.8157 24.9492L41.3157 20.4492C41.4686 20.3983 41.607 20.3112 41.7191 20.1954C41.8311 20.0795 41.9135 19.9382 41.9591 19.7836C42.0048 19.629 42.0124 19.4657 41.9813 19.3075C41.9503 19.1493 41.8814 19.001 41.7807 18.8752L37.7907 13.8872C37.6713 13.7329 37.5093 13.6171 37.3247 13.5542L24.3267 9.0552ZM23.9997 17.9422L33.9427 14.5002L23.9997 11.0582L14.0567 14.5002L23.9997 17.9422Z"
        fill="black"
      />
    </svg>
  </div>
);

export default StockIcon;
