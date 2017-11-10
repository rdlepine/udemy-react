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

  nameChangedHandler = (event) => {
    let persons = this.state.persons;
    persons[1].name = event.target.value;

    this.setState({persons:persons});
  }

  render() {
 
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    }

    return (
      <div className="App">
        <h1>I'm a React app</h1>
        <p>For Real</p>
        <button onClick={this.switchName} style={style}>Switch Name</button>
        <div>
          <Person name={this.state.persons[0].name}>Child Here</Person>
          <Person name={this.state.persons[1].name} changed={this.nameChangedHandler}/>
          <Person name={this.state.persons[2].name} click={this.switchName}/>
        </div>
      </div>
    );
  }
}

export default App;
