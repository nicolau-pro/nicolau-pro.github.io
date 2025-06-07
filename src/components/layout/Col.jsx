const Col = (props) => {
  const { className = "", children, ...rest } = props;
  return (
    <div className={["col", className].join(" ")} {...rest}>
      {children}
    </div>
  );
};

export default Col;
