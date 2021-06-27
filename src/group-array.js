/**
* @description It contains implementation logic to transform an array to specified number of groups.
* e.g [1,2,3,4,5] to [[1,2],[3,4],[5]]
* @param {array} arr
* @param {number} groups
*/
const arrayArrayElements = (arr = [], groups) => {
    let groupsLeft = groups;
    const result = [];

    for (let index = 0; index < groups; index++) {
        const chunkSize = Math.ceil(arr.length / groupsLeft);         // calculate chunk size
        result.push(arr.slice(0, chunkSize))                          // add elements to final array by slicing elements from original using chunksize
        arr = arr.slice(chunkSize)                                    // removes added elements from original array
        groupsLeft--
    }
    console.log(result);
    return result;
};

module.exports = arrayArrayElements;
