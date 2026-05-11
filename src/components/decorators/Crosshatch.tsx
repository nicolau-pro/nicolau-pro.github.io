import type { ReactElement } from "react";
import type { DivProps } from "../../interfaces";

const Crosshatch = (props: DivProps): ReactElement => {
  const { className = "", ...rest } = props;
  return (
    <div className={["crosshatch", className].join(" ")} {...rest}>
      <div></div>
    </div>
  );
};

export default Crosshatch;
