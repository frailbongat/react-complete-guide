import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

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
    const classesTwo = [];
    const btnClasses = [classes.button];

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
                key={person.id}
                change={(event) => this.changeNameHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      classesTwo.push(classes.textBlue);
      classesTwo.push(classes.textNormal);
      btnClasses.push(classes.bgDodgerblue);
    }

    return (
      <div className={classes.App}>
        <h1 className={classesTwo.join(' ')}>This is reactjs!</h1>
        <button
          className={btnClasses.join(' ')}
          onClick={this.togglePersonHandler}
        >
          Toggle Person
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
