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
const data = {
  heading: "99% off all items!",
  callToAction: "Everything Must Go!!"
};

const date = new Date ();

export function App() {
  return (
    <div>
      <Header name="David" color="blue"/>
      <Nav/>
      <ModeToggler />
      <PromoHeading heading ={data.heading} callToAction={data.callToAction}/>
      <Child message={date.toLocaleTimeString()}/>
  </div>
  );
}

export default App;
