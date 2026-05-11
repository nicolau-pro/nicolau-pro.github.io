import type { ReactElement } from "react";
import type { DivProps } from "../../interfaces";

const Col = (props: DivProps): ReactElement => {
  const { className = "", children, ...rest } = props;
  return (
    <div className={["col", className].join(" ")} {...rest}>
      {children}
    </div>
  );
};

export default Col;
