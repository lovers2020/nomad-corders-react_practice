import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState(0);
  const [choseCoin, setChoseCoin] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((resopnse) => resopnse.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const inputValue = (e) => setValue(e.target.value);
  const onChange = (e) => setChoseCoin(e.target.value);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChange}>
          {coins.map((coin, index) => (
            <option key={index} value={coin.quotes.USD.price.toFixed(3)}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price.toFixed(3)}{" "}
              USD
            </option>
          ))}
        </select>
      )}
      {loading ? null : (
        <div>
          <input
            onChange={inputValue}
            type="number"
            placeholder="How much do you have?"
          />
          <span>
            {value > 0
              ? `You can buy ${(value / choseCoin).toFixed(5)} coins`
              : null}
          </span>
        </div>
      )}
    </div>
  );
}
export default App;
