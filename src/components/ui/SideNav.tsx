import React,{useState} from "react";
import ProtoTypes from "prop-types";
// import Styles from "./SideNav.module.scss";

interface MenuItem {
  id: number;
  name: string;
}

interface SideNavProps {
  menuItems: MenuItem[];
  selectedItem: number; // Add the new prop for selectedItem
  handleMenuItemClick: (id: number) => void;
}

const SideNav: React.FC<SideNavProps> = ({
  menuItems,
  selectedItem, // Receive selectedItem from props
  handleMenuItemClick,
}) => {
  const onItemClick = (id: number) => {
    handleMenuItemClick(id); // Call the parent function to handle the click action if needed.
  };
  const handleMouseEnter = (id: number) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  const sideContainer: React.CSSProperties = {
    height: "100vh",
    color: "#7f56d9",
    fontWeight: 100,
    boxShadow: "5px 0 10px rgba(233, 233, 233, 0.5)",
  };
  const side_menu: React.CSSProperties = {
    listStyle: "none",
  };
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  return (
    <div style={sideContainer}>
      <div>
        <ul style={side_menu}>
          {menuItems.map((item) => (
             <li
             key={item.id}
             style={{
              padding: '12px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: selectedItem === item.id ? 600 : 'normal',
              backgroundColor: selectedItem === item.id
                ? '#d5d9eb'
                : hoveredItem === item.id
                ? '#efefef'
                : 'transparent',
                color: selectedItem === item.id ? 'black' : 'inherit',
              }}
             onClick={() => onItemClick(item.id)}
             onMouseEnter={() => handleMouseEnter(item.id)}
             onMouseLeave={handleMouseLeave}
           >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;

SideNav.propTypes = {
  menuItems: ProtoTypes.array.isRequired,
  handleMenuItemClick: ProtoTypes.func.isRequired,
  selectedItem: ProtoTypes.number.isRequired, 
};
