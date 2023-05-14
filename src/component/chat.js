import React,{useEffect, useState} from 'react'
import './chat.css'
import {useNavigate} from 'react-router-dom';
import Imageupload from './imageupload.js'
import SendIcon from '@mui/icons-material/Send';
export default function Chat(props) {
  const [ask, setask] = useState('')
  const navigate=useNavigate();
  const goto=()=>{
    navigate('/')
  }
  const goto1=()=>{
    var div = document.getElementById('l');
    var p = document.createElement('p');
    p.style.backgroundColor = `${props.changecolor}`;
    p.id='p';
    p.textContent = ask;
    div.appendChild(p);
  }
  useEffect(()=>{
    setTimeout(() => {
      var div1 = document.getElementById('msg1');
      div1.style.display="inline-block";
      div1.className='msg2';
     }, 500);
     setTimeout(() => {
      var div1 = document.getElementById('msg1');
      div1.style.display="inline-block";
      div1.id='msg2';
     }, 1000);
     setTimeout(() => {
      var div1 = document.getElementById('msg1');
      div1.style.display="inline-block";
      div1.id='msg2';
     }, 1500);
  },[])

  return (
    <>
    <div id='l' style={{color:'#000'}}>
      <Imageupload/>
      <button id='btn2'
       type='button'onClick={goto} style={{backgroundColor:`${props.changecolor}`,color:`${props.txtcolor}`}}> <h className='txt'>Logout</h>
       </button>
      <div className='msgbox'>
      <div id='msg2' style={{backgroundColor:`${props.inputcolor}`}} >Hi there! 👋</div>
      <div id='msg1' style={{backgroundColor:`${props.inputcolor}`}} >I'm Wysa - an AI chatbot built by <div>therapists.</div></div>
      <div id='msg1'style={{backgroundColor:`${props.inputcolor}`}} >I'm here to understand your <div>concerns and connect you</div> <div>with the best resources</div><div>available to support you.</div></div>
      <div id='msg1' style={{backgroundColor:`${props.inputcolor}`}}>Can I help?</div>
      </div>
     
    </div>
    <div className='sndmsg'>
      <input className='inputBox3'type='text'  style={{backgroundColor:`${props.inputcolor}`,color:`${props.txtcolor}`}} placeholder='Enter message' onChange={(e) => setask(e.target.value)}/>
      <button id='btn3'
      type='button' onClick={goto1}  style={{backgroundColor:`${props.inputcolor}`}} > <SendIcon/>
      </button>
      </div>
    </>
  )
}
