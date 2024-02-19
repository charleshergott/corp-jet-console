import { useState } from 'react'
import Example from "./components/mainMenu.jsx"
import FleetInfo from './components/fleetInfo.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';



function App() {
  const [count, setCount] = useState(0); // Initialize state using the useState hook
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="App">


      {isFormOpen && <FleetInfo onClose={toggleForm} />}

      <BrowserRouter>
        <Example />

        <Routes>
          <Route path="/fleetInfo" element={<FleetInfo />} />
        </Routes>


      </BrowserRouter>

    </div>

  );


}

export default App;
