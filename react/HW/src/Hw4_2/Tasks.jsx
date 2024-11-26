import React from "react";

const Tasks = (props) => {
  return (
    <div style={{ border: "1px solid black", width: "fit-content" }}>
      {props.todos.map((todo) => {
        return (
          <ul key={todo.id}>
            <li>{todo.title}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Tasks;
