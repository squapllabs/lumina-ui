import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

interface InputWrapperProps {
  width?: string;
}

interface StyledInputProps {
  error?: string | boolean;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  error?: string;
  width?: string;
  mandatory?: boolean;
  min?: string;
  max?: string;
}

const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || "100%"};
`;

const StyledLabel = styled.label`
  margin-bottom: 4px;
  font-size: 0.8rem;
  color: #333c44;
  font-weight: 600;
`;

const InputContainer = styled.div<StyledInputProps>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 12px;
  border: 1px solid ${(props) => (props.error ? "red" : "#ccc")};
  border-radius: 4px;
  background-color: #ffffff;
  &:hover {
    border-color: #888;
  }
  &:focus-within {
    outline: 0;
    box-shadow: 0 0 0 2px #68717840;
  }
`;

const StyledInput = styled.input`
  height: 34px;
  padding: 6px 0;
  border: none;
  background-color: transparent;
  flex-grow: 1;
  &:focus {
    outline: none;
  }
  box-sizing: border-box;
`;

const InputError = styled.span`
  color: red;
  margin-top: 2px;
  font-size: 0.75rem;
`;

const ErrorMessageWrapper = styled.div`
  min-height: 20px;
`;

const RequiredField = styled.span`
  color: red;
`;

const DatePicker: React.FC<InputProps> = ({
  label,
  placeholder,
  error,
  width,
  mandatory = false,
  min,
  max,
  ...props
}) => {
  const shouldShowAsterisk = mandatory;
  return (
    <InputWrapper width={width}>
      {label && (
        <StyledLabel>
          {label} {shouldShowAsterisk && <RequiredField>*</RequiredField>}
        </StyledLabel>
      )}
      <InputContainer error={!!error}>
        <StyledInput
          type="date"
          placeholder={placeholder}
          min={min}
          max={max}
          {...props}
        />
      </InputContainer>
      <ErrorMessageWrapper>
        {error && <InputError>{error}</InputError>}
      </ErrorMessageWrapper>
    </InputWrapper>
  );
};

export default DatePicker;

DatePicker.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  width: PropTypes.string,
  mandatory: PropTypes.bool,
  min: PropTypes.string,
  max: PropTypes.string,
};
