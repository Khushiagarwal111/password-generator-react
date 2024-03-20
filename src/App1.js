import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter]= useState(15)

        const addValue = ()=>{  
            setCounter((Counter)=>Counter + 1)
            setCounter((Counter)=>Counter + 1)    
            setCounter((Counter)=>Counter + 1)
            setCounter((Counter)=>Counter + 1)         
    
        }
        const removeValue=()=>{ 
            setCounter(counter + 1)
            console.log(counter)
        }

  return (

    <>
      <h2>Counter value: {counter}</h2>

        <button 
        onClick={addValue}
        >Add value</button>

         <button 
        onClick={removeValue}
        >Remove value</button>

      <h2>Counter value: {counter}</h2>
    </>
  );
}

export default App;
