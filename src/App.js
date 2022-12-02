import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from'./components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


function App() {

const[mode,setMode]=useState('light');
const[alert,setAlert]=useState(null);
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })

}
const toggleMode=()=>{
  if(mode==='light'){
  setMode('dark')
  document.body.style.backgroundColor='grey';
  showAlert("DArk mode has been enabled","sucess");
   }
   else{
    setMode('light')
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","sucess");

  }
}

  return (

<>
<Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">

<Switch>
  <Route path="/about">
    <About/>
  </Route>
  <Route path="/">
  <Textform heading="Enter the text to analyze" mode={mode}/>
     
  </Route>
</Switch>

{/* <Textform heading="Enter the text to analyze" mode={mode}/> */}
{/* <About/> */}
</div>
</Router>
</>
    );
}

export default App;