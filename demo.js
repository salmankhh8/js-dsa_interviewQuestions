// checking sum zero - prolem 1

// [-5,-4,-3,-2,0,2,4,6,8]=>

// find the first pair to be zero
/// my logic
const findPAirSum = (arr) => {
  result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] == 0 && result.length <= 1) {
        // result.push(arr[j], arr[i]);
        return [arr[j], arr[i]];
      }
    }
  }
  //   return result;
};

console.log(findPAirSum([-5, -4, -3, -2, 0, 2, 4, 6, 8]));

/// video logic //////////////////////////////////////////////////////////////////

const findSum = (array) => {
  for (let number of array) {
    for (let j = 1; j < array.length; j++) {
      if (number + array[j] === 0) {
        return [number, array[j]]; // time complexity = on^2
      }
    }
  }
};
console.log(findSum([-5, -4, -3, -2, 0, 2, 4, 6, 8]));

// improved logic ///////////// by using pointer

const findSum1 = (arr) => {
  // if array is sirted then it is good
  let leftP = 0;
  let rightP = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[leftP] + arr[rightP] == 0) {
      return [arr[leftP], arr[rightP]];
    }
    if (arr[leftP] + arr[rightP] > 0) {
      rightP--;
    }
    if (arr[leftP] + arr[rightP] < 0) {
      leftP++;
    }
    console.log("pointer loop");
  }
  // this will work if array is sorted
  //   while (leftP <rightP) {
  //     sum = arr[leftP] + arr[rightP];
  //     if (sum === 0) {
  //       return [arr[leftP], arr[rightP]];
  //     }
  //     if (sum < 0) {
  //       leftP++;
  //     }
  //     if (sum > 0) {
  //       rightP--;
  //     }
  //     console.log("while running");
  //   }
};

console.log(
  findSum1([-5, -4, -3, -2, 0, 2, 4, 6, 8]),
  "findsum1 using pointer method"
);

/// problem on string Anagram

// hello=> lello

// 1=> check length of boith strings

// 2=> check the alphabet of both string if same but arrangement is diffferent

// logic=>
// check length of string if string
// check how many times each alhabet has arranged
//  {h:1, e:1, l:2, 0:1}

const anagram = (str1, str2) => {
  count = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    count[str1[i]] = (count[str1[i]] || 0) + 1;
  }

  for (let item of str2) {
    if (!count[item]) {
      return false;
    }
    count[item] -= 1;
  }
  return true;
};

// time complexity is linear o(n)

console.log(anagram("hello", "lleho"));

// find the unique numbers
// [1,1,1,2,2,2,3,3,4,4,5,5,6,6,7,7,8,8]

const findUniqueNumbers = (arr) => {
  let count = {};
  let result = [];
  arr.forEach((item) => {
    if (!count[item]) {
      result.push(item);
    }
    count[item] = true;
  });
  return result;
};

console.log(
  findUniqueNumbers([1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8])
);

const findUniqueNumbers2 = (array) => {
  if (array.length > 0) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  }
};
console.log(
  findUniqueNumbers2([1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8])
); // will result in unique numbers in array

// largest sum of consecutive digits
// [1,2,3,4,5,6,7,8,]
// count the largest sum of consecutive digits

// num= 4

// loops 10-4 => 7

const findLargestSum = (arr, num) => {
  let maxSum = 0;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > maxSum) {
      maxSum = temp;
    }
  }
  return maxSum;
};

console.log(findLargestSum([1, 2, 3, 4, 5, 6, 7, 8], 3));

// binary search

// divide and conquarer

// find the index of sorted array 7

// [1,2,3,4,5,6,7,8,9,10,11,12,13,14] index => output

// if array is sorted is important

// divide and concuar

const divideConcuar = (arr, num) => {
  // element is 14 but indexing is 13
  // binary search

  // min= element =1

  //max= array.length-1, element =15

  // minIndex= (min + max)/2 => (0+14) => 7 index

  // if array[midIndex]< number{
  // min= minIndex +1
  // }

  // if array[midIndex] > number(7){
  // min= minIndex -1, min=0 max =6 {1,2,3,4,5,6,7}
  // }

  // (min + max)/2 => (3)
  //  3 < 7
  // min = index + 1 =4
  //index +1 =4 (min), max= 6 {5,6,7}
  // (min + max)/2 => 10/2 =5
  // min < number =  min = index + 1 = 6
  // min =6 max =6
  // else {
  //   minIndex= 6 element =7
  // }
  let min = 0;
  let max = arr.length - 1;
  let count = 0;
  while (min <= max) {
    let midIndex = Math.floor((min + max) / 2);
    console.log("midindex" + midIndex, "min" + min, " max" + max);
    if (arr[midIndex] < num) {
      min = midIndex + 1;
    } else if (arr[midIndex] > num) {
      max = midIndex - 1;
    } else {
      return midIndex;
    }
  }
  return -1;
  // time complexity of O(log(n))
};

console.log(divideConcuar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 7)); // we are findingthe index of wrray by giving a number

