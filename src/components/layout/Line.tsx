import type { ComponentPropsWithoutRef, ReactElement } from "react";

const Line = (props: ComponentPropsWithoutRef<"div">): ReactElement => {
  const { className = "", children, ...rest } = props;
  return (
    <div className={["line", className].join(" ")} {...rest}>
      {children}
    </div>
  );
};

export default Line;
