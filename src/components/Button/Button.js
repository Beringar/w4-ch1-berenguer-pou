const Button = ({ text, classes, action }) => {
  return (
    <button className={classes} onClick={action}>
      {text}
    </button>
  );
};

export default Button;
