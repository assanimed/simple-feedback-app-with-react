import PropTypes from "prop-types";

function Card({ children, reverse }) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "#000" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Card;
