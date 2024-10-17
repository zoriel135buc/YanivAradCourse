function CompC(props) {
  return (
    <div
      style={{
        backgroundColor: "green",
        width: "200px",
        height: "200px",
        textAlign: "left",
        marginTop: "50px",
      }}
    >
      <h1>Comp C</h1>
      <h2>{props.textH}</h2>
    </div>
  );
}

export default CompC;
