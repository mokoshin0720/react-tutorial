import { Component } from "react";

class App extends Component{
  constructor() {
    super()
    this.state = {
      todoList: [],
      value: "",
    }
  }

  onChange(e) {
    this.setState({value: e.target.value})
  }

  add() {
    this.setState({
      todoList: this.state.todoList.concat(this.state.value),
      value: "",
    })
  }

  render() {
    console.log(this.state.todoList);
    const todoListNode = this.state.todoList.map((todo, idx) => {
      return <li key={idx}>{todo}</li>
    })

    return (
      <div>
        <h1>ToDo App</h1>
        <div>
          <input
          type="text"
          value={this.state.value}
          onChange={e => this.onChange(e)}>
          </input>
        </div>
        <button onClick={() => this.add()}>追加</button>
        <ul>
          {todoListNode}
        </ul>
      </div>
    );
  }
}

export default App;
