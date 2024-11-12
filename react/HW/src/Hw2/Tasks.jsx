import React from "react";

function Tasks(props) {
  return (
    <div style={{ border: "3px solid blue", width: "70%" }}>
      <h1>Tasks</h1>
      <h2>title:{props.taskData.title}</h2>
      <br></br>
      <h3> Completed: {props.taskData.completed.toString()}</h3>
    </div>
  );
}

export default Tasks;
