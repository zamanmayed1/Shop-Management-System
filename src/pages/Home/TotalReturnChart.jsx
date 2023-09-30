import React, { useEffect } from "react";
import * as echarts from 'echarts';

const TotalReturnChart = () => {
  useEffect(() => {
    var chartDom = document.getElementById('return');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
        
      tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
      },
      series: [
        {
          name: 'Total Return',
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
              value: 23,
              name: 'Return',
              itemStyle: {
                color: 'red'
              }
            }
          ]
        }
      ]
    };

    option && myChart.setOption(option);
  }, []); // The empty array [] ensures this effect runs only once after mounting.

  return (
    <div className="w-full h-full border m-2 p-2 rounded-md">
      <div id="return" style={{ width: '100%', height: '250px' }} className="flex justify-center"></div>
      <h1 className="text-lg font-bold text-center">Total return in the Month</h1>
    </div>
  );
};

export default TotalReturnChart;
