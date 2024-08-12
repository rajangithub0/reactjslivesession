// import logo from './logo.svg';
import { useContext } from 'react';
import './App.css';
import Counter from './Components/Counter';
import { CounterContext } from './Context/CounterContext';
import { ThemeContext, ThemeProvider } from './Context/ThemeContext';
import ThemeComp from './Components/ThemeComp';

function App() {
  const { count } = useContext(CounterContext)
  const { theme } = useContext(ThemeContext)
  return (
    <div className="App" style={{
      background: theme === "light" ? "#fff" : "#333",
      color: theme === "light" ? "#333" : "#fff",
      padding: "20px",
      textAlign: "center"
    }}>
      <h3>app Components {count}</h3>
      <Counter />

      <ThemeComp />

    </div>
  );
}

export default App;
