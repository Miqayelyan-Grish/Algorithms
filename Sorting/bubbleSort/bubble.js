function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; ++i) {
        let swapped = false;
        for (let j = 0; j < n - 1 - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                swapped = true;

            }
        }
        if (swapped == false) {
            break;
        }
    }
    return arr;
}

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

let arr = [5, 4, 3, 2, 1];

console.log(bubbleSort(arr));
