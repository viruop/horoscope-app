import { getData } from "../services/api"
import { useEffect, useState } from 'react';

export const SelectedSign = ({ onSignSelected }) => {
    const [data, setData] = useState([])

    useEffect( () => {
        getData().then(setData) 
            },[]);

  return (
    <div>
        <h2> Select Sign </h2>
            {data.map((sign) => (
                <button 
                key={sign} 
                onClick={ () => onSignSelected(sign) }
                >
                {sign}</button>
            ))}
    </div>
  )
}
