import './App.css'

import React from 'react'
import { AutoTyper } from 'react-auto-typer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AutoTyper text="Hello! This is the example using local package." delay={100} styleClass={'autotyper'} />
      </header>
    </div>
  )
}

export default App
