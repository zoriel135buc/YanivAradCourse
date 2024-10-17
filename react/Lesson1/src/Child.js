import GrandChildComp from "./GrandChild";


function ChildComp() {

  return (
    <div className="App">
        <h3>Hello from  child component</h3>

        <GrandChildComp />

        <h3>child Footer</h3>
    </div>
  );
}

export default ChildComp;
