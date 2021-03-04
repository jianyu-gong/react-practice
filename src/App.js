import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {

  state = {
    person:[
    {name: "Jay", age: 20},
    {name: "Yixin", age: 30},
    {name: "Google", age: 3}]
  }

  switchNameHandler = () => {
    console.log("Was clicked!")
    this.setState({
      person:[
        {name: "Jay Gong", age: 26},
        {name: "Yixin", age: 300},
        {name: "Google", age: 3}
      ]
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working</p>
        <button onClick={this.switchNameHandler}>Switching Names</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>My Hobbie is hiking.</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
      </div>
    );
  }
}

export default App;
