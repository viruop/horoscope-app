import {  useState } from 'react';
import './App.css';
import { Description } from './components/Description';
import { SelectDay } from './components/SelectDay';
import { SelectedSign } from './components/SelectedSign';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  
  const [selectedSign, setSelectedSign] = useState(null)

  const [selectedTimeframe, setSelectedTimeframe] = useState(null)

  const restart = () => {
    setSelectedSign(null);
    setSelectedTimeframe(null);
  }

  return (
       
          <div className="App">
            <h1>Horoscope  <a  className='span' href='app.js'> App</a></h1>
            {!selectedSign && (
               <SelectedSign onSignSelected={setSelectedSign}/>
            )}
            {selectedSign && !selectedTimeframe &&(
              <SelectDay onTimeframeSelected={setSelectedTimeframe} />
            )}
            {selectedSign && selectedTimeframe && (
              <Description 
              sign={selectedSign}
              timeframe={selectedTimeframe}
              />
            )}
      {!selectedSign?"":<button className='button-49' onClick={restart}>Home</button>}
      <p>Give it a Star ⭐  on <a className='github' href='https://github.com/viruop/horoscope-app'> Github</a> </p>
    </div>
    
    
    
  );
}

export default App;
