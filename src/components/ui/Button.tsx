const Button = (props) => {
  return (
    <>
      <button disabled={props.disabled} className={props.className}>
        {props.label}
      </button>
    </>
  );
};

export default Button;
