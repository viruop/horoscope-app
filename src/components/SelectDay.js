
export const SelectDay = ({ onTimeframeSelected }) => {
  return (
    <div>
        <h2> Select Timeframe </h2>
            {['yesterday','today','tomorrow'].map((timeframe) => (
                <button 
                key={timeframe} 
                onClick={ () => onTimeframeSelected(timeframe) }
                >
                {timeframe}</button>
            ))}
            
    </div>
    
  )
}

 