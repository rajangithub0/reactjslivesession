import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import UserDetails from './Components/UserDetails'
import Dashboard from './Components/Dashboard'
import { useState } from 'react'
function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <>
      <BrowserRouter>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path='/register' element={<Register />} />
          <Route path='Details/:id' element={<UserDetails />} />
          <Route path='dashboard/*' element={<Dashboard />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
