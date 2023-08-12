
let array = [1,2,3,4,4,5];

const binarySearch = (arr,value) => {
    let middle ;
    let left = 0 ;
    let right = arr.length-1; 
    while(left<=right){
        if(left<=right){
            middle = Math.round((left+right)/2);
            if(arr[middle] === value){
                return middle
            } else if(value > arr[middle]){
                left = middle+1;
            } else if(value < arr[middle]){
                right = middle-1
            }
        }
    }
    return -1
};

console.log(binarySearch(array,5));
console.log(binarySearch(array, 15));
