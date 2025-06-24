
// REDUX TOOLKIT

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Account from './Account'
import Form from './Form'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Account/>
      <Form/>
    </>
  )
}

export default App
