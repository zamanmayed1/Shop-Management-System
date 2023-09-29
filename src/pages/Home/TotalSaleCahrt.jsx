import React, { useEffect } from "react";
import * as echarts from 'echarts';

const TotalSaleChart = () => {
  useEffect(() => {
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
      tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
      },
      series: [
        {
          name: 'Total Sale',
          type: 'gauge',
          progress: {
            show: true
          },
          detail: {
            valueAnimation: true,
            formatter: '{value}'
          },
          data: [
            {
              value: 25,
              name: 'Sale'
            }
          ]
        }
      ]
    };

    option && myChart.setOption(option);
  }, []); // The empty array [] ensures this effect runs only once after mounting.

  return (
    <div className="w-full h-full border m-2 p-2 rounded-md">
      <div id="main" style={{ width: '100%', height: '250px' }}></div>
      <h1 className="text-lg font-bold text-center">Total Sale in Today</h1>
    </div>
  );
};

export default TotalSaleChart;
