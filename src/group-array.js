const arrayArrayElements = (arr = [], pieces) => {
    let groupsLeft = pieces;
    const result = [];
    let chunkSize;
    for (let index = 0; index < pieces; index++) {
        chunkSize = Math.ceil(arr.length / groupsLeft);
        result.push(arr.slice(0, chunkSize))
        arr = arr.slice(chunkSize)
        groupsLeft--;
    }

    console.log(result);
    return result;
};

module.exports = arrayArrayElements;
