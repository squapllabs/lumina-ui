import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import DropdownIcon from "../../icons/DropdownIcon";
import CloseIcon from "../../icons/CloseIcon";
import AddIcon from "../../icons/AddIcon";
import { useTheme } from '../../theme/ThemeProvider'

interface InputWrapperProps {
  width?: string;
}

interface StyledInputProps {
  error?: boolean;
  hasprefixicon?: boolean;
  hassuffixicon?: boolean;
  transparent?: boolean;
  disabled?: boolean;
  showclearicon?: boolean;
  theme?: string;
}

interface Option {
  value: number;
  label: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  error?: string;
  width?: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  transparent?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onSelect: (e: React.SyntheticEvent<HTMLInputElement, Event> | string) => void;
  onAddClick: (e: string) => void;
  optionList: Option[];
  defaultLabel?: string;
  addLabel: string;
  theme?: string;
}

const OptionContainer = styled.div<{theme : any}>`
  position: relative;
  display: inline-block;
  width: 100%;
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};
`;

const OptionList = styled.ul<{theme : any}>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${(props) => (props.theme === "dark" ? "#494a52" : "white")};
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  max-height: 200px;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: left;
  li {
    padding: 8px 12px;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => (props.theme === "dark" ? "#809fff" : "#ccd9ff")};
    }
  }
`;

const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  flex-direction: column;

  width: ${(props) => props.width || "100%"};
`;

const StyledLabel = styled.label<{ theme: any }>`
  margin-bottom: 4px;
  font-size: 0.8rem;
  color: ${(props) => (props.theme === "dark" ? "#a7a9ab" : "#333c44")};
  font-weight: 600;
`;

const InputContainer = styled.div<StyledInputProps>`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${(props) =>
    `0 ${props.hassuffixicon ? "32px" : "12px"} 0 ${
      props.hasprefixicon ? "32px" : "12px"
    }`};
  border: 1px solid ${(props) => (props.error ? "red" : props.theme === 'dark' ? '#888' : "#ccc")};
  border-radius: 4px;
  background-color: ${(props) =>
    props.theme === "dark" ? "#494a52" : "white"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  &:hover {
    border-color: ${(props) => (props.disabled ? "#ccc" : props.theme === 'dark' ? 'white': "#888")};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
  &:focus-within {
    outline: 0;
    box-shadow: ${(props) => (props.disabled ? "none" : "0 0 0 2px #68717840")};
  }
`;

const StyledInput = styled.input<StyledInputProps>`
  height: 34px;
  padding: ${(props) => `6px ${props.hassuffixicon ? "32px" : "0"} 6px 0`};
  border: none;
  background-color: ${(props) => ((props.disabled && props.theme === 'dark') ? "#494a52" : "transparent")};
  // background-color: ${(props) =>
    props.theme === "dark" ? "#494a52" : "white"};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  color: ${(props) => (props.disabled ? "#888" : props.theme === 'dark' ? 'white': "inherit")};
  flex-grow: 1;
  &:focus {
    outline: none;
  }
  box-sizing: border-box;
`;

const IconWrapper = styled.div`
  display: flex;
`;

const PrefixIconWrapper = styled(IconWrapper)`
  position: absolute;
  left: 8px;
`;

const SuffixIconWrapper = styled(IconWrapper)`
  position: absolute;
  right: 8px;
`;

const InputError = styled.span`
  color: red;
  margin-top: 2px;
  font-size: 0.75rem;
`;

const RequiredField = styled.span`
  color: red;
`;
const ErrorMessageWrapper = styled.div`
  min-height: 20px; // Change to the height of your error message
`;
const AutoCompleteSelect: React.FC<
  InputProps & { mandatory?: boolean; showclearicon?: boolean }