//// video 7 ///// checking square in anotrher array

// arr1=[1,2,3,4] ,arr2=[1,9,4,16] find the square in second array

// quadratic => linear => binary

// if(arr1[i] * arr1[j] === arr2[j]){
//   let isSquare= true
// }

const isSquareCheck = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    let isSquare = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] * arr1[i] === arr2[j]) {
        isSquare = true;
      }
      if (j == arr2.length - 1) {
        if (!isSquare) {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(isSquareCheck([1, 2, 3, 4], [1, 9, 4, 16]));

// imporved time complexity to linear

const isSquareCheck2 = (arr1, arr2) => {
  // logic part ====>

  // 1=> arr1=[1,2,4,2] arr2=[1,4,4,16]
  // map1= {1:1, 2:2,4:1}

  let map1 = {};
  let map2 = {};

  for (item of arr1) {
    // n
    map1[item] = (map1[item] || 0) + 1;
  }

  for (item of arr2) {
    // n
    map2[item] = (map2[item] || 0) + 1;
  }
  console.log(map1);
  for (let key in map1) {
    //n
    console.log(key);
    if (!map2[key * key]) {
      //checking object keys
      return false;
    }
    if (map1[key] !== map2[key * key]) {
      // comparing values
      return false;
    }
  }
  return true;
};

console.log(isSquareCheck2([1, 2, 4, 2], [1, 4, 4, 16]));

/// recursion function

// there must be enbpoint otherwise it will run infinite recursion

let counter = 1;
const recursion = () => {
  if (counter > 100) {
    return;
  }
  counter++;
  // recursion => when function called itself ois called recursion
  //  console.log("function is called",); // it will call infinite
  //Uncaught RangeError: Maximum call stack size exceeded
  recursion();

  // document.get element by id document.get element by name
  // json.parese these are inbuild recursion function
};

console.log(recursion());
let i = 0;
let j = 1;
let myArray = [2, 1, 4, 3, 6, 5];

let myNewList = [];

// const checkSorted = (array) => {// will check the array sorted
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > array[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// };

// const recursion1 = (array) => {
//   // [2,3,4,1]=>
//   // [2,3,4,1]=> check if forst index is greater than senconf if yes then swap

//   if (checkSorted(array)) {// [2,1,4,3,6,5]
//     myNewList= array
//     return
//   } else if (array[i] < array[j]) { // 1=> 2<1 => false,
//     i++;
//     j++;
//     recursion1(array);
//   } else {
//     [array[i], array[j]] = [array[j], array[i]]; // [2,1]=[1,2]
//     i = 0; // reinitilizing iterator for again sorting
//     j = 1;
//     console.log(array);
//     recursion1(array); // call function with array
//   }
// };

//
// console.log(recursion1(myArray));

// console.log(myNewList);

const checkSorted = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      // will check   if arry is sorted
      return false;
    }
  }
  return true;
};

const recursion2 = (array) => {
  if (checkSorted(array)) {
    myNewList = array;
  } else if (array[i] < array[j]) {
    i++;
    j++;
    recursion2(array); // call function with array
  } else {
    [array[i], array[j]] = [array[j], array[i]];
    i = 0;
    j = 1;
    recursion2(array);
  }
};
// on console of funciton it will return undefined
// but this is calling again and angain so its returning undefined

recursion2(myArray);
console.log(myNewList);

// video 12 //=> helper recursion function

// [1,2,3,4,5,6,7,8,9,10]
// [1,3,5,7,9,]=> output

// number%2!==0

// funciton will not call recursive while its children function will call recurswively

// const recursionParet=(array)=>{
//   let result1=[]
//   const recusionHelper=(inputArray)=>{
//     if(inputArray.length===0){
//       return
//     }
//     if(inputArray[0] %2 !== 0){// check [0 ]index values
//       result1.push(inputArray[0])
//     }
//     recusionHelper(inputArray.splice(1))// slice will remove first index from it
//   }

//   recusionHelper(array)

//   return result1
// }

// console.log(recursionParet([1,2,3,4,5,6,7,8,9,10]));

const recursionParent = (array) => {

  const recursionChild = (array) => {
    if (array.length === 0) {
      return;
    }
    if (array[0] % 2 !== 0) {
      result.push(array[0]);
    }
    recursionChild(array.slice(1));
  };

  recursionChild(array);

  return result;
};

console.log(recursionParent([1, 2, 3, 4, 5, 6, 7, 8]));

// searhing video=> 13

let names = ["salman", "khan", "ajay", "interview"];

console.log(names.indexOf("khan")); // 1
console.log(names.includes("khan")); // true

// binary search

const user = [
  { userName: "salman", email: "salman@gmail.com" },
  { userName: "ajay", email: "ajay@gmail" },
  { userName: "khan", email: "khan@gmail" },
];

let searchArray = [1, 2, 3, 4, 5, 6];

const linearSearch = (array, key) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == key) {
      return i; // will return the index of number
    }
  }
  return -1;
};

console.log(linearSearch(searchArray, 3));

