import React,{useState} from 'react';
import { Description } from '../components/Description';
import { SelectDay } from '../components/SelectDay';
import { SelectedSign } from '../components/SelectedSign';
import {Link} from 'react-router-dom'
//Homepage

  const Homepage = () =>{
  const [selectedSign, setSelectedSign] = useState(null)

  const [selectedTimeframe, setSelectedTimeframe] = useState(null)

  const restart = () => {
    setSelectedSign(null);
    setSelectedTimeframe(null);
  }



    return(<>
       <h1>Horoscope  <Link  className='span' to="/"> App </Link></h1>
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

    </>)
  }
  
export default Homepage;
