import "./InputScore.css";
import DisplayChart from "./DisplayChart";
import { useEffect, useState } from "react";
const InputScore = () => {
  const [chosenid, setid] = useState("");
  const [flag, setFlag] = useState(0);
  const [marketId, setMarketId] = useState([]);
  const getMarketId = async () => {
    try {
      const response = await fetch("http://localhost:5000/score");
      const jsonData = await response.json();
      setMarketId(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const clickHandler = async (event) => {
    event.preventDefault();
    setFlag(1);
  };
  useEffect(() => {
    getMarketId();
  }, []);
  console.log(marketId);
  return (
    <div>
      <h1 className="highlight">Choose the MARKET ID and search for it!</h1>
      <div className="bs-example">
        <h1 className="text_score">Score</h1>
        <div
          class="dropdown mt-5
          ml-5 "
        >
          <button
            type="button"
            class="btn btn-primary btn-lg dropdown-toggle"
            data-toggle="dropdown"
          >
            Select Market Id
          </button>
          <div class="container">
            <h4 className="margin_h4">Market Id:</h4>
            <div class="form-inline">
              <input
                type="text"
                class="form-control mr-1"
                val={chosenid}
                onChange={(e) => setid(e.target.value)}
              />
              <button class="btn btn-success mt-3 ml-5" onClick={clickHandler}>
                enter
              </button>
            </div>
          </div>
          <div class="dropdown-menu">
            {marketId.map((id) => (
              <a class="dropdown-item">{id.market_id}</a>
            ))}
          </div>
        </div>
        {flag === 1 && <DisplayChart Displayid={chosenid}></DisplayChart>}
      </div>
    </div>
  );
};

export default InputScore;
