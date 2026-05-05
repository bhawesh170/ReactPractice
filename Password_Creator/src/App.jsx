import { useRef, useState } from 'react'

function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  const generatePassword = () => {
    let password = ''
    let string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    if (includeNumbers) {
      string += '0123456789'
    }

    if (includeSymbols) {
      string += '!@#$%^&*_~?><-'
    }
    for (let i = 0; i < length; i++) {
      password += string[Math.floor(Math.random() * string.length)]
    }
    setPassword(password)
  }
  const reference = useRef()
  return (
    <>
      <div className="main">
        <h1>Password Generator</h1>
        <div className="inputCopy">
          <input 
          type="text" 
          placeholder='Your Password' 
          value={password}
          readOnly
          onChange={(e) => setPassword(e.target.value)}
          ref={reference}
          />
          <button onClick={() => {
            reference.current.select()
            document.execCommand('copy')
          }}>
            Copy
          </button>
        </div>
        <div className="options">
            <input 
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            />
          <label className='length'>
            Length : {length}
          </label>
          <label>
            <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
            Include Numbers
          </label>
          <label>
            <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />
            Include Symbols
          </label>
        </div>
        <button className="generate-btn" onClick={() => generatePassword()}>Generate Password</button>        

      </div>
    </>
  )
}

export default App
