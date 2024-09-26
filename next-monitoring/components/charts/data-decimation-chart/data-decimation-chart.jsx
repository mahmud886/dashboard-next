// DataDecimationChart.js
'use client';

import React, { useRef, useEffect, useMemo } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, LineController, Title, Tooltip, Legend, TimeScale, Decimation } from 'chart.js';
import { DateTime } from 'luxon';
import 'chartjs-adapter-luxon';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, LineController, Title, Tooltip, Legend, TimeScale, Decimation);

function valueOrDefault(value, defaultValue) {
  return typeof value === 'undefined' ? defaultValue : value;
}

var _seed = 10;
function rand(min, max) {
  min = valueOrDefault(min, 0);
  max = valueOrDefault(max, 0);
  _seed = (_seed * 9301 + 49297) % 233280;
  return min + (_seed / 233280) * (max - min);
}

const DataDecimationChart = ({ decimation }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);
  const NUM_POINTS = 10000;

  const data = useMemo(() => {
    const start = DateTime.fromISO('2021-04-01T00:00:00Z').toMillis();

    const pointData = [];
    for (let i = 0; i < NUM_POINTS; ++i) {
      const max = Math.random() < 0.001 ? 100 : 20;
      pointData.push({ x: start + i * 300000, y: rand(0, max) });
    }
    return {
      datasets: [
        {
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1,
          data: pointData,
          label: 'Large Dataset',
          radius: 0,
        },
      ],
    };
  }, []);

  useEffect(() => {
    chartRef.current = new ChartJS(canvasRef.current, {
      type: 'line',
      data: data,
      options: {
        animation: false,
        parsing: false,
        interaction: {
          mode: 'nearest',
          axis: 'x',
          intersect: false,
        },
        plugins: {
          decimation: decimation,
        },
        scales: {
          x: {
            type: 'time',
          },
        },
      },
    });

    return () => {
      chartRef.current.destroy();
    };
  }, [data, decimation]);

  return <canvas ref={canvasRef} style={{ width: '100%' }} />;
};

export default DataDecimationChart;
