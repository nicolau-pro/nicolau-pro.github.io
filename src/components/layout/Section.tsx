import type { ComponentPropsWithoutRef, ReactElement } from "react";

const Section = (props: ComponentPropsWithoutRef<"section">): ReactElement => {
  const { children, ...rest } = props;
  return <section {...rest}>{children}</section>;
};

export default Section;
