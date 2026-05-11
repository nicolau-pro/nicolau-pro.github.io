import type { ComponentPropsWithoutRef, ReactElement } from "react";

const Row = (props: ComponentPropsWithoutRef<"div">): ReactElement => {
  const { className = "", children, ...rest } = props;
  return (
    <div className={["row", className].join(" ")} {...rest}>
      {children}
    </div>
  );
};

export default Row;
