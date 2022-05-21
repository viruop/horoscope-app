export const SelectedSign = ({ onSignSelected }) => {  
    
  return (
    <div>
      <h2> Select Your Sign </h2>                 
            {[  'aries',
                'taurus',
                'gemini',
                'cancer',
                'leo',
                'virgo',
                'libra',
                'scorpio',
                'sagittarius',
                'capricorn',
                'aquarius',
                'pisces'].map((sign) => (
                <button 
                key={sign}
                value={sign} 
                onClick={ () => onSignSelected(sign) }
                >
                {sign}</button>
            ))}
    </div>
  )
}
