import logo from './logo.svg';
import './App.css';
import Btn from './Btn';
import ModeToggler from './ModeToggler';
import PromoHeading from './PromoHeading';

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

export function App() {
  return (
    <div>
      <Header name="David" color="blue"/>
      <Nav/>
      <ModeToggler />
      <PromoHeading heading ={data.heading} callToAction={data.callToAction}/>
  </div>
  );
}

export default App;
