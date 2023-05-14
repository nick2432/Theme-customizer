import React,{useEffect, useState} from 'react'
import './App.css';
import Login from './component/login.js';
import Chat from './component/chat.js';
import Header from './component/header.js'
import { BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  const [color, setColor] = useState(localStorage.getItem("color1") || undefined)
  const [changecolor,setchangecolor]= useState(localStorage.getItem("color3") || undefined)
  const [inputcolor,setinputcolor]= useState(localStorage.getItem("color2") || undefined)
  const [color2,setcolor2]= useState(localStorage.getItem("color4") || undefined)
  const [txtcolor,settxtcolor] = useState('#000');
  console.log(changecolor);
  return (
    <div className="App"  style={{backgroundImage: `linear-gradient(to right, ${color2}, ${color})`}}>
      <Header color=
      {color} color2={color2} 
      setcolor2={setcolor2} 
      inputcolor={inputcolor} 
      setinputcolor= {setinputcolor} 
      setchangecolor={setchangecolor} 
      changecolor={changecolor} 
      settxtcolor={settxtcolor}
      txtcolor={txtcolor}
      setColor={setColor}/>
     <BrowserRouter>
       <Routes>
        <Route path='/'  element={<Login changecolor={changecolor} inputcolor={inputcolor} />}/>
        <Route path='/chat'   element={<Chat txtcolor={txtcolor} changecolor={changecolor} inputcolor={inputcolor}/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
