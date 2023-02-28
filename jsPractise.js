// 1=> print the duplicates from character form string

printDuplicates = (str) => {
  let string = str.split("");
  const value = {};
  let result = [];
  for (let i = 0; i < string.length; i++) {
    if (!value[string[i]]) {
      result.push(string[i]);
    }

    value[string[i]] = true;
  }

  return result;
};

console.log(printDuplicates("salmandhsbcvsgdvsvcxgsv"));

// check two string are anagram to each other

checkAnagram = (str1, str2) => {
  // anagram is where aphablest are exactle the count on the string and all abphabet should be same
  // make a object and put hte aplphabet along with there numer of repetetion

  // {s:1, d:2, s:3}

  // []
  const strObj = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    strObj[str1[i]] = (strObj[str1[i]] || 0) + 1;
  }

  for (key of str2) {
    // for of will loop throught the string
    // for in loop thjrought in object
    if (!strObj[key]) {
      return false;
    }
    strObj[key] -= 1;
  }
  return true;
};

console.log(checkAnagram("sadas", "sasas"));

// print non repeating character from string

const nonReapeating = (str) => {
  let result = "";
  let string = str.split("");
  const obj = {};
  let var1 = [];
  for (let i = 0; i < string.length; i++) {
    if (!obj[string[i]]) {
      result += string[i];
    }
    obj[string[i]] = true;
  }
  return result;
  // "asdf"
};

console.log(nonReapeating("asadff"));

// reverse a string using recursion
let cur = "";
let start = 0;
let str = "salman";
let end = str.length - 1;
let string = str.split("");

const reverseRecursion = (str) => {
  // recusion => when function call itself ois known as recursion
  if (end < start) {
    console.log(cur);
    return;
  } else {
    cur += string[end];
    end--;
    reverseRecursion(str);
  }
};

// console.log(cur);
reverseRecursion(str);
// 5=> check if number is available in string
const digitINString = (str) => {
  let string = str.split("");
  for (let i = 0; i < string.length; i++) {
    if (!Number([string[i]])) {
      return false;
    }
    // console.log(Number([string[i]]));
  }
  return true;
};

console.log(Number("a"));

console.log(digitINString("123324"));

//6=> find duplicate character in string

const findDuplicateStr = (str) => {
  const count = {};
  let string = str.split("");
  let result = [];
  for (let i = 0; i < string.length; i++) {
    count[string[i]] = (count[string[i]] || 0) + 1;
    // for checking the duplicates we need first initialsie the value
    if (count[string[i]] > 1) {
      result.push(string[i]);
    }
  }
  return result;
};

console.log(findDuplicateStr("sasdffghjfghjkcvbwerw"));

//7=> count the occurence of s=character in string

const countRepString = (str) => {
  let string1 = str.split(" ");
  let count = {};
  for (let i = 0; i < string1.length; i++) {
    count[string1[i]] = (count[string1[i]] || 0) + 1; // this is verry important make sure we choulf remeber the cout variable
  }
  return count;
};
console.log(countRepString("hii Today is morning and it is sunday"));
// console.log(countRepString("asdsaasdsadas"));

//8=> Count many vowels and consonants in a given String?

// a e i o u

const countVowels = (str) => {
  let vowels = str.toLowerCase().split("");
  let count = 0;
  for (let i = 0; i < vowels.length; i++) {
    if (
      vowels[i] == "a" ||
      vowels[i] == "e" ||
      vowels[i] == "i" ||
      (vowels[i] == "o") | (vowels[i] == "u")
    ) {
      count++;
    }
  }
  return count;
};

console.log(countVowels("hii today is thrusday and we have to cokpeter"));

//=> permutaion or anagram

const permutaion = (str1, str2) => {
  const obj = {};
  let string1 = str1.split("");
  if (str1.length !== str2.length) return false;
  for (let i = 0; i < string1.length; i++) {
    obj[string1[i]] = (obj[string1[i]] || 0) + 1;
  }

  for (let key of str2) {
    if (!obj[key]) {
      return false;
    }

    obj[key] -= 1;
  }
  return true;
};

console.log(permutaion("asffdf", "ffdfsa"));

// reverse a worfd in a given sentence without using any librabry method

const reverseMethod = (str) => {
  let string1 = str.split(" ");
  let result = "";
  for (let i = 0; i < string1.length; i++) {
    let rstring = string1[i].split("");
    for (let j = rstring.length - 1; j >= 0; j--) {
      result += rstring[j];
    }
    result += " ";
  }

  return result;
};

