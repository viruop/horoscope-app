
import { getDescription } from "./api"
import { useEffect, useState } from 'react';

export const Description = ({sign,timeframe}) => {
    const [description, setDescription] = useState([])

    useEffect( () => {
        getDescription(sign,timeframe).then(setDescription)
        // console.log(setDescription)
            },[sign,timeframe]);

  return (
    <div>
      <h1>{timeframe}, your Horoscope for {sign} is ... </h1>
        <p>{description}</p>
    </div>
  )
}
