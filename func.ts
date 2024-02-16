function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const mergedResult: number[] = [...collection_1, ...collection_2, ...collection_3];

    // Bubble Sort
    for (let i = 0; i < mergedResult.length - 1; i++) {
        for (let j = 0; j < mergedResult.length - 1 - i; j++) {
            if (mergedResult[j] > mergedResult[j + 1]) {
                // Swap elements if they are in the wrong order
                const temp = mergedResult[j];
                mergedResult[j] = mergedResult[j + 1];
                mergedResult[j + 1] = temp;
            }
        }
    }

    return mergedResult;
}

export default merge;
