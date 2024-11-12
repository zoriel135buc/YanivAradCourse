import React from "react";

function Child(props) {
  return (
    <div
      style={{
        border: props.selectedMovie ? "2px solid blue" : "none",
        alignSelf: "flex-start",
        width: "70%",
      }}
    >
      {props.selectedMovie ? (
        <>
          Name: {props.selectedMovie.name} <br />
          <img src={props.selectedMovie.pic} alt={props.selectedMovie.name} />
        </>
      ) : null}
    </div>
  );
}

export default Child;
