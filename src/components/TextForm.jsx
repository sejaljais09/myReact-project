
import React, {useState} from 'react'




export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Conver to uppercase","success");

  }
  const handleLoClick=()=>{
    // console.log("uppercase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Conver to Lowercase","success");
    

  }
  const handleClearClick=()=>{
    // console.log("uppercase was clicked"+text);
    let newText='';
     setText(newText);
     props.showAlert("Clear the text","success");
    

  }
  const handleAlternateClick=()=>{
    // console.log("uppercase was clicked"+text);
    let newText='';
    for(let i=0;i<text.length;i++){
      if(i%2===0){
        newText=newText+text.charAt(i).toUpperCase();
      }
      else{
        newText=newText+text.charAt(i).toLowerCase();
      }
    }
    setText(newText);
    props.showAlert("Conver text into Alternate","success");
  }
  const handleCopy=()=>{
    console.log("i am copy");
    var text=document.getElementById("myBox");
    text.select();
   
    navigator.clipboard.writeText(text.value);
    props.showAlert("copy the text","success");
  }
  const handleExtrapaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  }
   
  
   

  const handleOnchange=(event)=>{
    // console.log("on change");
    setText(event.target.value);
  }
   
  

  const [text,setText]=useState('');
  return (
    <>
    <div  className='container my-2' style={{color:props.mode==='dark'? 'grey':'light'}} >
       
       <h1>{props.heading}</h1>
       <div className="mb-3">
  
       <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'? 'grey':'light' ,color:props.mode==='dark'? 'white':'#042743'}} id="myBox" rows="10"></textarea>
</div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
     <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
     <button className="btn btn-primary mx-2" onClick={handleClearClick}>clear </button>
      <button className="btn btn-primary mx-2" onClick={handleAlternateClick}>AlTeRnAtInG </button>
       <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy </button>
       <button className="btn btn-primary mx-2" onClick={handleExtrapaces}>Extra Spacesc </button>
    </div>
    <div className='container' style={{color:props.mode==='dark'? 'grey':'light'}}>
       <h1>your text summary</h1>
       <p>{text.trim()? text.trim().split(/\s+/).length:0} words and {text.length} characters</p>
       <p>{text.trim()? text.trim().split(/\s+/).length*0.008:0} minutes takes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text:"Enter something in the text box above to preview here"}</p>
    </div>
    </>
  )
}
