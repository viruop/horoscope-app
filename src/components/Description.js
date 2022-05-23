import "../card.css"
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
    <>
    <div>
    <h1>{timeframe}, your Horoscope for {sign} is ... </h1>
      {global.description?<div className="card"> 
        <p> <span> Horoscope : </span>{global.description}</p>
        <p> <span> LuckyNumber : </span>{global.lucky_number} </p>
        <p> <span> Color : </span>{global.color} </p>
        <p> <span> Compatibility : </span>{global.compatibility}</p>
        <p> <span> Lucky Time : </span>{global.lucky_time} </p>
        <p> <span> Mood : </span>{global.mood} </p>
      </div>:"It's loading"}
  </div>
  </>
  )
}
