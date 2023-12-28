import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useTheme } from '../../theme/ThemeProvider'

interface InputWrapperProps {
  width?: string;
}

interface StyledInputProps {
  error?: string | boolean;
  theme?:string;
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

const StyledLabel = styled.label<{theme : any}>`
  margin-bottom: 4px;
  font-size: 0.8rem;
  color: ${(props) => (props.theme === 'dark' ? '#a7a9ab' : '#333c44')};
  font-weight: 600;
`;
 

const InputContainer = styled.div<StyledInputProps>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 12px;
  border: 1px solid ${(props) => (props.error ? "red" : props.theme === 'dark' ? '#888' :  "#ccc")};
  border-radius: 4px;
  background-color: ${(props) => ( props.theme === 'dark' ? '#494a52' :  "white")};
  &:hover {
    border-color: ${(props) => ( props.theme === 'dark' ? 'white' :  "")};
  }
  &:focus-within {
    outline: 0;
    box-shadow: 0 0 0 2px #68717840;
  }
`;

const StyledInput = styled.input<{theme : string}>`
  height: 34px;
  padding: 6px 0;
  border: none;
  background-color: ${(props) => ( props.theme === 'dark' ? '#494a52' :  "white")};
  flex-grow: 1;
  &:focus {
    outline: none;
  }
  box-sizing: border-box;
  color:${(props) => ( props.theme === 'dark' ? 'white' :  "black")}
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
  const { theme } = useTheme()
  return (
    <InputWrapper width={width}>
      {label && (
        <StyledLabel theme={theme}>
          {label} {shouldShowAsterisk && <RequiredField>*</RequiredField>}
        </StyledLabel>
      )}
      <InputContainer error={!!error} theme={theme}>
        <StyledInput
          type="date"
          placeholder={placeholder}
          min={min}
          max={max}
          theme={theme}
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
