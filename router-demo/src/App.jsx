import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Error from './Components/Error'
import Location from './Components/Location'
import Form from './Components/Form'
import Student from './Components/Student'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact/' element={<Contact />} >
            <Route path='Location' element={<Location />} />
            <Route path='Form' element={<Form />} />
          </Route>
          <Route path='/student/:id' element={<Student />} />
          <Route path='*' element={<Error />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
