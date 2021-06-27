const prompt = require('prompt');       // module used to build commandline tool
const arrayArrayElements = require("./src/group-array.js");

/**
* @description It is used to log error to console when user provide incorrect input
* @param {any} err
* @param {object} shelvedBooks
* @returns {array} books
*/
const onErr = (err) => {
    console.log(err);
    return 1;
}


/**
* @description Used to run and build command-line tool for excercise.
*/
const main = () => {
    // Defines input properties and hanldes input validation
    const schema = {
        properties: {
            elements: {
                description: 'Enter array elements seprated by space without square brackets. e,g 1 2 3 4 5',
                message: 'Array must contain some elements',
                type: 'string',

                required: true
            },
            groups: {
                description: 'Enter number of groups ',
                message: 'Input must be number greater than 1',
                type: 'integer',
                minimum: 0,
                required: true
            },
        }
    };

    // reads user input for array elements and number of groups
    prompt.start();
    prompt.get(schema, function (err, inputs) {

        if (err) { return onErr(err); }         // log error to console

        const num_Groups = inputs.groups;
        const elements = inputs.elements.trim();
        const arr = elements.split(' ').map(x => parseInt(x));     //convert string of numbers to array of integers

        if (arr.length < num_Groups) {
            console.log(`Array of length ${arr.length} cannot be broken into ${num_Groups} groups`)
        }
        else {
            const result = arrayArrayElements(arr, num_Groups);
            console.log('\nTransformed array ' + `[${arr}] to following ${num_Groups} groups :\n`, result);
        }
    });
}

// calling main()
main();