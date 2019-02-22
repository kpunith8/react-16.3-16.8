import React from 'react'
import Counter from './Counter'

const Button = (props) => {
  return (
    <button onClick={props.increment}>{props.someProp} Initial Count: {props.initialCount} New Count: {props.count} </button>
  );
}

const Label = (props) => {
  return (
    <label onMouseEnter={props.increment}>{props.someProp} Initial Count: {props.initialCount} New Count: {props.count} </label>
  );
}

const ExtendedButton = Counter(Button, { initialCount: 10 });
const ExtendedLabel = Counter(Label, { initialCount: 20 });

const HOCTest = (props) => {
  return (
    <div>
      <ExtendedButton someProp="Button Counter" initialCount={10} />
      <br />
      <ExtendedLabel someProp="Label Counter" initialCount={20} />
    </div>
  );
}

export default HOCTest;
