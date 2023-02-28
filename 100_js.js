// 100 js questions

// /////////////////1= question 1 // test

// let a=[]

// let b=[]
// console.log(a==b, "1");// output will be false
// when we compare two array as above then it will be compared the memory of location and both will have different memory location

//  ///////////////////////////////2=

// let a1=[]

// let b1=a1

// console.log(a1==b1, "2");
// now we has allocare a to b and momory location is saved

///////-----------------   3 ---------------/////////

// let a2=[23]
// let b2= [23]

// console.log(a2[0]==b2[0], "3");
// now we are compare the array of position 0 because we had specified memory

/////////-----------------4----------------/////////////

let z = [1, 2, 3];

let a3 = { name: "salman" };
console.log(...z); // spread operators will destructure
/// output will be 1 2 3 and thennumnber will be aoutsize from array

////////--------5 -----------//////////
//NaN not a nunmber // a is small

console.log(typeof z); // it is a special type of number but its a number not string

////--------------6------------////////////////////

let data = 10 - -10;
// minus minus 10
console.log(data);

//// ------------7-------------//////////////////

// set
// let set = new Set(1,1,3,4);

// console.log(set);

// set will remove the duplicate value

////------------8-------//////////////

let data2 = { name: "foo", name1: "foo" };
console.log(delete data2.name); // will delete
console.log(data2);

/////-----------9-----------/////

let data3 = { name: "salman" };

// console.log(delete data3);
// false data cannot be deleted any object can be deleted

/////------------10---------////////////

const data4 = ["peter", "england", "lewis"];

const [y] = data4;
// if variable is around bracket then it will consider first element

// if we want first element =[y]
// for second element [,y] or y=data4[1]
// console.log(y);

//////////---------------11----------////////////////////////////////
const data5 = { name1: "salman", age: "khan" };
const { name1 } = data5;
// this way we can get the pro[erties from object
console.log(name1);

//////////////////-------12------////////////////

let data6 = { name: "salman", age: "24", skill: "js" };
let info = { city: "indore", state: "mp" };

let data7 = { ...data6, ...info };
// without ... data6 will be created as internal object
// spread opeartor will merge the value is called destructure

console.log(data7);

/////////////========13======//////////////

let data8 = { name: "salman", age: "24", skill: "js" };
let info1 = { city: "indore", state: "mp", skill: "angular" };

console.log({ ...data8, ...info1 });
// now we will get skill of second as itis updated

// object cannot have copied properties
///////////////////////----14------///////////

const name12 = "salman";

//console.log(name12());// error name12 is not a function

//////////////======15=========/////////////

const object6 = false || {} || null;

console.log(object6);
// because || or operator will consoider first true vlaue or positive vlaue

/////////////========16=======/////////////////////////

const empty = null || false || "";

// " is a flase value "
// and it will take the last value
// ==========17========/////////////

console.log(Promise.resolve(5));

/// promise fullfilled

//////// ========18========////////

console.log("234234" === "234234");

// will return uincode true
///============19============/////////

// JSON.parse();

// JSON will conver it into js vlaue

///// ===========20 ///////////

// let scope is blocklevel {}

///////////========21======/////////

console.log(`${((x) => x)("i love ")} to programe`);

// template literal will have a arrow gunction and will return arrow

/////////=======22==========///////////

function sumValues(x, y, z) {
  return x + y + z;
}
console.log(sumValues(...[1, 2, 3]));
// ... will destrucutre the array

///==========23============///////////

const name34 = "code step by test";

console.log(!typeof name34 === "object");
console.log(!typeof name34 === "string");

// it will frow from left to right and
// first it has set to flase and false will be comared to string whic is also false

/////////=======24=========////////

const name21 = "salman";
const age23 = 12;

console.log(isNaN(name21));
console.log(isNaN(age23));

/////////////////////==========25========/////

let person = { name: "salman" };
Object.seal(person);
// Object.seal will prevent from modification or adding new key

console.log((person.name = "asas"));

/////////-=======26======///////

