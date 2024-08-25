

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>home page</h1>} />
          <Route path='/about' element={<h2>about page</h2>} />
          <Route path='/contact' element={<h3>contact page</h3>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
