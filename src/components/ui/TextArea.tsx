/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

interface InputWrapperProps {
  width?: string;
  height?: string;
}

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  placeholder?: string;
  error?: string;
  width?: string;
  height?: string;
  rows?: number;
  maxCharacterCount?: number;
  value?: string;
}

const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  flex-direction: column;
  height: ${(props) => props.height || "100%"};
  width: ${(props) => props.width || "100%"};
`;

const StyledLabel = styled.label`
  margin-bottom: 4px;
  font-size: 0.8rem;
  color: #333c44;
  font-weight: 600;
`;

const StyledTextArea = styled.textarea<TextAreaProps>`
  height: ${(props) => (props.rows ? `${props.rows * 15}px` : "100%")};
  border: 1px solid ${(props) => (props.error ? "red" : "#ccc")};
  border-radius: 4px;
  resize: vertical;
  background-color: #ffffff;
  &:hover {
    border-color: #888;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #68717840;
  }
  position: relative;
  padding: 10px 0px 0px 10px;
  &::placeholder::before {
    content: "";
    display: block;
  }
`;

const InputError = styled.span`
  color: red;
  margin-top: 2px;
  font-size: 0.75rem;
`;

const ErrorMessageWrapper = styled.div`
  min-height: 20px;
`;

const CharacterCount = styled.div`
  font-size: 0.75rem;
  color: #888;
`;
const RequiredField = styled.span`
  color: red;
`;

const TextArea: React.FC<TextAreaProps & { mandatory?: boolean }> = ({
  label,
  placeholder,
  error,
  width,
  height,
  rows,
  maxCharacterCount,
  value,
  mandatory = false,
  ...props
}) => {
  const [characterCount, setCharacterCount] = useState(maxCharacterCount || 40);
  const [currentValue, setCurrentValue] = useState<string>(
    value || "" // Initialize with the 'value' prop
  );

  useEffect(() => {
    setCharacterCount(maxCharacterCount || 40);
    setCurrentValue(value || "");
  }, [maxCharacterCount, value]);

  useEffect(() => {
    const remainingCharacters = maxCharacterCount
      ? maxCharacterCount - (currentValue || "").toString().length
      : 40 - (currentValue || "").toString().length;
    setCharacterCount(remainingCharacters);
  }, [currentValue, maxCharacterCount]);
  const shouldShowAsterisk = mandatory;
  return (
    <InputWrapper width={width} height={height}>
      {label && (
        <StyledLabel>
          {label} {shouldShowAsterisk && <RequiredField>*</RequiredField>}
        </StyledLabel>
      )}
      <StyledTextArea
        error={!!error}
        placeholder={placeholder}
        rows={rows}
        onChange={props.onChange}
        value={value}
        maxLength={maxCharacterCount}
        {...props}
      />
      {maxCharacterCount && (
        <CharacterCount>
          {`${characterCount} characters left out of ${maxCharacterCount}`}
        </CharacterCount>
      )}
      <ErrorMessageWrapper>
        {error && <InputError>{error}</InputError>}
      </ErrorMessageWrapper>
    </InputWrapper>
  );
};

export default TextArea;

TextArea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  rows: PropTypes.number,
  maxCharacterCount: PropTypes.number,
  value: PropTypes.string,
  mandatory: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
