const Crosshatch = (props) => {
  const { className = "", ...rest } = props;
  return (
    <div className={["crosshatch", className].join("  ")} {...rest}>
      <div></div>
    </div>
  );
};

export default Crosshatch;
