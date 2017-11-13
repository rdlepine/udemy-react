import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {
        id: 1, name: 'Max', age: 28
      },
      {
        id: 2, name: 'Manu', age: 29
      },
      {
        id: 3, name: 'Stephanie', age: 26
      },
    ],
    showPersons: true
  }

  switchName = () => {
    // let persons = this.state.persons;
    // persons[1].name = "Jerk";
    // this.setState({persons:persons} )
    this.setState({showPersons:  !this.state.showPersons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.find( (person) => {
      return person.id = id;
    });
    persons[].name = event.target.value;

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
   
    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map( (person, key) => {
            return  <Person key={person.id} name={person.name} click={ () => this.deletePersonHandler(key)} change={ (event) => this.nameChangeHandler(event, person.id)} />
          })}
       </div>
      )
    }

    return (
      <div className="App">
        <h1>I'm a React app</h1>
        <p>For Real</p>
        <button onClick={this.switchName} style={style}>Switch Name</button>
        {persons}
       </div>
    );
  }
}

export default App;
