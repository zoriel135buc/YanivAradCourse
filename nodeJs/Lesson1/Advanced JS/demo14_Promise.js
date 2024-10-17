
function getAsyncData(num)
{
  return new Promise((resolve,reject) =>
  {
    setTimeout( () => 
      {
        if(num < 10)
        {
          resolve(num*2);
        }
        else
        {
          reject("Number MUST be smaller than 10")
        }
      } ,1000)
  })
}
//Option 1  - with "then"
function getAsyncDataB_Option1()
{
  return new Promise(resolve =>
  {
    getAsyncData(5).then(data => resolve(data)).catch(err => console.log(err));
  })
}



//Option 2 - with async-await
async function getAsyncDataB_Option2()
{
  try
  {
    let data = await getAsyncData(5);
    console.log(data)
  }
  catch(err)
  {
    console.log(err)
  }
 
 
}


getAsyncDataB_Option2().then(data => console.log(data))