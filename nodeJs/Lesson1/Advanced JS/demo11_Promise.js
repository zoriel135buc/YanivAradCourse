// Rule 1 - An asyncfunciton is a function with ANY async opration within
// Rule 2 - An async function that returns data - ALWAYS returns Promise

function getResult(num)
{
  return new Promise(resolve =>
  {
    setTimeout( () => resolve(num*2) ,1000)
  })
}


getResult(5).then(data => console.log(data));
console.log("End")