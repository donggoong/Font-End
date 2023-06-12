import React, { useContext } from 'react';
import { Appcontext } from '../../App';
import CompLoader from '../compLoader/CompLoader';
import CompHourlyItem from './CompHourlyItem';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const CompHourly = () => {
  const {_weatherData} = useContext(Appcontext)
  let hourlyData
  let chartTempArr // chartData datasets data 값
  let chartData // chart엘리먼트 chartData속성값
  let chartOptions // chart엘리먼트 options속성값
  if(_weatherData){
    hourlyData = _weatherData && _weatherData.hourly
    chartTempArr = hourlyData.map(v=>parseFloat((v.temp-273.15).toFixed(1)))
    let chartTempMax = Math.max.apply(null, chartTempArr) + 1
    let chartTempMin = Math.min.apply(null, chartTempArr) 
    chartData = {
      labels:new Array(48).fill(''),
      datasets: [
        {
        label: 'myGraph',
        data: chartTempArr,
        borderWidth: 1,
        fill: false,
        borderColor: '#4378a3',
        tension: 0,
        }
      ]
    }
    chartOptions = {
      scales: {
        x: {
          display: true,
        },
        y: {
          display: true,
          beginAtZero: true,
          min: chartTempMin,
          max: chartTempMax,
          stepSize: 10,
          border:{
            display:false,
            color:'#4378a3',//왼쪽기준선 색상
            width:1,//왼쪽기준선
            dash:[2,2]//수평선
          },
          grid: {
            color: 'rgba(255,255,255,0.2)',  //수평선 생상    
          },
          ticks: {//그래프 수치
            display: true,
          },
        },
      },
      plugins: {
        legend: {
          display: false,//수정
          position: 'top',
          labels: {
            color: '#FFF'
          }
        },//legend
        datalabels: {
          display: true,
          color: "#000",
          align: 'top',
        },
      },//plguins
      responsive: true,
      maintainAspectRatio: false,
    }
  }
  return (
    <section className='comp-hourly'>
      <div className="section-inner">
        <h2>Hourly 48</h2>
        {_weatherData?
        <div className="wrap">
          <ul>
            {hourlyData.map(v=><CompHourlyItem key={v.dt} data={v}/>)}
          </ul>
          <div className="chart-wrap">
          {  <Chart type='line' data={chartData} options={chartOptions} plugins={[ChartDataLabels]} />}
          </div>
        </div>
        :<CompLoader/>}
      </div>
    </section>
  );
};

export default CompHourly;