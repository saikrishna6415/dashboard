import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useMediaQuery } from "react-responsive";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const earnings = [30, 40, 50, 55, 45, 35, 40, 90, 40, 35, 30, 25]; // example earnings data

const data = {
  labels: months,
  datasets: [
    {
      data: earnings,
      backgroundColor: months.map((month) => (month === "Aug" ? "#433dce" : "#E6E5F1")),
      borderRadius: 10, // Added border radius to the bars
      borderWidth: 1,
      barPercentage: 1,
    },
  ],
};

const options = {
  scales: {
    y: {
      display: false,
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function BarGraph() {
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });
  return (
    <div style={{ padding: "20px", width: isMobile ? "90%" : "65%", background: "#fff", borderRadius: "10px", margin: "20px", marginLeft: "0px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',}}>
          <h3>Overview</h3>

          <h4 style={{opacity:0.4,marginTop:'-10px'}}>Monthly Earning</h4>
        </div>
        <select style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", outline: "none", paddingTop: "0px", paddingBottom: "0px", height: "50px", width: "150px" }}>
          <option value="quarterly">Quarterly</option>
          <option value="half-yearly">Half Yearly</option>
          <option value="annually">Anually</option>
          {/* Add more options if needed */}
        </select>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
}
