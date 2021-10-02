import './App.css';

function App() {
  let data = [
    "This is list first sample",
    "This is list second sample",
    "This is list third sample",
  ]

  return (
    <div className="App">
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <p className="subtitle">Show List.</p>
        <List title="LISTS" data={data} />
      </div>
    </div>
  );
}

function List(props) {
  return (
    <div>
      <p className="h5 text-center">{props.title}</p>
      <ul className="list-group">
        {props.data.map((item, key) =>
          <li className="list-group-item" key={key}>
            <Item number={key+1} value={item} />
          </li>
        )}
      </ul>
    </div>
  )
}

function Item(props) {
  let itm = {
    fontSize: "16pt",
    color: "#00f",
    textDecoration: "underline",
    textDecorationColor: "#ddf"
  }

  let num = {
    fontWeight: "bold",
    color: "red"
  }

  return (
    <p style={itm}>
      <span style={num}>
        [{props.number}]&nbsp;
      </span>
      {props.value}
    </p>
  )
}

export default App;
