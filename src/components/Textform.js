
import React,{ useState } from 'react'

export default function Textform(props) {
    
    const handleUpClick = ()=>{
    // console.log("Upper was clicked");
    let newText=text.toUpperCase();
    setText(newText)
}
const handleLoClick = ()=>{
    // console.log("Upper was clicked");
    let newText=text.toLowerCase();
    setText(newText)
}

const handleRemoveExtraSpace = () => {
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))

}
const handleCopy = ()=>{
  console.log("I am copy");
  // console.log("Upper was clicked");
  var newText=document.getElementById("myBox");
  newText.select();
  newText.setSelectionRange(0,99999);
  navigator.clipboard.eriteText(newText.value);
  setText(newText)
}
const handleClearClick = ()=>{
    // console.log("Upper was clicked");

    let newText='';
    setText(newText)
}

    const handleOnChange =(event)=> {
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here 6 '); 
    // text="new text"; wrong way
    // setText("new text");//Correct way
  return (
    <><div className="container"style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
          <div className="mb-3">
             <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}id="myBox" rows="8"></textarea>
          </div>
         <button className="btn btn-primary mx-2" onClick ={handleUpClick}>Convert To  UpperCase</button>
         <button className="btn btn-primary mx-2" onClick ={handleLoClick}>Convert To  LowerCase</button>
         <button className="btn btn-primary mx-2" onClick ={handleClearClick}>Clear Text</button>
         <button className="btn btn-primary mx-2" onClick ={handleCopy}>Copy Text</button>
         <button className="btn btn-primary mx-2" onClick ={handleRemoveExtraSpace}> Remove Extra Space</button>
  </div>
  <div className="container my-3">
    <h1>Your Text Summary</h1>
    <p> {text.split(" ").length} word and { text.length } charachter</p>
    <p>{0.008*text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{ text.length>0?text:"Enter Something in the text above for Preview"}</p>
  </div>
  </>
  )
}
