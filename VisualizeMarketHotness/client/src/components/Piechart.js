import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const Piechart = ({ chartData }) => {
  console.log(chartData);
  return (
    <div style={{ width: 400, alignItems: "center", margin: "30px 600px" }}>
      <Pie data={chartData}></Pie>
    </div>
  );
};

export default Piechart;
