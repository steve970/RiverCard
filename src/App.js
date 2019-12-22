import React from 'react';
import logo from './logo.svg';
import './App.css';
import RiverCard from './RiverCard'
import RiverForm from './RiverForm'

function App() {
  return (
    // <RiverForm stationName={""} />
    <RiverCard url={'https://waterservices.usgs.gov/nwis/iv/?format=json&sites=06752260,06716500,06719505,06701900,06730200&parameterCd=00060&siteStatus=all'} />
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
