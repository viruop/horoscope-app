import { getHoroscope } from "../services/api"
import { useEffect, useState } from 'react';

export const Horoscope = ({data,timeframe}) => {
    const [horoscope, setHoroscope] = useState([])

    useEffect( () => {
        getHoroscope(data,timeframe).then(setHoroscope) 
            },[data,timeframe]);

  return (
    <div>
      <h1>{timeframe} your horoscope for {data} is ... </h1>
        <p>{horoscope}</p>
    </div>
  )
}
