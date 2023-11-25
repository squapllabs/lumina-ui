import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?:
    | "primary"
    | "secondary"
    | "transparent"
    | "outlined"
    | "cancel"
    | "search"
    | "reset"
    | "draft";
  size?: "small" | "medium" | "large";
  shape?: "rectangle" | "rounded" | "outlined";
  icon?: React.ReactNode;
  fullWidth?: boolean;
  justify?: "left" | "center" | "right";
}

const primaryStyles = css`
  background: #7f56d9;
  color: white;

  &:hover {
    background: #6941c6;
  }

  &:active {
    background: #7f56d9;
  }

  &:disabled {
    background: #e9d7fe;
  }
`;

const cancelStyles = css`
  background: #fef3f2;
  color: #b42318;

  &:hover {
    background: #fee4e2;
  }

  &:active {
    background: #fef3f2;
  }

  &:disabled {
    background: #e9d7fe;
  }
`;
const searchStyles = css`
  background: #f4f4f5;
  color: #70707b;
  &:hover {
    background: #d6d6d6;
  }

  &:active {
    background: #f4f4f5;
  }

  &:disabled {
    background: #e9d7fe;
  }
`;

const resetStyles = css`
  background: #f4f4f5;
  color: #70707b;
  &:hover {
    background: #d6d6d6;
  }

  &:active {
    background: #f4f4f5;
  }

  &:disabled {
    background: #ffffff;
  }
`;

const draftStyles = css`
  background: #f4f4f5;
  color: #7f56d9;
  &:hover {
    background: #d6d6d6;
  }

  &:active {
    background: #f4f4f5;
  }

  &:disabled {
    background: #ffffff;
  }
`;

const outlinedColorStyles = css`
  background: transparent;
  color: #7f56d9;
  border: 1px solid #7f56d9;
`;

const transparentStyles = css`
  background: transparent;
  &:hover {
    background: transparent;
  }
  &:active {
    background: transparent;
  }
  &:disabled {
    background: transparent;
  }
`;

const sizes = {
  small: css`
    height: 2.25rem; // 36px
    font-size: 0.875rem; // Material UI default for small buttons
  `,
  medium: css`
    height: 2.75rem; // 44px
    font-size: 1rem; // Material UI default for medium buttons
  `,
  large: css`
    height: 3.75rem; // 60px
    font-size: 1.25rem; // Material UI default for large buttons
  `,
};

const rectangleStyles = css`
  border-radius: 0.5rem;
`;

const roundedStyles = css`
  border-radius: 12px;
`;

const outlinedStyles = css`
  border: 1px solid;
`;

const justifyStyles = {
  left: css`
    justify-content: flex-start;
  `,
  center: css`
    justify-content: center;
  `,
  right: css`
    justify-content: flex-end;
  `,
};

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border: none;
  cursor: pointer;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  ${({ color }) => color === "primary" && primaryStyles}
  ${({ color }) => color === "cancel" && cancelStyles}
  ${({ color }) => color === "search" && searchStyles}
  ${({ color }) => color === "reset" && resetStyles}
  ${({ color }) => color === "draft" && draftStyles}
  ${({ color }) => color === "transparent" && transparentStyles}
  ${({ color }) => color === "outlined" && outlinedColorStyles}
 
  ${({ size }) => sizes[size || "medium"]}
 
  ${({ shape }) => shape === "rectangle" && rectangleStyles}
  ${({ shape }) => shape === "rounded" && roundedStyles}
  ${({ shape }) => shape === "outlined" && outlinedStyles}
 
  ${({ justify }) => justify && justifyStyles[justify]}
`;

const IconWrapper = styled.span`
  margin-right: 0.5rem;
`;

const Button: React.FC<ButtonProps> = ({
  color,
  size,
  shape,
  icon,
  children,
  fullWidth,
  justify,
  ...props
}) => {
  return (
    <StyledButton
      color={color}
      size={size}
      shape={shape}
      fullWidth={fullWidth}
      justify={justify}
      {...props}
    >
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {children}
    </StyledButton>
  );
};

export default Button;

Button.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "transparent",
    "outlined",
    "cancel",
    "search",
    "reset",
    "draft",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  shape: PropTypes.oneOf(["rectangle", "rounded", "outlined"]),
  icon: PropTypes.node,
  fullWidth: PropTypes.bool,
  justify: PropTypes.oneOf(["left", "center", "right"]),
};
