import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {
        name: 'Max', age: 28
      },
      {
        name: 'Manu', age: 29
      },
      {
        name: 'Stephanie', age: 26
      },
    ]
  }

  switchName = () => {
    let persons = this.state.persons;
    persons[1].name = "Jerk";
    this.setState({persons:persons} )
  }

  render() {
    return (
      <div className="App">
        <h1>I'm a React app</h1>
        <p>For Real</p>
        <button onClick={this.switchName.bind(this)}>Switch Name</button>
        <Person name={this.state.persons[0].name}>Child Here</Person>
        <Person name={this.state.persons[1].name}/>
        <Person name={this.state.persons[2].name} />
      </div>
    );
  }
}

export default App;
