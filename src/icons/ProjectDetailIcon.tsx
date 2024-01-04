import React, { FC } from 'react';
import { useTheme } from '../theme/ThemeProvider'

interface ProjectDetailsIconProps {
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

const ProjectDetailsIcon: FC<ProjectDetailsIconProps> = ({
  width = 32,
  height = 32,
  style,
}) => {
  const { theme } = useTheme()
  const strokeColor = theme === 'dark' ? 'white' : 'black';
  return (
    <div>
      <svg
        width={width}
        style={style}
        height={height}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.6666 16V7.66535C26.6667 7.56011 26.646 7.45588 26.6057 7.35864C26.5654 7.2614 26.5064 7.17306 26.4319 7.09869L22.2346 2.90135C22.0847 2.75128 21.8814 2.66687 21.6693 2.66669H6.13325C5.92108 2.66669 5.7176 2.75097 5.56757 2.901C5.41754 3.05103 5.33325 3.25451 5.33325 3.46669V28.5334C5.33325 28.7455 5.41754 28.949 5.56757 29.099C5.7176 29.2491 5.92108 29.3334 6.13325 29.3334H14.6666M10.6666 13.3334H21.3333M10.6666 8.00002H15.9999M10.6666 18.6667H14.6666"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.3332 2.66669V7.20002C21.3332 7.41219 21.4175 7.61568 21.5675 7.76571C21.7176 7.91574 21.9211 8.00002 22.1332 8.00002H26.6666M21.7412 22.8174L22.9532 20.248C22.986 20.1746 23.0393 20.1122 23.1067 20.0684C23.1741 20.0246 23.2528 20.0013 23.3332 20.0013C23.4136 20.0013 23.4923 20.0246 23.5598 20.0684C23.6272 20.1122 23.6805 20.1746 23.7132 20.248L24.9266 22.8174L27.6359 23.232C27.9839 23.2854 28.1226 23.7334 27.8719 23.9894L25.9106 25.9894L26.3732 28.8134C26.4319 29.176 26.0679 29.4534 25.7572 29.2814L23.3332 27.948L20.9092 29.2814C20.5972 29.4534 20.2346 29.176 20.2932 28.8134L20.7559 25.9894L18.7959 23.9894C18.5426 23.7334 18.6826 23.2854 19.0306 23.232L21.7412 22.8174Z"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
export default ProjectDetailsIcon;
