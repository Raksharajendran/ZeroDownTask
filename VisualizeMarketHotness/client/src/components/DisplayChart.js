import { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Piechart from "./Piechart";
const DisplayChart = (props) => {
  const [nls, setnls] = useState(30.0);
  const [shs, setshs] = useState(40.0);
  const [hsolpc, sethsolpc] = useState(25.0);
  const [mstlr, setmstlr] = useState(40.0);
  const [dtp, setdtp] = useState(30.0);
  const [dts, setdts] = useState(20.0);
  const [s, sets] = useState(45.0);
  const [marketList, setMarketList] = useState([]);
  const getMarketList = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/score/${props.Displayid}`
      );
      const jsonData = await response.json();
      const myJSON = JSON.stringify(jsonData[0]);
      const obj = JSON.parse(myJSON);
      console.log("hi");
      console.log(obj.mstlr);
      setMarketList(obj);
      console.log("hi");
      console.log(marketList);
      setmstlr(obj.mstlr);
      setnls(obj.nls);
      setshs(obj.shs);
      sethsolpc(obj.hsolpc);
      setdtp(obj.dtp);
      setdts(obj.dts);
      sets(obj.s);
      console.log(mstlr);
      setUserData({
        labels: [
          "median_sale_to_list_ratio",
          "days_to_pending",
          "days_to_sell",
          "score",
        ],
        datasets: [
          {
            label: "Score",
            data: [obj.mstlr, obj.dtp, obj.dtp, obj.s],
            backgroundColor: ["#EC7063", "#63EC8D", "#63B7EC", "#9B63EC"],
          },
        ],
      });
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getMarketList();
  }, []);
  const [userData, setUserData] = useState({
    labels: [
      "median_sale_to_list_ratio",
      "days_to_pending",
      "days_to_sell",
      "score",
    ],
    datasets: [
      {
        label: "Score",
        data: [mstlr, dtp, dtp, s],
      },
    ],
  });
  console.log(marketList);
  return (
    <div>
      <div>
        <h3 style={{ margin: "20px 140px", color: "#E75722" }}>
          Score is {marketList.s}
        </h3>
      </div>
      <Piechart chartData={userData}></Piechart>
      <div style={{ width: 700, alignItems: "center", margin: "50px 400px" }}>
        <Bar data={userData}></Bar>
      </div>
    </div>
  );
};

export default DisplayChart;
