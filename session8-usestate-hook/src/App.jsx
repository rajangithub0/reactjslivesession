import { useState } from "react"
import UseCase1 from "./Components/UseCase1"
import UseCase2 from "./Components/UseCase2"
import UseCase3 from "./Components/UseCase3"
import RealTimeClock from "./Components/Timer"

function App() {

  const [flag, setFlag] = useState(false)
  return (
    <div className="container">
      {/* <UseCase1 />
      <UseCase2 /> */}
      <RealTimeClock />
      <button onClick={() => setFlag(!flag)}>{false ? 'hide comp' : 'show comp'}</button>
      {
        flag ? <UseCase3 /> : ''
      }
    </div>
  )
}

export default App
