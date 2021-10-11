import './App.css';
import React, { useContext } from 'react';

let theme = {
  light: {
    styles: {
      backgroundColor: "#f0f9ff",
      color: "#00f",
    },
    head: "bg-primary text-white display-4 mb-4",
    alert: "alert alert-primary my-3",
    text: "text-primary m-3",
    foot: "py-4"
  },
  dark: {
    styles: {
      backgroundColor: "#336",
      color: "#eef"
    },
    head: "bg-secondary text-white display-4 mb-4",
    alert: "alert alert-dark my-3",
    text: "text-light m-3",
    foot: "py-4",
  }
}

const ThemeContext = React.createContext(theme.dark)

function App() {
  const contextType = useContext(ThemeContext)

  return (
    <div style={contextType.styles}>
      <h1 className={contextType.head}>React</h1>
      <div className="container">
        <Title value="Content page" />
        <Message value="This is Content sample." />
        <Message value="これはテーマのサンプル" />
        <div className={contextType.foot}></div>
      </div>
    </div>
  );
}

function Title(props) {
  const sample = useContext(ThemeContext)

  return (
    <div className={sample.alert}>
      <h2 style={sample.styles}>{props.value}</h2>
    </div>
  )
}

function Message(props) {
  const sample = useContext(ThemeContext)

  return (
    <div style={sample.styles}>
      <p className={sample.text}>{props.value}</p>
    </div>
  )
}

export default App;
