function countingSort(arr) {

    let max = Math.max(...arr);
    let min = Math.min(...arr);

    const range = max - min + 1;

    const count = new Array(range).fill(0);

    for (let i = 0; i < range; ++i) {
        count[arr[i] - min]++;
    }

    let index = 0;

    for (let i = 0; i < count.length; ++i) {
        while (count[i] > 0) {
            arr[index++] = i + min;;
            count[i]--;
        }
    }
    return res;
}