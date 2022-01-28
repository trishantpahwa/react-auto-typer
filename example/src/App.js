import React from 'react'
import './index.css';

import { AutoTyper } from 'react-auto-typer'

const App = () => {
  return (
    <AutoTyper text="Hello! this is a sample text" delay={100} styleClass={'autotyper'} />
  )
}

export default App