const userSearch = (user, search) => {
  for (let i = 0; i < user.length; i++) {
    if (user[i].userName == search) {
      return i;
    }
  }
  return false;
};
// timecomplexity is linear i=and will be o(n)
console.log(userSearch(user, "ajay"));

// buble sort =>
// sorting => is to arrangle the array according to required order

// shell sorting algorithm will take less time to run

// buble sort =>time complexitty =>on^2

// 1=> if last element is bigger then next time we will iterate one less to end
// 2=> if last element is smaller then next time we will iterate

const bubbleSort = (array) => {
  console.log(array);
  for (let i = array.length; i > 0; i--) {
    console.log(i);
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};

// console.log(bubbleSort([7, 1, 2, 3, 4, 5, 6]));

// [4,5,3,2,7,6]
// [4,3,5,2,7,6]
// [3,4,5,2,7,6]
// [3,4,2,5,6,7]
// [3,2,4,5,6,7]
// [2,3,4,5,6,7]

// sorting algorithm buble sort optimization

const bubleOptimized = (array) => {
  for (let i = array.length; i > 0; i--) {
    let isSwapped;
    console.log(i, "bubleOptimized");
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  return array;
};

console.log(bubleOptimized([7, 1, 2, 3, 4, 5, 6]));

// selectionSort => takes more time
/* 
1=>consider first element number is mimimum number of array

2=> if minumunnthen fist then we swap and the second will be mimimum


*/

const selectoinSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      // console.log(array[i]);
      if (array[j] < array[min]) {
        min = j;
        // console.log(array);
      }
    }
    if (i !== min) {
      temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
};

console.log(selectoinSort([2, 4, 3, 5, 7, 8, 0]));

let insertionArray = [3, 7, 1, 2, 6, 8, 5, 0];

// strep=1 consider second elemet => array[1]

// 2=>  left from starting if greater then  it will swap
// j>=0 && array[j]>cur

// 1=> will strart from 2 as first index
// 2=> will have to comapore woith left as j=i-1

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let cur = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > cur) {
      // swap from left value with current value
      array[j + 1] = array[j]; // [7,7,1,2,6,8,5,6]
      j--;
    }
    array[j + 1] = cur; // [3,7,1,2,6,8,5,6]
  }
  return array;
};

console.log(insertionSort([8, 2, 4, 3, 1]));

const insertionSort2 = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    //1- start from index 1
    //2- compare if previous index greater then cuurewnt index then
    // store current index vlaue will be previous index vlaue
    //3- after while loop arr[j+1]=cur
    let curr = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
  return arr;
};

console.log(insertionSort2(insertionArray));

// find the maximum occuring character in given string

let str = "HELLO WOOORD";

const maximumString = (str) => {
  const value = {};

  str.split("").forEach((e) => {
    // value[e]=(value[e]||0)+1
    value[e] = value[e] ? value[e] + 1 : 1;
    // if(e=="L")
    // return true
  });
  let max = 1;
  let char = str[0];
  for (let k in value) {
  console.log(value[k]);
    if (value[k] > max) {
      // check h:1 >1
      max = value[k];
      char = k;
    }
  }

  return char;
};

console.log(maximumString(str));

// check givcen string is pallandrome ??
// noon => noon
// 121=> 121
// if reverse we got the same as previous then it is a pallandrome

const checkPallendreome = (str) => {
  // str.split("").reverse().join()
  // return str
  let pStr = str.toLowerCase();
  let left = 0;
  let right = pStr.length - 1;

  while (left < right) {
    if (pStr[left] !== pStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

console.log(checkPallendreome("dadad"));

const checkPalindrome2 = (str) => {
  let pStr = str.split("");
  let left = 0;
  let rightP = pStr.length - 1;
  while (left < rightP) {
    if (pStr[left] !== pStr[rightP]) {
      return false;
    }
    left++;
    rightP--;
  }

  return true;
};

console.log(checkPalindrome2("salas"));

// longest substring without repeating

// input: s ="abcabcd"

const longestSubstring = (str) => {
  //  let strL= {}

  //  str.split("").forEach(e=>{
  //   strL[e]=(strL[e] || 0) + 1
  //  })

  //  return strL
  // (brut force) => is the last mewthod of using bruit force
  // sliding window
  // it is verry important to practise

  let end = 0;
  let start = 0;
  let maxLength = 0;

  const uniqueChar = new Set();
  while (end < str.length) {
    // loop will run 0-7
    if (!uniqueChar.has(str[end])) {
      uniqueChar.add(str[end]); // abc will insert
      end++;
      maxLength = Math.max(maxLength, uniqueChar.size);
    } else {
      uniqueChar.delete(str[start]); //
      start++;
    }
  }
  return maxLength;
};

console.log(longestSubstring("abcabcbb"), "substrinmg");

// working => abcabcbb => toal length 7

/* start=0 
end =0 
 1=> start=0
    end =2
    max =3
2 => 
start= 2
else part
will deleter start part 1
and ++ and end will be 3

*/
