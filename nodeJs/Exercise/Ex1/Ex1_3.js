function getArrAvg(arr)
{
    return new Promise(resolve =>
    {
        setTimeout( () =>
            {
                
               let avg = arr.reduce((x,y) => x+y) / arr.length

               resolve(avg);

            },1000)
    })
   
}




let arr = [1, 2 ,3 ,4 ,5 ,6]

getArrAvg(arr).then(avg => console.log(avg))



async function printAvg()
{
  let avg =  await getArrAvg(arr)
  console.log(avg)
}