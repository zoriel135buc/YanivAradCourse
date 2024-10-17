let prom = new Promise(resolve =>
{
    setTimeout( () => resolve("OK"),1000)
})


prom.then(data => console.log(data));

console.log("End")