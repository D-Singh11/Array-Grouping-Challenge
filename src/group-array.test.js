const arrayArrayElements = require("./group-array.js");

test("should split [1, 2, 3, 4, 5] into 3 groups ", () => {
    result = arrayArrayElements([1, 2, 3, 4, 5], 3);

    expect(result.length).toEqual(3);

    expect(result[0].length).toEqual(2);
    expect(result[0]).toEqual([1, 2]);

    expect(result[1].length).toEqual(2);
    expect(result[1]).toEqual([3, 4]);

    expect(result[2].length).toEqual(1);
    expect(result[2]).toEqual([5]);
});
