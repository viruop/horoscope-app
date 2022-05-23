
import { getDescription } from "../services/api"
import { useEffect, useState } from 'react';

export const Description = ({sign,timeframe}) => {
   const [global,setGlobal] = useState({});
       useEffect( () => {
      
    getDescription(sign,timeframe).then((data) =>{
      setGlobal(data)
    })

    });
  return (
    <div>
      <h1>{timeframe}, your Horoscope for {sign} is ... </h1>
        <p>Description: {global.description}</p>
    <p>luckyNumber : {global.lucky_number} </p>
    <p> Color :{global.color} </p>
    <p>Compatibility : {global.compatibility}</p>
    <p>Lucky Time : {global.lucky_time} </p>
    <p>Mood : {global.mood} </p>
    <p> Date Range : {global.date_range} </p>
    </div>
  )
}
