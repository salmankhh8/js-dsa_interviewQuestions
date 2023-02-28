ngpstive = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
array = [3, 2, 7, 5, 4, 6, 8, 1, 0]; // random array
string = "hellow this is adsd";
anagram1 = "hello";
anagram2 = "lleho";
mixarray = [1, 2, 3, 4, 5, 6, 7, 3, 4, 5, 6, 5, 6, 2, 4, 1];
// find  first pairsum =0

constPairSum = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] == 0) {
        return [arr[i], arr[j]];
      } // we will get -5,5
    }
  }
};

console.log(constPairSum(ngpstive));

pairSumImprove = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] == 0) {
      // checking first way so that it cannot go ahead and we no need to
      return [arr[left], arr[right]];
    }
    if (arr[left] + arr[right] > 0) {
      // if sum is grater then zero then we decrement from right
      right--;
    }
    if (arr[left] + arr[right] < 0) {
      // if sum less then zero then we increemt  from left
      left++;
    }
  }
  return false;
};

console.log(pairSumImprove(ngpstive));

const checkAnagram = (str1, str2) => {
  // 1=>check both string length if true then move lese false
  // 2=>count number of alphabet and put in object
  //{h:1, e:1, l:2,o:1}
  //3=> lop throught each item and found where
  str1obj = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    str1obj[str1[i]] = (str1obj[str1[i]] || 0) + 1;
  }
  console.log(str1obj);
  for (item of str2) {
    if (!str1obj[item]) {
      // str1obj[item] =
      // if item key is not have any in str1obj then return false
      // if any word not have in strobj1 then it will returen undefined and we will return false
      return false;
    }
    str1obj[item] -= 1; // if present then we will subtract it from 1
    // if it has key exist but more thrn strobj1 then it will return -1
  }
  return true;
};

console.log(checkAnagram(anagram1, anagram2));

// find the missing number in arr1 which is not in present in arr2

let arrA = [1, 2, 3, 4, 5];
let arrB = [1, 2, 3, 4, 5, 45];
const missingNum = (arr1, arr2) => {
  const arr1Obj = {};
  for (let i = 0; i < arr1.length; i++) {
    arr1Obj[arr1[i]] = true;
  }

  for (item of arr2) {
    if (!arr1Obj[item]) {
      return item;
    }
  }
};

console.log(missingNum(arrA, arrB));

const findToal = (arr) => {
  let n = arr.length + 1; //
  let total = (n * (n + 1)) / 2;
  let result = 0;
  // return n*(n+1)/2
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  return total - result;
};

console.log(findToal([1, 2, 3, 5, 6]));

const findUniqueNumber = (arr) => {
  const count = {};
  const duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    if (!count[arr[i]]) {
      duplicate.push(arr[i]);
    }
    count[arr[i]] = true;
  }
  return duplicate;
};

console.log(findUniqueNumber(mixarray));

const findUniqueNumber1 = (arr) => {
  if (arr.length > 0) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  }
};

console.log(findUniqueNumber1(mixarray));

const findLargestSum = (array, num) => {
  //[1,2,3,4,5,6,7,8]
  // of consecutive 4 numbers
  let maxSum = 0; // 8-4+1= 5
  for (let i = 0; i < array.length - num + 1; i++) {
    // will have iteration upto arr.length-num =1
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += array[i + j]; // will have sume of first and second elemnt in array
    }
    if (temp > maxSum) {
      maxSum = temp;
    }
  }
  return maxSum;
};

console.log(findLargestSum([1, 2, 3, 4, 5, 6, 7, 8], 4));

// binary search
// divide and concour

// find the index of array 7

const divideConcuor = (arr, num) => {
  //1=> min and max would n=be startinga and end of array
  //2=> mid index would be half of min +max/2
  //3=> if num > midIndex => min= midIndex+1
  //4=> if num < midIndex => max =midIndex-1
  // if no then return midindex as min and max have same vlaue
  min = 0;
  max = arr.length - 1;
  while (min <= max) {
    let midIndex = Math.floor((min + max) / 2);
    for (let i = 0; i < arr.length; i++) {
      let temp = 0;
      if (midIndex < num) {
        min = midIndex + 1;
      } else if (midIndex > num) {
        max = midIndex - 1;
      } else {
        return midIndex;
      }
    }
  }
  return -1;
};

console.log(divideConcuor([1, 2, 3, 4, 5, 6, 7], 4));

