// async function gitdata(){
    
// const name = await fetch("https://www.breakingbadapi.com/api/characters");
// console.log(name);
// const data= await name.json();
// console.log(data);
// for(let i=0; i<data.length;i++){
// let x = document.write("name is:"+data[i].name);
// document.getElementById("name").innerHTML=x;
// document.write("<img src=" + data[i].img+">")
// }
// }
// gitdata();

async function imagechanger(){
const name= await fetch("https://www.breakingbadapi.com/api/characters")
console.log(name);
const data=await name.json();
console.log(data);

for(let i=0; i<data.length;i++){

document.getElementById("select").innerHTML +=`<option value="${data[i].img}">${data[i].name}</option`;

    }
}
imagechanger();


function change(){
    let selected = document.getElementById('select').value;
    document.getElementById('img').src = selected;
    
}

