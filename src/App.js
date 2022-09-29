import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [Counter,setCounter]=useState([])
  return (
    <div className="App">
      <button onClick={()=>{
        setCounter([...Counter,{count:Counter+1}]);
        console.log(Counter);
      }}>Add</button>
      {
        Counter.map((i)=>{
          return (<div style={{ width:"100px",height:"20px",backgroundColor:"yellow" }}></div>
          )
        })
      }
    </div>
  );
}

export default App;