let data56 = [1, 2, 3, 4, 5];
data56.shift(); // will remove forst element
data56.pop();
console.log(data56);

//////////=========27===========//////////

let a12 = 31;

console.log(a12 % 2);
// 0 will say itids even number
// 1 will say the remaimder and it is odd

/////////////=========28===========//////

let datadf = {
  name: "salman",
};
console.log(delete datadf.name);

////////////////==========29===========////////////////

let data78 = "salman";

console.log(typeof !data78);

//===============30-------///////////

// map vs foreach 

// map always return something but foreach return nothing

// for each return nothing

//=============> 35=//////////=>

{
  let data = ["anil", "peter", "bruce"];
  console.log(delete data[1]);

  console.log(data);
  //['anil', empty, 'bruce']
}

// mergge two array

{
  let a = [1, 2, 3, 4, 5];
  let b = [2, 3, 4, 5, 6];
  let c = [...a, ...b];
  console.log(c);
  //[1, 2, 3, 4, 5, 2, 3, 4, 5, 6]
}
//
{
  // js variable should not start with name numneric
}
//
{
  let a = "like";
  let b = "like";
  console.log(a === b); // true
}
{
  let a = 2;
  let b = 1;
  console.log(--a === b);
  //true
}
{
  let a = 1;
  let b = 1;
  let c = 2;
  console.log((a == b) == --c);
  // a==b=>true
  // (true === --c)// false
}
{
  console.log(3 * 3);
  console.log(4 ** 3);
  console.log(3 * 3);
}
{
  // console.log(a);

  let a;
  //undefined
}
{
  // console.log(a);
  // notdefined
}
{
  console.log([[[[]]]]);

  //nested array
}

{
  // navigator.platform
}

{
  // let for=100
  // for is  ewserve keyword
}
{
  console.log(a); // undefined
  // console.log(b);// hoisitng issue> error
  var a = "apple";
  let b = 20;
}

{
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      // console.log(i);
    }, 1);
  }
  // 3 3 3
}
{
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      // console.log(i);
    }, 2);
  }
  // let scope is block level
  // every settimout different i value gavess
}
{
  console.log(+false);

  console.log(typeof (12 + "dfdf"));

  let a = "21adfg32";
}

// typr of and instrance of is used to determine datatype of variable in

{
  a = "21323";

  let c = 233;
  let b = new String(4354543); // will convert to string and it will convert to abject
  // it sa unary operatotr
  console.log(typeof b);
  console.log(b);

  // instance of isa binary operator

  console.log(a instanceof String);
  // instance of n=doesnot work on primitove datatupes

  console.log(typeof typeof c);

  let date = new Date();
  let date1 = new Object();
  let date3 = new Array(4);
  console.log(date);
  console.log(date1);
  console.log(date3);
}
{
  let data = "size";
  let value = "big";
  const bird = {
    size: "small",
    big: "medium",
  };
  bird[value] = 34;

  console.log(bird[data]); // data have the size word
  console.log(bird[value]);
  // we have to use [ ] to get the property of object
  console.log(bird["size"]);
  console.log(bird["big"]);
  console.log(bird.size);
  console.log(bird.data); // we no have property pof data
}

{
  let c = { name: "salman" };

  let d = c;
  c.name = "khan";
  console.log(d.name);
}
{
  var x;
  var x = 10; // we can redclare x in var
  console.log(x);
  // let x=10// we cannot dec;lare x to var and let
  // console.log(x);
}
{
  let a = 3;
  let b = new Number(3);

  console.log(a == b);
  console.log(a === b);
}
{
  let a;
  a = {};

  console.log(a);
}

{
  const fruit = () => {
    return "woof";
  };

  fruit.name = "apple";

  console.log(fruit());
}

{
  const fruit = (a, b) => {
    return a + b;
  };

  console.log(fruit(1, "2"));
}

