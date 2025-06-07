const Line = (props) => {
  const { className = "", children, ...rest } = props;
  return (
    <div className={["line", className].join(" ")} {...rest}>
      {children}
    </div>
  );
};

export default Line;
