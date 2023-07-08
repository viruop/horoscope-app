import "../button.css";
export const SelectedSign = ({ onSignSelected }) => {
  return (
    <div>
      <h2>
        {" "}
        Select Your <span className="sign"> Sign</span>{" "}
      </h2>
      <div className="grid">
        {[
          "aries",
          "taurus",
          "gemini",
          "cancer",
          "leo",
          "virgo",
          "libra",
          "scorpio",
          "sagittarius",
          "capricorn",
          "aquarius",
          "pisces",
        ].map((sign) => (
          <button
            className="button-56"
            key={sign}
            value={sign}
            onClick={() => onSignSelected(sign)}
          >
            {sign}
          </button>
        ))}
      </div>
    </div>
  );
};
