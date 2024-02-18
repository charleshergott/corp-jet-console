import { useState } from 'react'
import Example from "./components/mainMenu copy.jsx"
import './App.css'


function App() {
  const [count, setCount] = useState(0); // Initialize state using the useState hook


  // Here you can add more logic for your App component

  return (
    <div className="App">
      {/* Render the Example component */}
      <Example />
    </div>
  );
}

export default App;
