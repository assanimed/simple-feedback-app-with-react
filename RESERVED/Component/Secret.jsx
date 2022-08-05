const RegulatComponent = ({ style }) => {
  return <h1 style={style}> I'm just Regular </h1>;
};

const SecretComponent = ({ style }) => {
  return <h1 style={style}> I'm authorized </h1>;
};

function Secret({ auth }) {
  const style = { textAlign: "center" };
  return (
    <>
      {auth ? (
        <SecretComponent style={style} />
      ) : (
        <RegulatComponent style={style} />
      )}
    </>
  );
}

export default Secret;
