import mergeWithoutSort from "./func"; // Adjust the path accordingly

test("test case 1", () => {
  const result1 = mergeWithoutSort([1, 2, 3], [4, 5, 6], [9, 8, 7]);
  console.log(result1);
  expect(result1).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("test case 2", () => {
  const result2 = mergeWithoutSort([3, 5, 6], [1, 2, 4], [10, 9, 8]);
  console.log(result2);
  expect(result2).toEqual([1, 2, 3, 4, 5, 6, 8, 9, 10]);
});

// test("test case 2", () => {
//   const result2 = mergeWithoutSort([1, 5, 6], [2, 4, 7], [10, 8, 3]);
//   console.log(result2);
//   expect(result2).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 10]);
// });

// test("test case 3", () => {
//   const result3 = mergeWithoutSort([1, 2, 3], [4, 5, 6], [9, 8, 7]);
//   console.log(result3);
//   expect(result3).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// });

// test("test case 4", () => {
//   const result4 = mergeWithoutSort([1, 9, 10], [2, 3, 4], [11, 10, 8]);
//   console.log(result4);
//   expect(result4).toEqual([1, 2, 3, 4, 8, 9, 10, 10, 11]);
// });
