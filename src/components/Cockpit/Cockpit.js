import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Https request...
    return () => {
      console.log('[Cockpit.js] Cleanup works in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] clean up work in 2nd work useEfffect');
    };
  });

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
