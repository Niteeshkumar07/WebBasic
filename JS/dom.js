// console.log(document);

let h1data = document.getElementById("h1") // excepts string
console.log(h1data);
h1data.style.background="green";

let para = document.getElementsByClassName('para');
console.log(para);
console.log(Array.isArray(para));

//how to convert html collection into array
NewPara=Array.from(para);
console.log(Array.isArray(NewPara));

NewPara.forEach((element,index)=>{
    if(index%2==0){
        element.style.color="red";
        element.style.background="pink";
    }
})