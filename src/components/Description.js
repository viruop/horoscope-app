
import { getDescription } from "../services/api"
import { useEffect, useState } from 'react';

export const Description = ({sign,timeframe}) => {
    const [description, setDescription] = useState([]);
    const [luckyNumber , setLuckyNumber] = useState([]);
    const [color , setColor] = useState([]);
    const [compatibility , setCompatibility] = useState([]);
    const [luckyTime , setLuckyTime]=useState([]);
    const [mood, setMood] = useState([]);
    const [dateRange , setDateRange] =useState([]);
    useEffect( () => {
    getDescription(sign,timeframe).then((data) =>{
      console.log(data)
      setDescription(data.description);
      setLuckyNumber(data.lucky_number);
      setColor(data.color);
      setCompatibility(data.compatibility);
      setLuckyTime(data.lucky_time);
      setMood(data.mood);
      setDateRange(data.date_range);
    })
    });
  return (
    <div>
      <h1>{timeframe}, your Horoscope for {sign} is ... </h1>
        <p>Description: {description}</p>
    <p>luckyNumber : {luckyNumber} </p>
    <p> Color :{color} </p>
    <p>Compatibility : {compatibility}</p>
    <p>Lucky Time : {luckyTime} </p>
    <p>Mood : {mood} </p>
    <p> Date Range : {dateRange} </p>
    </div>
  )
}
