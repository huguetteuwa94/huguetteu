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