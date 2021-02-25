import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Frail', age: 23 },
      { name: 'Via', age: 21 },
    ],
  };

  displayFullNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Frail Bongat', age: 23 },
        { name: 'Via Mae Camp', age: 21 },
      ],
    });
  };

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Frail Bongat', age: 23 },
        { name: event.target.value, age: 21 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: 'Black',
      padding: '5px 10px',
      color: 'yellow',
      marginTop: '3rem',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    };

    return (
      <div className='App'>
        <button onClick={this.displayFullNameHandler} style={style}>
          Display Full Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.displayFullNameHandler}
        >
          I'm a frontend web developer!
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.displayFullNameHandler}
          change={this.changeNameHandler}
        />
      </div>
    );
  }
}

export default App;
