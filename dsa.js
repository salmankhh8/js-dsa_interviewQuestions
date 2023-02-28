const factorial = number =>{
    let product =1;
    for(let i= 2; i<= number; i++){
        product +=i
    }
    return product;
}

// sortin an array - bubble sort

const bubbleSort =(arr)=>{
    let len = arr.length
    for (let i=0; i<len; i++){
        for(let j=0; j< len -i-1 ; j++){
             if(arr[j]> arr[j+1]){
                let temp=arr[j]
                arr[j] = arr[j+1];
                arr[j+1] = temp
             }
        }
    }
    return arr
}

console.log(bubbleSort([4,5,6,7,2,8]))
//(6) [2, 4, 5, 6, 7, 8]
// comaparing two adjacent element and swap

// sho=rting arrray 0s- 1s

//  [0,1,1,0,0,1]

const sortArrasy =(arr)=>{
    let count =0
    for (let i=0; i< arr.length; i++){
        if(arr[i]===0){
            count ++
        }
    }

    for (let i= 0; i< count ; i++){
        arr[i] = 0 
    }

    for (let i=count; i< arr.length; i++){
        arr[i] =  1
    }
    return arr
}

console.log(sortArrasy( [0,1,1,0,0,1]));

const product =[
    {
        id:1,
        category: "Electronics",
        type:"AC",
        name:"Iphone",
        price:10000,
    },
    {
        id:2,
        category: "Electronics",
        type:"Mobile",
        name:"Iphone",
        price:20000,
    },
    {
        id:3,
        category: "Electronics",
        type:"TV",
        name:"Iphone",
        price:30000,
    },
    {
        id:4,
        category: "Electronics",
        type:"Mobile",
        name:"Iphone",
        price:40000,
    }
];

const doublePrice =(arr)=>{
    return arr.map((item)=>{
        if(item.type=="Mobile"){
            return {
                ...item,
                price: item.price*2
            }
        }
        return item
    })
}

console.log(doublePrice(product));

// calculate total price of mobiles 

const totalMobilePice= (arr)=>{
    const filterMobile= arr.filter((item)=>{
        if(item.type=="Mobile"){
            return item
        }
    })

    const totalPrice = filterMobile.reduce((acc, cur)=>{
        return acc.price + cur.price
    })

    console.log(filterMobile);
    return totalPrice
    // return arr.map((item)=>{
    //     if(item.type=="Mobile"){ 
    //     return item.price= item.price
    //     }
    // })
}

console.log(totalMobilePice(product));

// retunr tudplicates numbers 

var numbers= [1,2,3,4,5,6,7,3,4,4,6,1,2,3,4,5,6,7,3,4,4,6,]

const removeDuplicate= (arr)=>{
    let obj ={}
    let result=[]
    let duplicates=[]
    for (let i=0; i<arr.length; i++){
        if( !obj[arr[i]] ){
            result.push( arr[i] )// will push the array in shprted array
        }
        else{
            duplicates.push(arr[i])
        }
        obj[arr[i]] =true

        // count the  duplicates available in numner
        //  if( obj[arr[i]]>=1 ){
        //     // let count=1
        //     obj[arr[i]]= obj[arr[i]]+1
        // }
        // if( !obj[arr[i]] || obj[arr[i]]==1){
        //     let count=1
        //     obj[arr[i]]= count
        // }
         
        // obj[arr[i]]=(obj[arr[i]] || 0) +1
    }
    return result

}

console.log(removeDuplicate(numbers)); 



//  sum of digits of given number

let number = 123 // here it is the number

const sumtheDigit=  (number)=>{
    let arr= number.toString().split("").map(Number);// willl convert it to number by map
    return arr.reduce((acc, val)=>{
        let sum= acc+ val
        if(sum>10){
            return sumtheDigit(sum)
        }
        else{

            return sum
        }
    })
    console.log(arr);
}

console.log(sumtheDigit(number));

// compute the exponent of a number

const power12 = (base, exp) =>{
    if(exp===0)return 1;

    return base* power12(base , exp-1)
}

console.log(power12(2,4));

// working (2,4)
/*    
 2* power(2,3)
 2* power(2,2)
 2* power(2,1)
 2* power(2,0)
=====> now it will recurse
 2* 2
*/

/* from unsortedarray , check whether are there any two number that will sum up to a given number */
// any two number is sum of sorted numbers


const findSum= (arr, sum)=>{
    let obj={};
    let diff;
    for (let i=0; i<arr.length; i++){
        diff= sum-arr[i];// sum =13 arr[i]=4
        if(obj[diff]){
            return true
        }
        obj[arr[i]] = true// add key to value true
    }

    return obj
}

console.log(findSum([4,7,5,8], 13));

// reverse a string 

// ("welcome to webstack")

const reverseString=(str)=>{
    let space= str.split(" ")
    let result ="";
    for (let i=space.length-1; i>=0; i--){
        result +=space[i]+ " "
    }
    return result;
}

console.log(reverseString("welcome to webstack"));

// find the missing number from 1-n
// [1,3,4,5]

const missingNumber=(arr)=>{
    // [1,2,3,4,5] =x the sum of all number
    // [1,2,4,5] =  is the sum without missing number

    let result = 0;
    let n= arr.length+ 1
    let total = (n * (n +1))/2 // arithmetic expression
    // n is the length of array

    for (let i=0; i<arr.length; i++){
        result += arr[i]  
    }

    return total-result
} 


console.log(missingNumber([2,4,1,5,7,6]));// 


/// js interiew questions


let str= "hellow, how are you"
// console.log(str.split( " "))
// console.log([str])
// convert it into all character

// console.log([...str]);

// convert on behave of space

// console.log(str.split(" "));

// charactre replace h -_

console.log( str.replace("h", "-"));// will remove the firat which mathes the output
console.log( str.replace(/h/g, "-"));// will remove all the h from the string

// get the substring 

// remove first 3 chjaracter and last 3 charatcer

console.log(str.substring(6,10));//, ho
console.log(str.substring(1,str.length));//ellow, how are you
console.log(str.substring(1,str.length-1));//ellow, how are yo
console.log(str.substring(0,str.length-1));//hellow, how are yo

console.log(str.split("o")[0]);// hell

// reverse the string and

let temp =  str.split("").reverse().join("");

console.log(temp);// will join the string part

/// extra spaces 

let extra= "hello"

console.log(extra.trim());

// concatinate two string from left soide and right sie

let extra2 = "world"

console.log(extra + extra2);


////////////////////////closure///////////


// lexical scope function inner vlaue cannot acessed the outside value