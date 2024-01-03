'use client'

import { Chart, registerables } from 'chart.js';
import { ChartConfiguration } from 'chart.js';
import React, { useEffect, useRef } from 'react';


const DataChart = (props: ChartConfiguration) => {
  const { data, options } = props;
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        ...props,
        options: {
          ...options,
        },
      });
      return () => {
        chart.destroy();
      };
    }
  }, [data, options, props]);
  return <canvas ref={chartRef} className='w-full h-auto' />;
};
Chart.register(...registerables);

export default DataChart;