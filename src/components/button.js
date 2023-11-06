const Button = (props) => {
  let buttonClassName = "";

  if (props.type == "primary") {
    buttonClassName += "bg-green-500 text-white rounded-full";
  }

  if (props.type == "secundary") {
    buttonClassName += "bg-red-600 text-white rounded-full";
  }

  return (
    <a {...props} className={`${buttonClassName} ${props.className}`}>
      {props.children}
    </a>
  );
};

export default Button;
