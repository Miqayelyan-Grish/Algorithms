function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; ++i) {
        let min = i;
        for (let j = i + 1; j < n; ++j) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        swap(arr, i, min);
    }
    return arr;
}

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}


const arr = [5, 4, 3, 2, 1];

console.log(selectionSort(arr));


