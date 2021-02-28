import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
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
    const style = {
      backgroundColor: 'Black',
      padding: '10px 15px',
      color: 'yellow',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      ':hover': {
        fontWeight: 'bold',
      },
    };

    let persons = null;
    const classes = [];

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

      style.backgroundColor = 'blue';
      style[':hover'] = {
        textTransform: 'Uppercase',
      };

      classes.push('text-blue');
      classes.push('text-normal');
    }

    return (
      <StyleRoot>
        <div className='App'>
          <h1 className={classes.join(' ')}>This is reactjs!</h1>
          <button onClick={this.togglePersonHandler} style={style}>
            Toggle Person
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
