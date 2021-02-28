import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      { id: 'a1', name: 'Frail', age: 23 },
      { id: 'a2', name: 'Via', age: 21 },
    ],
    showPerson: false,
  };

  togglePersonHandler = () => {
    const showPerson = this.state.showPerson;
    this.setState({ showPerson: !showPerson });
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  render() {
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.changeNameHandler}
          />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          show={this.state.showPerson}
          toggle={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
