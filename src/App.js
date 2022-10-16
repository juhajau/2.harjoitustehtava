import "./App.css";
import Axios from "axios";
import { useEffect} from "react";
import {useState} from "react";
import Coin from "./components/Coin";


function App() {
  const [coinList, setcoinList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setcoinList(response.data.coins);
      }
    );
  }, []);

  const searchCoins = coinList.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="crypto">
      <div className="header">
        <input
          type="text"
          placeholder="SearchBar"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      <div className="coins">
        {searchCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              icon={coin.icon}
              rank={coin.rank}
              price={coin.price}
              symbol={coin.symbol}
              priceBtc={coin.priceBtc}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;