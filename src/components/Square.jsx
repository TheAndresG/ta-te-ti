const style = {
  backGround: "lightblue",
  border: "2px solid darkblue",
  fontSize: "30px",
  fontWeight: "880",

  cursor: "pointer",
  outline: "none",
};

const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);
export default Square;
