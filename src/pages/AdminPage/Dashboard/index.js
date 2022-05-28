import React from "react";
import styles from "./index.module.scss";
import Chart from "react-apexcharts";
import { constants } from "../../../utils";
import {staticFiles} from '../../../assets';
import {OrderList} from '../../../components';

const {orders} = staticFiles;
const {chartOptions: options} = constants;

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
        <OrderList data={orders} accessType='admin' />
      </div>
    </div>
  );
};

export default Dashboard;
