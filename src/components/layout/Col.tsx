import type { ComponentPropsWithoutRef, ReactElement } from "react";

const Col = (props: ComponentPropsWithoutRef<"div">): ReactElement => {
  const { className = "", children, ...rest } = props;
  return (
    <div className={["col", className].join(" ")} {...rest}>
      {children}
    </div>
  );
};

export default Col;