const squareCheck = (arr1, arr2) => {
  //[1,2,2,4] //[1,4,4,16]
  map1 = {};
  map2 = {};
  for (item of arr1) {
    map1[item] = (map1[item] || 0) + 1;
  }
  for (item of arr2) {
    map2[item] = (map2[item] || 0) + 1;
  }

  for (let key in map1) {
    if (!map2[key * key]) {
      return false;
    }
    if (map1[key] !== map2[key * key]) {
      return false;
    }
  }
  return true;
};

console.log(squareCheck([1, 2, 2, 4], [1, 4, 4, 16]));

// recursoin ///

// funcition is calleing itself is alle a  reursion
let counter = 0;
const recursion = () => {
  if (counter > 100) {
    return; // condition for stoping the recursion function
  }
  //   counter++; // if less then 100 then it will increment the counter
  //   console.log(counter);
  //   recursion(); // call again the function
};

// recursion();

// sorting the array

const isSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
};

let i = 0;
let j = 1;
let sortArr = [];
const recursSort = (array) => {
  // 1=> check if array is sorted or not=> yes =>return ||
  // no=> move ahead to swap

  if (isSort(array)) {
    sortArr = array;
    return sortArr; // it will give undefined because it showinmg output on the basis of multiople function call so js cannot undesrtrand what hapenning here
  } else if (array[i] < array[j]) {
    i++;
    j++;
    recursSort(array);
  } else {
    [array[i], array[j]] = [array[j], array[i]];
    i = 0;
    j = 1;
    recursSort(array);
  }
};

console.log(recursSort([2, 3, 1, 5, 4, 7, 6]));
// console.log(recursSort([1,2,3,4,5,6]));
console.log(sortArr);

const evenParent = (arr) => {
  let result = [];
  const findEven = (arr) => {
    if (arr.length === 0) {
      return false;
    }
    if (arr[0] % 2 !== 0) {
      result.push(arr[0]);
    }
    findEven(arr.slice(1)); // slice first parms define the sytarting index of array whee we have to slice if no ending oarams define the  it  will go to the end
  };
  findEven(arr);
};
console.log(evenParent([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const linearSearch = (arr, key) => {
  // linear search
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
      return i + " " + "index value";
    }
  }
};

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7], 3));

const user = [
  { userName: "salman", email: "salman@gmail.com" },
  { userName: "ajay", email: "ajay@gmail" },
  { userName: "khan", email: "khan@gmail" },
];

const userLinearSearch = (user, key) => {
  for (let i = 0; i < user.length; i++) {
    if (user[i].userName === key) {
      return i;
    }
  }
};

console.log(userLinearSearch(user, "khan"));

const bubleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    console.log(arr);

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

console.log(bubleSort([2, 1, 4, 3, 6, 5, 7]));

const bubleSortOptimized = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    let isSwapped; // will initialize for each iteration and of for loop

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      // will check if array is sorted then no need for iteration if array issorted
      break;
    }
  }
  return arr;
};

console.log(bubleSortOptimized([2, 1, 4, 3, 6, 5, 7]));

const insertionSort = (arr) => {
  // start from index 1
  // comapre if previous index greater then current index then
  // store current index value will be previous value
  // after while loop arr[j+1]=cur
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > cur) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = cur;
  }
  return arr;
};

console.log(insertionSort([2, 1, 4, 3, 6, 5]));

let str = "hellloworld";
const findMaximum = (str) => {
  const count = {};
  let string = str.split("");
  let max = 0;
  let char;
  for (let i = 0; i < string.length; i++) {
    count[string[i]] = (count[string[i]] || 0) + 1;
  }
  // return count
  for (let k in count) {
    if (count[k] > max) {
      max = count[k];
      char = k;
      // for in loop isused to iterate thorugh only object {}
    }
  }
  return char;
};

console.log(findMaximum(str));

const checkPallindtrome = (str) => {
  // palindrome=  is the word where if is is reverse then the both word should be same
  // dad => dad/
  //dadad= > dada
  let pstr = str.toLowerCase().split("");
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (pstr[left] !== pstr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
console.log(checkPallindtrome("saas"));

const longestSubstring = () => {};

const reverseArrays = (arr) => {
  let obj = [];
  // obj.splice
  for (let i = arr.length - 1; i > 0; i--) {
    arr.push(i);
  }
  arr.splice(0, Math.floor(arr.length / 2));
  return arr;
  // will start from zero
};

console.log(reverseArrays([1, 2, 3, 4, 5, 6, 7]));

const findSecondLargest = (arr) => {
  let max = 0;
  let smax = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[0];
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > smax && smax < max && arr[i] !== max) {
      smax = arr[i];
    }
  }
  return smax;
};

console.log(findSecondLargest([3, 2, 4, 2, 1]));

