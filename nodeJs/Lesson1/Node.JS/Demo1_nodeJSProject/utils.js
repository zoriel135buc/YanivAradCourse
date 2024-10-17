const { getHeapCodeStatistics } = require("v8");

const add = (num1,num2) =>
{
    return num1+num2;
}

const getHello = function(name)
{
    return "Hello " + name;
}


module.exports = {add, getHello}