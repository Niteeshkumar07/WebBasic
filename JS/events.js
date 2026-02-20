// let btn = document.getElementById("btn");
// let btn1 = document.getElementById("btn1");

// btn.addEventListener('click',()=>{
//     document.body.style.background="blue";
// })

// btn1.addEventListener('click',()=>{
//     document.body.style.backgroundColor="cyan";
// })

let input = document.getElementById("input");
console.log(input);

input.addEventListener("input", (ele) => {
  let inputValue = ele.target.value;
  console.log(inputValue);

  if (inputValue == "red") {
    document.body.style.background= "red";
  } else if (inputValue == "yellow") {
    document.body.style.background="yellow";
  }
  else {
    document.body.style.background = "white";
  }
});