{
  let number = 0;
  console.log(number++);
  console.log(++number);
  console.log(number);
}
{
  function getargs(...arr) {
    console.log(arr);
    console.log(typeof arr);
  }
  getargs(23);
}
{
  function string() {
    `use strict`;
    a = 23;
    console.log(a);
  }
  string();
}
{
  let a = eval("10*10+5");
  console.log(a);
  // will evaluate the sgringf to expression
}
{
  // session storage
  // will remove when a tab is clossed
  // local strograge
  // will habve utial
}
{
  let a = { a: 12, b: 12, a: "wer" };
  console.log(a);
}
{
  for (let i = 0; i < 5; i++) {
    if (i === 3) {
      continue;
    }
    console.log(i);
  }
}
{
  const foo = () => console.log("foo");
  const bar = () =>
    setTimeout(() => {
      console.log("bar");
    }, 0);
  const baz = () => console.log("baz");

  foo();
  bar();
  baz();
}
{
  const person = { name: "anil" };

  function say(age) {
    return `${this.name} is ${age}`;
  }

  console.log(say.call(person, 21));
  console.log(say.bind(person, 21));
}
{
  function sayhi() {
    return (() => 0)();
  } // 0  is return when return is called
  console.log(typeof sayhi());
}

{
  function say() {
    return () => 0;
  }

  console.log(typeof say());
}
{
  console.log(typeof typeof 1);
}
{
  const number = [1, 2, 3];

  number[6] = 11;

  console.log(number);
}

{
  const number = [1, 2, 3, 4];

  number[5] = number;

  console.log(number);
  // will have infinite arrrya on 5
}
{
  // every thing in java is
  //  primitive or object
}

{
  console.log(!!null);
  console.log(!!"");
  console.log(!!1);
}

{
  // console.log(
  //   setInterval(() => {
  //     console.log("hii");
  //   }, 1000)
  // );
  // console.log(
  //   setInterval(() => {
  //     console.log("hii");
  //   }, 1000)
  // );
  // console.log(
  //   setInterval(() => {
  //     console.log("hii");
  //   }, 1000)
  // );


  // first they will return an id then the opewration will work
}

{
  let a="salman"
  let b=[...a]
  console.log(b);
}

{
  const first= new Promise((res,req)=>{
    // setTimeout(res, 500,'one');
  })
  const second= new Promise((res,req)=>{
    // setTimeout(res, 40,'tne');
  })

  Promise.race([first,second]).then(res=>{console.log(res);})

  console.log(first);
}
{
  let person={ name: 'John'}
  const id=[person]

  person=null
  console.log(id);

}{

  let obj={ 
    name:'salman',
    age:'23'
  }

  for(let key in obj){
    console.log(obj[key]);
  }
}

{
   let a= 3+ 7+'5'
   console.log();

   let b=[...a]
   console.log(b);
}
{
  console.log(4 + 4 + + 4);
  //12 => plus will convert string to number
}
{
  console.log([]==[]);
  //two array have different memory location
}

{
  let a =[1,2,4].map(num=>{
    if(typeof num === 'number'){
      return 
      // undefied
    }
    return num*5
  })
  console.log(a);
}

{
  function getInfo(obj){
    obj.name='khan'
  }
// when in js we pass object we call it by reference
// it memory location is changed 
  const p={name: 'salman'}

  getInfo(p)

  console.log(p);
}
{
  (()=>{
    let j= k=10
  })();

  console.log(typeof k);
}
{
  let x=100;
  (()=>{
    var x=10
  })()
  console.log(x);
}
{
  console.log(!true -true);
}

{
  console.log(true + + '10');
  let a='10'
  console.log(+a);
}

{
  function spread(num3){ 
    // num3= num3.toString().map(Number)
  //  num3= num3.toString()
  num3=[...num3];
    return [...num3]
  }
  // console.log(spread('angular'))
  console.log(spread("sdsadsadsa"))
  // we can use spread operator
  // cannot ise strict in function
  
  function rest(...rest){
    // will combine all in one array 
    // ... rest poerator is used to comnile rest operator  in a singlearray
    return rest    
  }

  console.log(rest(1,2,3,4,5,6,7));
}
