let a = 123;

const reverse = (a) => {
  let arr = a.toString().split("").map(Number);
  let result = 0;
  let value;
  for (let i = arr.length - 1; i >= 0; i--) {
    result = result * 10 + arr[i];
  }

  return result;
};

console.log(reverse(a));

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 13];
// find the missing number in arr1 which is not in present in arr2
const missingNumber = (arr1, arr2) => {
//   let obj = {};
//   let result=[]
//   for (let i = 0; i < arr1.length+1; i++) {
//     for (let j = i; j < arr2.length+1; j++) {
//      if(arr1[i]==arr2[j]){
//         result.push(j)
//      }
//      obj[result[j]]=true
//     }
//   }
//   console.log(obj);
//   return result;
let obj={}
let result= 0
    for(let i=0; i<arr2.length; i++){
        for(let j=0; j<arr1.length; j++){
            if(arr2[i]==arr1[j]){
                obj[arr2[j]]=true
            }
            else if (arr2[i]!==arr1[j] && !obj[arr2[j]]){
                result= arr2[j];
            }
        }
    }
    return result

};

console.log(missingNumber(arr1, arr2));

// const reverseNumber=(num)=>{

//     let result=0
//     num.toString().split("").map(Number).reduce((acc, val)=>
//     [val, ...acc],
//     [])
//     return result
// }
// console.log(reverseNumber(321), "reverse");
