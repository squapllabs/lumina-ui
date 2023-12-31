import React, { SVGProps } from "react";

interface DropdownIconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  height?: string | number;
  width?: string | number;
  disabled?: boolean; // Add a disabled prop
  onClick?: () => void; // Optionally, add an onClick prop
}

const DropdownIcon: React.FC<DropdownIconProps> = ({
  color = "currentColor",
  height = "1em",
  width = "1em",
  disabled = false, // Default value is false
  onClick, // Optionally, you can pass an onClick function
  ...props
}) => {
  // Define a click handler that only calls onClick when not disabled
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 320 512"
      onClick={handleClick} // Attach the click handler
      style={{ cursor: disabled ? "not-allowed" : "pointer" }} // Set cursor style
      {...props}
    >
      <path
        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
        fill={color}
      />
    </svg>
  );
};

export default DropdownIcon;
