import React, { useState,useEffect,useRef } from "react";
import styled from "styled-components";

interface MenuItem {
  label: string;
  onClick?: () => void;
  subMenuItems?: MenuItem[];
}

interface DropdownProps {
  isOpen: boolean;
  menuItems: MenuItem[];
}

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const MenuItemContainer = styled.div`
padding: 10px 20px 10px 15px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  &:hover {
    font-weight: bold;
  }
  &:not(:first-child):not(:last-child) {
    border-radius: 0;
  }

  /* Style for the first item */
  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  /* Style for the last item */
  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  } 
`;

const SubMenuContainer = styled.div<{ top: number}>`
  position: absolute;
  top: ${({ top }) => `${top-55}px`};
  left: 102%;
  min-width: 150px;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  &:not(:first-child):not(:last-child) {
    border-radius: 0;
  }

  /* Style for the first item */
  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  /* Style for the last item */
  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  } 
`;

const SubMenuItemContainer = styled(MenuItemContainer)`
padding: 10px 20px 10px 15px;
font-weight: normal;
background-color: white;
`;

const MenuBar: React.FC<DropdownProps> = ({ isOpen, menuItems }) => {
  const [hoveredMenuItem, setHoveredMenuItem] = useState<string | null>(null);
  const [subMenuPosition, setSubMenuPosition] = useState<{ top: number; }>({
    top: 0,
  });
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleMenuItemHover = (label: string, rect: DOMRect) => {
    setHoveredMenuItem(label);
    const top = rect.bottom;
    setSubMenuPosition({ top });
  };

  const handleMenuLeave = () => {
    setHoveredMenuItem(null);
    setSubMenuPosition({ top: 0});
  };
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        isOpen=false;
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer onMouseLeave={handleMenuLeave} ref={menuRef}>
      {isOpen && (
        <div>
          {menuItems.map((item, index) => (
            <MenuItemContainer
              key={index}
              onMouseEnter={(e) => handleMenuItemHover(item.label, e.currentTarget.getBoundingClientRect())}
            >
              {item.label}
              {hoveredMenuItem === item.label && item.subMenuItems && (
                <SubMenuContainer  top={subMenuPosition.top}>
                  {item.subMenuItems.map((subMenuItem, subIndex) => (
                    <SubMenuItemContainer key={subIndex}>
                      {subMenuItem.label}
                    </SubMenuItemContainer>
                  ))}
                </SubMenuContainer>
              )}
            </MenuItemContainer>
          ))}
        </div>
      )}
    </DropdownContainer>
  );
};

export default MenuBar;
