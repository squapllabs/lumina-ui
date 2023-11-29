import React from "react";
import Button from "./Button";
import ProtoTypes from "prop-types";

interface ButtonData {
  label: string;
  value: string;
}

interface TabComponentProps {
  labels: ButtonData[];
  onClick: (value: string) => void;
  activeTab?: string | null;
}

const CustomTabComponent: React.FC<TabComponentProps> = ({
  labels,
  onClick,
  activeTab,
}) => {
  // const [setSelectedValue] = useState<any>();
  const handleButtonClick = (value: string) => {
    onClick(value);
    // setSelectedValue(value);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        {labels.map(({ label, value }) => (
          <Button
            key={value}
            onClick={() => handleButtonClick(value)}
            style={{
              backgroundColor: "white",
              color: activeTab === value ? "#7f56d9" : "#3F4E4F",
              padding: "20px 26px",
              fontSize: "15px",
              fontWeight: "500",
              borderBottom:
                activeTab === value
                  ? `4px solid ${activeTab === value ? "#7f56d9" : ""}`
                  : "",
            }}
            justify="center"
            size="small"
          >
            {label}
          </Button>
        ))}
      </div>
      <div
        style={{
          borderBottom: `2px solid ${"#ccc"}`,
        }}
      ></div>
    </div>
  );
};

export default CustomTabComponent;

CustomTabComponent.propTypes = {
  labels: ProtoTypes.array.isRequired,
  onClick: ProtoTypes.func.isRequired,
  activeTab: ProtoTypes.string,
};
