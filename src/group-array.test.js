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


test('should split [1, 2, 3, 4] into 3 groups ', () => {
    result = arrayArrayElements([1, 2, 3, 4], 3);

    expect(result.length).toEqual(3);

    expect(result[0].length).toEqual(2);
    expect(result[0]).toEqual([1, 2]);

    expect(result[1].length).toEqual(1);
    expect(result[1]).toEqual([3]);

    expect(result[2].length).toEqual(1);
    expect(result[2]).toEqual([4]);
})


test('should split [1, 2, 3, 4, 5] into 4 groups ', () => {
    result = arrayArrayElements([1, 2, 3, 4, 5], 4);

    expect(result.length).toEqual(4);

    expect(result[0].length).toEqual(2);
    expect(result[0]).toEqual([1, 2]);

    expect(result[1].length).toEqual(1);
    expect(result[1]).toEqual([3]);

    expect(result[2].length).toEqual(1);
    expect(result[2]).toEqual([4]);

    expect(result[3].length).toEqual(1);
    expect(result[3]).toEqual([5]);
})


test('should split [1, 2, 3, 4, 5,6] into 4 groups ', () => {
    result = arrayArrayElements([1, 2, 3, 4, 5, 6], 4);

    expect(result.length).toEqual(4);

    expect(result[0].length).toEqual(2);
    expect(result[0]).toEqual([1, 2]);

    expect(result[1].length).toEqual(2);
    expect(result[1]).toEqual([3, 4]);

    expect(result[2].length).toEqual(1);
    expect(result[2]).toEqual([5]);

    expect(result[3].length).toEqual(1);
    expect(result[3]).toEqual([6]);
})


test('should split [1, 2, 3, 4, 5,6,7,8,9] into 5 groups ', () => {
    result = arrayArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);

    expect(result.length).toEqual(5);

    expect(result[0].length).toEqual(2);
    expect(result[0]).toEqual([1, 2]);

    expect(result[1].length).toEqual(2);
    expect(result[1]).toEqual([3, 4]);

    expect(result[2].length).toEqual(2);
    expect(result[2]).toEqual([5, 6]);

    expect(result[3].length).toEqual(2);
    expect(result[3]).toEqual([7, 8]);

    expect(result[4].length).toEqual(1);
    expect(result[4]).toEqual([9]);
})


test('should split [1, 2, 3, 4, 5,6,7,8] into 5 groups ', () => {
    result = arrayArrayElements([1, 2, 3, 4, 5, 6, 7, 8], 5);

    expect(result.length).toEqual(5);

    expect(result[0].length).toEqual(2);
    expect(result[0]).toEqual([1, 2]);

    expect(result[1].length).toEqual(2);
    expect(result[1]).toEqual([3, 4]);

    expect(result[2].length).toEqual(2);
    expect(result[2]).toEqual([5, 6]);

    expect(result[3].length).toEqual(1);
    expect(result[3]).toEqual([7]);

    expect(result[4].length).toEqual(1);
    expect(result[4]).toEqual([8]);
})
