import React, { useEffect } from "react";
import * as echarts from 'echarts';

const TopFiveProduct = () => {
  useEffect(() => {
    var chartDom = document.getElementById('topfive');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      xAxis: {
        type: 'category', // Use 'category' for discrete data like product names
        data: ['Electric Fan', 'Soyabin Oil', 'Man Jacket', 'OIl,Potato Combo Pack', 'Bluetooth Headphones'] // Replace with your product names
      },
      yAxis: {
        type: 'value',
        name: 'Sales' // Label for the y-axis
      },
      series: [
        {
          data: [180, 250, 75, 80, 90], // Replace with your product sales data
          type: 'bar',
          itemStyle: {
            color: '#3b82f6' // Set the bar color to red
          }
        }
      ]
    };

    option && myChart.setOption(option);
  }, []); // The empty array [] ensures this effect runs only once after mounting.

  return (
    <div className="w-full h-full border m-2 p-2 rounded-md">
      <div id="topfive" style={{ width: '100%', height: '350px' }}></div>
      <h1 className="text-lg font-bold text-center">Weekly Top 5 Products</h1>
    </div>
  );
};

export default TopFiveProduct;
