const Button = ({
  text = "",
  onClick = () => {},
  color = "red",
  fontColor = "#FFFFFF",
  size = 2.5,
}) => {
  const styles = {
    buttonContainer: {
      padding: "5px 50px",
      borderRadius: 10,
    },
    text: {
      fontFamily: "Lobster",
      fontSize: size + "rem",
    },
  };

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        ...styles.buttonContainer,
        display: "initial",
      }}
    >
      <span style={{ ...styles.text, color: fontColor }} className={size}>
        {text}
      </span>
    </button>
  );
};
export default Button;
