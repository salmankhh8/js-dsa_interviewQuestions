const factorial = (number) => {
  let product = 1;
  for (let i = 2; i <= number; i++) {
    product += i;
  }
  return product;
};
// will sum the number
console.log(factorial(3));

// shorting alogtithm
//[4,5,6,2,3,16,7,]

const bubleSort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(bubleSort([4, 5, 6, 2, 3, 16, 7]));

// filter 0s and 1s

const sortArr = (arr) => {
  let count = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === 0) {
      count++;
    }
  }
  for (let i = 0; i < count; i++) {
    arr[i] = 0;
  }

  for (let i = count; i < len; i++) {
    arr[i] = 1;
  }

  return arr;
};
console.log(sortArr([0, 1, 1, 0, 1, 0, 1]));

/// multiply the product of mobile type

const product = [
  {
    id: 1,
    category: "Electronics",
    type: "AC",
    name: "Iphone",
    price: 10000,
  },
  {
    id: 2,
    category: "Electronics",
    type: "Mobile",
    name: "Iphone",
    price: 20000,
  },
  {
    id: 3,
    category: "Electronics",
    type: "TV",
    name: "Iphone",
    price: 30000,
  },
  {
    id: 4,
    category: "Electronics",
    type: "Mobile",
    name: "Iphone",
    price: 40000,
  },
];

const doublePrice = (product) => {
  return product.map((item) => {
    // have to return the whole map
    if (item.type == "Mobile") {
      return { ...item, price: item.price * 2 };
    }

    return item;
  });
};

console.log(doublePrice(product));
// calculate total mobile price

const totalPrice = (product) => {
  const filterMobile = product.filter((item) => {
    if (item.type == "Mobile") {
      return item;
    }
  });

  const totalPrice = filterMobile.reduce((acc, val) => {
    return acc.price + val.price;
  });

  return totalPrice;
};

console.log(totalPrice(product));

// remove duplicate numbers

const arr = [
  1, 2, 2, 3, 4, 5, 6, 7, 3, 4, 4, 6, 1, 2, 3, 4, 5, 6, 7, 3, 4, 4, 6,
];
const removeDuplicate = (arr) => {
  let obj = {};
  let result = [];
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if(!obj[arr[i]]){
        result.push(arr[i])
    }
    else{
        duplicates.push(arr[i])
    }
    // obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    obj[arr[i]] =true
  }
  return result;
};

console.log(removeDuplicate(arr), "remove duplicates");

let number = 12345678;

const sumDigits = (number) => {
  let arr = number.toString().split("").map(Number);
  return arr.reduce((acc, val) => {
    let sum = acc + val;
    if (sum > 10) {
      return sumDigits(sum);
    }
    return sum;
  });
};

console.log(sumDigits(number));

// compute the exponentianal using recursion

const exponential = (val, exp) => {
  if (exp === 0) {
    return 1;
  }

  return val * exponential(val, exp - 1);
};

console.log(exponential(2, 3));
// 2* 8
// 2* 4
// 2* 2
// 2* 1

/* from unsortedarray , check whether are there any two number that will sum up to a given number */
// any two number is sum of sorted numbers

const findSum = (arr, sum) => {
  let obj = {};

  let diff;
  for (let i = 0; i < arr.length; i++) {
    diff = sum - arr[i];

    if (obj[diff]) {
      return true;
    }
    obj[arr[i]] = true;
  }
};

console.log(findSum([5, 2, 3, 7], 12));

// reverse a string

let str = "welcome to js interview";

const reverseString = (str) => {
  let space = str.split(" ");
  let result = "";
  for (let i = space.length - 1; i >= 0; i--) {
    result += space[i] + " ";
  }
  return result;
};

console.log(reverseString(str));

// find missing number
//[1,2,3,5]// array is in series order
const missingNumber = (arr) => {
  let result = 0;
  let n = arr.length + 1;
  total = (n * (n + 1)) / 2; // will be the total time
  for (let i = 0; i < arr.length; i++) {
    result += arr[i]; // will give total of inout array
  }
  return total - result;
};

console.log(missingNumber([1, 2, 3, 5, 6]));

let str1 = "hellow how are you";

// console.log([str1]);
console.log(str1.split(" "));
console.log([...str1]);

// replace character

console.log(str1.replace("h", "e"));
console.log(str1.replace(/h/g, "e"));

console.log(str1.substring(6, 10));
console.log(str1.substring(0, str.length));

console.log(str1.substring(1, str.length - 1));
console.log(str1.substring(0, str.length - 1));

let arr21 = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = arr21.length; i > 0; i--) {
  arr21.push(i);
}
arr21.splice(0, arr21.length / 2);

console.log(arr21);

// let arr= [1,2,3,4,5,6,7,8]
// for (let i=arr.length; i>0; i--){
//  arr.push(i)
// }
//   arr.splice(0,arr.length/2)


// console.log(arr)


let reverse= [1,2,3,4,5]

for(let i=reverse.length; i>0; i--){
    reverse.push(i)
}
reverse.splice(0,reverse.length/2)

console.log(reverse);

