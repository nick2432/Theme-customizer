import React,{useEffect, useState} from 'react'
import './login.css'
import {useNavigate} from 'react-router-dom';
export default function Login(props) {
  const navigate=useNavigate();
  const [email, setEmail] = useState(localStorage.getItem("email") || undefined)
  const [password, setPassword] = useState(localStorage.getItem("password") || undefined)

const handleFormChange = (event) => {
  setEmail(event.target.value)
  localStorage.setItem("email", event.target.value );
}
const handleFormChange1 = (event) => {
  setPassword(event.target.value)
  localStorage.setItem("password", event.target.value );
}
const goto=()=>{
  console.log(email.endsWith('@gmail.com'),"nikhil bhai");
  if(password==='' || email===''){
   alert('not valid');
  }
  else if(password.length<5){
    alert('password is to short');
  }
 
  else if(email.endsWith('@gmail.com')===false){
    alert('email is not valid');
  }
  else{
    navigate('/chat')
  }
}
  return (
    <div>
      <form>
       <input className='inputBox2'type='text'  style={{backgroundColor:`${props.inputcolor}`}} placeholder='Enter email'value={email}onChange={(e) => handleFormChange(e)}/>
      <input className='inputBox1'type='password' style={{backgroundColor:`${props.inputcolor}`}} placeholder='Enter password'value={password}onChange={(e) => handleFormChange1(e)}/>
      <button id='btnl' onClick={goto} style={{backgroundColor:`${props.changecolor}`}} type='button'><h className ='txtl'>Login</h></button>
      </form>
    </div>
  )
}
