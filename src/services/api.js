export const getDescription = async (sign, timeframe) => {
  const signNumber = {
    aries: 1,
    taurus: 2,
    gemini: 3,
    cancer: 4,
    leo: 5,
    virgo: 6,
    libra: 7,
    scorpio: 8,
    sagittarius: 9,
    capricorn: 10,
    aquarius: 11,
    pisces: 12,
  };
  // https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=5
  let data = await fetch(
    //astro-tau.vercel.app
    `https://astro-tau.vercel.app/?signNumber=${signNumber[sign]}&timeframe=${timeframe}`
  ).then((res) => res.json());
  return data;
};
