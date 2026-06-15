//let
let name="Nancy"
console.log(name);

//const
const pi=3.14
console.log(pi);

//template literals
let age=24
console.log(`my name is ${name} my age is ${age}`);

//object
let person=
{
      name : "Nancy",
      clg : "vetias"

}
console.log(person);

//destructing
const student={
      a : 24,
      gender : "female"
}
const{a,gender}=student
console.log(student);


//arrow function
let add = (a,b) => a+b;
console.log(add(10,2));

//array
let fruits=["apple","mango","kiwi"]
console.log(fruits);

//spread operator
const updatedfruits=[...fruits,"orange"]
console.log(updatedfruits);

//rest operator
function maximarks(...marks)
{ 
      let max = Math.max(...marks)
      return max
}
console.log("maximarks:",maximarks(80,90,70,75) );
