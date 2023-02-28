// swap two number withou third variable

const swapNo = (a, b) => {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(a, b);
};

console.log(swapNo(2, 4));

const checkpalindrome = (num) => {
  let arr = num.toString().split("").map(Number);
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] == arr[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};
console.log(checkpalindrome(12321));

const checkArmstrong = () => {};

console.log(checkArmstrong());

// oobs in js
// objects

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw function is called");
  },
}; // reer to oject literals

circle.draw();

// factories

// object litral is not goo dway to copy ansd pasted
// better use factories

function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw factory ids called");
    },
  }; // reer to oject literals
}

console.log(createCircle(1));

// construcotr

class Circle {
  constructor(radius) {
    this.radius = radius;
    this.draw = function () { 
      console.log("draw inside the constructor");
    };
  }
}
let con = new Circle(1);
// new will create an ampty object when this is refered to that function as constructor function
// else it will get error

con.draw();
// console.log(Circle(1));

/// constructor property

// const conp= new Circle(1)

// when we crete an pobject literal using sintax

// js internally create a new object constructor function

// new String(); //"", ''
// new Boolean();// true, false

// con.call({},1)

/////////////////////////////////////////////////////////////

// value and reference type

// value types
/* number , string boolean symbol undefied null

reference types => object function array */

let x = 10;
let y = x; // x copied

// x=20 // x is 2owhile  y ois 10

x.value = 20;

// primitive are copied by their vlaue
// object are copied by reference
let number = 10;
let obj = { value: 10 };
function increment(obj) {
  //  number++//
  //  console.log(number);
  obj.value++; // we increemrnt the reference of obj
}
// its vlaue is copiend in function
// after the function this number go out of scope
console.log(increment(obj));

// addinf and removing properties

const circle3 = new Circle();
circle3.location = { x: 1 };

const setMethod = (arr, num) => {
  let s = new Set(arr);
  s.add(10);
  // return s
  if (s.has(num)) {
    return s.values(num);
  } else {
    return false;
  }
};
console.log(setMethod([1, 2, 3, 4, 4, 4, 5, 6], 4));

// const circle3= new Circle(10)
for(let key in circle3) {
  if(typeof circle3[key] !=='function'){
    console.log(key, circle3[key]);
  }
}

const keys= Object.keys(circle3)
console.log(keys);

// abstraction 



