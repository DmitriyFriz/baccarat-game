import React, { useRef } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import { useStore } from '../../store';
import { getChartConfig } from './chartConfig';

import style from './BarChart.module.scss';

Chart.register(zoomPlugin);

interface Zoom {
  resetZoom: () => void;
}

export const BarChart = observer(() => {
  const statisticsStore = useStore('statisticsStore');
  const chartData = toJS(statisticsStore.chartData);

  const chartRef = useRef<Zoom>(null);

  const { dataConfig, optionsConfig } = getChartConfig(chartData);

  return (
    <>
      <div className={style.chartWrapper}>
        <Bar ref={chartRef} data={dataConfig} options={optionsConfig} type="bar" />
      </div>
      <button
        type="button"
        className={`button ${style.resetButton}`}
        onClick={() => {
          if (chartRef.current !== null) {
            chartRef.current.resetZoom();
          }
        }}
      >
        reset zoom
      </button>
    </>
  );
});
