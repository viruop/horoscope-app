
export const getDescription = async (sign,timeframe) =>{
         let data = await fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=${timeframe}`, {
          "method": "POST",
        }).then(res => res.json());
        return data;
      }

