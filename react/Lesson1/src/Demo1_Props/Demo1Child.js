

function Demo1ChildComp(props) {
  return (
    <div className="App">
         <h4>Child Comp</h4>

         Name: {props.name} <br/>
         Age : {props.age} <br/>

         <h4>Child Footer</h4>
    </div>
  );
}

export default Demo1ChildComp;
