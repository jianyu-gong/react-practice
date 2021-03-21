import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    person:[
    {id: "1", name: "Jay", age: 20},
    {id: "2", name: "Yixin", age: 30},
    {id: "3", name: "Google", age: 3}],
    showName: false
  }

  switchNameHandler = (name) => {
    console.log("Was clicked!")
    this.setState({
      person:[
        {name: name, age: 26},
        {name: "Yixin", age: 300},
        {name: "Google", age: 3}
      ]
      })
  }

  changeNameHandler = ( event, id ) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });

    const persons = {
      ...this.state.person[personIndex]
    };

    persons.name = event.target.value;

    const person = [...this.state.person];

    person[personIndex] = persons;

    this.setState( {person: person});
  }

  inputHandler = ( event ) => {
    this.setState({
      person:[
        {name: event.target.value, age: 20},
        {name: event.target.value, age: 30},
        {name: event.target.value, age: 3}
      ]
      })
  }

  deleteHandler = ( index ) => {
    const person = [...this.state.person];
    person.splice(index, 1);
    this.setState({person:person});
  }

  clickHandler = () => {
    const doesShow = this.state.showName;
    this.setState({showName: !doesShow});
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer'
    };

    let person = null;

    if ( this.state.showName ) {
      person = (
        <div>
          {this.state.person.map((person, index) => {
            return <Person
              click={() => this.deleteHandler(index)} 
              name={person.name}
              age={person.age}
              key={person.id} 
              change={(event) => this.changeNameHandler(event, person.id)}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working</p>
        <button onClick={() => this.switchNameHandler("Jianyu Gong")}
                style={style}>
          Switching Names
        </button>
        <button onClick={this.clickHandler} 
                style={style}>
          显示/隐藏姓名
        </button>
        {person}
        {/* <UserInput changed={this.inputHandler}
                   currentName={this.state.person[0].name} />
        <UserOutput userName={this.state.person[1].name} />
        <UserOutput userName={this.state.person[2].name} />
        <UserOutput userName='Jay' /> */}
      </div>
    );
  }
}

export default App;
