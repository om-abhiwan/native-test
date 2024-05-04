import { useState } from 'react';
import './App.css';



function App() {


  const [value,setValue] =  useState("")


  const sendDataToApp = () => {
    // Send data to the parent window (React Native app)
    window.parent.postMessage('Data to send to app', '*');
  };
  

  return (
    <div className="App">


      <h1>Hii</h1>

    {value}

      {/* <form> */}
        <label htmlFor="input">Enter Input: </label>
        <input type="text"  onChange={(e)=>{setValue(e.target.value)}} />

      
        <button onClick={sendDataToApp}  >Submit</button>

      {/* </form> */}


    </div>
  );
}

export default App;
