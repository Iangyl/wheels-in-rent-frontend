import React from "react";
import styles from "./index.module.scss";
import Chart from "react-apexcharts";

const options = {
  chart: {
    type: "donut",
  },
  series: [10, 15, 17, 5, 18, 32, 8, 12, 32, 14, 11],
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
  ],
  dataLabels: {
    enabled: true,
  },
  plotOptions: {
    pie: {
      customScale: 1,
      donut: {
        labels: {
          show: true,
          name: {
            show: true,
          },
          value: {
            show: true,
          },
        },
      },
    },
  },
};

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <h3>Statistic</h3>
      <div className={styles.statisticsContainer}>
        <div className={styles.donutChart}>
          <Chart
            options={options}
            series={options.series}
            type="donut"
            width="700"
          />
          <div className={styles.profitSign}>
            Profit: <span>$500</span>
          </div>
        </div>
      </div>
      <h3>Orders</h3>
      <div className={styles.ordersContainer}>
        
      </div>
    </div>
  );
};

export default Dashboard;
