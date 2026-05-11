import type { ReactElement } from "react";
import type { DivProps } from "../../interfaces";

const Line = (props: DivProps): ReactElement => {
  const { className = "", children, ...rest } = props;
  return (
    <div className={["line", className].join(" ")} {...rest}>
      {children}
    </div>
  );
};

export default Line;
