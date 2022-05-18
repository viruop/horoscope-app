export const getData = () => {
    return  fetch(
        'http://sandipbgt.com/theastrologer/api/sunsigns'
    ).then(res => res.json())      
}

export const getHoroscope = (data,timeframe) => {
    return  fetch(
        `http://sandipbgt.com/theastrologer/api/horoscope/${data}/${timeframe}/`
    ).then(res => res.json()) 
    .then(({horoscope}) => horoscope );     
}