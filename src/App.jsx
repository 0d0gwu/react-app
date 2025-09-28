
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { name } from 'ejs'
/*
function App() {
 const [count, setCount] = useState(0);

  const  handleClickUp = ()=> {
    setCount(count +1); 
    console.log('clicked');
  }

  const handleClickDown = ()=> {
    
    setCount(count -1)
    count < 0? setCount(0): console.log('cannot go below zero');
  }

  return (
    <>
        <div>
          <p> Counter App</p>
           <p>{count}</p> 
          <button class = 'countUp' onClick= {handleClickUp}> Count Up </button>
          <button class='countDown' onClick={handleClickDown}> Count Down </button>
        </div>
    </>
  )
}

export default App
*/

/* const App = () => {

  const [ counter, setCounter ] = useState(0)


  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return (
    <div>{counter}</div>
  )
} */


const App = (props) =>{

  const names = ['John', 'Jane', 'Doe'];
  
  const [newName, setNewName] = useState(names[0]);

  const handleClickJohn = () => {
    console.log('clicked John')
    setNewName(names[0]);
  }

  const handleClickJane = () => {
    setNewName(names[1]);
  }

  const handleClickDoe = (name = names[2]) => {
    setNewName(names[2]);
  }

  return(
    <div>
      <h1> My name is  {newName} </h1>
      <button onClick={handleClickJohn}> John </button>
      <button onClick={handleClickJane}> Jane </button>
      <button onClick={handleClickDoe}> Doe </button>
    </div>
  )
};

export default App;
