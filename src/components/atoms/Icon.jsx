import React from "react";

function Icon({ children, className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={
        className ? ["material-icons", className].join(" ") : "material-icons"
      }
    >
      {children}
    </span>
  );
}

export default Icon;
