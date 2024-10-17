const utils = require('./strUtils')

const getArrTotalLen = arr =>
{
    return new Promise(resolve =>
    {
        setTimeout( () =>
            {
                let totalLen = 0;
                arr.forEach(text =>
                {
                    let len = utils.getLen(text);
                    totalLen += len;
                })

                resolve(totalLen);
            },1000)
    })
}
module.exports = {getArrTotalLen}