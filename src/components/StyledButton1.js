import React from "react";

const StyledButton1 = ({ title }) => {
  return (
    <div
      style={{
        width: 200,
        height: 60,
        border: "1px solid rgba(237, 31, 36, 1)",
        borderRadius: 7,
        transform: "rotate(-2deg)",
      }}
    >
      <div
        style={{
          width: 200,
          height: 60,
          border: "1px solid rgba(76, 117, 242, 1)",
          borderRadius: 7,
          transform: "rotate(4deg)",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            transform: "rotate(-2deg)",
            fontWeight: "700",
          }}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default StyledButton1;
