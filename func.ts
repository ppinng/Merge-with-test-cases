function mergeWithoutSort(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const result: number[] = [];
    let i: number = 0, j: number = 0;

    //Comapre and merge collection_1 and collection_2 in the order. For example, there is length of 3 in array1,2. So, we check 3 times and the rest will do in the next one
    while (i < collection_1.length && j < collection_2.length) {
        if (collection_1[i] < collection_2[j]) {
            result.push(collection_1[i]);
            i++;
        } else {
            result.push(collection_2[j]);
            j++;
        }
    }

    // This one will add the remaining elements from collection_1 like [1,2,4] and [3,5,6] it will add [1,2,3] in result first as it is in the first while loop function
    while (i < collection_1.length) {
        result.push(collection_1[i]);
        i++;
    }

    // This one does the same as the previous one but for collection_2
    while (j < collection_2.length) {
        result.push(collection_2[j]);
        j++;
    }
    //We assume that the collection_3 is from the max to min จะไม่มีตัวเลขที่วลับที่กันเหมือนใน test case2 ของ collection_1 and collection_2
    // Merge with reversed collection_3 at the end
    for (let k = collection_3.length - 1; k >= 0; k--) {
        result.push(collection_3[k]);
    }

    return result;
}

export default mergeWithoutSort;
