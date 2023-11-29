import React, { useState } from 'react';
import styled from 'styled-components';

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
  mandatory?: boolean;
  checked?:boolean;
}

interface CustomCheckboxGroupProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  options: Option[];
  defaultValues: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  containerStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  optionContainerStyle?: React.CSSProperties;
  mandatory?: boolean;
  disabled?: boolean;
  checked?:boolean;
}

const HoverableLabel = styled.label<{ disabled?: boolean }>`
  margin-right: 10px;
  display: flex;
  gap: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover > input {
    background-color: ${({ disabled }) =>
      disabled ? 'transparent' : 'rgba(14, 106, 152, 0.3)'};
    border-radius: 50px;
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(1.2)')};
  }

  &:hover > input:checked {
    background-color: #3366ff;
  }

  &:hover > input::before {
    content: '';
    display: ${({ disabled }) => (disabled ? 'none' : 'block')};
    position: absolute;
    border: 2px solid #3366ff;
    border-width: 2px;
    border-radius : 5px
    box-sizing: border-box;
    width: 10px;
    height: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const CheckboxInput = styled.input<{checked?: boolean; disabled?: boolean }>`
  position: relative;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin: 0;

  &:checked {
    background-color: ${({ checked }) => (checked ? '#3366ff' : 'transparent')};
  }
`;

const LabelBody = styled.div`
width : max-content;
min-width : auto;
`;

const RequiredField = styled.span`
  color: red;
`;

const CustomCheckboxGroup: React.FC<CustomCheckboxGroupProps> = ({
  label,
  options,
  defaultValues,
  onChange,
  containerStyle,
  labelStyle,
  optionContainerStyle,
  mandatory = false,
  disabled = false,
}) => {
  
  const shouldShowAsterisk = mandatory;
  
  // State to keep track of selected values
  const [selectedValues, setSelectedValues] = useState<string[]>(defaultValues);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedValues((prevSelectedValues) => {
      if (prevSelectedValues.includes(value)) {
        return prevSelectedValues.filter((item) => item !== value);
      } else {
        return [...prevSelectedValues, value];
      }
    });
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div style={containerStyle}>
      <label style={labelStyle}>
        {label} {shouldShowAsterisk && <RequiredField>*</RequiredField>}{' '}
      </label>
      <LabelBody style={optionContainerStyle}>
        {options.map((option) => (
          <HoverableLabel key={option.value} disabled={disabled}>
            <CheckboxInput
              type="checkbox"
              value={option.value}
              checked={selectedValues.includes(option.value)}
              onChange={handleCheckboxChange}
              disabled={disabled || option.disabled}
            />
            {option.label}
          </HoverableLabel>
        ))}
      </LabelBody>
    </div>
  );
};

export default CustomCheckboxGroup;