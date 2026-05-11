import type { ReactElement } from "react";
import type { DivProps } from "../../interfaces";

const Row = (props: DivProps): ReactElement => {
  const { className = "", children, ...rest } = props;
  return (
    <div className={["row", className].join(" ")} {...rest}>
      {children}
    </div>
  );
};

export default Row;
