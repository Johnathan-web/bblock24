import { useState } from 'react'
import {puppyList} from './data.js'
import './path-to-css.css'
import './App.css'

function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null)
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
 
  console.log(featuredPup)
  console.log("puppyList: ", puppyList);
  function handleClick() {
    
  }
  return (
    <div className="App">
{featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}

      {featPupId && <p>Selected Puppy ID: {featPupId}</p>}
    {puppies.map((puppy) => {
      return (
        <p 
          onClick={() => {console.log("puppy id: ", puppy.id); 
            setFeatPupId(puppy.id); }} 
          key={puppy.id}
        >
          {puppy.name}
        </p>
      );
      
    })}
  </div>
  );
}
  
  


export default App
