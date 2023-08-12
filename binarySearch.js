
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


//------Binary Search Recursion------//

const binarySearchRecursion = (arr,target,left=0,right=arr.length-1) => {
    if(left > right){
        return -1;
    }

    let mid = Math.floor((left+right)/2);

    if(arr[mid] === target) return mid ;

    if(arr[mid]< target) return binarySearchRecursion(arr,target,mid+1,right);

    return binarySearchRecursion(arr,target,left,right-1)

}

console.log(binarySearchRecursion(array,5));

console.log(binarySearchRecursion(array, 7));

