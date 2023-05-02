//let a=5
//let b=5
 //let sum=a+b
 //console.log(sum)
// for (var i =0; i<= 10; i ++) {
//     console.log(i)
// }
// function Time(pm,am){
//     return pm ,am;
    
// }console.log(Good Morning(am));
// console.log(Good Afternoon(pm));
// console.log(Good Evening(pm));

//var btn= document.getElementById("btn");
//btn.addEventListener('click',(e)=>{
    //e.preventDefault();
//var one = parseInt(document.getElementById("one").value);
//var two = parseInt(document.getElementById("two").value);
//var sum=one+two;
//console.log(sum);
//})
//function sum(){

//}
// tm.addEventListener('click',() => {
//     var hr = parseInt(document.getElementById("time").value);
// if (hr>=5 && hr <12) {
//     alert('Bonjour');
// }
// else if (hr >= 12 && hr <18){
//     alert('Bonne-apres midi');
// }
// else 
//      alert('Bonsoir');
// })
// var MyDiv = document.getElementById("root");
// var p = document.createElement("p");
// p.innerHTML="Huguette"

// MyDiv.append(p);
// var btn = document.getElementById("btn-1");
// var nav = document.getElementById("nav");
// btn.addEventListener("click",(e) => {
//     e.preventDefault();
//     if(nav.visibility == "visibile") {
//         nav.visibility == "hidden";
    
//     }
//     else{
//         nav.style.visibility == "visible";
//     }
// })
// const btn = document.getElementById('btn');
// var email = document.getElementById("email");
// var password = document.getElementById("password");
// btn.addEventListener('click',(e) => {
//     e.preventDefault();
//     var email_value = document.getElementById("one").value;
//     var length = email_value.lenght;
//     if(lenght<6){
//         email.classList.add("active");
//     }
// })
// const btn = document.getElementById('btn');
// var email = document.getElementById("email");
// var password = document.getElementById("password");

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     var email_value = document.getElementById('one').value;
//     var length = email_value.length;
//     if(length < 6) {
//         email.classList.add("active");
//     }
//     if(length < 8){
//         password.classList.add("active");
//     }
// })
// var one = document.getElementById("one");
// var label = document.getElementById("label");
// var msg = document.getElementById("msg");
// function validateEmail(){
//     if(!one.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
//         msg.innerHTML = "Please enter a valid email";
//         return false;
//     }
//     msg.innerHTML = "";
//     return true;
// }
const btn = document.getElementById('btn');
var email = document.getElementById("email");
var password = document.getElementById("password");

btn.addEventListener('click', (e) => {
    e.preventDefault();
    var email_value = document.getElementById('one').value;
    var length = email_value.length;
    if(length < 6) {
        email.classList.add("active");
    }
    if(length < 8){
        password.classList.add("active");
    }
})
var one = document.getElementById("one");
var label = document.getElementById("label");
var msg = document.getElementById("msg");
function validateEmail(){
    if(!one.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        msg.innerHTML = "Please enter a valid email";
        return false;
    }
    msg.innerHTML = "";
    return true;
}