function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);

    return merge(leftSorted, rightSorted);
}

function merge(left, right) {
    const res = new Array();
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            res.push(left[i++]);
        }
        else {
            res.push(right[j++]);
        }
    }
    while (i < left.length) {
        res.push(left[i++]);
    }
    while (j < right.length) {
        res.push(right[j++]);
    }
    return res;
}

const arr = [5, 2, 6, 1, -4, 64];

console.log(mergeSort(arr));
