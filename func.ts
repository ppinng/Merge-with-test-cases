function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    const result: number[] = [];
    let i = 0;
    let j = 0;
    let k = collection3.length - 1;
  
    while (i < collection1.length || j < collection2.length || k >= 0) {
      const val1 = i < collection1.length ? collection1[i] : Number.POSITIVE_INFINITY;
      const val2 = j < collection2.length ? collection2[j] : Number.POSITIVE_INFINITY;
      const val3 = k >= 0 ? collection3[k] : Number.POSITIVE_INFINITY;
  
      const minVal = Math.min(val1, val2, val3);
  
      if (val1 === minVal) {
        result.push(collection1[i]);
        i++;
      } else if (val2 === minVal) {
        result.push(collection2[j]);
        j++;
      } else {
        result.push(collection3[k]);
        k--;
      }
    }
    return result;
  }
  
export default merge;
