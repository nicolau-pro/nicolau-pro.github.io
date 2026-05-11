import React from "react";
import type { ReactNode } from "react";

function Icon({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}): React.ReactElement {
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
