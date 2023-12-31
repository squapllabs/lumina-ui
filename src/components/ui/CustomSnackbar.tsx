import React, { useEffect, useState } from "react";
import CheckIcon from "../../icons/CheckIcon";
import WarningIcon from "../../icons/WarningIcon";
import ProtoTypes from "prop-types";
interface CustomSnackbarProps {
  open: boolean;
  message: string;
  onClose: () => void;
  autoHideDuration?: number;
  type: "success" | "error" | "warning";
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  open,
  message,
  onClose,
  autoHideDuration = 3000,
  type = "success",
}) => {
  const [isVisible, setIsVisible] = useState(open);

  useEffect(() => {
    setIsVisible(open);
  }, [open]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
  
    if (isVisible && autoHideDuration) {
      timeoutId = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, autoHideDuration);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isVisible, autoHideDuration, onClose]);

  if (!isVisible) return null;

  let icon;
  let fontColor;

  switch (type) {
    case "success":
      icon = <CheckIcon color="#418944" />;
      fontColor = "#1e4620";
      break;
    case "error":
      icon = <WarningIcon color="#d94b4b" />;
      fontColor = "#5f2120";
      break;
    case "warning":
      icon = <WarningIcon color="#f08025" />;
      fontColor = "#683e02";
      break;
    default:
      icon = null;
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: "16px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor:
          type === "success"
            ? "#edf7ed"
            : type === "error"
            ? "#fdeded"
            : "#fff4e5",
        color: fontColor,
        padding: "8px 16px",
        borderRadius: "4px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
      }}
    >
      {icon && <div style={{ marginRight: "8px" }}>{icon}</div>}
      {message}
    </div>
  );
};

export default CustomSnackbar;

CustomSnackbar.propTypes = {
  open: ProtoTypes.bool.isRequired,
  message: ProtoTypes.string.isRequired,
  onClose: ProtoTypes.func.isRequired,
  autoHideDuration: ProtoTypes.number,
  type: ProtoTypes.oneOf(["success", "error", "warning"] as const).isRequired,
};
