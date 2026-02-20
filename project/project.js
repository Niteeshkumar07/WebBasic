let nav=document.createElement("nav");
document.body.append(nav);

let ul=document.createElement("ul");
nav.append(ul);

let li=document.createElement("li");
ul.append(li);
li.textContent="Home";

let li1=document.createElement("li");
ul.append(li1);
li1.textContent="About";    

let li2=document.createElement("li");
ul.append(li2);
li2.textContent="Contact";  

let btn=document.createElement('button');
btn.innerHTML='<i class="fa-solid fa-sun"></i>';
nav.append(btn);

async function data(){
    let data = await fetch("https://api.escuelajs.co/api/v1/users");
    // console.log(data);

    let newData = await data.json();
    console.log(newData);

    let div = document.createElement("div");
    document.body.append(div);

    newData.forEach((element)=>{
        let subdiv= document.createElement("div");
        div.append(subdiv);

        let img=document.createElement("img");
            img.src=element.avatar;
            subdiv.append(img);

        let h2=document.createElement("h2");
        h2=element.login;
        subdiv.append(h2);

    });
}
data();
btn.addEventListener("click",()=>{
    document.body.classList.toggle("btnClr");
})


