import React from "react";

const Alert = ({ type = "info", children }) => {
  console.log("Alert rendered:", type, children);

  const colors = {
    success: "lightgreen",
    warning: "khaki",
    error: "lightcoral",
    info: "lightblue",
  };

  return (
    <div
      style={{
        background: colors[type],
        padding: "12px",
        borderRadius: "6px",
        marginBottom: "10px",
        fontWeight: "bold",
      }}
    >
      {children}
    </div>
  );
};

export default Alert;
