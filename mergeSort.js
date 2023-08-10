const arr = [1, 2, 9, 5, 6, 12, 3];

const mergeSort = array => {

    if (array.length < 2) return array;

    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    return merge(mergeSort(left), mergeSort(right));



}

const merge = (left, right) => {
    let sorted = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sorted.push(left.shift())
        } else {
            sorted.push(right.shift())
        }
    };

    return [...sorted, ...left, ...right];
}


console.log(mergeSort(arr));