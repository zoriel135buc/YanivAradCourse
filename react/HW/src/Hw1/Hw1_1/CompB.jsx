import CompC from "./CompC";
function CompB(props) {
  return (
    <div style={{ backgroundColor: "yellow", width: "600px" }}>
      <h1>CompB</h1>
      <CompC userInput={props.userInput} />
    </div>
  );
}
export default CompB;
