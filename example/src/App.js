import './App.css'

import { AutoTyper } from 'react-auto-typer'

function App() {
  const handleComplete = () => {
    console.log('AutoTyper finished typing once')
    // additional actions can be placed here
  }

  return (
    <div className="App">
      <header className="App-header">
        <AutoTyper text="Hello! This is the example using local package." delay={100} styleClass={'autotyper'} repeat={true} />
        <div style={{ height: 20 }} />
        <AutoTyper text="This will type only once." delay={80} styleClass={'autotyper'} onlyOnce={true} onComplete={handleComplete} />
      </header>
    </div>
  )
}

export default App
