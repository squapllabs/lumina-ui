import React, { useState } from 'react';
import styled from 'styled-components';

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
  mandatory?: boolean;
  checked?: boolean;
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
  checked?: boolean;
  error?: string;
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

const CheckboxInput = styled.input<{ checked?: boolean; disabled?: boolean }>`
  position: relative;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin: 0;

  &:checked {
    background-color: ${({ checked }) => (checked ? '#3366ff' : 'transparent')};
  }
`;

const Label = styled.label<{error?: string}>`
  font-weight : 600
`;

const LabelBody = styled.div`
  width: max-content;
`;

const RequiredField = styled.span`
  color: red;
`;

const ErrorMessageWrapper = styled.div`
  min-height: 20px;
`;

const InputError = styled.span`
  color: red;
  font-size: 0.75rem;
`;

const CustomCheckboxGroup: React.FC<CustomCheckboxGroupProps> = ({
  label,
  options,
  defaultValues = [], 
  onChange,
  containerStyle,
  labelStyle,
  optionContainerStyle,
  mandatory = false,
  disabled = false,
  error = '',
}) => {
  const shouldShowAsterisk = mandatory;

  // State to keep track of selected values
  const [selectedValues, setSelectedValues] = useState<string[]>(defaultValues);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedValues((prevSelectedValues) => {
      const selectedValuesCopy = prevSelectedValues || []; // Initialize to an empty array if undefined
      if (selectedValuesCopy.includes(value)) {
        return selectedValuesCopy.filter((item) => item !== value);
      } else {
        return [...selectedValuesCopy, value];
      }
    });
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div style={containerStyle}>
      <Label style={labelStyle} >
        {label} {shouldShowAsterisk && <RequiredField>*</RequiredField>}{' '}
      </Label>
      <LabelBody style={optionContainerStyle}>
        {options.map((option) => (
          <HoverableLabel key={option.value} disabled={disabled} >
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
      {error === '' ? (
        <div></div>
      ) : (
        <ErrorMessageWrapper>
          {error && <InputError>{error}</InputError>}
        </ErrorMessageWrapper>
      )}
    </div>
  );
};

export default CustomCheckboxGroup;