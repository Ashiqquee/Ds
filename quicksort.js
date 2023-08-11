const arr = [1, 2, 9, 5, 6, 12, 3];

const quickSort = array => {
    if(array.length < 2)  return array ;


    let pivot = array[array.length - 1];
    let right = [];
    let left = [];

    for(let i = 0 ; i < array.length -1 ; i++){
        if(array[i] > pivot) {
            right.push(array[i]);
        } else {
            left.push(array[i]);
        }
    };

    return [...quickSort(left),pivot,...quickSort(right)]
};

console.log(quickSort(arr));

