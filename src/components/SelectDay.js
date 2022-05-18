// import { useEffect, useState } from 'react';

export const SelectDay = ({ onTimeframeSelected }) => {
  return (
    <div>
        <h2> Select Timeframe </h2>
            {['yesterday','today','tomorrow'].map((timeframes) => (
                <button 
                key={timeframes} 
                onClick={ () => onTimeframeSelected(timeframes) }
                >
                {timeframes}</button>
            ))}
    </div>
    
  )
}

 