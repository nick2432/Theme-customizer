import React,{useEffect, useState, useRef} from 'react'
import './header.css'
import { ChromePicker } from 'react-color'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ClassNames } from '@emotion/react';
export default function Header(props) {
  const [change,setchange]   = useState(false);
  const [change1,setchange1] = useState(false);
  const [change2,setchange2] = useState(false);
  const [change3,setchange3] = useState(false);
  const [change4,setchange4] = useState(false);
  const [c1,setc1] = useState(localStorage.getItem("color1") || undefined)
  const [c2,setc2] = useState(localStorage.getItem("color2") || undefined)
  const [c3,setc3] = useState(localStorage.getItem("color3") || undefined)
  const [c4,setc4] = useState(localStorage.getItem("color4") || undefined)
  useEffect(()=>{
    document.addEventListener("click", handleClickOutside,true);
    
  },[])
  useEffect(()=>{
    
    addcolor(props.color,props.inputcolor,props.changecolor,props.color2);
  },[props.color,props.changecolor,props.inputcolor,props.color2])
  const handleClickOutside = (e) =>{
    if(e.target.className==='App' || e.target.className === 'inputBox1' ||  e.target.className === 'inputBox2'){
      console.log('lnd');
      setchange(false);
      setchange2(false);
      setchange3(false);
      setchange4(false);
    }
    if(e.target.className!='xx' && e.target.className !='saturation-white' && e.target.className!='hue-horizontal' && e.target.className!=''){console.log(e.target.id,"andbnad");setchange1(false);}
    if(e.target.className!='xx3'&& e.target.className !='saturation-white' ){setchange2(false);}
    if(e.target.className!='xx2'&& e.target.className !='saturation-white' ){setchange3(false);}
    if(e.target.className!='xx1'&& e.target.className !='saturation-white' ){setchange4(false);}
  }
  const clickbtn=()=>{
   console.log(change);
    if(change===false){
      setchange(true);
    }
    else{
      setchange(false);
    }
  }
  const addcolor=(a,b,c,d)=>{
    localStorage.setItem("color1", a);
    localStorage.setItem("color2", b);
    localStorage.setItem("color3", c);
    localStorage.setItem("color4", d);
  }
  const goto1=()=>{
   props.setColor('#E9DEDE');
   props.setinputcolor('#fff')
   props.setchangecolor('#87CEEB')
   props.setcolor2('#fff');
  }
  const goto2=()=>{
   props.setColor('#0F0F34');
   props.setinputcolor('#313E59')
   props.setchangecolor('#87CEEB')
   props.setcolor2('#0B0B13');
  }
 
  const goto3=()=>{
   props.setColor('#FEFF74');
   props.setinputcolor('#77D0ED')
   props.setchangecolor('#6E66D2')
   props.setcolor2('#868628');
  }
  const goto4=()=>{
   
    if(change1===false){
      setchange1(true);
    }
    else{
      setchange1(false);
    }
  }
  const goto5=()=>{
    console.log('nikhil',change2)
    if(change2===false){
      setchange2(true);
    }
    else{
      setchange2(false);
    }
  }
  const goto6=()=>{
    console.log('dfa')
    if(change3===false){
      setchange3(true);
    }
    else{
      setchange3(false);
    }
  }
  const goto10=()=>{
    console.log('nkhi',change4)
    if(change4===false){
      setchange4(true);
    }
    else{
      setchange4(false);
    }
  }

  const goto7=()=>{
    props.setColor(c1);
    props.setcolor2(c4);
    props.setinputcolor(c2);
    props.setchangecolor(c3);
  }
  const go=(updatedColor)=>{
    props.setColor(updatedColor.hex)
    setc1(updatedColor.hex)
  }
  const go1=(updatedColor)=>{
    props.setinputcolor(updatedColor.hex)
    setc2(updatedColor.hex)
  }
  const go2=(updatedColor)=>{
    props.setchangecolor(updatedColor.hex)
    setc3(updatedColor.hex)
  }
  const go3=(updatedColor)=>{
    props.setcolor2(updatedColor.hex)
    setc4(updatedColor.hex)
  }
  return (
    <div id='hdr'>
       <button id='btn'
        onClick={clickbtn} 
       type='button' style={{backgroundColor:`${props.changecolor}`,color:`${props.txtcolor}`}}> <h className='txt'>Change Theme</h>
       <ArrowDropDownIcon
       className="svg_icons"
       /></button> 
       { change ? 
          
          <div>
            <div className='trangle' style={{borderBottomColor:`${props.inputcolor}`}}></div>
            <div className='base'
          style={{backgroundColor:`${props.inputcolor}`,color:'#0000ff'}}
          >
            <button
             className='list'
             onClick={goto1}
             type='button'
             >
              <div className='x1'>Default</div>
               <div className='space'>
               <span className='x' style={{backgroundColor:'#E9DEDE',color:'blue'}}></span>
              <span className='x'style={{backgroundColor:'#fff'}}></span>
              <span className='x'style={{backgroundColor:'#87CEEB'}}></span>
              <span className='x' ></span>
               </div>
            </button>
          
            <button
             onClick={goto2}
             className='list'
             type='button'
             >
               <div className='x1'>Default</div>
               <div className='space'>
               <span className='x' style={{backgroundColor:'#0F0F34'}}></span>
              <span className='x'style={{backgroundColor:'#0B0B13'}}></span>
              <span className='x'style={{backgroundColor:'#87CEEB'}}></span>
              <span className='x'style={{backgroundColor:'#313E59'}} ></span>
               </div>
            </button>
            <button
             onClick={goto3}
             className='list'
             type='button'
             >
               <div className='x1'>Default</div>
               <div className='space'>
               <span className='x' style={{backgroundColor:'#FEFF74'}}></span>
              <span className='x'style={{backgroundColor:'#868628'}}></span>
              <span className='x'style={{backgroundColor:'#224238'}}></span>
              <span className='x' style={{backgroundColor:'#77D0ED'}}   ></span>
               </div>
            </button>
            <button
             onClick={goto7}
             className='list'
             type='button'
             >
               <div className='x11'>Customize</div>
               <div className='space'>
               <button className='xx' onClick={goto4} style={{backgroundColor:`${c1}`}}></button>
              <button className='xx1' onClick={goto10}style={{backgroundColor:`${c4}`}}></button>
              <button className='xx2' onClick={goto6} style={{backgroundColor:`${c3}`}}></button>
              <button className='xx3'onClick={goto5} style={{backgroundColor:`${c2}`}}></button>
               </div>
            </button>
          
          </div></div>
        
         
       :
       <div></div>
       }
      {change1?
       <div  className='colorpickr'>
         <ChromePicker 
       color={props.color}

       onChange={go}
       />
       </div>
      :<div></div>
      }
       {change2?
       <div  className='colorpickr1'>
         <ChromePicker 
       color={props.inputcolor} 
       onChange={go1} />
       </div>
      :<div></div>
      }
       {change3?
       <div  className='colorpickr2'>
         <ChromePicker 
       color={props.changecolor} 
       onChange={go2} />
       </div>
      :<div></div>
      }
      {change4?
       <div  className='colorpickr3'>
         <ChromePicker 
       color={props.color2} 
       onChange={go3} />
       </div>
      :<div></div>
      }
    </div>
  )
}
