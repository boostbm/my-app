import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Btn from './Btn';
import ModeToggler from './ModeToggler';
import PromoHeading from './PromoHeading';
import Child from './Child';



function Header (props) {
  return <h1> Hello {props.name}, Your color is {props.color}</h1>;
}

function Nav () {
  return  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Work</li>
    <li>Contact</li>
  </ul>
}


export function App() {
  const [word, setWord] = React.useState('Eat')
  
  function handleClick() {
    setWord('Drink')
  } 
  return (
    <div className='App'>
      <PromoHeading message = {word + " at Little Lemon"}/>
      <button onClick={handleClick}>Click me</button>
  </div>
  );
}

export default App;
