const fs = require('fs')


const add = function(data=[], oldData) {
    let finalData = JSON.parse(oldData)
    
    finalData.push(data)

    let objectData = JSON.stringify(finalData)

    fs.writeFileSync('data.txt', objectData)
}

module.exports = add
