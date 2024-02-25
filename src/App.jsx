import { useState, useEffect } from 'react'
import Example from "./components/mainMenu.jsx"
import FleetData from './components/newFlight.jsx';
import UserData from './components/companyInfo.jsx';
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
      <div className="main">
        {/* <div className="rightSide">
          <button>CURRENT FLIGHT INFO</button>
        </div>
        <div className="leftSide">

          <button>CUSTOMER INTERACTION</button>
        </div> */}

        <div className="rightSide">
          COMPANY INFO
          <UserData />

        </div>
        <div className="leftSide">
          AIRCRAFT LIBRARY
          <FleetData />
        </div>


        <BrowserRouter>


          <Example />

          {/* <Routes>
            <Route path="/fleetInfo" element={<FleetInfo onClose={toggleForm} />} />

          </Routes> */}


        </BrowserRouter>

      </div>
    </div>
  );


}

export default App;
