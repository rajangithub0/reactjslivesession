import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Display from './components/Display';
import From from './components/From';
import { useState } from 'react';
import Button from './components/Button';

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
      <Button label="home"></Button>
      <Button label="login"></Button>
      <Button label="register"></Button>
      <Button label="news"></Button>
      <Greeting name="rajan" massage="welcome to my first project in react" />
      {
        user.map(user=>(
          <Display user={user} />
        ))
      }
      <div>
        {
          data.map(item=>(<div>{item.name},{item.age}</div>)
          )
        }
        <From  addData={addData}/>
      </div>
      <button label="home"></button>
      <button label="login"></button>
      <button label="register"></button>
      <button label="news"></button>
    </div>
  );
}

export default App;
