import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import PhoneBook from './components/PhoneBook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <PhoneBook />
    </>
  )
}

export default App
