import React from 'react';
import classes from './Person.css';

const person = (props) => {
  console.log('[Person.js] render');
  return (
    <div className={classes.person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.change} value={props.name} />
    </div>
  );
};

export default person;
