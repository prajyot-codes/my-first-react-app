import React ,{useState} from 'react'

export default function TextForm(props) {
//assining usestate
  const[text,setText]=useState('Enter text here');

//funtion to handle upper case btn
  const handleUpClick =() => {
    // console.log('upper case was clicked');
    // setText("You have clicked on handleUpClick");
    let newtext=text.toUpperCase();
    setText(newtext);
    props.Alert("Converted to UpperCase","success")
  }
  const handleLoClick =() => {
    // console.log('upper case was clicked');
    // setText("You have clicked on handleUpClick");
    let newtext=text.toLowerCase();
    setText(newtext);
    props.Alert("Converted to LowerCase","success")
    
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.Alert("your message is being spoken","success")

  }
//funtion to handle changes made by user in the textarea
  const handleOnChange =(event) => {
    // console.log("on change")
      setText(event.target.value);
    
  }
  return (
    <>
        <div>
      <div className='container' style={{color:props.mode==='dark' ? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control my-3" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light' ? 'white':'#01185d' ,color:props.mode==='dark' ? 'white':'black'}}  id="myBox" rows="8"></textarea>
      </div>
        </div>
      <button className='btn btn-primary mx-2' onClick={handleUpClick} >Convert to UpperCase</button>
      <button className='btn btn-primary mx-2' onClick={handleLoClick} >Convert to LowerCase</button>
      <button className='btn btn-primary mx-2' onClick={speak} >to speak</button>
      <div className="container my-3"style={{color:props.mode==='dark' ? 'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length-1} words,{text.length} char</p>
      </div>
    </>
      
  )
}
