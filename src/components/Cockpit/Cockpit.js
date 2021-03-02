import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  console.log('[Cockpit.js] render');

  const classesTwo = [];
  const btnClasses = [classes.button];

  if (props.show) {
    classesTwo.push(classes.textBlue);
    classesTwo.push(classes.textNormal);
    btnClasses.push(classes.bgDodgerblue);
  }

  return (
    <div>
      <h1 className={classesTwo.join(' ')}>{props.title}</h1>
      <button className={btnClasses.join(' ')} onClick={props.toggle}>
        Toggle Person
      </button>
    </div>
  );
};

export default cockpit;
