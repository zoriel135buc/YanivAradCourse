const utils = require('./utils')

utils.readAllDataFromFile().then(data => console.log(data))

utils.getPersonName().then(data => console.log(data))

utils.getPersonsNames().then(data => console.log(data))