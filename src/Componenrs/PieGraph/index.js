import React, { useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, CategoryScale, DoughnutController } from 'chart.js';
import { useMediaQuery } from 'react-responsive'

Chart.register(ArcElement, CategoryScale, DoughnutController);

const PieGraph = () => {
  const chartRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' })

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy(); // Destroy chart instance on unmount
      }
    };
  }, []);

  const totalNewCustomersPercentage = 65;
  const totalReturningCustomersPercentage = 25;
  const totalOneTimeCustomersPercentage = 10;
  const remainingPercentage = 100 - totalNewCustomersPercentage - totalReturningCustomersPercentage - totalOneTimeCustomersPercentage;

  const data = {
    labels: ["Total New Customers", "Total Returning Customers", "Total One Time Customers", "Others"],
    datasets: [
      {
        data: [totalNewCustomersPercentage, totalReturningCustomersPercentage, totalOneTimeCustomersPercentage, remainingPercentage],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        borderWidth: 1,
        // weight: [5, 10, 10, 10],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    cutoutPercentage: 50, // Changed cutoutPercentage to 50 to make the pie chart look like a ring
    tooltips: {
      enabled: false,
    },
  };

  return (
    <div style={{ margin: "20px", padding:'20px',  background: "#fff", borderRadius: "10px",width: isMobile ? '90%' : '35%' }}>
      <h3>Customers</h3>
      <p>Customers that buy products</p>
      <div style={{display:'flex',justifyContent:'center', margin:'30px',height:'250px',alignItems:'center'}} >

      <Doughnut ref={chartRef} data={data} options={options} />
      </div>
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <h2>{totalNewCustomersPercentage}%</h2>
        <p>Total New Customers</p>
      </div>
    </div>
  );
};

export default PieGraph;
