import { Component } from "react";

export default class TaskInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };
  }

  addTask = () => {
    const { input } = this.state;
    if (input) {
      this.props.addTask(input);
      this.setState({ input: "" });
    }
  };

  inputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleEnter = (event) => {
    if (event.key === "Enter") this.addTask();
  };

  render() {
    const { input } = this.state;
    return (
      <div>
        <input onKeyDown={this.handleEnter} onChange={this.inputChange} value={input}></input>
        <button onClick={this.addTask}>ADD</button>
      </div>
    );
  }
}
