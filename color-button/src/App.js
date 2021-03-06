
import { useState, } from 'react'

export const camelCaseToSpaced = (string) => {
  return string.replace(/\B([A-Z])\B/g, ' $1')
}
function App() {
  const [btnDisabled, setBtnDisabled] = useState(false)
  const [color, setColor] = useState('MidnightBlue')
  const changeTo = color === 'MidnightBlue' ? 'MediumVioletRed' : 'MidnightBlue'
  return (
    <div className="App">
      <button
      onClick={() => setColor(changeTo)}
      style={{backgroundColor: color}}
      >Change to {camelCaseToSpaced(changeTo)}</button>
      

      <button 
      disabled={btnDisabled}
      style={{background: btnDisabled ? 'gray' : 'blue'}}
      >
        Checkbutton
      </button>
      <input
      onChange={() => setBtnDisabled(prev => !prev)}
      name='Checkbutton'
      type='checkbox' 
      aria-roledescription='checkbox'
      defaultChecked={btnDisabled}
      />
    </div>
  );
}  

export default App; 
