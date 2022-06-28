
import { useState, } from 'react'

function App() {
  const [color, setColor] = useState('blue')
  const changeTo = color === 'blue' ? 'red' : 'blue'
  return (
    <div className="App">
      <button
      onClick={() => setColor(changeTo)}
      style={{backgroundColor: color}}
      >Change to {changeTo}</button>
    </div>
  );
}  

export default App; 
