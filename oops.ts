// what is oops in ts

// ts do not execute on browser
// in ts oops is verry easy
// in big project opps benefits

//  what are class and object in ts

// a class a logical unit
// we have a to create a instance of class
// classes are the blue print of individual object
// object are the class  instance of class
class Person {
  name: string;
  age: number;

  familyCount() {
    return 6;
  }
}

var objPerson = new Person();
let myName = (objPerson.name = "salman");
let myAge = (objPerson.age = 24);

let countFamily = objPerson.familyCount();
console.log();

// what is a constructor in angular

// contrucot is a method which called when class in being initialed

// cosntruct is called before any lifecycle hook

// constructor is widely used to inject dependncy injection

class Employee {
  _empId: number;
  empName: string;
}

let objEmployee = new Employee();
objEmployee._empId = 10;
console.log(objEmployee._empId);

// we should follow oops

//encapsulation provides helping insecuroity helpa in data to field

// inheritance in ts  it isfocus oin resulability of code

class Employee1 {
  private _empId: number;
  empName: string;

  getEmpId(empId: number) {
    if (empId < 0) {
      console.log("id cannot be greater ten 0");
    } else {
      this._empId = empId;
    }
  }
}

let empId = new Employee1();
empId.getEmpId(-10);

//if employee1 is acessable outide then itis a seciruty breach
// private key workd

// emcapsulation  is wrapping of data into function so that it cannoot be directlyu acessed outside
class Animal{
  eat(){}
  sleep(){}
}
class Dog extends Animal{
  
  bark() {}
}

class cat extends Animal{
  meow() {}
}

let cat1= new cat();
 cat1.sleep()
// oinheritance is a featiure where derived class acure the propertuy of the method of main class
 
// what is interface in ts why we use them in ts

let age:number;// it will only aceept numner

interface IEmployee{
  Role(): void 
}

class PermanentEmployee implements IEmployee{
  Role(){
    console.log('lead');
    
  }
}
// it will not accept othert then type defined
// to maintein the consistnecy we use interface 
// implements definthe the the method should be mandatory in 
class contractRole implements IEmployee{
  Role(){
    console.log('develoiper');
  }
}
//  it also define the type iof class 
// it act as a contract which every class has to impleents

