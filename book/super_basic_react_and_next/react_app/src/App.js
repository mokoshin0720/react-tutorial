import './App.css';
import React, { useContext } from 'react';

let data = {
  title: "React-Context",
  message: "this is sample message."
}

const SampleContext = React.createContext()

function App() {
  return (
    <div className="App">
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <SampleContext.Provider value={data}>
          <Title />
          <Message />
        </SampleContext.Provider>
      </div>
    </div>
  );
}

function Title() {
  const sample = useContext(SampleContext)

  return (
    <div className="card p-2 my-3">
      <h2>{sample.title}</h2>
    </div>
  )
}

function Message() {
  const sample = useContext(SampleContext)

  return (
    <div className="alert alert-primary">
      <p>{sample.message}</p>
    </div>
  )
}

export default App;
