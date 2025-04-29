import { useState } from 'react'
import './App.css'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login />
      <Dashboard />
    </>
  )
}

export default App
