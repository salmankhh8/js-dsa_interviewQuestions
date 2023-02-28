// find the duplicate number on a given integer array

const duplicareArray = (arr) => {
  let result = [];
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    if (obj[arr[i]] > 1) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(duplicareArray([1, 2, 3, 2, 3, 6, 7, 8, 9, 6]));

// find the largest and smallest in unsorted array

const smallestAndLargest = (arr) => {
  let smallest = arr[0];
  let largest = 0;
  let sum;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }

    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  sum = largest + " " + smallest;
  return sum;
};

console.log(smallestAndLargest([0, 2, 3, 9, 3, 1]));
// find the mising numnber in given array from 1 yo 100

findMissingNUmber = (arr) => {
  let n = arr.length + 1;
  let sum = (n * (n + 1)) / 2; // arithmetic operation
  let total = 0;
  // 100
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return sum - total;
};

console.log(findMissingNUmber([1, 4, 3, 2, 6, 9, 8, 7]));

const findSumAll = (arr, sum) => {
  // find the pair sum of given integers
  // let hashMap = {};
  // let result = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (hashMap[arr[i]]) {
  //     result.push([arr[i], hashMap[arr[i]]]);
  //   } else {
  //     hashMap[sum - arr[i]] = arr[i];
  //   }
  // }
  // return result;

  let hashMap={};
  let result=[]
  for(let i=0; i<arr.length; i++) {
    if(hashMap[arr[i]] ) {
      result.push([hashMap[arr[i]], arr[i]])
    }
    else{
      hashMap[sum-arr[i]] = arr[i];
    }
  }
  return result;
};

console.log(findSumAll([2, 6, 3, 9, 11, 7], 9));

//find the duplicates number from an array if found multiples times

const findDuplicate = (arr) => {
  const obj = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      result.push(arr[i]);
    }
    obj[arr[i]] = true;
  }
  return result;
};

console.log(findDuplicate([1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 7, 8, 6, 9]));

// remove duplicate from array in

const removeDuplicate = (arr) => {
  const count = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!count[arr[i]]) {
      result.push(arr[i]);
    }
    count[arr[i]] = true;
  }

  return result;
};

console.log(removeDuplicate([1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 8, 9, 9]));

// sort an array using quick short algorithm

// const quickShort = (arr) => {
//   // determine the piviot=> mddel element of aray
//   // start lef tfrom first index
//   // start right pointer form the lat index
//   // if left<piviot => left++)
//   // if right >piviot=> right --
//   //while left<right => swap the element

//   let left = 0;
//   let right = arr.length - 1;

//   let piviot = arr[Math.floor(arr.length / 2)];
//   while (left < right) {
//     while (arr[left] < piviot) {
//       left++;
//     }
//     while (arr[right] > piviot) {
//       right--;
//     }
//     if (left <= right) {
//       var temp = arr[left];
//       arr[left] = arr[right];
//       arr[right] = temp;
//       left++;
//       right--;
//     }
//     //
//   }

//   return left;
// };
// console.log(quickShort([5, 4, 3, 2, 1, 6, 7, 8]));

const reverseArray = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr.push(arr[i]);
  }
  // let res="hrllo"
  // console.log(Math.floor(res.length/2));
  return arr.splice(Math.floor(arr.length / 2), arr.length / 2);
};

console.log(reverseArray([1, 2, 3, 4, 5, 6]), "removce array");

// remove duplicate from array in place;

const removeDupPlace = (arr) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      arr[i] = 0;
    }
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    console.log(Object.keys(obj));
  }
  return arr;
};

console.log(removeDupPlace([1, 2, 3, 4, 4, 4, 5, 4, 4]));

//reverse the array in js

const reverse = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr.push(arr[i]);
  }
  return arr.slice(Math.floor(arr.length / 2), arr.length);
};
console.log(reverse([0, 1, 2, 3, 4, 5, 6]));

// find the multiple missing number in the given array with duplicates

const missingNumners = (arr) => {
  //notComplete
  // we will use recursion
  let result = [];
  let flag = new Map();
  count = 0;
  for (let i = arr[0]; i < arr.length; i++) {
    if (arr[flag] == i) {
      flag++;
    } else {
      result.push(i);
    }
  }
  return result;
};

console.log(missingNumners([1, 1, 2, 3, 5, 5, 7, 9, 9, 9]));

// binary search means divide and concuor mehtod
let arrayBin = [1, 3, 5, 7, 9];
let start = 0;
let end = arrayBin.length - 1;
// let mid=Math.floor((start+end)/2)

const binarySearch = (arr, num) => {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == num) {
      return true;
    } else if (arr[mid] < num) {
      start = mid + 1;
    } else {
      start = mid - 1;
    }
  }
  return false;
};

console.log(binarySearch(arrayBin, 3));

// transpose a matrix in js

const transPose = (arr) => {
  // trans pose matrix is the simple waiyn to interchange the row and column
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }
  return arr;
};
console.log(
  transPose([
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
  ])
);

// add  or subtract in two matrix
const addMatrix = (arr1, arr2) => {
  let arr = new Array(2);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(2);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      arr[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return arr;
};

console.log(
  addMatrix(
    [
      [1, 2],
      [3, 4],
    ],
    [
      [5, 6],
      [7, 8],
    ]
  )
);

const reverseString = (str) => {
  for (let i = str.length - 1; i >= 0; i--) {
    str += str[i];
  }
  return str.slice(Math.floor(str.length / 2), str.length);
};

console.log(reverseString("asdfv"));

// multiply two matrix in js

const multiplyMatrix = (arr1, arr2) => {
  let arr = new Array(arr1.length);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(arr.length);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      arr[i][j] = arr1[i][j] * arr2[i][j];
    }
  }
  return arr;
};
console.log(
  multiplyMatrix(
    [
      [1, 2],
      [3, 4],
    ],
    [
      [5, 6],
      [7, 8],
    ]
  )
);


// calculate the averge ogf al number iun array

// const calculateAverage=(arr)=>{
//   let res=0
//   for(let i=0; i<arr.length; i++){
//     res+=arr[i]
//   }
//   return res/arr.length
// }

// console.log(calculateAverage([1,2,3,4,5,6,7,8]));

const replace=(arr)=>{
  arr.map((e)=>{
    if(!Number(e)){
      return arr[e]=e
    }
  })
  return arr
}

console.log(replace[1,2,'wew', 2,4]);

