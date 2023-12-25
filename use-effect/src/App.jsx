import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [windowCount, setWindowCount] = useState(window.screen.width);

  const currentScreenWidth = () => {
    setWindowCount(() => window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', currentScreenWidth)
    return () => {
      window.removeEventListener("resize", currentScreenWidth);
    }
  });


  useEffect(() => {
    document.title = count;
  }, [count])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={{
        fontSize: "20px"
      }}>click on the Count Button use See Magic in Tittle.</h1>
      <h1 style={{
        fontSize: "20px"
      }}>
        The Size of Window is <span>{windowCount}</span>
      </h1>

      <div className="card" >
        <button style={{
          backgroundColor: "wheat"
        }}
          onClick={() => setCount((count) => count + 1)}>
          Click Me
        </button>
      </div>

    </>
  )
}

export default App
