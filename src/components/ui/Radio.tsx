import React, { useState } from 'react';
import styled from 'styled-components';

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
  mandatory?: boolean;
}

interface CustomRadioGroupProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  options: Option[];
  defaultValue?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  containerStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  optionContainerStyle?: React.CSSProperties;
  mandatory?: boolean;
  disabled?: boolean;
  error?: string;
}

const HoverableLabel = styled.label<{ disabled?: boolean; }>`
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

  &:hover > input::before {
    content: '';
    display: ${({ disabled }) => (disabled ? 'none' : 'block')};
    position: absolute;
    border: 2px solid #3366ff;
    border-width: 2px;
    border-style: medium;
    border-radius: 50%;
    box-sizing: border-box;
    width: 15px;
    height: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -52%);
  }
`;

const RadioInput = styled.input<{ disabled?: boolean }>`
  position: relative;
  transition: background-color 0.3s, transform 0.3s;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:before {
    content: '';
    display: none;
  }
`;

const Label = styled.label<{error?: string}>`
  font-weight : 600
`;

const LabelBody = styled.div`
  width: min-content;
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

const CustomRadioGroup: React.FC<CustomRadioGroupProps> = ({
  label,
  options,
  containerStyle,
  labelStyle,
  optionContainerStyle,
  mandatory = false,
  disabled = false,
  defaultValue,
  error = '',
}) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    defaultValue
  );

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };
  const shouldShowAsterisk = mandatory;
  return (
    <div style={containerStyle}>
      <Label style={labelStyle}>
        {label} {shouldShowAsterisk && <RequiredField>*</RequiredField>}{' '}
      </Label>
      <LabelBody style={optionContainerStyle}>
        {options.map((option) => (
          <HoverableLabel key={option.value} disabled={disabled} >
            <RadioInput
              type="radio"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => handleChange(option.value)}
              disabled={disabled}
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

export default CustomRadioGroup;