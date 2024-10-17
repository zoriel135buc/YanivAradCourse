
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
  return new Promise(resolve =>
  {
    getAsyncData(5).then(data => resolve(data));
  })
}



//Option 2 - with async-await
async function getAsyncDataB_Option2()
{
  let data = await getAsyncData(5);
  let result =data*8;
  return result;
}


getAsyncDataB_Option2().then(data => console.log(data))