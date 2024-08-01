// import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import User from './components/User';
import Userlist from './components/Userlist';

function App() {
  return (
    <div className="container">

      <Userlist />
     {/* <Greeting />

     <Greeting name="rajan" />
     <User name="rajan" age="34" /> */}
    </div>
  );
}

export default App;
