import React from 'react'
import './App.css'
import Card from './Card'

function App() {
  return (
   <div>
      <h1>Magic: The Gathering Cards</h1>

      <Card 
        title="Black Lotus"
        type="Artifact"
        description="Add three mana of any one color."
      />

      <Card 
        title="Demonic Tutor"
        type="Counterspell"
        description="Kevin yells at you about memory four several hours"
      />

      <Card 
        title="The One Ring"
        type="Legendary Artifact"
        description="My preciousssssssssss"
      />

   </div>
  )
}

export default App
