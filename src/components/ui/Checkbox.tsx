import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

interface CheckboxProps {
  name: string
  label?: string
  checked: boolean
  onChange: (event: any) => void
  disabled?: boolean
  // width:string;
  // height:string;
}

const CheckboxContainer = styled.div`
  display: inline-flex;
  vertical-align: middle;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div<{ checked: boolean; disabled: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 0.75rem;
  height: 0.75rem;
  background: ${(props) => (props.checked ? '#7F56D9' : '#ffffff')};
  border: 2px solid #d0d5dd;
  border-radius: 3px;

  ${HiddenCheckbox}:focus + & {
    border-color: #d6bbfb;
    background: #ffffff;
  }

  ${HiddenCheckbox}:hover + & {
    border-color: #7f56d9;
    background: ${(props) => (props.checked ? '#7F56D9' : '#F4EBFF')};
  }

  ${(props) =>
    props.disabled &&
    `
    background: #F2F4F7;
    border-color: #D0D5DD;
    cursor: not-allowed;
  `}
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

const CheckboxLabel = styled.label`
  margin-left: 8px;
  cursor: pointer;
  line-height: 20px; // Match checkbox height for vertical alignment
`

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  checked,
  onChange,
  disabled = false
  // width = "0.75rem",
  // height = "0.75rem",
}) => (
  <CheckboxContainer>
    <HiddenCheckbox
      name={name}
      checked={checked}
      onChange={(e) => onChange(e)}
      disabled={disabled}
    />
    <StyledCheckbox
      checked={checked}
      onClick={() => onChange({ target: { checked: !checked } })}
      disabled={disabled}
      // width={width}
      // height={height}
    >
      <Icon viewBox='0 0 24 24'>
        <polyline
          points='20 6 9 17 4 12'
          style={{ display: checked ? 'block' : 'none' }}
        />
      </Icon>
    </StyledCheckbox>
    {label && <CheckboxLabel htmlFor={name}>{label}</CheckboxLabel>}
  </CheckboxContainer>
)

export default Checkbox

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}
