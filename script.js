

function submit(){

const fullname=document.getElementById('fullname').value  
const email= document.getElementById('email').value
const password= document.getElementById('password').value




localStorage.setItem('fullname',fullname);
localStorage.setItem("email", email);
localStorage.setItem("password", password);



}



function login(){

  const log_mail= document.getElementById('log_email').value

  const log_password= document.getElementById('log_password').value

let maildata=(window.localStorage.getItem('email'))
let passdata=(window.localStorage.getItem('password'))


if( log_mail === maildata && log_password  === passdata){
  alert('you can proceed')
}else{
  alert('wrong information')
}
}
