import React from "react";
import type { IconProps } from "../../interfaces";

function Icon({ children, className = "" }: IconProps): React.ReactElement {
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
