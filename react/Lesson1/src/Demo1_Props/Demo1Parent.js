import Demo1ChildComp from "./Demo1Child";


function Demo1ParentComp() {
  return (
    <div className="App">
         <h3>Parent Comp</h3>


         <Demo1ChildComp name="Ron" age={30} />

         <Demo1ChildComp name="Dana" age={50} />
    </div>
  );
}

export default Demo1ParentComp;
