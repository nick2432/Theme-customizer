import React, { useRef, useState } from 'react'
import axios, {isCancel, AxiosError} from 'axios';
import './imag.css'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
export default function Imageupload() {
    const inputRef = useRef(null);
    const [image,setImage] = useState('')
   
    const handleimage=()=>{
        inputRef.current.click();
    }
    const handleImageChange = (event) => {
     const file = event;
     setImage(event.target.files[0]);
    };
  return (
        <div className='ll'>
        {image?<img id='image' onClick={handleimage} src={URL.createObjectURL(image)}/>:  <AccountBoxIcon onClick={handleimage} id='image' />}
        <p   className='li'  >Click here to upload/change profile picture</p>
        <input type='file' ref={inputRef} onChange={handleImageChange} style={{display: "none"}}/>
        </div>
  );
}
