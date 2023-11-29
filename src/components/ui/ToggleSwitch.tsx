import React, { useState } from 'react';
import styled, { css } from 'styled-components';

interface ToggleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onToggle: (value: boolean) => void;
  active?: boolean;
  color?: string;
  backgroundColor? : string;
  width?: string;
  height?: string;
  disabled?: boolean; 
}

const ToggleButtonStyles = css<ToggleButtonProps>`
  position: relative;
  background: ${({ active, backgroundColor }) => (active ? backgroundColor || '#7f56d9' : '#e9e9e9')};
  color: ${({ active }) => (active ? 'white' : '#333')};
  border: 1px solid #7f56d9;
  border-radius: 0.5rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')}; // Disable cursor if disabled
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};

  &:hover {
    background: ${({ active,backgroundColor }) => (active ? backgroundColor || '#6941c6' : '#d9d9d9')};
  }

  &:active {
    background: ${({ active,backgroundColor }) => (active ? backgroundColor || '#7f56d9' : '#d9d9d9')};
  }

  &:disabled {
    background: #e9d7fe;
    color: #ccc;
    cursor: not-allowed;
  }
`;

const ToggleButtonSlider = styled.div<ToggleButtonProps>`
  position: absolute;
  top: 0;
  left: ${({ active }) => (active ? '50%' : '0')};
  width: 50%;
  height: 100%;
  background: ${({ color }) => color || '#ffffff'};
  border-radius: 0.5rem;
  transition: left 0.3s ease;
`;

const ToggleButton = styled.button<ToggleButtonProps>`
  ${ToggleButtonStyles}
`;

const ToggleButtonComponent: React.FC<ToggleButtonProps> = ({ onToggle, active, disabled, ...props }) => {
    
  const [isActive, setIsActive] = useState(active || false);

  const handleClick = () => {
    if (!disabled) {
      setIsActive(!isActive);
      onToggle(!isActive);
    }
  };

  return (
    <ToggleButton onClick={handleClick} onToggle={handleClick} active={isActive} disabled={disabled} {...props}>
      <ToggleButtonSlider onToggle={handleClick}  active={isActive} {...props} />
      {props.children}
    </ToggleButton>
  );
};

export default ToggleButtonComponent;