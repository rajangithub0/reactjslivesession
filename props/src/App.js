import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Display from './components/Display';
import From from './components/From';
import { useState } from 'react';

function App() {
  const user=[
    {
      name:"rajan",age:29,email:"rajan@gmail.com",country:"india"
    },
    {
      name:"monika",age:28,email:"monika@gamail.com",country:"usa"
    },
    {
      name:"ekaansh",age:7,email:"ekaansh@gmail.com",country:"usa"
    }
  ]

  const [data,setData]=useState([])
  const addData=(obj)=>{
    setData([...data,obj])
  }
  return (
    <div className="App">
      <Greeting name="rajan" massage="welcome to my first project in react" />
      {
        user.map(user=>(
          <Display user={user} />
        ))
      }
      <From  addData={addData}/>
    </div>
  );
}

export default App;
