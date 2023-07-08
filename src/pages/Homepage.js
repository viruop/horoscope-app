import React, { useState } from "react";
import { Description } from "../components/Description";
import { SelectDay } from "../components/SelectDay";
import { SelectedSign } from "../components/SelectedSign";
//Homepage

const Homepage = () => {
  const [selectedSign, setSelectedSign] = useState(null);

  const [selectedTimeframe, setSelectedTimeframe] = useState(null);

  const restart = () => {
    setSelectedSign(null);
    setSelectedTimeframe(null);
  };

  return (
    <>
      <h1>
        Horoscope{" "}
        <a className="span" href="/">
          {" "}
          App{" "}
        </a>
      </h1>
      {!selectedSign && <SelectedSign onSignSelected={setSelectedSign} />}
      {selectedSign && !selectedTimeframe && (
        <SelectDay onTimeframeSelected={setSelectedTimeframe} />
      )}
      {selectedSign && selectedTimeframe && (
        <Description sign={selectedSign} timeframe={selectedTimeframe} />
      )}
      {!selectedSign ? (
        ""
      ) : (
        <button className="button-49" onClick={restart}>
          Home
        </button>
      )}
      <footer style={{ bottom: 0 }}>
        Give it a Star ⭐ on{" "}
        <a className="github" href="https://github.com/viruop/horoscope-app">
          {" "}
          Github
        </a>{" "}
      </footer>
    </>
  );
};

export default Homepage;
