const Section = (props) => {
  const { children, ...rest } = props;
  return <section {...rest}>{children}</section>;
};

export default Section;
