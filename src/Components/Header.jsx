import PropTypes from "prop-types";

function Header({ title, bgcolor, color }) {
  const headerStyle = { backgroundColor: bgcolor, color };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2> {title} </h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: "FeedBack UI",
  bgcolor: "rgba(0,0,0,0.4)",
  color: "#ffa6a9",
};

Header.propTypes = {
  title: PropTypes.string,
  bgcolor: PropTypes.string,
  color: PropTypes.string,
};

export default Header;
