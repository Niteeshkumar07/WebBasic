// function add(){
//     console.log(10+20);
// }

// add()

// function add(a,b){
//     return (a,b); //return not return two values
// }

// console.log(add(10,20));

// function add(a,b){
//     return {a,b}; // return as objects with two values
// }

// console.log(add(10,20));



// let Demo=()=> console.log("hello");
// Demo();

// let fghu=()=>{
//     return 'hiop';
// }
// fghu();





function Callback(name){
    return `hi ${name}`;
}

function higher(name,Callback){
    return Callback(name);
}
console.log(higher("niteesh",Callback));