{
  const factorial = (number) => {
    let product = 1;
    for (let i = 2; i <= number; i++) {
      product += i;
    }
    return product;
  };
  // will sum the number
  console.log(factorial(3));
  
  // shorting alogtithm
  //[4,5,6,2,3,16,7,]
  
  const bubleSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  };
  
  console.log(bubleSort([4, 5, 6, 2, 3, 16, 7]));
  
  // filter 0s and 1s
  
  const sortArr = (arr) => {
    let count = 0;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      if (arr[i] === 0) {
        count++;
      }
    }
    for (let i = 0; i < count; i++) {
      arr[i] = 0;
    }
  
    for (let i = count; i < len; i++) {
      arr[i] = 1;
    }
  
    return arr;
  };
  console.log(sortArr([0, 1, 1, 0, 1, 0, 1]));
  
  /// multiply the product of mobile type
  
  const product = [
    {
      id: 1,
      category: "Electronics",
      type: "AC",
      name: "Iphone",
      price: 10000,
    },
    {
      id: 2,
      category: "Electronics",
      type: "Mobile",
      name: "Iphone",
      price: 20000,
    },
    {
      id: 3,
      category: "Electronics",
      type: "TV",
      name: "Iphone",
      price: 30000,
    },
    {
      id: 4,
      category: "Electronics",
      type: "Mobile",
      name: "Iphone",
      price: 40000,
    },
  ];
  
  const doublePrice = (product) => {
    return product.map((item) => {
      // have to return the whole map
      if (item.type == "Mobile") {
        return { ...item, price: item.price * 2 };
      }
  
      return item;
    });
  };
  
  console.log(doublePrice(product));
  // calculate total mobile price
  
  const totalPrice = (product) => {
    const filterMobile = product.filter((item) => {
      if (item.type == "Mobile") {
        return item;
      }
    });
  
    const totalPrice = filterMobile.reduce((acc, val) => {
      return acc.price + val.price;
    });
  
    return totalPrice;
  };
  
  console.log(totalPrice(product));
  
  // remove duplicate numbers
  
  const arr = [
    1, 2, 2, 3, 4, 5, 6, 7, 3, 4, 4, 6, 1, 2, 3, 4, 5, 6, 7, 3, 4, 4, 6,
  ];
  const removeDuplicate = (arr) => {
    let obj = {};
    let result = [];
    let duplicates = [];
  
    for (let i = 0; i < arr.length; i++) {
      if(!obj[arr[i]]){
          result.push(arr[i])
      }
      else{
          duplicates.push(arr[i])
      }
      // obj[arr[i]] = (obj[arr[i]] || 0) + 1;
      obj[arr[i]] =true
    }
    return result;
  };
  
  console.log(removeDuplicate(arr), "remove duplicates");
  
  let number = 12345678;
  
  const sumDigits = (number) => {
    let arr = number.toString().split("").map(Number);
    return arr.reduce((acc, val) => {
      let sum = acc + val;
      if (sum > 10) {
        return sumDigits(sum);
      }
      return sum;
    });
  };
  
  console.log(sumDigits(number));
  
  // compute the exponentianal using recursion
  
  const exponential = (val, exp) => {
    if (exp === 0) {
      return 1;
    }
  
    return val * exponential(val, exp - 1);
  };
  
  console.log(exponential(2, 3));
  // 2* 8
  // 2* 4
  // 2* 2
  // 2* 1
  
  /* from unsortedarray , check whether are there any two number that will sum up to a given number */
  // any two number is sum of sorted numbers
  
  const findSum = (arr, sum) => {
    let obj = {};
  
    let diff;
    for (let i = 0; i < arr.length; i++) {
      diff = sum - arr[i];
  
      if (obj[diff]) {
        return true;
      }
      obj[arr[i]] = true;
    }
  };
  
  console.log(findSum([5, 2, 3, 7], 12));
  
  // reverse a string
  
  let str = "welcome to js interview";
  
  const reverseString = (str) => {
    let space = str.split(" ");
    let result = "";
    for (let i = space.length - 1; i >= 0; i--) {
      result += space[i] + " ";
    }
    return result;
  };
  
  console.log(reverseString(str));
  
  // find missing number
  //[1,2,3,5]// array is in series order
  const missingNumber = (arr) => {
    let result = 0;
    let n = arr.length + 1;
    total = (n * (n + 1)) / 2; // will be the total time
    for (let i = 0; i < arr.length; i++) {
      result += arr[i]; // will give total of inout array
    }
    return total - result;
  };
  
  console.log(missingNumber([1, 2, 3, 5, 6]));
  
  let str1 = "hellow how are you";
  
  // console.log([str1]);
  console.log(str1.split(" "));
  console.log([...str1]);
  
  // replace character
  
  console.log(str1.replace("h", "e"));
  console.log(str1.replace(/h/g, "e"));
  
  console.log(str1.substring(6, 10));
  console.log(str1.substring(0, str.length));
  
  console.log(str1.substring(1, str.length - 1));
  console.log(str1.substring(0, str.length - 1));
  
  let arr21 = [1, 2, 3, 4, 5, 6, 7, 8];
  
  for (let i = arr21.length; i > 0; i--) {
    arr21.push(i);
  }
  arr21.splice(0, arr21.length / 2);
  
  console.log(arr21);
  
  // let arr= [1,2,3,4,5,6,7,8]
  // for (let i=arr.length; i>0; i--){
  //  arr.push(i)
  // }
  //   arr.splice(0,arr.length/2)
  
  
  // console.log(arr)
  
  
  let reverse= [1,2,3,4,5]
  
  for(let i=reverse.length; i>0; i--){
      reverse.push(i)
  }
  reverse.splice(0,reverse.length/2)
  
  console.log(reverse);
}