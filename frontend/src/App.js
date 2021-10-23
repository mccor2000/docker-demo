import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { greeting: "" };
  }

  componentDidMount() {
    fetch("http://localhost:3001")
      .then(res => res.text())
      .then(res => this.setState({ greeting: res }))
      .catch(err => err);
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">{this.state.greeting}</p>
      </div>
    );
  }
}

export default App;
