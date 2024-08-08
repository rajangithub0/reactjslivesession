// import logo from './logo.svg';
import { createContext } from 'react';
import './App.css';
import CompOne from './Components/CompOne';

const studentInfo = createContext()
const studentInfo1 = createContext()

function App() {
  const f_name = 'rajan'
  const l_name = 'rajput'
  return (
    <div className="App">
      <studentInfo.Provider value={f_name}>
        <studentInfo1.Provider value={l_name}>
          <CompOne />
        </studentInfo1.Provider>
      </studentInfo.Provider>
    </div>
  );
}

export default App;
export { studentInfo, studentInfo1 } 
