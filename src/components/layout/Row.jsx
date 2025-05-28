const Row = (props) => {
  const { className = "", children, ...rest } = props;
  return (
    <div className={["row", className].join("  ")} {...rest}>
      {children}
    </div>
  );
};

export default Row;
