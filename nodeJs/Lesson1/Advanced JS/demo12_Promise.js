
function getAsyncData(num)
{
  return new Promise(resolve =>
  {
    setTimeout( () => resolve(num*2) ,1000)
  })
}
//Option 1  - with "then"
function getAsyncDataB_Option1()
{
  getAsyncData(5).then(data => console.log(data));
}

//Option 2 - with async-await
async function getAsyncDataB_Option2()
{
  let data = await getAsyncData(5);
  console.log(data)
}


getAsyncDataB_Option2()
console.log("End")