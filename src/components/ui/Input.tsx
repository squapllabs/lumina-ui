import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useTheme } from '../../theme/ThemeProvider'

interface InputWrapperProps {
  width?: string
}

interface StyledInputProps {
  error?: string | boolean
  hasprefixicon?: boolean
  hassuffixicon?: boolean
  transparent?: boolean
  disabled?: boolean
  errorDisable?: boolean
  borderError?: boolean
  theme: any
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  placeholder?: string
  error?: string
  width?: string
  prefixIcon?: React.ReactNode
  suffixIcon?: React.ReactNode
  transparent?: boolean
  disabled?: boolean
  errorDisable?: boolean
  borderError?: boolean
}

const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || '100%'};
`

const StyledLabel = styled.label<{ theme: any }>`
  margin-bottom: 4px;
  font-size: 0.8rem;
  color: ${(props) => (props.theme === 'dark' ? '#a7a9ab' : '#333c44')};
  font-weight: 600;
`

const InputContainer = styled.div<StyledInputProps>`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${(props: any) =>
    `0 ${props.hassuffixicon ? '32px' : '2px'} 0 ${
      props.hasprefixicon ? '32px' : '2px'
    }`};
  border: 1px solid ${(props: any) => (props.error ? 'red' : '#ccc')};
  border-radius: 4px;
  background-color: ${(props: any) =>
    props.theme === 'dark' ? '#494a52' : '#fffff'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  &:hover {
    border-color: ${(props) => props.disabled ? '' : props.theme === 'dark' ? 'white' : 'black'};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  }
  &:focus-within {
    outline: 0;
    box-shadow: ${(props) =>
      props.disabled
        ? 'none'
        : props.theme === 'dark'
        ? '0 0 0 1px white' : '0 0 0 1px #68717840'};
  }
`

const StyledInput = styled.input<StyledInputProps>`
  height: 34px;
  width:90px;
  padding: ${(props) => `6px ${props.hassuffixicon ? '32px' : '0'} 6px 0`};
  border: none;
  background-color: ${(props) =>
    props.theme === 'dark' ? '#494a52' : '#FFFFFF'};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  color: ${(props) =>
    props.disabled ? '#888' : props.theme === 'dark' ? 'white' : 'inherit'};
  flex-grow: 1;
  &:focus {
    outline: none;
    caret-color: ${(props) => (props.theme === 'dark' ? '#a7a9ab' : 'black')};
  }
  box-sizing: border-box;
`

const IconWrapper = styled.div`
  display: flex;
`

const PrefixIconWrapper = styled(IconWrapper)`
  position: absolute;
  left: 8px;
`

const SuffixIconWrapper = styled(IconWrapper)`
  position: absolute;
  right: 8px;
`

const InputError = styled.span`
  color: red;
  margin-top: 2px;
  font-size: 0.75rem;
`

const RequiredField = styled.span`
  color: red;
`
const ErrorMessageWrapper = styled.div`
  min-height: 20px; // Change to the height of your error message
`

const Input: React.FC<InputProps & { mandatory?: boolean }> = ({
  label,
  placeholder,
  error,
  width,
  prefixIcon,
  suffixIcon,
  transparent,
  disabled,
  errorDisable = false,
  borderError = false,
  mandatory = false,
  ...props
}) => {
  const shouldShowAsterisk = mandatory
  const hasError = !!error
  const { theme } = useTheme()
  return (
    <InputWrapper width={width}>
      {label && (
        <StyledLabel theme={theme}>
          {label} {shouldShowAsterisk && <RequiredField>*</RequiredField>}{' '}
        </StyledLabel>
      )}
      <InputContainer
        error={hasError}
        hasprefixicon={!!prefixIcon}
        hassuffixicon={!!suffixIcon}
        transparent={transparent}
        disabled={disabled}
        theme={theme}
        style={{
          borderColor: borderError ? 'red' : hasError ? 'red' : theme === 'dark' ? '#888' : '#ccc'
        }}
      >
        {prefixIcon && <PrefixIconWrapper>{prefixIcon}</PrefixIconWrapper>}
        <StyledInput
          theme={theme}
          hassuffixicon={!!suffixIcon}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete='off'
          {...props}
        />
        {suffixIcon && <SuffixIconWrapper>{suffixIcon}</SuffixIconWrapper>}
      </InputContainer>
      {(hasError || !errorDisable) && (
        <ErrorMessageWrapper>
          {hasError && <InputError>{error}</InputError>}
        </ErrorMessageWrapper>
      )}
    </InputWrapper>
  )
}

export default Input

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  width: PropTypes.string,
  prefixIcon: PropTypes.node,
  suffixIcon: PropTypes.node,
  transparent: PropTypes.bool,
  disabled: PropTypes.bool,
  errorDisable: PropTypes.bool,
  borderError: PropTypes.bool
}
