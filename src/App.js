import './App.css';
import { useState } from 'react';
import { Cities } from './components/city/city';
import {MdAirplanemodeActive} from "react-icons/md";


function App() {
  const [city, setCity] = useState("");
  const [choice, setChoice] = useState("");
 
  const cityChosen = ({target}) =>{
    setCity(target.value);
  }

  const userChoice = ({target}) => {
    setChoice(target.value);
  }

  return (
    <div className='base' style={{ backgroundImage: `url(/pictures/${city}.jpeg)`}}>

      <h1>Travel Bucket List</h1>
      <MdAirplanemodeActive id='plane'/>
      <form>

        <div id="top">
          <label id='label-top'>
            Cities<br/>
          <select id='cities' onChange={cityChosen} name="cities">
            <option value={""} selected disabled>Default</option>
            <option value={"Orlando"}>Orlando</option>
            <option value={"Miami"}>Miami</option>
            <option value={"Vegas"}>Vegas</option>
          </select>
          </label>

          <div id='buttons' onChange={userChoice}>

            <label>
              Restaurants<br/>
              <input type={'radio'} name="choice" id="food" value={"Restaurants"}/>
            </label>

            <label>
              Entertainment<br/>
              <input type={"radio"} name="choice" id='entertainment' value={"Entertainment"}/>
            </label>

            <label>
              Relaxing<br/>
              <input type={"radio"} name="choice" id="relax" value={"Relax"}/>
            </label>

            <label>
              Stores<br/>
              <input type={"radio"} name="choice" id="store" value={"Stores"} />
            </label>
          </div>
          {city === "" ? "" : <h2>Travelling to {city}</h2>}
          <Cities city={city} choice={choice}/>
        </div>
        </form>
        
    </div>
  );
}

export default App;
