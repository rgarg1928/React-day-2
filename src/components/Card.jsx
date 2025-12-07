import React from "react";

const Card = ({ title, children }) => {
  console.log("Card rendered:", title);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "20px",
      }}
    >
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Card;
