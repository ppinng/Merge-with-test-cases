import merge from "./func"; // Adjust the path accordingly

test("test case 1", () => {
  const result1 = merge([1, 2, 3], [4, 5, 6], [9, 8, 0]);
  console.log(result1);
  expect(result1).toEqual([0, 1, 2, 3, 4, 5, 6, 8, 9]);
});

test("test case 2", () => {
  const result2 = merge([3, 5, 6], [1, 2, 4], [10, 9, 8]);
  console.log(result2);
  expect(result2).toEqual([1, 2, 3, 4, 5, 6, 8, 9, 10]);
});

test("test case 3", () => {
  const result3 = merge([1, 5, 6], [2, 4, 7], [10, 8, 3]);
  console.log(result3);
  expect(result3).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 10]);
});

test("test case 4", () => {
  const result4 = merge([1, 9, 10], [2, 8, 4], [11, 10, 3]);
  console.log(result4);
  expect(result4).toEqual([1, 2, 3, 4, 8, 9, 10, 10, 11]);
});

test("test case 3", () => {
  const result3 = merge([1,2,6,8,0], [3,10,11,6,8], [9,4,5,7,3]);
  console.log(result3);
  expect(result3).toEqual([0, 1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 8, 9, 10, 11]);
});


