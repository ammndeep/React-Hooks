import React, { useContext } from 'react'
import { AppContext } from './userContext'

const App = () => {
  const { name, age } = useContext(AppContext);
  console.log(name, age);
  return (
    <>
      <h1>Name:- {name}</h1>
      <h1>Name:- {age}</h1>
    </>
  )
}

export default App
