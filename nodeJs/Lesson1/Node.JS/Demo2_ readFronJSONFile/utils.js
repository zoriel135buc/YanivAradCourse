const jFile = require('jsonfile')



const readAllDataFromFile =  () =>
{
    return  jFile.readFile('./person.json')
}

const getPersonName = async () =>
{
    let alldata = await  jFile.readFile('./person.json')

    return alldata.name
}

const getPersonsNames = async () =>
{
    let data = await  jFile.readFile('./persons.json')
    let pers =  data.persons;

    let names = pers.map(x => x.name);
    return names;
}


module.exports = {readAllDataFromFile,getPersonName,getPersonsNames}