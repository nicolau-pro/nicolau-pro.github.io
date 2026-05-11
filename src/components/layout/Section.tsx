import type { ReactElement } from "react";
import type { SectionProps } from "@/interfaces";

const Section = (props: SectionProps): ReactElement => {
  const { children, ...rest } = props;
  return <section {...rest}>{children}</section>;
};

export default Section;
