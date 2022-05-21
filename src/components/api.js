
export const getDescription = (sign,timeframe) =>{
          fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=${timeframe}`, {
          "method": "POST",
        }).then(res => res.json())
        .then(json => console.log(json))
        .then(({description}) => description );
      }

