function countingSort(arr) {
    if (arr.length === 0) return arr;

    let min = Math.min(...arr);
    let max = Math.max(...arr);
    const range = max - min + 1;

    const count = new Array(range).fill(0);

    for (let i = 0; i < arr.length; ++i) {
        count[arr[i] - min]++;
    }

    for (let i = 1; i < count.length; ++i) {
        count[i] += count[i - 1];
    }
    const output = new Array(arr.length);

    for (let i = arr.length - 1; i >= 0; --i) {
        let value = arr[i];
        let index = value - min;
        let pos = count[index] - 1;

        output[pos] = value;
        count[index]--;
    }
    return output;

}
