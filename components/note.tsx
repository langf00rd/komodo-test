// Note.js
import React from "react";

const Note = ({ type, children }) => {
  const getTypeStyle = (type) => {
    switch (type) {
      case "warning":
        return { backgroundColor: "yellow", border: "1px solid orange" };
      case "info":
        return { backgroundColor: "lightblue", border: "1px solid blue" };
      default:
        return {};
    }
  };

  return <div style={getTypeStyle(type)}>{children}</div>;
};

export default Note;
