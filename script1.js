
// function arthmetic(a,b){
//     console.log(a+b)
//     console.log(a-b)
//     console.log(a*b)
//     console.log(a/b)
//     console.log(a%b)
// }
// arthmetic(10,20)
// arthmetic(90,100 )


// expression , function declaration


// you can update var variable

// var g  = 10;
// console.log(g)
// g=20
// console.log(g)

// // program 1
// console.log(y) // undefined
// var y = 10
// console.log(y) // 10


// hoisting??
// console.log(r) //undefined
// var r = 900
// console.log(r) //900


// representation
// var r            //--undefined
// console.log(r)
// r = 900
// console.log(r)   //900


// console.log(g) //can not acces g befor intialization
// let g = 900
// console.log(g) //error();

// console.log(i) //cannot access i befor initialization/  and u cannot update const variable
// const i  = 900
// console.log(i)


// program 2
// addition()          // function ko kahi bhi call karo run hoga hi
// function addition(){
//     console.log("hello")
// }


// program 3
// add()   //add variable is not yet assigned to a function thats why error found add is not a function
// var add = function(){
//     console.log("addition")
// }
// // add()

// addition is not a function
// var add
// add()
// add = function(){
//     console.log("addition")
// }
// add()

// program 3
// sub()         //cannot access 'sub' before initialization
// let sub = function(){
//     console.log('subtractio')
// }



// var:---
// Function-scoped or globally scoped (not block-scoped).
// Hoisted to the top of the function or global context, meaning you can use the variable before it's declared.
// Allows redeclaration and reassignment.

// var x = 10;
// if (true) {
//     var x = 20;
//     console.log(x); // Outputs 20
// }
// console.log(x); // Outputs 20


// let:------
// Block-scoped: It is limited to the block, statement, or expression where it is defined.
// Not hoisted to the top of the block, so you cannot use the variable before the declaration.
// Allows reassignment but not redeclaration within the same block.

// let y = 30;
// if (true) {
//     let y = 40;
//     console.log(y); // Outputs 40
// }
// console.log(y); // Outputs 30



// const:----
// Block-scoped.
// Not hoisted.
// Requires an initial value and cannot be reassigned.
// const z = 50;
// z = 60; // Error: Assignment to constant variable


// function add(){
//     const x = 10
//     console.log(x)
    
// }
// const x=20
// console.log(x) //---20
// add() //--10