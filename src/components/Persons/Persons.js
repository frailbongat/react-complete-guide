import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
  }

  componentDidUpdate() {
    console.log('[Persons.js] ComponentDidUpdate');
  }

  render() {
    console.log('[Persons.js] render');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={this.props.clicked.bind(this, index)}
          name={person.name}
          age={person.age}
          key={person.id}
          change={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
