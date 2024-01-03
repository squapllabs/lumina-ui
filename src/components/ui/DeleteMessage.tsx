import React from "react";
import DeleteIcon from "../../icons/DeleteIcon";
import Button from "../ui/Button";
import CloseIcon from "../../icons/CloseIcon";
import ProtoTypes from "prop-types";
import { useTheme } from '../../theme/ThemeProvider'

interface DialogBoxProps {
  title: string;
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
  contentLine1: string;
}

const DeleteDialogBox: React.FC<DialogBoxProps> = ({
  title,
  open,
  handleClose,
  handleConfirm,
  contentLine1,
}) => {
  if (!open) return null;
  const { theme } = useTheme()
  const dialogStyle: React.CSSProperties = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const boxStyle: React.CSSProperties = {
    backgroundColor: theme === 'dark' ? '#333' : '#fff',
    padding: "20px",
    borderRadius: "4px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
  };

 

  const contentStyle: React.CSSProperties = {
    padding: "8px",
    fontSize: "smaller",
    color: theme === "dark" ? "white" : "black",
  };

  const mainContentStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "20px",
  };

  const iconContentStyle: React.CSSProperties = {
    // padding: "15px",
  };

  return (
    <div style={dialogStyle}>
      <div style={boxStyle}>
        <div style={mainContentStyle}>
          <div>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <DeleteIcon color={theme === "dark" ? "white" : "red"} />
              <span style={{ color: theme === "dark" ? "white" : "black" }}>
                {title}
              </span>
            </div>
          </div>
          <div style={iconContentStyle}>
            <CloseIcon
              color={theme === "dark" ? "white" : "#475467"}
              onClick={handleClose}
            />
          </div>
        </div>
        <div>
          <p style={contentStyle}>{contentLine1}</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: "5px",
          }}
        >
          <Button
            color="cancel"
            shape="rectangle"
            justify="center"
            size="small"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            color="delete"
            shape="rectangle"
            justify="center"
            size="small"
            onClick={handleConfirm}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialogBox;

DeleteDialogBox.propTypes = {
  title: ProtoTypes.string.isRequired,
  open: ProtoTypes.bool.isRequired,
  handleClose: ProtoTypes.func.isRequired,
  handleConfirm: ProtoTypes.func.isRequired,
  contentLine1: ProtoTypes.string.isRequired,
};
