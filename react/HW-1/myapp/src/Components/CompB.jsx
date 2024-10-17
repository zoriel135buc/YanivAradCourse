import CompC from "./CompC";

function CompB(props) {
  return (
    <div
      style={{
        backgroundColor: "blue",
        width: "400px",
        height: "400px",
        textAlign: "left",
        marginTop: "30px",
      }}
    >
      <h1>Comp B</h1>
      <CompC textH={props.text} />
    </div>
  );
}

export default CompB;
