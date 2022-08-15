let helper = require('../lib/helper')

function mainFunction(){

    console.log('entry point being executed');
    helper();
}

mainFunction();

module.exports = mainFunction;