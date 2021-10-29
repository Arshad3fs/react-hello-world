// var a = 10;
// console.log(a);
// if(true){
//     var a = 20;
//     console.log(a)
// }

// console.log(a);

// var b = 10;
// console.log(b)
// function walk(){
//     var b = 20;
//     console.log(b)
// }
// walk();
// console.log(b);

// var a = 10;
// if(true){
//     let a = 20;
//     console.log(a)
// }
// console.log(a)

// const c = 10;
// console.log(c)
// c = 20;

/**
 * Default params
 */
// function defaultParams(a, b, c){
//     if(!a)
//         a = 0;
//     if(!b)
//         b = 0;
//     if(!c)
//         c = 0;
//     console.log(a, b, c)
// }

// defaultParams()

// function defaultParamsWithEs6(a=0, b=0, c=0){    
//     console.log(a, b, c)
// }

// defaultParamsWithEs6(2, 4, 5, 6, 7, 8);
// defaultParamsWithEs6();

/**
 * Rest Params
 */
// function restParams(a, b, c, ...d){
//     console.log(a, b, c, d)
// }
// restParams(1, 2, 3);
// restParams( 4, 5, 6, 7, 8, 9);
// restParams( 4);

/**
 * Spread Operator
 */
// function spreadOperator(a, b, c, ...d){
//     // console.log(a, b, c, d)
//     const newArr = [ a, b, c ];
//     d.forEach(element => newArr.push(element))
//     console.log(newArr)
//     // With Array
//     const newArrUsingSpreadOperator = [a, b, c, ...d];    
//     console.log(newArrUsingSpreadOperator)
//     // With Object
//     const obj = { student: "Mehboob", studying: "BSC" };
//     const addr = { home: "Settipalli", state: "AP"};

//     const student = {student: obj.student, studing: obj.studying, home: addr.home, state: addr.state} ;
//     console.log(student)

//     const student1 = { ...obj, ...addr };
//     console.log(student1)
    
// }
// spreadOperator( 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);

/**
 * Destructuring
 */
// with objects
const obj = { student: "Mehboob", studying: "BSC", home: "settipalli", state: "AP" };
// const student = obj.student;
// const studying = obj.studying;
// const home = obj.home;
// const state = obj.state;
// console.log(student, studying, home, state);
// with ES6
// const { student, studying, home, state, gender } = obj;
const {student: name , studying, home, state, gender } = obj;
console.log(name, studying, home, state, gender);

// with Arrays
const arr = [1, 2, 3, 4, 5];
const [a, b, c] = arr;
console.log(a, b, c)


