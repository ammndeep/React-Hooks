import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  // const [cmpRender, setCmpRender] = useState("")
  // const count = useRef(0);
  const inputRef = useRef();

  // useEffect(() => {
  //   count.current = count.current + 1;
  // });

  const handleRefHook = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "aqua";
  }

  return (
    <>
      {/* <div className="inputBox">
        <input type="text"
          value={cmpRender}
          placeholder='Enter Your Name....'
          onChange={(e) => setCmpRender(e.target.value)} />
        <h1 style={{ fontSize: '30px' }}>Component Render Times {count.current}</h1>
        <button style={{ backgroundColor: 'wheat' }}>Login</button>
      </div> */}

      <div className="container" style={{
        display: 'flex',
        gap: '15px'
      }}>
        <input type="text" ref={inputRef} style={{
          width: '200px',
          height: '30px'
        }} />
        <button onClick={handleRefHook}
          style={{ backgroundColor: 'wheat' }}>Click</button>
      </div>
    </>
  )
}

export default App
