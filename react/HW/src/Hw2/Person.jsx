import Tasks from "./Tasks";
function Person(props) {
  return (
    <div style={{ border: "3px solid red", width: "70%" }}>
      <h2>{props.PersonData.name}</h2>
      {props.PersonData.tasks.map((task, index) => {
        return <Tasks key={index} taskData={task} />;
      })}
    </div>
  );
}
export default Person;
