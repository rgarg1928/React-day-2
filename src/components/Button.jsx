import React from "react";

const Button = ({ label, type = "primary", onClick }) => {
  console.log("Button rendered:", label, type);

  const styles = {
    primary: { background: "#007bff", color: "#fff" },
    secondary: { background: "#6c757d", color: "#fff" },
    danger: { background: "#dc3545", color: "#fff" },
  };

  return (
    <button
      onClick={() => {
        console.log("button clicked:", label);
        onClick && onClick();
      }}
      style={{
        ...styles[type],
        padding: "10px 16px",
        border: "none",
        borderRadius: "6px",
        marginRight: "10px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
