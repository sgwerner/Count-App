import './App.css';
import React, { useState } from 'react';



function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState( 'blue' )

  function decrementCount() {
    setCount (prevCount => prevCount -1)
    setTheme('red')
  }

  function incrementCount() {
    setCount (prevCount => prevCount +1)
    setTheme('blue')
  }


 return (
  <>
  <button onClick={decrementCount}>-</button>
  <span>{count}</span>
  <span>{theme}</span>
  <button onClick={incrementCount}>+</button>
  </>
 )
}

export default App;
