import { useState } from 'react';
import './App.css';

//calculator app

function App() {

  const [result, setResult] = useState("");
  const handleClick = (e)=> setResult(result.concat(e.target.name));
  const clear = () => setResult("");
  const backspace = () => setResult(result.slice(0,-1));
  const calculate = () => {
    try{
      setResult(eval(result).toString());
    }
    catch{
      setResult("Error");
    }
    
  }

  return (
    <div className='container'>
      <h1 className='header'>Calculator</h1>
      <form>
        <input type={'text'} value={result}/>
      </form>
      <div className='keypad'>
        <button onClick={clear} className='clear calculate'>Clear</button>
        <button onClick={backspace} className='backspace calculate'>c</button>
        <button onClick={handleClick} name='/' className='calculate'>&divide;</button>
        <button onClick={handleClick} name='7'>7</button>
        <button onClick={handleClick} name='8'>8</button>
        <button onClick={handleClick} name='9'>9</button>
        <button onClick={handleClick} name='*' className='calculate'>&times;</button>
        <button onClick={handleClick} name='4'>4</button>
        <button onClick={handleClick} name='5'>5</button>
        <button onClick={handleClick} name='6'>6</button>
        <button onClick={handleClick} name='-' className='calculate'>&ndash;</button>
        <button onClick={handleClick} name='1'>1</button>
        <button onClick={handleClick} name='2'>2</button>
        <button onClick={handleClick} name='3'>3</button>
        <button onClick={handleClick} name='+' className='calculate'>+</button>
        <button onClick={handleClick} name='0'>0</button>
        <button onClick={handleClick} name='.'>.</button>
        <button onClick={calculate} className='result calculate'>=</button>
      </div>
    </div>
  );
}

export default App;
