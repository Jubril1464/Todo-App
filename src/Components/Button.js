const Button = ({ onClick, color, text }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn 1"
    > 
      {text}
    </button>
  );
};
export default Button;
