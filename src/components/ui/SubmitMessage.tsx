import React from "react";
import Button from "../ui/Button";
import CloseIcon from "../../icons/CloseIcon";
import ProtoTypes from "prop-types";

interface DialogBoxProps {
  title: string;
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
  contentLine1: string;
}

const DialogBox: React.FC<DialogBoxProps> = ({
  title,
  open,
  handleClose,
  handleConfirm,
  contentLine1,
}) => {
  if (!open) return null;

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
    overflow: "hidden",
  };

  const boxStyle: React.CSSProperties = {
    backgroundColor: "#fff",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: "1px",
  };

  const titleStyle: React.CSSProperties = {
    // padding: "10px 10px 1px 0px",
    // backgroundColor: "red",
  };

  const contentStyle: React.CSSProperties = {
    padding: "8px 8px 8px 10px",
    fontSize: "smaller",
  };

  const mainContentStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent:'space-between'
  };

  const iconContentStyle: React.CSSProperties = {
    // padding: "15px",
    // backgroundColor: "green",
    height:"20px"
  };

  return (
    <div style={dialogStyle}>
      <div style={boxStyle}>
        <div style={mainContentStyle}>
          <div>
            <span style={titleStyle}>{title}</span>
          </div>
          <div style={iconContentStyle}>
            <CloseIcon onClick={handleClose} />
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
            gap: "10px",
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
            shape="rectangle"
            justify="center"
            color="primary"
            size="small"
            onClick={handleConfirm}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;

DialogBox.propTypes = {
  title: ProtoTypes.string.isRequired,
  open: ProtoTypes.bool.isRequired,
  handleClose: ProtoTypes.func.isRequired,
  handleConfirm: ProtoTypes.func.isRequired,
  contentLine1: ProtoTypes.string.isRequired,
};