// rest

function addNumber(a, b, c, ...others) {
  return a + b + c + others;
}

console.log(addNumber(2, 3, 4, 4, 6));

// spread
// all eleemnt will pass will combne

{
  let s = ["salman", "sal", "khan", "js", "html"];

  function getName(n1, n2, n3) {
    console.log(n1, n2, n3);
  }
  // console.log(getName(s[0], s[1], s[2]));
  console.log(getName(...s));
}

/// ovverride in object
{
  let obj = { name: "salmna", age: 24, hobies: ["codeing", "sports"] };

  obj.name = "khan";
  // array desrtucturing
  const { age, ...rest } = obj;

  console.log(age);
  console.log(rest);
  console.log(obj);

  let newObj = {
    ...obj,
    age: 34,
  };

  console.log(newObj);
}

// call apply bind
{
  let name = {
    name: "salmna",
    kastn: "khan",
  };
  let printFullname = function (hometown, state) {
    console.log(
      this.name + " " + this.kastn + "hometown " + hometown + " state " + state
    );
    // this referes to the name object`
  };
  // function borrowing in call mathod
  let name2 = {
    name: "angular",
    kastn: "ts",
  };

  printFullname.call(name2, "indore", "mp");
  //in apply we pass second argument in array list
  printFullname.apply(name2, ["indore", "mp"]);

  let printMyName = printFullname.bind(name2, "indore", "mp");

  console.log(printMyName);

  // cal annd bind it gives u the copy which can be involked later

  //c all is used to invoke a function by usoing this varibale inside the fiunction
  // / aplly is alois similar but ut takes second argument as array
  // bind method doesnot directly invoke gies u directly the copy of invoke method
}

{
  // call by value

  // it is used for primitive dtatypes

  let x = 12;
  var y = x;
  y = 23;
  console.log(y); //23
  console.log(x); //12
}

{
  // call by reference is used for object or array
  let obj = {
    name: "cll by value",
    id: "2",
  };

  let obj2 = obj;

  obj2.name = "test";

  console.log(obj);
  console.log(obj2);
  // on change in value both will change
}

{
  //strucutring and destrucutring

  let a, b;

  [a, b] = [32, 45];

  console.log(a, b);

  [a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 76, 8];
  // a=1, b=2,c=3, d=[4,5,6,76,8] it will alocale remoain to d
  console.log(d);

  // ({a,b,c})=[]
}
{
  const fruits = ["apple", "orange", "banana", "black", "mango"];
  let a, b, c, d;

  [a, b, c, ...d] = fruits;

  console.log(a, b, c, d);

  const laptop = {
    model: "hp",
    age: 23,
    gender: "male",
  };

  const { model, age, gender } = laptop;

  console.log(model, age, gender);
}

{
  //deep copy and shallow copy in json
  // basic coypy

  var obj1 = {
    name: "abc",
    adress: {
      street: "linked road",
      city: "delhi",
    },
  };

  // of object inside another object then it wil refer to the dame memory locaiton and further it will updates ass senmd upodates
  var obj2 = { ...obj1 }; // will point the memory of obj1
  // will update both the object
  // while it  will name change the propert of value
  // shallow copy
  // var obj2=Object.assign({}, obj1)
  obj2.name = "dsfsd";
  obj2.adress.city="indore"
  console.log(obj2);
  console.log(obj1);
}
{
  // depp copy
  var obj1 = {
    name: "sal",
    addresss: {
      street: "sdsadsa",
      city: "delhi",
    },
  };
  // we habve to stringfy then parse
  // var obj2 =JSON.parse(JSON.stringify(obj1));
  var obj2 = _.cloneDeep(obj1);

  obj2.name = "def";

  console.log(obj2.name);
  // problem is if there is a functio=n in key then json stringfy will not be aceptable

  //  1=> we iterre the object and we pick each value in other obj

  //loadsah is library for deep copy
}

{

  // print duplicate chgaratcers from string

function duolicate(str){
  let res={}
  let res1=[]
  let obj={}

  for(let s of str){
      if(obj[s]){
          if(!res[s]){
              res[s]=true
          }
      }
      obj[s]=true
  }


  // return Object.keys(res)
  return Object.keys(res)
  // return res
}

console.log(duolicate('aabaabbcdcee'));


function anamgram(str1, str2){
  let obj={}
  if(str1.length!== str2.length){
      return false;
  }

  for(let s of str1) {

      obj[s]=(obj[s]||0)+1
  }

  for(let s of str2){
      console.log(obj[s])
  }

  return obj
}

console.log(anamgram("sadsa", 'ssgha'));

}


