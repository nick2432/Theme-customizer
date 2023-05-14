import React,{useEffect, useState} from 'react'
import './chat.css'
import {useNavigate} from 'react-router-dom';
import Imageupload from './imageupload.js'
import SendIcon from '@mui/icons-material/Send';
export default function Chat(props) {
  const [ask, setask] = useState('')
  const navigate=useNavigate();
  const goto=()=>{
    navigate('/login')
  }
  const goto1=()=>{
    var div = document.getElementById('l');
    var p = document.createElement('p');
    p.style.backgroundColor = `${props.changecolor}`;
    p.id='p';
    p.textContent = ask;
    div.appendChild(p);
  }
 setTimeout(() => {
  var div = document.getElementById('firstm4');
  var div1 = document.getElementById('msg2');
  div.style.display="inline-block";
  div1.style.display="inline-block";
 }, 500);
 setTimeout(() => {
  var div = document.getElementById('firstm6');
  var div1 = document.getElementById('msg3');
  div.style.display="inline-block";
  div1.style.display="inline-block";
 }, 1200);
 setTimeout(() => {
  var div = document.getElementById('firstm8');
  var div1 = document.getElementById('msg4');
  div.style.display="inline-block";
  div1.style.display="inline-block";
 }, 1800);
  return (
    <div id='l' style={{color:'#000'}}>
      <Imageupload/>
      <button id='btn2'
       type='button'onClick={goto} style={{backgroundColor:`${props.changecolor}`,color:`${props.txtcolor}`}}> <h className='txt'>Logout</h>
       </button>
       <button id='btn3'
       type='button' onClick={goto1}  style={{backgroundColor:`${props.inputcolor}`}} > <SendIcon/>
       </button>
       <input className='inputBox3'type='text'  style={{backgroundColor:`${props.inputcolor}`,color:`${props.txtcolor}`}} placeholder='Enter message' onChange={(e) => setask(e.target.value)}/>
      
      <div id='firstm2'style={{backgroundColor:`${props.inputcolor}`}} ></div>
      <div>
      <div id='msg1'>Hi there! 👋</div>
      </div>
     
      <div id='firstm4'style={{backgroundColor:`${props.inputcolor}`}} ></div>
      <div>
      <div id='msg2'>I'm Wysa - an AI chatbot built by <div>therapists.</div></div>
      </div>
      <div id='firstm6'style={{backgroundColor:`${props.inputcolor}`}}></div>
      <div>
      <div id='msg3'>I'm here to understand your <div>concerns and connect you</div> <div>with the best resources</div><div>available to support you.</div></div>
      </div>
      <div id='firstm8'style={{backgroundColor:`${props.inputcolor}`}} ></div>
      <div>
      <div id='msg4'>Can I help?</div>
      </div>
    </div>
    
  )
}
