import React from "react";

export const Navbar = () => (
  <div
    style={{
      color: "white",
      display: "flex",
      gap: "2rem",
    }}
  >
    <div
      style={{
        padding: "10px",
      }}
    >
      <img
        src="wspBlack.png"
        height="50px"
        alt="WSP Logo"
        style={{
          filter: "invert(100%) brightness(10000%) contrast(10000%)",
        }}
      />
    </div>
    <div>
      <h2
        style={{
          margin: "0px",
          padding: "0px",
        }}
      >
        Expense Bill Automation
      </h2>
    </div>
  </div>
);
