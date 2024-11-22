import React from 'react'
import Greeting from './Greeting'
import './App.css'

function App() {

  const person = {
    name: "Leeroy",
    age: 29,
    wowClass: "Paladin",
  };

  const person2 = {
    name: "Vader",
    age: 2,
    wowClass: "Rogue",
  };

  const person3 = {
    name: "Kylo",
    age: 6,
    wowClass: "Wizard",
  };

  return (

    <div>
      <Greeting person={person} />
      <Greeting person={person2} />
      <Greeting person={person3} />
    </div>
  )

}

export default App
