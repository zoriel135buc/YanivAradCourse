
function Demo2Comp() {


  const getText = (e) =>
    {
      console.log(e.target.value);
    }

    const getCheckboxData = (e) =>
      {
        console.log(e.target.checked);
      }

      const sayHello = () =>
        {
          alert("Hello")
        }



  return (
    <div className="App">
        
        <input type="text" onChange={getText} />  <br/>

        <input type="checkbox" onChange={getCheckboxData} />  <br/>

        <button style={  {color : "red", backgroundColor : "gray"}    } onClick={sayHello}>Click Me</button>

    </div>
  );
}

export default Demo2Comp;
