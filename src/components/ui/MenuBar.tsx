import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useTheme } from '../../theme/ThemeProvider'

interface MenuItem {
  label: string;
  onClick?: () => void;
  subMenuItems?: MenuItem[];
  hasSubMenu?: boolean;
}

interface DropdownProps {
  isOpen: boolean;
  menuItems: MenuItem[];
}

const DropdownContainer = styled.div`
  position: absolute;
  z-index: 1500;
  display: inline-block;
`;

const MenuItemContainer = styled.div<{ theme: string }>`
  padding: 10px 20px 10px 15px;
  cursor: pointer;
  background-color: ${({ theme }) => (theme === "dark" ? "#333" : "#fff")};
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#333")};
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

const SubMenuContainer = styled.div<{ top: number }>`
  position: absolute;
  top: ${({ top }) => `${top - 65}px`};
  left: 102%;
  min-width: 150px;
  background-color: #333;
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

const SubMenuItemContainer = styled(MenuItemContainer)<{ theme: string }>`
  padding: 10px 20px 10px 15px;
  font-weight: normal;
  background-color: ${({ theme }) => theme === 'dark' ? '#333' : 'white'};
  color: ${({ theme }) => theme === 'dark' ? '#fff' : '#333'};
`;

const MenuBar: React.FC<DropdownProps> = ({
  isOpen,
  menuItems,
}) => {
  const [hoveredMenuItem, setHoveredMenuItem] = useState<string | null>(null);
  const [subMenuPosition, setSubMenuPosition] = useState<{ top: number }>({
    top: 0,
  });
  const [menuOpen, setMenuOpen] = useState(isOpen);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleMenuItemHover = (label: string, rect: DOMRect) => {
    setHoveredMenuItem(label);
    const top = rect.bottom;
    setSubMenuPosition({ top });
  };

  const handleMenuItemClick = (
    onClick: (() => void) | undefined,
    hasSubMenu: boolean
  ) => {
    if (onClick) {
      onClick();
    }
    if (!hasSubMenu) {
      setMenuOpen(false);
    }
  };

  const handleSubMenuItemClick = (onClick: (() => void) | undefined) => {
    if (onClick) {
      onClick();
      setMenuOpen(false);
    }
  };

  const handleMenuLeave = () => {
    setHoveredMenuItem(null);
    setSubMenuPosition({ top: 0 });
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setMenuOpen]);

  useEffect(() => {
    setMenuOpen(isOpen);
  }, [isOpen]);
  const { theme } = useTheme()
  return (
    <DropdownContainer onMouseLeave={handleMenuLeave} ref={menuRef}>
      {menuOpen && (
        <div>
          {menuItems.map((item, index) => (
            <MenuItemContainer
              key={index}
              theme={theme}
              onMouseEnter={(e) =>
                handleMenuItemHover(
                  item.label,
                  e.currentTarget.getBoundingClientRect()
                )
              }
              onClick={() =>
                handleMenuItemClick(item.onClick, item.hasSubMenu || false)
              }
            >
              {item.label}
              {hoveredMenuItem === item.label && item.subMenuItems && (
                <SubMenuContainer top={subMenuPosition.top}>
                  {item.subMenuItems.map((subMenuItem, subIndex) => (
                    <SubMenuItemContainer
                      theme={theme}
                      key={subIndex}
                      onClick={() =>
                        handleSubMenuItemClick(subMenuItem.onClick)
                      }
                    >
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