> = ({
  label,
  placeholder,
  error,
  width,
  prefixIcon,
  suffixIcon,
  transparent,
  disabled,
  mandatory = false,
  value,
  onSelect,
  optionList,
  defaultLabel,
  addLabel,
  showclearicon = true,
  onAddClick,
  ...props
}) => {
  const shouldShowAsterisk = mandatory;
  const [filteredOptions, setFilteredOptions] =  useState<Option[]>([]);
  const [allOptions, setAllOptions] = useState<Option[]>(optionList)
  // const [allOptions, setAllOptions] = useState<Option[]>([]) // Replace with actual data source
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState("");

  const handleChange = (e :  any) => {
    setValues(e.target.value);
    const filtered = allOptions.filter((option) =>
      option.label.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  useEffect(() => {
    setAllOptions(optionList);
    setFilteredOptions(optionList);
    // const defaultValue: number = 0; 
    const num: number = Number(value);
    if (num > 0) {
      const matchingObjects = allOptions.filter(
        (obj) => Number(obj.value) === Number(value)
      );
      if (matchingObjects.length > 0) {
        setValues(matchingObjects[0].label);
      } else {
        setValues('');
      }
    } else {
      setValues('');
    }
  }, [value, allOptions, optionList]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  const handleClear = () => {
    setValues("");
    onSelect("");
  };
  const { theme } = useTheme()
  return (
    <InputWrapper width={width}>
      {label && (
        <StyledLabel theme={theme}>
          {label} {shouldShowAsterisk && <RequiredField>*</RequiredField>}{" "}
        </StyledLabel>
      )}
      <InputContainer
        theme={theme}
        error={!!error}
        hasprefixicon={!!prefixIcon}
        hassuffixicon={!!suffixIcon}
        transparent={transparent}
        disabled={disabled}
      >
        {prefixIcon && <PrefixIconWrapper>{prefixIcon}</PrefixIconWrapper>}
        <StyledInput
          ref={inputRef}
          hassuffixicon={!!suffixIcon}
          placeholder={placeholder}
          disabled={disabled}
          showclearicon={showclearicon}
          value={values}
          {...props}
          onChange={(e) => handleChange(e)}
          onFocus={() => {
            setOpen(true);
          }}
          autoComplete="off"
        />
        <SuffixIconWrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            {!disabled && values !== "" && showclearicon ? (
              <CloseIcon width={10}  color={theme==='dark' ? 'white' : '#475467' } onClick={() => handleClear()} />
            ) : (
              ""
            )}

            {/* <DropdownIcon
              onClick={(e) => {
                e.stopPropagation();
                setOpen(!open);
              }}
            /> */}
            <DropdownIcon
            color={theme==='dark' ? '#ccc' : '#475467' }
              onClick={() => {
                setOpen(!open);
              }}
            />
          </div>
        </SuffixIconWrapper>
      </InputContainer>
      <OptionContainer theme={theme}>
        {open && (
          <OptionList theme={theme}>
            {defaultLabel != null && <li value="">{defaultLabel}</li>}

            {filteredOptions?.map((option) => {
              return (
                <div>
                  <li
                    key={option.value}
                    onClick={() => {
                      onSelect(String(option.value));
                      setOpen(false);
                      setValues(option.label);
                    }}
                    style={{
                      backgroundColor: `${
                        option.label === values ? "#99b3ff" : ""
                      }`,
                    }}
                  >
                    {option.label}
                  </li>
                </div>
              );
            })}
            {addLabel && (
              <li
                value="add"
                onClick={() => {
                  setOpen(!open);
                  onAddClick("add");
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: `${(props) => (props.theme === 'dark'? "#ccc" : "#475467")}`,
                    fontSize: "12px",
                  }}
                >
                  <AddIcon color={theme==='dark' ? '#ccc' : '#475467' } width={15} />
                  {addLabel}
                </div>
              </li>
            )}
          </OptionList>
        )}
      </OptionContainer>
      {!!error === false ? (
        <div></div>
      ) : (
        <ErrorMessageWrapper>
          {error && <InputError>{error}</InputError>}
        </ErrorMessageWrapper>
      )}
    </InputWrapper>
  );
};

export default AutoCompleteSelect;
