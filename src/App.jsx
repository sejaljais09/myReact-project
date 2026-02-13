import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import React from "react";
// import {
//   BrowserRouter as Router,
  
//   Routes,
//   Route
// } from "react-router-dom";



function App(){
  const [mode, setMode] =useState('light');
   const [alert, setAlert] =useState(null);

   const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
   }


  const toggleMode=()=>{
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success")
      document.title="Textutils-darkmode";
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
       document.title="Textutils-Lightmode";
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText="About " mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
   
   
    <div className="container my-3">
      {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}/> */}
             <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />
          {/* </Routes> */}
       </div>
      {/* </Router> */}
    </>
    
  )
}

export default App
