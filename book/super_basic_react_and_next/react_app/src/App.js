import { useState } from 'react';
import './App.css';

function App(props) {
  const [msg, setMsg] = useState("Hello Component");
  const [count, setCount] = useState(0);

  const change = () => {
    setMsg("Hello")
    setCount(count+1)
  }

  return (
    <div className="App">
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <p className="subtitle">Show message.</p>
        <p className="alert alert-warning">{props.msg}</p>
        <p className="alert alert-dark">{msg}, {count}</p>
        <button onClick={change}>change</button>
      </div>
    </div>
  );
}

export default App;