console.log(reverseMethod("good mornign today is friday"));

// string rotation

const checkPallendreome = (str1, str2) => {
  // checking pallondrome
  let string1 = str1.split("");
  const obj = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < string1.length; i++) {
    // obj[string1[i]]=obj[string1[i]]? obj[string1[i]]+ 1: 1
    obj[string1[i]] = (obj[string1[i]] || 0) + 1;
  }

  for (let key of str2) {
    if (!obj[key]) {
      return false;
    }

    obj[key] -= 1;
  }

  return true;
};
console.log(checkPallendreome("good", "dogo"));

const checkRotation = (str1, str2) => {
  let res = true;
  if (str1.length !== str2.length) {
    return false;
  }
  console.log("condition checked");
  let string1 = str1.split("");
  let string2 = str2.split("");
  let start = 0;
  let found = 0;
  for (let i = 0; i < string1.length; i++) {
    if (string1[start] === string2[i]) {
      found = i;
      break;
    }
  }

  const checkCoinuty = (stra, strb) => {
    if (start === string1.length) {
      return true;
    } else if (found >= string1.length) {
      found = 0;
      checkCoinuty(stra, strb);
    } else if (stra[start] == strb[found]) {
      start++;
      found++;
      checkCoinuty(stra, strb);
    } else {
      res = false;
      return;
    }
  };
  checkCoinuty(string1, string2);
  return res;
};

console.log(checkRotation("abcd", "cdab"));

{

  //aab bba bba aab ccc aaa aab bbb aab

const findMax = (str) => {
  const obj = str.split(" ");
  let max = {};
  for (let i = 0; i < obj.length; i++) {
    max[obj[i]] = (max[obj[i]] || 0) + 1;
  }

  console.log(max);

  let count = 0;
  let value = "";
  for (key in max) {
    console.log(max[key]);
    if (max[key] > count) {
      count = max[key];
      value = key;
    }
  }

  // console.log(Object.values(max[count]))
  // logObject.keys(max)
  // console.log(Object.keys(max[count]));

  return value;
};

console.log(findMax("aab bba bba aab ccc aaa aab bbb aab"));

// Input String : abbccafghhgfal

// Find the characters appearing sequentially (repeating twice)
// Repeat till you find sequential non-repeated characters

let string2 = "abbccafghhgfal";
let string1 = [];
let res = [];
string1 = string2.split("");
const findSequence = (str) => {
  let count = 1;
  for (let i = 0; i < string1.length; i++) {
    let next = i;

    if (str[i] === str[next + 1]) {
      count++;
      string1.splice(i, count);
      findSequence(string1);
    }
  }
  return string1;
};

console.log(findSequence(string1));

}

{
  


  // et arr1 = ["Alex", "Pooja", "Jerry", "Alex", "Alex", "Tom", "Pooja"];

// #1 - Find the occurrence of each element in Array.
// Output: Alex = 3, Pooja = 2, Tom = 1


const occuring=(arr)=>{
  let count={}
  for(let i=0; i<arr.length; i++){
      count[arr[i]]= (count[arr[i]] || 0 )+1
  }

return count

}

console.log(occuring(["Alex", "Pooja", "Jerry", "Alex", "Alex", "Tom", "Pooja"]));

// Table 1 => Employee
// Columns => EMP_ID, EMP_NAME, DEPT_ID

// Table 2 => Department
// Columns => DEPT_ID, DEPT_NAME

// Find the numbers in given string.
// let str = "mynameis777salman1234khan";

// Output: 7771234

const filterNum=(str)=>{
  let test=str.split("")
  let res="";
  for(let i=0;i<test.length;i++){
      if(Number(test[i])){
          res+=test[i]
      }
  }

  return res
}

console.log(filterNum("mynameis777salman1234khan"));
}
{

  let a = "adasjfdsfsfjsdjfhacabcsbajda".split("");

const count = {};

a.forEach((e) => {
  count[e] = (count[e] || 0) + 1;
});

console.log(count);

let b=  "sadasd"

is_string(b)
function is_string(string){
  if(string===string.toString()){
    console.log(true);
  }
  else{
    console.log(false);
  }
}

// find the duplicats in array

let c= "sdsadsadasdfghjzxcvbnrewqwewsdssdsadsadasgc".split("")

const value={}
c.forEach(e=>{
  value[e]=(value[e] || 0)+1
})

console.log(value);

let string1="geeks quiz practice code".split(" ")
}