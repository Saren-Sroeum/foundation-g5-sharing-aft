// if(true){
//     let block = "block scope";
//     var func = "Function scope"; 
// }
// console.log("func",func);   

const heading = document.getElementById("htitle");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    heading.style.color = "red";
    heading.textContent = "Go off";
});