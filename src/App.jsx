import { useState, useEffect } from 'react'
import Example from "./components/mainMenu.jsx"
import FleetData from './components/newFlight.jsx';
import FleetInfo from './components/fleetInfo.jsx';
import UserData from './components/companyInfo.jsx';
import Login from './components/welcomeScreen.jsx';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  const [count, setCount] = useState(0); // Initialize state using the useState hook
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (

    <div className="main">
      <div className='AppWrapper'>
        <div className="App">
          <div className="rightSide">

            <UserData />
          </div>
          <div className="leftSide">
            AIRCRAFT LIBRARY
            <FleetData />
          </div>
        </div>
        <div className='client'>
          CLIENT INTERFACE
        </div>
      </div>

      <FleetInfo />

      <BrowserRouter>

        <Example />
        <Login />
      </BrowserRouter >

    </div>



  );
}

export default App;

