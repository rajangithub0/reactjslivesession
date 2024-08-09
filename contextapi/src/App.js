// import logo from './logo.svg';
// import { createContext } from 'react';
// import { useState } from 'react';
import './App.css';
import UseFetch from './Components/Hook/UseFetch';
import UseFetch1 from './Components/Hook/UseFetch1';
// import Login from './Components/Hook/Login';
// import UseEffect from './Components/Hook/UseEffect';
// import UseState from './Components/Hook/UseState';
// import CompOne from './Components/CompOne';

// const studentInfo = createContext()
// const studentInfo1 = createContext()

function App() {
  // const [index, setIndex] = useState(0);
  // const names = ['rajan', "monika", "ekaansh"]
  // UseEffect(() => {
  //   if (index === names.length - 1)
  //     return;
  //   setTimeout(() => {
  //     setIndex((index) => index + 1)
  //   }, 2000);
  // }, [index])
  // const f_name = 'rajan'
  // const l_name = 'rajput'
  return (
    <div className="App">
      {/* <UseFetch /> */}
      <UseFetch1 />
      {/* <UseEffect name={names[index]} /> */}
      {/* <Login /> */}
      {/* <UseState /> */}
      {/* <studentInfo.Provider value={f_name}>
        <studentInfo1.Provider value={l_name}>
          <CompOne />
        </studentInfo1.Provider>
      </studentInfo.Provider> */}
    </div>
  );
}

export default App;
// export { studentInfo, studentInfo1 } 
