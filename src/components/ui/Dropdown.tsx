import React, { useState, useEffect, useRef } from "react";
// import Styles from "./Dropdown.module.scss";

interface DropdownProps {
  label: React.ReactNode | string;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownClick = () => {
    toggleDropdown();
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };
  const dropdownButton: React.CSSProperties = {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    color: "inherit",
  };
  const dropdown: React.CSSProperties = {
    position: "relative", 
  };

  const dropdownMenu: React.CSSProperties = {
    position:'absolute',
    top:'120%',
    left:'1%', 
    margin:0,
    listStyle:'none',
    backgroundColor:'#ffffff',
    boxShadow:'rgba(0, 0, 0, 0.2) 0px 3px 8px',
    borderRadius:'5px',
    display:'block',  
    zIndex: 1,
    padding: '0.5rem .5rem',
  };

  return (
    <div
      style={dropdown}
      onClick={toggleDropdown}
      ref={dropdownRef}
    >
      <button style={dropdownButton} onClick={handleDropdownClick}>
        {label}
      </button>
      {isOpen && <ul style={dropdownMenu}>{children}</ul>}
    </div>
  );
};

export default Dropdown;
