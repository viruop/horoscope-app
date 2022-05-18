import {  useState } from 'react';
import './App.css';
import { Horoscope } from './components/Horoscope';
import {SelectDay} from './components/SelectDay';
import { SelectedSign } from './components/SelectedSign';


function App() {
  
  const [selectedSign, setSelectedSign] = useState(null)

  const [selectedTimeframe, setSelectedTimeframe] = useState(null)

  const restart = () => {
    setSelectedSign(null);
    setSelectedTimeframe(null);
  }

  return (
    <div className="App">
      <h1>The Horoscope App</h1>
      {!selectedSign && (
        <SelectedSign onSignSelected={setSelectedSign}/>
      )}
      {selectedSign && !selectedTimeframe &&(
        <SelectDay onTimeframeSelected={setSelectedTimeframe} />
      )}
      {selectedSign && selectedTimeframe && (
        <Horoscope 
        data={selectedSign}
        timeframe={selectedTimeframe}
        />
      )}
      <button onClick={restart}> restart</button>
    </div>
    
  );
}

export default App;
