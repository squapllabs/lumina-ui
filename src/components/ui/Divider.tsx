import React from 'react';
import styled, { css } from 'styled-components';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  height?: string;
  width?: string;
  color?: string;
  variant?: 'middle';
}

const ContainerWithPadding = styled.div<DividerProps>`
  ${({ orientation, variant }) =>
    orientation === 'vertical'
      ? css`
        display: flex;
        ${variant === 'middle' &&
        css`
          padding: 15px 0px;
        `}
      `
      : css`
        ${variant === 'middle' &&
        css`
          padding: 0px 30px;
        `}
      `}
`;

const DividerContainer = styled.div<DividerProps>`
  ${({ orientation, height, width, color }) =>
    orientation === 'vertical'
      ? css`
          width: ${width || '1.5px'};
          height: ${height || 'auto'};
          background-color: ${color || 'gray'};
          margin: 0px 20px 0px 20px;
        `
      : css`
          width: ${width || 'auto'};
          height: ${height || '1.25px'};
          background-color: ${color || 'gray'};
          margin: 10px 0px;
        `}
`;

const Divider: React.FC<DividerProps> = ({ orientation = 'horizontal', height, width, color, variant }) => {
  return (
    <ContainerWithPadding orientation={orientation} variant={variant}>
      <DividerContainer orientation={orientation} height={height} width={width} color={color} />
    </ContainerWithPadding>
  );
};

export default Divider;