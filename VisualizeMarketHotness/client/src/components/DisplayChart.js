import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const DisplayChart = (props) => {
  const [marketList, setMarketList] = useState([]);
  const getMarketList = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/score/${props.Displayid}`
      );
      const jsonData = await response.json();
      setMarketList(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getMarketList();
  }, []);
  const [userData, setUserData] = useState({
    labels: marketList.market_id,
    datasets: [
      {
        label: "Score",
        data: marketList.sum,
      },
    ],
  });
  return (
    <div style={{ width: 700 }}>
      <Bar data={userData}></Bar>
    </div>
  );
};

export default DisplayChart;
