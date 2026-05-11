import type { ComponentPropsWithoutRef, ReactElement } from "react";

const Crosshatch = (props: ComponentPropsWithoutRef<"div">): ReactElement => {
  const { className = "", ...rest } = props;
  return (
    <div className={["crosshatch", className].join(" ")} {...rest}>
      <div></div>
    </div>
  );
};

export default Crosshatch;
