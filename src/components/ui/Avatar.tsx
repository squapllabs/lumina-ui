// Avatar.tsx
import React from "react";

interface AvatarProps {
  imageUrl?: string;
  firstName: string;
  lastName: string;
  size: number;
  fontSizeChange: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  imageUrl,
  firstName,
  lastName,
  size,
  fontSizeChange = false,
}) => {
  const avatarStyle : React.CSSProperties =  {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "50%",
    backgroundColor: "#c2c4c5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    color: "#fff",
    overflow: "hidden",
  };

  const imgStyle : React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const initialsStyle: React.CSSProperties  = {
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: "medium",
  };

  const fontSizeStyle = fontSizeChange ? { fontSize: `${size / 2}px` } : {};
  return (
    <div style={avatarStyle}>
      {imageUrl ? (
        <img src={imageUrl} alt={`${firstName} ${lastName}`} style={imgStyle} />
      ) : (
        <div style={{ ...initialsStyle, ...fontSizeStyle }}>
          {firstName.charAt(0)}
          {lastName.charAt(0)}
        </div>
      )}
    </div>
  );
};

export default Avatar;
